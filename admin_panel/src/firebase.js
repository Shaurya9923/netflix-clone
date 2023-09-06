import firebase from 'firebase/compat/app';
import 'firebase/compat/storage';

const firebaseConfig = {
    apiKey: "AIzaSyB6YJVZsINj1HgTFc7VwPpQ9jaejmDzGqU",
    authDomain: "netflix-8d55c.firebaseapp.com",
    projectId: "netflix-8d55c",
    storageBucket: "netflix-8d55c.appspot.com",
    messagingSenderId: "726428736778",
    appId: "1:726428736778:web:fdb2b5c1bd0f7958262ef3"
  };

firebase.initializeApp(firebaseConfig);
const storage = firebase.storage();
export default storage;