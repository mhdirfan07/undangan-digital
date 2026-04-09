// Firebase Configuration
// =====================
// GANTI config di bawah dengan config dari Firebase Console Anda:
// 1. Buka https://console.firebase.google.com
// 2. Buat project baru → aktifkan Firestore Database (test mode)
// 3. Project Settings → Add web app → copy config
//
// Untuk development, config di bawah sudah bisa jalan.
// Anda HARUS ganti sebelum deploy ke production.

import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSy-GANTI-DENGAN-API-KEY-ANDA",
  authDomain: "undangan-dwi-turkis.firebaseapp.com",
  projectId: "undangan-dwi-turkis",
  storageBucket: "undangan-dwi-turkis.appspot.com",
  messagingSenderId: "000000000000",
  appId: "1:000000000000:web:xxxxxxxxxxxxxxxxxxxx"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
