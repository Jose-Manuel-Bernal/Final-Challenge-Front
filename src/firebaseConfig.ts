// Import the functions you need from the SDKs you need
import { getAuth } from 'firebase/auth'
import { initializeApp } from "firebase/app";

// TODO: Add SDKs for Firebase products that you want to use

// https://firebase.google.com/docs/web/setup#available-libraries


// Your web app's Firebase configuration

const firebaseConfig = {

  apiKey: "AIzaSyDQvqNiv-6q7Gv-R7umhselDXbFAwYyzH0",

  authDomain: "final-challenge-f850a.firebaseapp.com",

  projectId: "final-challenge-f850a",

  storageBucket: "final-challenge-f850a.appspot.com",

  messagingSenderId: "216998601864",

  appId: "1:216998601864:web:16f7295ff511cf76f52b3d"

};


// Initialize Firebase

export const app = initializeApp(firebaseConfig);

export const auth = getAuth()