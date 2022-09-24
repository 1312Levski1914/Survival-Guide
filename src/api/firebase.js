
 const firebaseConfig = {
    apiKey: "AIzaSyCugRv_wClIS7ZJK303gkX0C-4_OSWfNT4",
    authDomain: "survivalguidedk.firebaseapp.com",
    projectId: "survivalguidedk",
    storageBucket: "survivalguidedk.appspot.com",
    messagingSenderId: "167157510780",
    appId: "1:167157510780:web:95221773959569def68ff9",
    measurementId: "G-4EQF1R62J6"
}

firebase.initializeApp(firebaseConfig);

let auth = firebase.auth();
let db = firebase.firestore();