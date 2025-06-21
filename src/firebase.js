// src/firebase.js
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

// 🔐 Your Firebase config (already correct!)
const firebaseConfig = {
  apiKey: "AIzaSyDW0Lt8aD3RLqXal56jpgdnfXHPSsS0J_U",
  authDomain: "student-portal-84825.firebaseapp.com",
  projectId: "student-portal-84825",
  storageBucket: "student-portal-84825.firebasestorage.app",
  messagingSenderId: "194744676512",
  appId: "1:194744676512:web:ceed49ea42fdf6962a19c5"
};

// ✅ Initialize Firebase App
const app = initializeApp(firebaseConfig);

// ✅ Initialize Auth from the App
const auth = getAuth(app);

// ✅ Export for usage in other files
export { auth };
