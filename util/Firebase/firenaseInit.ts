// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCWWWiVfVs7yVTMx3PKzuZ8NnT7n_iUWNM",
  authDomain: "memomate-f9d2e.firebaseapp.com",
  projectId: "memomate-f9d2e",
  storageBucket: "memomate-f9d2e.appspot.com",
  messagingSenderId: "222465642902",
  appId: "1:222465642902:web:4497da9f6e0f35eee0cdb7",
  measurementId: "G-MZJCHKX5T3",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
//const analytics = getAnalytics(app);
