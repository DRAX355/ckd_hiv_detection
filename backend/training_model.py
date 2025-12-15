# ==========================================
# RUN THIS IN GOOGLE COLAB
# ==========================================

import pandas as pd
import numpy as np
import tensorflow as tf
from tensorflow import keras
from sklearn.model_selection import train_test_split
from sklearn.preprocessing import StandardScaler
import joblib
import shutil
import os

# 1. GENERATE SYNTHETIC DATA
print("Generating dataset...")
np.random.seed(42)
n_samples = 5000

# Features matching your Dashboard exactly (19 Features)
age = np.random.randint(20, 90, n_samples)
bp = np.random.normal(76, 14, n_samples)
al = np.random.randint(0, 5, n_samples)
su = np.random.randint(0, 5, n_samples)
rbc = np.random.choice([0, 1], n_samples)
pc = np.random.choice([0, 1], n_samples)
pcc = np.random.choice([0, 1], n_samples)
ba = np.random.choice([0, 1], n_samples)
bgr = np.random.normal(148, 75, n_samples)
bu = np.random.normal(57, 50, n_samples)
sc = np.random.gamma(shape=1.5, scale=0.8, size=n_samples) # Creatinine
wc = np.random.normal(8400, 3000, n_samples)
pot = np.random.normal(4.6, 2.0, n_samples)
htn = np.random.choice([0, 1], n_samples)
dm = np.random.choice([0, 1], n_samples)
cad = np.random.choice([0, 1], n_samples)
pe = np.random.choice([0, 1], n_samples)
ane = np.random.choice([0, 1], n_samples)
cd4 = np.random.normal(500, 300, n_samples) # CD4

# Target Logic (CKD)
risk_score = (sc * 4.0) + (al * 2.0) + (dm * 2.5) + (htn * 1.5) + (age * 0.02)
ckd_class = (risk_score > 6.0).astype(int)

# 2. PREPROCESS
# Combine into a single matrix
X = np.column_stack((age, bp, al, su, rbc, pc, pcc, ba, bgr, bu, sc, wc, pot, htn, dm, cad, pe, ane, cd4))
y = ckd_class

X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)

scaler = StandardScaler()
X_train_scaled = scaler.fit_transform(X_train)
X_test_scaled = scaler.transform(X_test)

# 3. TRAIN MODEL
model = keras.Sequential([
    keras.layers.Input(shape=(19,)), 
    keras.layers.Dense(32, activation='relu'),
    keras.layers.Dropout(0.2),
    keras.layers.Dense(16, activation='relu'),
    keras.layers.Dense(8, activation='relu'),
    keras.layers.Dense(1, activation='sigmoid')
])

model.compile(optimizer='adam', loss='binary_crossentropy', metrics=['accuracy'])

print("Training model...")
model.fit(X_train_scaled, y_train, epochs=20, batch_size=32, verbose=1)

# 4. SAVE ARTIFACTS
print("Saving artifacts...")
model.save('ckd_hiv_model.h5')
joblib.dump(scaler, 'scaler.pkl')

print("✅ Model and Scaler created successfully.")

# 5. DOWNLOAD
from google.colab import files
files.download('ckd_hiv_model.h5')
files.download('scaler.pkl')