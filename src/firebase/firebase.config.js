import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

// Configuración de la App Web de Firebase
const config = {
  apiKey: "AIzaSyAA8S-dHYEOSJztzdGOJph-0k_oSnhC2M4",
  authDomain: "react-journal-app-b04a4.firebaseapp.com",
  projectId: "react-journal-app-b04a4",
  storageBucket: "react-journal-app-b04a4.appspot.com",
  messagingSenderId: "137640050112",
  appId: "1:137640050112:web:adf9cd2029074152ccdc25",
};

// Inicializamos Firebase
firebase.initializeApp(config);

// Instanciamos FireStore
export const db = firebase.firestore();

// Autenticacion con Google
export const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

// Exportamos firebase
export { firebase };
