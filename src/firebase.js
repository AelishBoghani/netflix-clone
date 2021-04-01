// For Firebase JS SDK v7.20.0 and later, measurementId is optional

import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyAl2qOVrIngo4elV77apmYICyu29IK25fQ",
    authDomain: "netflix-46095.firebaseapp.com",
    projectId: "netflix-46095",
    storageBucket: "netflix-46095.appspot.com",
    messagingSenderId: "471544747016",
    appId: "1:471544747016:web:1c6bb9b7e0afb305c5edbd",
    measurementId: "G-73Q8NXBY44"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth };
export default db; 