import app from "firebase/app";
import "firebase/auth";
import "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyBI6ke1Mw9xQjlmbh0ppTti_zsiLv4opnc",
  authDomain: "unifam-e0648.firebaseapp.com",
  projectId: "unifam-e0648",
  storageBucket: "unifam-e0648.appspot.com",
  messagingSenderId: "501069642106",
  appId: "1:501069642106:web:62adaf6c0a38a733553ec3",
};

// Import firebase from the library you installed earlier, and then use
// it within a new Firebase class to initialize firebase with the configuration:
class Firebase {
  constructor() {
    app.initializeApp(firebaseConfig);

    // responsible for all authentication
    this.auth = app.auth();
    // responsible for getting data from db
    this.db = app.database();
  }

  // *** Auth API ***

  doCreateUserWithEmailAndPassword = (email, password) =>
    this.auth.createUserWithEmailAndPassword(email, password);

  doSignInWithEmailAndPassword = (email, password) =>
    this.auth.signInWithEmailAndPassword(email, password);

  doSignOut = () => this.auth.signOut();

  // *** User API ***

  user = (uid) => this.db.ref(`users/${uid}`);

  users = () => this.db.ref("users");
}

export default Firebase;
