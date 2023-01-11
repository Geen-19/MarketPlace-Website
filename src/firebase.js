// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAieneJrB9wYbe4ZS4x7rwUWZk0k-mtT54",
  authDomain: "market-place-web-clone.firebaseapp.com",
  projectId: "market-place-web-clone",
  storageBucket: "market-place-web-clone.appspot.com",
  messagingSenderId: "1072396679879",
  appId: "1:1072396679879:web:d498fa497c0bd2eeb8dce2"
};

// Initialize Firebase
initializeApp(firebaseConfig);
export const db = getFirestore()