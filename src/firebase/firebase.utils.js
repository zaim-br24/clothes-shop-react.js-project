import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyChW_04TOF5k4p9F8_HH6ToedMY7U_-aP8",
  authDomain: "crwd-db-d3faa.firebaseapp.com",
  projectId: "crwd-db-d3faa",
  storageBucket: "crwd-db-d3faa.appspot.com",
  messagingSenderId: "685154534671",
  appId: "1:685154534671:web:0a5057ad8c92c95b6e2a7a",
  measurementId: "G-47RDHS9Y3X",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();

provider.setCustomParameters({ prompt: "select_account" });

export const singInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
