import Rebase from 're-base';
import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyBjnHVmL11JtdHGJ3VInNKKVk18wBDlIwY",
    authDomain: "wesbos-react-fish.firebaseapp.com",
    databaseURL: "https://wesbos-react-fish.firebaseio.com",
});

const base = Rebase.createClass(firebaseApp.database());

//this is a named export
export  {firebaseApp}

//this is a default export
export default base;