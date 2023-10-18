// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCb0kMrg5a7nXcIqBa0CC8qq7blei97AS4",
  authDomain: "ab-tecnology-cfb34.firebaseapp.com",
  projectId: "ab-tecnology-cfb34",
  storageBucket: "ab-tecnology-cfb34.appspot.com",
  messagingSenderId: "351055116215",
  appId: "1:351055116215:web:363c3108ae3531ac6ada32"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;