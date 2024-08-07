
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBzu4SJWlTRqJHE_NAfcSrTgUQsFDByWgA",
  authDomain: "fodi-resturant-demo.firebaseapp.com",
  projectId: "fodi-resturant-demo",
  storageBucket: "fodi-resturant-demo.appspot.com",
  messagingSenderId: "459935854597",
  appId: "1:459935854597:web:57c4115c47c585de37ac6c"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default app;