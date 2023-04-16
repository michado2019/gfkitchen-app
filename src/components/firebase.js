// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAJpgPkl1Eieh7Atnbg-2X_-oz5aNbSVi8",
  authDomain: "shopping-app-gfkitchen.firebaseapp.com",
  projectId: "shopping-app-gfkitchen",
  storageBucket: "shopping-app-gfkitchen.appspot.com",
  messagingSenderId: "383503304468",
  appId: "1:383503304468:web:06839c5dcc04df968e2401",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
