
import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCBjalyPlVF_mgBySPMbTtbR4khlbDaLms",
  authDomain: "clone-3ad0f.firebaseapp.com",
  databaseURL: "https://clone-3ad0f.firebaseio.com",
  projectId: "clone-3ad0f",
  storageBucket: "clone-3ad0f.appspot.com",
  messagingSenderId: "116733119710",
  appId: "1:116733119710:web:7c917396ba8e1e82e3864f",
};
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebaseApp.auth();

export { db, auth };
