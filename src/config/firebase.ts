/* eslint-disable */

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import  firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import { getFirestore } from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCZBFcfdouVrOIrNkwygD0sP8Ikd382wio",
  authDomain: "hotelmania-28f5e.firebaseapp.com",
  projectId: "hotelmania-28f5e",
  storageBucket: "hotelmania-28f5e.appspot.com",
  messagingSenderId: "207047612343",
  appId: "1:207047612343:web:56393967c4c40d5f9b7a32",
  measurementId: "G-V8T1Y42796"
};

// Initialize Firebase
const App = initializeApp(firebaseConfig);
firebase.initializeApp(firebaseConfig);
export const firebaseConst=firebase
export const db = getFirestore(App);

export default App
