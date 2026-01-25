// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBuyqF4zZHpRBFSDYBtHYLeZ2xEU7Q3CHc",
  authDomain: "authproject-12604.firebaseapp.com",
  projectId: "authproject-12604",
  storageBucket: "authproject-12604.firebasestorage.app",
  messagingSenderId: "206381953231",
  appId: "1:206381953231:web:11d233797e96d1be1707ba",
  measurementId: "G-XH19B2N2CH"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);