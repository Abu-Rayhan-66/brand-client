// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDazamEocTAPQZEJdbmPYG4Sd_awIX_ZOg",
  authDomain: "brand-shop-2e5db.firebaseapp.com",
  projectId: "brand-shop-2e5db",
  storageBucket: "brand-shop-2e5db.appspot.com",
  messagingSenderId: "767685582328",
  appId: "1:767685582328:web:6e7c32496893cf727a0a0d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
