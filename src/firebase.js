import firebase from 'firebase';


const firebaseConfig = {
    apiKey: "AIzaSyDW1i1M3Q2xgAdAUrBwLSl11413GJIM9zM",
    authDomain: "clone-f232f.firebaseapp.com",
    projectId: "clone-f232f",
    storageBucket: "clone-f232f.appspot.com",
    messagingSenderId: "202176398762",
    appId: "1:202176398762:web:f693ed4bcccfbd1e8ad7d3",
    measurementId: "G-WS26Y6FG20"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, db, provider };