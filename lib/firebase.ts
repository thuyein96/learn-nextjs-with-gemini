// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCmhh18njN5ZQkUx7Tl39yz6wl9H6srAPc",
  authDomain: "my-recipe-app-fe6ad.firebaseapp.com",
  projectId: "my-recipe-app-fe6ad",
  storageBucket: "my-recipe-app-fe6ad.firebasestorage.app",
  messagingSenderId: "24095361588",
  appId: "1:24095361588:web:1c283215bf10fed9425861",
  measurementId: "G-R6FHDJ95YR"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };