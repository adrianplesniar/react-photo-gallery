import firebase from 'firebase/app';
import 'firebase/storage';
import 'firebase/firestore';

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyA0qC7E_XDPTOdUzLzTLjkqU8r31yTLI4E",
    authDomain: "firegram-react-gallery.firebaseapp.com",
    projectId: "firegram-react-gallery",
    storageBucket: "firegram-react-gallery.appspot.com",
    messagingSenderId: "910075906427",
    appId: "1:910075906427:web:288731345a6d08a28e55de"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  const projectStorage = firebase.storage();
  const projectFirestore = firebase.firestore();
  const timestamp = firebase.firestore.FieldValue.serverTimestamp;

  export { projectStorage, projectFirestore, timestamp };
