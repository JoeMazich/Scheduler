import firebase from "firebase/app";

import "firebase/auth";
import "firebase/database";

const firebaseConfig =  {
  apiKey: "AIzaSyCXYhluDDm4e0bXLK15opyHF7iZ19sb7z8",
  authDomain: "scheduler-ff448.firebaseapp.com",
  databaseURL: "https://scheduler-ff448-default-rtdb.firebaseio.com",
  projectId: "scheduler-ff448",
  storageBucket: "scheduler-ff448.appspot.com",
  messagingSenderId: "287159545024",
  appId: "1:287159545024:web:b47d214659eec46f3b9125"
};

firebase.initializeApp(firebaseConfig);

export { firebase };
