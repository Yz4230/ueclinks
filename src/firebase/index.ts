import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.REACT_APP_FBASE_API_KEY,
  authDomain: process.env.REACT_APP_FBASE_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_FBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FBASE_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_FBASE_APP_ID,
  measurementId: process.env.REACT_APP_FBASE_MEASUREMENT_ID,
};

firebase.initializeApp(firebaseConfig);

const firestore = firebase.firestore();
const auth = firebase.auth();
if (location.hostname === "localhost") {
  firestore.useEmulator("localhost", 8080);
  auth.useEmulator("http://localhost:9099");
}

export { firestore };
export default firebase;
