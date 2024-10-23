// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCZCDsmQMeHOxB5Ocmn8R7pJEj8AMbrTGY",
  authDomain: "flyhigh-6b870.firebaseapp.com",
  projectId: "flyhigh-6b870",
  storageBucket: "flyhigh-6b870.appspot.com",
  messagingSenderId: "721710228733",
  appId: "1:721710228733:web:a62b9a6df79278714c4a94",
  measurementId: "G-PRFSJDKK3H"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// eslint-disable-next-line no-unused-vars
const analytics = getAnalytics(app);
export const auth = getAuth();