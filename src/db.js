import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/storage';
import 'firebase/auth'
 // Your web app's Firebase configuration
 var firebaseConfig = {
    apiKey: "AIzaSyDUbWtNH3BJnJHl64VmTWPSbtIkRc59--s",
    authDomain: "tienda-online-6e266.firebaseapp.com",
    projectId: "tienda-online-6e266",
    storageBucket: "tienda-online-6e266.appspot.com",
    messagingSenderId: "255112499911",
    appId: "1:255112499911:web:9d027b46ad52661c2e64e2"
  };
// Get a Firestore instance
export const db = firebase
  .initializeApp(firebaseConfig)
  .firestore()
export const storage = firebase.storage();
export default{
auth: firebase.auth(),
  login(proveedor) {
      let provider = null;
      if (proveedor=='google') {        
          provider = new firebase.auth.GoogleAuthProvider();         
      }
      firebase
          .auth()
          .signInWithPopup(provider)
          .then(function (result) {
              console.log(result);
          })
          .catch(function (error) {
              const errorCode = error.code;
              const errorMessage = error.message;
              const email = error.email;
              const credential = error.credential;
              console.warn(errorCode, errorMessage, email, credential);
          });
  },
  crearEmail(email, contrasenia) {
      firebase.auth().createUserWithEmailAndPassword(email, contrasenia)
          .then((userCredential) => {
              console.log(userCredential);
              let user = userCredential.user;
              console.log(user);
          })
          .catch((error) => {
              console.warn("Error " + error.code + ": "+ error.message);
          });
  },
  loginEmail(email, contrasenia) {
      firebase.auth().signInWithEmailAndPassword(email, contrasenia)
          .then((userCredential) => {              
              console.log(userCredential);
              let user = userCredential.user;
              console.log(user);
          })
          .catch((error) => {
              console.warn("Error " + error.code + ": "+ error.message);
          });
  },
  logout() {
      firebase.auth().signOut()
          .then(function () {
              console.log("Log out");
          })
          .catch(function (error) {
              console.log(error);
          });
  }
};

// Export types that exists in Firestore
// This is not always necessary, but it's used in other examples
const { Timestamp, GeoPoint } = firebase.firestore
export { Timestamp, GeoPoint }

// if using Firebase JS SDK < 5.8.0
db.settings({ timestampsInSnapshots: true })