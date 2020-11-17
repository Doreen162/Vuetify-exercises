 import firebase from 'firebase/app'
 import 'firebase/firestore'


 // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  var firebaseConfig = {
    apiKey: "AIzaSyBM0i_0mzQtLKC3OTonw4w39VLYerjkr5w",
    authDomain: "todo-ninja-95a72.firebaseapp.com",
    databaseURL: "https://todo-ninja-95a72.firebaseio.com",
    projectId: "todo-ninja-95a72",
    storageBucket: "todo-ninja-95a72.appspot.com",
    messagingSenderId: "391346335097",
    appId: "1:391346335097:web:3329b6c1b177dfb46313a8",
    measurementId: "G-2E9TFT4MXD"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
 
  const db = firebase.firestore()

  db.settings({ timestampsInSnapshots: true});

  export default db