import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyAIrbEvNS8HLaHo-4tsASRQ1Gig-2ec1Wg",
  authDomain: "slack-clone-b18a6.firebaseapp.com",
  projectId: "slack-clone-b18a6",
  storageBucket: "slack-clone-b18a6.appspot.com",
  messagingSenderId: "369834149112",
  appId: "1:369834149112:web:bb2f6108fa6816aebf670d",
  measurementId: "G-DHJQBXC6RG"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;