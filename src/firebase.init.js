// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBK3bRS07QaUOIvbWV04ygs37u4ng1GCH4",
  authDomain: "ema-john-simple-firebase-84dba.firebaseapp.com",
  projectId: "ema-john-simple-firebase-84dba",
  storageBucket: "ema-john-simple-firebase-84dba.appspot.com",
  messagingSenderId: "416147728150",
  appId: "1:416147728150:web:d3b1bcd644659e8ce79237"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
export default auth ;