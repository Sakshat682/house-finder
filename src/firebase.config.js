// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getFirestore} from 'firebase/firestore'
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCe8s7nL4_j8xzVtH_XcjGEayYCdXnMu_o",
  authDomain: "pg-finder-app.firebaseapp.com",
  projectId: "pg-finder-app",
  storageBucket: "pg-finder-app.appspot.com",
  messagingSenderId: "235455977809",
  appId: "1:235455977809:web:d456d392b3b2c9fd8cdb70",
  measurementId: "G-17179EK1RV"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db = getFirestore()