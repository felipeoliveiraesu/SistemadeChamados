import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
import 'firebase/storage';

let firebaseConfig = {
  apiKey: "AIzaSyB5IfNPzS3UBuWE_wAlY1ob66aqle7ghcU",
  authDomain: "sistema-91af9.firebaseapp.com",
  projectId: "sistema-91af9",
  storageBucket: "sistema-91af9.appspot.com",
  messagingSenderId: "689420587714",
  appId: "1:689420587714:web:eab27c7e8973a363e9a15b",
  measurementId: "G-JGS0DLWRCL"
};

if(!firebase.apps.length){
  firebase.initializeApp(firebaseConfig);
}

export default firebase;