// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
import {getFirestore} from 'firebase/firestore'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA_kuQl91T35xfpwVMpj68321grOOxocgI",
  authDomain: "auth-c1e19.firebaseapp.com",
  projectId: "auth-c1e19",
  storageBucket: "auth-c1e19.appspot.com",
  messagingSenderId: "193382296176",
  appId: "1:193382296176:web:368875c705dfd6d91d62b5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const fireDB = getFirestore(app)