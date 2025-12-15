import numpy as np
import joblib
import re
import os
import sqlite3
import pdfplumber
import pytesseract
from PIL import Image
from flask import Flask, request, jsonify
from flask_cors import CORS
# Robust TensorFlow Import
import tensorflow as tf
from werkzeug.security import generate_password_hash, check_password_hash
from datetime import datetime

app = Flask(__name__)

# --- CRITICAL FIX: ENABLE CORS FOR ALL ORIGINS ---
CORS(app, resources={r"/*": {"origins": "*"}})

DB_NAME = "hospital.db"

# --- DATABASE SETUP ---
def init_db():
    with sqlite3.connect(DB_NAME) as conn:
        c = conn.cursor()
        c.execute('''CREATE TABLE IF NOT EXISTS users (username TEXT PRIMARY KEY, password TEXT, role TEXT)''')
        c.execute('''CREATE TABLE IF NOT EXISTS patients
                     (id INTEGER PRIMARY KEY AUTOINCREMENT, 
                      name TEXT, date TEXT, age INTEGER, gender TEXT,
                      diagnosis TEXT, stage TEXT, tdf_status TEXT, 
                      gfr REAL, created_by TEXT)''')
        
        c.execute("SELECT * FROM users WHERE username=?", ('admin',))
        if not c.fetchone():
            hashed_pw = generate_password_hash('123') 
            c.execute("INSERT INTO users VALUES (?, ?, ?)", ('admin', hashed_pw, 'admin'))
            print("✅ Default Admin Created (User: admin, Pass: 123)")
        conn.commit()

init_db()

# --- LOAD MODELS SAFELY ---
model = None
scaler = None
print("⏳ Loading AI Brain...")
try:
    # Safe loading using tf.keras
    model = tf.keras.models.load_model('ckd_hiv_model.h5') 
    scaler = joblib.load('scaler.pkl')
    print("✅ AI Models Loaded Successfully.")
except Exception as e:
    print(f"⚠️  AI Model Loading Failed: {e}")
    print("ℹ️  Server running in ADMIN MODE (Predictions disabled).")

# --- HELPER FUNCTIONS ---
def calculate_gfr(age, scr, gender_is_male=True):
    if scr <= 0: scr = 0.1
    kappa = 0.9 if gender_is_male else 0.7
    alpha = -0.411 if gender_is_male else -0.329
    factor = 1 if gender_is_male else 1.018
    return 141 * (min(scr/kappa, 1)**alpha) * (max(scr/kappa, 1)**-1.209) * (0.993**age) * factor

def extract_value(text, patterns, default_val=''):
    for pattern in patterns:
        match = re.search(pattern, text, re.IGNORECASE)
        if match: return match.group(1).strip()
    return default_val

# --- ROUTES ---

@app.route('/', methods=['GET'])
def health_check():
    return jsonify({"status": "online", "message": "Backend is running!"})

@app.route('/login', methods=['POST'])
def login():
    data = request.json
    with sqlite3.connect(DB_NAME) as conn:
        c = conn.cursor()
        c.execute("SELECT password, role FROM users WHERE username=?", (data.get('username'),))
        user = c.fetchone()
        if user and check_password_hash(user[0], data.get('password')):
            return jsonify({"status": "success", "role": user[1], "username": data.get('username')})
        return jsonify({"status": "error", "message": "Invalid credentials"}), 401

@app.route('/create_user', methods=['POST'])
def create_user():
    data = request.json
    if data.get('current_role') != 'admin':
        return jsonify({"error": "Unauthorized"}), 403
    try:
        with sqlite3.connect(DB_NAME) as conn:
            c = conn.cursor()
            c.execute("INSERT INTO users VALUES (?, ?, ?)", 
                      (data.get('new_username'), generate_password_hash(data.get('new_password')), 'user'))
            conn.commit()
        return jsonify({"status": "success", "message": "User created"})
    except: return jsonify({"error": "Username exists"}), 400

@app.route('/save_patient', methods=['POST'])
def save_patient():
    d = request.json
    try:
        with sqlite3.connect(DB_NAME) as conn:
            c = conn.cursor()
            c.execute("INSERT INTO patients (name, date, age, gender, diagnosis, stage, tdf_status, gfr, created_by) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)",
                      (d.get('name', 'Unknown'), datetime.now().strftime("%Y-%m-%d %H:%M"), d['age'], d.get('gender', 'N/A'), d['diagnosis'], d['stage'], d['tdf_status'], d['gfr'], d.get('created_by', 'system')))
            conn.commit()
        return jsonify({"status": "success"})
    except Exception as e: return jsonify({"error": str(e)}), 500

@app.route('/get_history', methods=['GET'])
def get_history():
    with sqlite3.connect(DB_NAME) as conn:
        conn.row_factory = sqlite3.Row
        c = conn.cursor()
        c.execute("SELECT * FROM patients ORDER BY id DESC")
        return jsonify([dict(row) for row in c.fetchall()])

@app.route('/parse_report', methods=['POST'])
def parse_report():
    if 'file' not in request.files: return jsonify({"error": "No file"}), 400
    file = request.files['file']
    text_content = ""
    try:
        if file.filename.endswith('.pdf'):
            with pdfplumber.open(file) as pdf:
                for page in pdf.pages: text_content += page.extract_text() + "\n"
        elif file.filename.endswith(('.png', '.jpg', '.jpeg')):
            try:
                text_content = pytesseract.image_to_string(Image.open(file))
            except:
                return jsonify({"error": "OCR Failed. Is Tesseract Installed?"}), 500
        else: text_content = file.read().decode('utf-8')
        
        data = {}
        data['age'] = extract_value(text_content, [r'Age[:\s]+(\d+)'], '45')
        data['serum_creatinine'] = extract_value(text_content, [r'Serum Creatinine[:\s]+([\d\.]+)'], '1.0')
        data['cd4'] = extract_value(text_content, [r'CD4 Count[:\s]+(\d+)'], '450')
        
        # Albumin Fix
        urine_alb = extract_value(text_content, [r'Urine Albumin[:\s]+(\d+)'])
        data['albumin'] = urine_alb if urine_alb else '0'
        
        # Defaults
        data.update({
            'blood_pressure': extract_value(text_content, [r'Blood Pressure[:\s]+([\d/]+)'], '120/80'),
            'sugar': '0', 'blood_urea': '30', 'potassium': '4.0', 'blood_glucose_random': '100', 'white_blood_cell_count': '8000'
        })
        
        # Binary Checks
        for key in ['hypertension', 'diabetes_mellitus', 'coronary_artery_disease', 'pedal_edema', 'anaemia']:
            data[key] = 'yes' if re.search(fr"{key.replace('_', ' ')}[:\s]+(Yes|Detected)", text_content, re.IGNORECASE) else 'no'
            
        data['red_blood_cells'] = 'abnormal' if re.search(r'Red Blood Cells[:\s]+Abnormal', text_content, re.IGNORECASE) else 'normal'
        data['pus_cell'] = 'abnormal' if re.search(r'Pus Cells[:\s]+Abnormal', text_content, re.IGNORECASE) else 'normal'
        data['bacteria'] = 'present' if re.search(r'Bacteria[:\s]+Present', text_content, re.IGNORECASE) else 'notpresent'
        
        return jsonify(data)
    except Exception as e: return jsonify({"error": str(e)}), 500

@app.route('/predict', methods=['POST'])
def predict():
    if not model: 
        return jsonify({"error": "AI Model not loaded on server. Check backend logs."}), 500
        
    data = request.json
    try:
        features = [
            float(data.get('age', 40)),
            float(str(data.get('blood_pressure', '120')).split('/')[0]),
            float(data.get('albumin', 0)),
            float(data.get('sugar', 0)),
            1 if data.get('red_blood_cells') == 'abnormal' else 0,
            1 if data.get('pus_cell') == 'abnormal' else 0,
            1 if data.get('pus_cell_clumps') == 'present' else 0,
            1 if data.get('bacteria') == 'present' else 0,
            float(data.get('blood_glucose_random', 100)), float(data.get('blood_urea', 30)), float(data.get('serum_creatinine', 1.0)), float(data.get('white_blood_cell_count', 8000)), float(data.get('potassium', 4.0)),
            1 if data.get('hypertension') == 'yes' else 0, 1 if data.get('diabetes_mellitus') == 'yes' else 0, 1 if data.get('coronary_artery_disease') == 'yes' else 0, 1 if data.get('pedal_edema') == 'yes' else 0, 1 if data.get('anaemia') == 'yes' else 0, float(data.get('cd4', 450))
        ]
        
        scaled = scaler.transform([features])
        prob = float(model.predict(scaled)[0][0])
        
        gfr = calculate_gfr(float(data.get('age', 40)), float(data.get('serum_creatinine', 1.0)))
        
        tdf_status, tdf_color, tdf_msg = ("CONTRAINDICATED", "red", "High toxicity risk") if gfr < 60 else ("SAFE", "green", "Safe to prescribe")
        
        stage = "Stage 1"
        if gfr < 15: stage = "Stage 5"
        elif gfr < 30: stage = "Stage 4"
        elif gfr < 45: stage = "Stage 3b"
        elif gfr < 60: stage = "Stage 3a"
        elif gfr < 90: stage = "Stage 2"

        return jsonify({
            "prediction": "CKD DETECTED" if prob > 0.5 else "NO CKD DETECTED",
            "confidence": f"{prob * 100:.1f}%",
            "gfr": f"{gfr:.1f}",
            "stage": stage,
            "tdf": { "status": tdf_status, "msg": tdf_msg, "color": tdf_color }
        })
    except Exception as e: return jsonify({"error": str(e)}), 500

if __name__ == '__main__':
    app.run(port=5000, debug=True)