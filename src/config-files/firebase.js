// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAnalytics} from "firebase/analytics";
import {getFirestore} from "firebase/firestore";
import {getStorage} from "firebase/storage";
import {getAuth} from "firebase/auth";


// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC2jmshlg-1xV34ze4nxq7HGhR90j3G6Tk",
  authDomain: "planugo-22168.firebaseapp.com",
  projectId: "planugo-22168",
  storageBucket: "planugo-22168.appspot.com",
  messagingSenderId: "972427234565",
  appId: "1:972427234565:web:9d178967bc4bf496c8fb6c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Analytics
export const analytics = getAnalytics(app);

// FireStore
const db = getFirestore(app);

// Firebase storage reference
export const storage = getStorage(app);

export const auth = getAuth(app);

export {db}


