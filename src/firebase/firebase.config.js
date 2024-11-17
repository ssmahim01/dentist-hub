// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBAiIxNuNjh8bW5EkVmmw8pY2M-iHNPQ6Y",
  authDomain: "dentist-hub-c64df.firebaseapp.com",
  projectId: "dentist-hub-c64df",
  storageBucket: "dentist-hub-c64df.firebasestorage.app",
  messagingSenderId: "515174677087",
  appId: "1:515174677087:web:608a40ed69a71a5c8df9ea"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);

export default auth;