import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCX9dMjLqyXImX23uF148q4rugm1EtYz3U",
  authDomain: "cs2-ecommercefinal.firebaseapp.com",
  projectId: "cs2-ecommercefinal",
  storageBucket: "cs2-ecommercefinal.firebasestorage.app",
  messagingSenderId: "1072376931938",
  appId: "1:1072376931938:web:af2b89e3381d0cc097133b",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
