import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDYLdsEZdhWJCPaxLUn8xNzCvfHeTH2GG8",
  authDomain: "clone-5af95.firebaseapp.com",
  projectId: "clone-5af95",
  storageBucket: "clone-5af95.appspot.com",
  messagingSenderId: "15349414424",
  appId: "1:15349414424:web:47d9676ee47a84229ce16d",
  measurementId: "G-X8KFWBV794",
};
const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
export default db;
