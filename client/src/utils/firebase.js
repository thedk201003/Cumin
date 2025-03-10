// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_APP_FIREBASE_API_KEY,
  authDomain: "taskmanager-423a9.firebaseapp.com",
  projectId: "taskmanager-423a9",
  storageBucket: "taskmanager-423a9.firebasestorage.app",
  messagingSenderId: "93475174995",
  appId: "1:93475174995:web:4c61006fc924c6053ce4a6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);