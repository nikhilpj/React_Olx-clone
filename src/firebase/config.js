import firebase from "firebase";
import 'firebase/auth'
import 'firebase/firebase'
import 'firebase/storage'

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAJxcMgXgjYXSDTxUIbbCkbvcJbmz72KH4",
    authDomain: "olx-clone-project-d6316.firebaseapp.com",
    projectId: "olx-clone-project-d6316",
    storageBucket: "olx-clone-project-d6316.appspot.com",
    messagingSenderId: "863601129703",
    appId: "1:863601129703:web:62e60d99bc074bcf43ca42",
    measurementId: "G-6L27E5KSK5"
  };

 export default firebase.initializeApp(firebaseConfig)