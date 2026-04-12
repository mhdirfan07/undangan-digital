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
  apiKey: "AIzaSyDJQZH5gWhM_0HiNqka0F3m8zXg_5rMii0",
  authDomain: "rsvp-4914c.firebaseapp.com",
  projectId: "rsvp-4914c",
  storageBucket: "rsvp-4914c.firebasestorage.app",
  messagingSenderId: "556986267566",
  appId: "1:556986267566:web:2302921e2ab1f55d64fa3f",
  measurementId: "G-DXZRXSMPNN"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
