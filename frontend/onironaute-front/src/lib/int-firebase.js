// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDPAkbtFozrgHkvUBvz_fd3YGGnGfDU_Ns",
  authDomain: "plant-eco-authent.firebaseapp.com",
  projectId: "plant-eco-authent",
  storageBucket: "plant-eco-authent.appspot.com",
  messagingSenderId: "570176881118",
  appId: "1:570176881118:web:456a7bf036c8dce9079d4f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase
export const db = getFirestore(app);

// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);

