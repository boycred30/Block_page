import { initializeApp } from "firebase/app";
import {getFirestore} from  'firebase/firestore';
import {getAuth, GoogleAuthProvider} from "firebase/auth";



// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBlAk0n9kcV8Pm0uE1eAn38IvJeSZJLXEk",
  authDomain: "blog-7b9c4.firebaseapp.com",
  projectId: "blog-7b9c4",
  storageBucket: "blog-7b9c4.firebasestorage.app",
  messagingSenderId: "861568968018",
  appId: "1:861568968018:web:62a75122f9490270c8c68b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app); 
export const provider = new GoogleAuthProvider(); 
export default app;