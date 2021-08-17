import firebase from "firebase";

const config = {
    apiKey: "AIzaSyBfN_e-ZDznp6sujHt3Ac00Mm9Wa9TPdyo",
    authDomain: "gbreact.firebaseapp.com",
    databaseURL: "https://gbreact-default-rtdb.firebaseio.com",
    projectId: "gbreact",
    storageBucket: "gbreact.appspot.com",
    messagingSenderId: "1075411095643",
    appId: "1:1075411095643:web:7f27afb0c7d6e254696f7e"
};

firebase.initializeApp(config);

export const db = firebase.database();