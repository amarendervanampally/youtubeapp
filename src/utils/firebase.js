// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAaWssQZF0OHnnBhYI4NNCMEoIRQpEwWdE",
  authDomain: "fir-d2d9a.firebaseapp.com",
  projectId: "fir-d2d9a",
  storageBucket: "fir-d2d9a.appspot.com",
  messagingSenderId: "491494707673",
  appId: "1:491494707673:web:a0d861a28f8ba7882fc9c8",
  measurementId: "G-YFJ2QYT8YY"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);