import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyDyi17-pGGUo9fSYtBGJtWuKPIXx7Bnmh8",
    authDomain: "manthan-a910d.firebaseapp.com",
    projectId: "manthan-a910d",
    storageBucket: "manthan-a910d.appspot.com",
    messagingSenderId: "295647304329",
    appId: "1:295647304329:web:ef1409e07ead6ce3a6c458",
    // measurementId: "${config.measurementId}"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
export const auth = firebase.auth();
// export const provider = new firebase.auth.signInWithPhoneNumber();
export const db = firebaseApp.firestore();
export const storage = firebase.storage();