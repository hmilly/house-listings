// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBP95wtlBbAzaosLEBjL-gX-QNTvHMPOm0",
  authDomain: "house-listings-5cecc.firebaseapp.com",
  projectId: "house-listings-5cecc",
  storageBucket: "house-listings-5cecc.appspot.com",
  messagingSenderId: "127400473592",
  appId: "1:127400473592:web:a55df74801647c213bdc0d",
};

// Initialize Firebase
initializeApp(firebaseConfig);
export const db = getFirestore();
