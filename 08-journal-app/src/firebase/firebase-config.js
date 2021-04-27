import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";


// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBWm2uTjk3jeEqr5BqrgJCQdyKg1-zrYD4",
    authDomain: "react-curso-85066.firebaseapp.com",
    projectId: "react-curso-85066",
    storageBucket: "react-curso-85066.appspot.com",
    messagingSenderId: "254983042777",
    appId: "1:254983042777:web:81dccd5ac9015dded770c8"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
const googleAuhtProvider = new firebase.auth.GoogleAuthProvider();

export { db, googleAuhtProvider, firebase }