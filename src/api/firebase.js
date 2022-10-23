const firebaseConfig = {
    apiKey: "AIzaSyBY63rQCZwlUMewdR6CreWLry05frrRpJY",
    authDomain: "survival-guide-dk.firebaseapp.com",
    projectId: "survival-guide-dk",
    storageBucket: "survival-guide-dk.appspot.com",
    messagingSenderId: "752913256416",
    appId: "1:752913256416:web:55862ee9793465e36da585"
  };



firebase.initializeApp(firebaseConfig);

let auth = firebase.auth();
let db = firebase.firestore();
