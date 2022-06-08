import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyBcQr-xm0gqX0C0eB025v63feoRXRyx6dM",
    authDomain: "team-expansion-54ae7.firebaseapp.com",
    databaseURL: "https://team-expansion-54ae7-default-rtdb.firebaseio.com",
    projectId: "team-expansion-54ae7",
    storageBucket: "team-expansion-54ae7.appspot.com",
    messagingSenderId: "932038990518",
    appId: "1:932038990518:web:b67532c58cf678c6bfa417",
    measurementId: "G-W310M4WJL0"
  };

firebase.initializeApp(firebaseConfig);

export {firebase};