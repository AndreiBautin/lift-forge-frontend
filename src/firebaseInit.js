// src/firebaseInit.js (in your frontend project)
import firebase from 'firebase/app';
import 'firebase/firestore';
import firebaseConfig from './firebaseConfig';

firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();

export { firebase, db };
