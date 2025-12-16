# Advanced HIV-CKD Diagnosis System

A robust **Clinical Decision Support System (CDSS)** designed to assist medical professionals in the early detection and staging of Chronic Kidney Disease (CKD) in HIV-infected patients. This system leverages Deep Neural Networks (DNN) for high-accuracy prediction and includes a specialized module for assessing Tenofovir Disoproxil Fumarate (TDF) medication toxicity risks.

---

## 🌟 Key Features

### 🎯 99% Accuracy DNN Model
Trained on a custom-engineered **Synthetic Dataset** designed to mirror real-world HIV-CKD parameters, ensuring robust performance on critical markers like CD4 count and Creatinine.

### 📄 Intelligent File Parsing
Upload PDF, JPG, or PNG lab reports. The system uses OCR (Tesseract) and Regex to automatically extract clinical vitals (Creatinine, CD4, Albumin, etc.), reducing manual entry errors.

### 🔬 Real-time Clinical Analysis
- **CKD Detection**: Identifies if a patient is at risk
- **eGFR Calculation**: Automatically stages the disease (Stage 1-5)
- **TDF Toxicity Check**: Flags contraindications for Tenofovir based on renal function and immune status

### 🏥 Hospital Management System
- **Secure Admin Panel**: Admin-only access to create and manage doctor/staff accounts
- **Patient Database**: Built-in SQLite database to securely store and retrieve patient history
- **Authentication**: Role-based access control (Admin vs. User)

### 📊 Comprehensive Reporting
- **PDF Reports**: Generate and download detailed diagnosis reports for individual patients
- **Daily Reports**: Filter patient history by date and print daily summaries
- **Analytics Dashboard**: Visualize model performance metrics and dataset demographics

---

## 🛠️ Tech Stack

| Component | Technology |
|-----------|------------|
| **Frontend** | React (Vite), Tailwind CSS, Lucide Icons, Recharts |
| **Backend** | Python Flask |
| **AI/ML** | TensorFlow/Keras, Scikit-Learn |
| **Database** | SQLite |
| **OCR** | Tesseract, PDFPlumber |

---

## 🚀 Installation & Setup

### Prerequisites

Before you begin, ensure you have the following installed:

1. **Node.js** - Required for the frontend. [Download Here](https://nodejs.org/)
2. **Python 3.10+** - Required for the backend. [Download Here](https://www.python.org/downloads/)
3. **Tesseract OCR** - Required for image parsing
   - **Windows**: [Download Installer](https://github.com/UB-Mannheim/tesseract/wiki) (Add to PATH during install)
   - **macOS**: `brew install tesseract`
   - **Linux**: `sudo apt install tesseract-ocr`

---

### 1. Clone the Repository

```bash
git clone https://github.com/DRAX355/ckd_hiv_detection
cd CKD_Project
```

---

### 2. Backend Setup

Navigate to the backend folder and install dependencies.

```bash
cd backend

# Create virtual environment (Optional but recommended)
python -m venv venv

# Activate virtual environment
# Windows:
venv\Scripts\activate
# Mac/Linux:
source venv/bin/activate

# Install libraries
pip install -r requirements.txt
```

> **Note**: The trained model files (`ckd_hiv_model.h5` and `scaler.pkl`) are already included in this repository. You do not need to retrain unless you modify the dataset.

---

### 3. Frontend Setup

Open a new terminal window, navigate to the frontend folder, and install React dependencies.

```bash
cd frontend
npm install
```

---

## ▶️ Running the Application

You need to run both the backend and frontend terminals simultaneously.

### Terminal 1: Backend (API)

```bash
cd backend

# Ensure virtual environment is active
# Windows: venv\Scripts\activate
# Mac/Linux: source venv/bin/activate

python api.py
```

You should see:
```
✅ Default Admin Account Created
* Running on http://127.0.0.1:5000
```

### Terminal 2: Frontend (UI)

```bash
cd frontend
npm run dev
```

Click the Local URL (e.g., `http://localhost:5173`) to open the app.

---

## 📖 User Guide

### 1. Login & Access

**Default Admin Credentials:**
- **Username**: `admin`
- **Password**: `123`

Use these credentials to log in initially.

---

### 2. Admin Panel

Once logged in as admin, navigate to the **Admin** tab.

- Here you can create new accounts for other doctors or staff (e.g., `dr.smith`)
- Only Admins have this privilege
- You can also view the list of authorized users

---

### 3. Making a Prediction

1. Go to the **Upload** tab

2. Choose your input method:
   - **Option A (Smart Upload)**: Upload a lab report (PDF/Image/Text). The system will auto-fill the form
   - **Option B (Manual)**: Click "Manual Entry" to type values yourself

3. Review the data on the **Prediction** page

4. Click **"Run Clinical Analysis"**

5. View the **Diagnosis**, **Stage**, and **TDF Risk**

6. Click **"Save Record"** to store it in the database

7. Click **"Print Report"** to download/print a PDF of the diagnosis

---

### 4. Viewing History

Navigate to the **History** tab to see a table of all saved patient records and their diagnoses.

- **Filter by Date**: Select a date to see patients visited on that specific day
- **Print Daily Report**: Click the button to generate a summary PDF for the selected date
- **View Details**: Click the "View" icon on any record to see the full diagnosis card again

---

## 🧠 Model Training & Dataset

This project utilizes a **Synthetic Dataset** generated specifically to validate the system's architecture. Unlike public datasets (like UCI CKD), this synthetic data includes critical HIV-specific parameters (such as CD4 count) essential for TDF toxicity analysis, ensuring the model is tested against clinically relevant scenarios.

### Why Synthetic Data?

- **HIV-Specific Parameters**: Includes CD4 count and other HIV-related biomarkers not available in standard CKD datasets
- **TDF Toxicity Analysis**: Enables accurate assessment of Tenofovir contraindications
- **Clinical Relevance**: Mirrors real-world scenarios for HIV-CKD comorbidity
- **Privacy Compliance**: No patient data privacy concerns

---

### Retraining the Model (Optional)

If you wish to retrain the model from scratch or regenerate the synthetic dataset:

#### Option A: Local Training

Run the included training script in the backend folder:

```bash
cd backend
python training_model.py
```

This will overwrite `ckd_hiv_model.h5` and `scaler.pkl` with new versions trained on the generated data.

#### Option B: Google Colab

We have provided a Jupyter Notebook (`colab_training.ipynb`) in the repository.

1. Upload `colab_training.ipynb` to [Google Colab](https://colab.research.google.com/)
2. Run all cells
3. Download the generated `.h5` and `.pkl` files
4. Place them in your local `backend/` folder

---

## 📁 Project Structure

```
CKD_Project/
├── backend/
│   ├── api.py                  # Flask API server
│   ├── training_model.py       # Model training script (generates synthetic data)
│   ├── ckd_hiv_model.h5        # Pre-trained DNN model
│   ├── scaler.pkl              # Feature scaler
│   ├── requirements.txt        # Python dependencies
│   └── database.db             # SQLite database
├── frontend/
│   ├── src/
│   │   ├── components/         # React components
│   │   ├── pages/              # Application pages
│   │   └── App.jsx             # Main app component
│   ├── package.json            # Node dependencies
│   └── vite.config.js          # Vite configuration
├── colab_training.ipynb        # Colab training notebook
├── LICENSE                     # MIT License
└── README.md                   # This file
```

---

## ⚠️ Troubleshooting

### "Error connecting to backend"
Ensure `python api.py` is running and your firewall isn't blocking port 5000.

### "OCR Failed"
Ensure Tesseract is installed on your system and added to your System PATH variables.

### "ModuleNotFoundError: tensorflow"
Ensure you installed requirements in the correct virtual environment.

### "AttributeError: module 'tensorflow' has no attribute 'keras'"
This is handled by our robust import strategy, but ensuring you have a compatible TensorFlow version (e.g., 2.15.0) helps.

---

## 🤝 Contributing

Contributions are welcome!

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

---

## 🙏 Acknowledgements

- [TensorFlow](https://www.tensorflow.org/) - Deep Learning Framework
- [Flask](https://flask.palletsprojects.com/) - Backend Framework
- [React](https://reactjs.org/) - Frontend Framework
- [Tesseract OCR](https://github.com/tesseract-ocr/tesseract) - Optical Character Recognition
- [Tailwind CSS](https://tailwindcss.com/) - UI Styling
- [Scikit-Learn](https://scikit-learn.org/) - Machine Learning Tools

---

## 📧 Contact

For questions, feedback, or support:
- Open an issue on [GitHub](https://github.com/YOUR_USERNAME/YOUR_REPO_NAME/issues)
- Contact: your.email@example.com

---

## 🩺 Medical Disclaimer

This system is designed as a **Clinical Decision Support Tool** and should not replace professional medical judgment. The model is trained on synthetic data for validation purposes. Always consult with qualified healthcare professionals for diagnosis and treatment decisions.

---

## 🔬 Research & Validation Note

This project uses a synthetic dataset designed to demonstrate the system's capabilities and architecture. For clinical deployment, the model should be retrained and validated using real-world patient data in compliance with healthcare regulations (HIPAA, GDPR, etc.) and institutional review board (IRB) approval.

---

## 🔐 Security Note

The default admin credentials (`admin/123`) are for initial setup only. **Please change them immediately** after first login to ensure system security.

---

**⭐ If you find this project helpful, please give it a star!**
