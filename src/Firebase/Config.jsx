import { initializeApp } from "firebase/app";
import { GoogleAuthProvider, getAuth } from "firebase/auth";
import { getFirestore } from 'firebase/firestore'
const firebaseConfig = {
  apiKey: "AIzaSyDj-JYgY6t3hZtQNmVsy-ZA1AV2l6wn3sQ",
  authDomain: "twitter-clone-52422.firebaseapp.com",
  projectId: "twitter-clone-52422",
  storageBucket: "twitter-clone-52422.appspot.com",
  messagingSenderId: "505126086806",
  appId: "1:505126086806:web:4d8eeb5f85e47cc6843ab7"
};

const app = initializeApp(firebaseConfig);
const provider = new GoogleAuthProvider();
const auth = getAuth(app);
const firestore = getFirestore(app);
export {provider, auth, firestore}