import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore';
import {getAuth, GoogleAuthProvider} from 'firebase/auth';
import {getStorage} from 'firebase/storage';

const firebaseConfig = {
  apiKey: "AIzaSyBP095q8Yw5yw-jLhOvZrFVjsS1fvm5o84",
  authDomain: "ielts-538fd.firebaseapp.com",
  projectId: "ielts-538fd",
  storageBucket: "ielts-538fd.firebasestorage.app",
  messagingSenderId: "287067045911",
  appId: "1:287067045911:web:ca745d017c75604f40dc52",
  measurementId: "G-TVK61DELRX"
};

const app = initializeApp(firebaseConfig);
const db= getFirestore(app);
const auth= getAuth(app)
const provider = new GoogleAuthProvider(); 
const storage = getStorage(app);

export {auth,provider,storage};
export default db;