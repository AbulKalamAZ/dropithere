import firebase from 'firebase/app';
import 'firebase/analytics';
import 'firebase/firestore';
import 'firebase/storage';

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
var firebaseConfig = {
    apiKey: "AIzaSyBCwqhj-oF9Wfi_pftEIlZU_z0k_z4KpO8",
    authDomain: "dropithere-14392.firebaseapp.com",
    projectId: "dropithere-14392",
    storageBucket: "dropithere-14392.appspot.com",
    messagingSenderId: "1061664186498",
    appId: "1:1061664186498:web:37f13aa3d444a012f6d49b",
    measurementId: "G-FY0E9E2V3V"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase;