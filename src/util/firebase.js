import { initializeApp } from "firebase/app";
import {
  getAuth,
  GoogleAuthProvider,
  signInWithPhoneNumber,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  RecaptchaVerifier
} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyA-QghOUci8tChwOE7xiBs8JpiCCMoq3Bc",
  authDomain: "topup-a42c3.firebaseapp.com",
  projectId: "topup-a42c3",
  storageBucket: "topup-a42c3.firebasestorage.app",
  messagingSenderId: "299005987148",
  appId: "1:299005987148:web:a3ae127cfaf3bbf2b2a7e9",
  measurementId: "G-H4T6F7GSK3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and set up providers
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();

// Export functions for authentication
export const phoneAuth = signInWithPhoneNumber;
export const emailSignIn = signInWithEmailAndPassword;
export const emailSignUp = createUserWithEmailAndPassword;
export { RecaptchaVerifier };

export default app;