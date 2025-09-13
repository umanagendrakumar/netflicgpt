// We use for authentication
import { getAuth } from "firebase/auth";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDJ80EymgmTmDFO3XDEFyebZK_PWG79MU0",
  authDomain: "netflicgpt-4f15e.firebaseapp.com",
  projectId: "netflicgpt-4f15e",
  storageBucket: "netflicgpt-4f15e.firebasestorage.app",
  messagingSenderId: "172393817715",
  appId: "1:172393817715:web:4c8b2017547d39070cac06",
  measurementId: "G-H0D91CF2LZ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);



// it is common for many apis like signin, signup, reset password 
// inthe firebase to use the auth variable
export const auth = getAuth(); 