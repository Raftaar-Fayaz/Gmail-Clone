import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyChhhKZv1YGagqZ_sq2h2ITDqL0gljZQW4",
    authDomain: "fir-5d890.firebaseapp.com",
    projectId: "fir-5d890",
    storageBucket: "fir-5d890.appspot.com",
    messagingSenderId: "1075290577382",
    appId: "1:1075290577382:web:5838f1329bb69129a31e27",
    measurementId: "G-WSRQVY5DTH"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig)
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { db, auth, provider };