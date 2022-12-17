// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth} from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBHsSdBpJvTNstSLL-FpNSegqfUUHuKNJM",
  authDomain: "islacanela-c7d46.firebaseapp.com",
  projectId: "islacanela-c7d46",
  storageBucket: "islacanela-c7d46.appspot.com",
  messagingSenderId: "620311905399",
  appId: "1:620311905399:web:6bf05eb7806e981486f272",
  measurementId: "G-MME990JB9S"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

// Path: firebase.js