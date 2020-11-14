import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCzoxARW5b9mNyfqpjtwTGxogazTz3u3TI",
  authDomain: "slack-clone-front-end.firebaseapp.com",
  databaseURL: "https://slack-clone-front-end.firebaseio.com",
  projectId: "slack-clone-front-end",
  storageBucket: "slack-clone-front-end.appspot.com",
  messagingSenderId: "1051497611471",
  appId: "1:1051497611471:web:ebecb83fde5091fe2137ba",
  measurementId: "G-545049JVPN",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
