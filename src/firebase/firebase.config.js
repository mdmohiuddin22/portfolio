// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCo9OLpMum3ziWC6GjWy09U_g8-bLOHtUE",
  authDomain: "myportfolio-2fdfa.firebaseapp.com",
  projectId: "myportfolio-2fdfa",
  storageBucket: "myportfolio-2fdfa.appspot.com",
  messagingSenderId: "592464732871",
  appId: "1:592464732871:web:9a8948fbf7b96cb3a394e2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;