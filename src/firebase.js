import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCWN4SMdmcwqPwWXz3o8FnUuCQaiWtbc0Y",
  authDomain: "slack-clone-3cc59.firebaseapp.com",
  databaseURL: "https://slack-clone-3cc59-default-rtdb.firebaseio.com",
  projectId: "slack-clone-3cc59",
  storageBucket: "slack-clone-3cc59.appspot.com",
  messagingSenderId: "85712938351",
  appId: "1:85712938351:web:821be90e4e29b97af5349a",
  measurementId: "G-YVPQK7QHZM",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export default db;
export { auth, provider };
