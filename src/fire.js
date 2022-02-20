import firebase from "firebase";

var firebaseConfig = {
  apiKey: "AIzaSyATBUQ4GJzqx6QIdUg0pJIfeZ3LmwF_P-4",
  authDomain: "login2-4aa15.firebaseapp.com",
  projectId: "login2-4aa15",
  storageBucket: "login2-4aa15.appspot.com",
  messagingSenderId: "852514390530",
  appId: "1:852514390530:web:28f43f5d92a148defc9d1b",
};

const fire = firebase.initializeApp(firebaseConfig);

export default fire;
