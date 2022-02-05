import firebase from "firebase/compat/app";
import "firebase/compat/auth"
import "firebase/compat/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyAUSPRzVyRhVPJpcUpQ4KgBqFBG5pqY3ds",
  authDomain: "e-commerce-project-b26e4.firebaseapp.com",
  projectId: "e-commerce-project-b26e4",
  storageBucket: "e-commerce-project-b26e4.appspot.com",
  messagingSenderId: "213237069782",
  appId: "1:213237069782:web:fc0196a4b374817e0d9677",
  measurementId: "G-PS2FY4S3DE" 
};


const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
 
