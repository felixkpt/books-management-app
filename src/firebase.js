// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

import { getStorage } from "firebase/storage";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC-Ov3ssN6fFJQY5sYVVg7MPxzCbefLfk0",
  authDomain: "book-management-app-c1f9c.firebaseapp.com",
  projectId: "book-management-app-c1f9c",
  storageBucket: "book-management-app-c1f9c.appspot.com",
  messagingSenderId: "739964090155",
  appId: "1:739964090155:web:16c26ea9f25e90d457776e"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth()

// Create a root reference
export const storage = getStorage();

// Our DB setup
export const db = getFirestore()