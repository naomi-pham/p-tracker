// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAgxeRnBaD8K2OF4prc0hqOBIFqYSXv3ts",
  authDomain: "project-tracker-f12e6.firebaseapp.com",
  projectId: "project-tracker-f12e6",
  storageBucket: "project-tracker-f12e6.appspot.com",
  messagingSenderId: "790808602254",
  appId: "1:790808602254:web:fa5d2aaf60f04f3f328bdf",
  measurementId: "G-K6LDP29LV2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);

// Initialize Cloud Firestore and get a reference to the service
export const db = getFirestore(app);

export default app

// https://firebase.google.com/docs/auth/web/firebaseui?authuser=0&hl=en
// https://firebase.google.com/docs/firestore/quickstart?hl=en&authuser=0