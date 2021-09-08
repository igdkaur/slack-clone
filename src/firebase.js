import firebase from "firebase";


// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAoXoFC1qLz7KizvcmFNXX2lK7xRwIl5Ww",
  authDomain: "slack-clone-69c9d.firebaseapp.com",
  databaseURL: "https://slack-clone-69c9d-default-rtdb.firebaseio.com",
  projectId: "slack-clone-69c9d",
  storageBucket: "slack-clone-69c9d.appspot.com",
  messagingSenderId: "823216050503",
  appId: "1:823216050503:web:08836f74ca87463f6e7c62",
  measurementId: "G-PVP82EJS7G"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider};
export default db;