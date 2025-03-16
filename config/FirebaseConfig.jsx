// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBxoC5V2x1At4kHQw406Nbq3XU1f2r8C2M",
  authDomain: "nativeapp-21bba.firebaseapp.com",
  projectId: "nativeapp-21bba",
  storageBucket: "nativeapp-21bba.firebasestorage.app",
  messagingSenderId: "447596391509",
  appId: "1:447596391509:web:e4b2d3230f85f87819b8dc"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default  auth = getAuth(app);