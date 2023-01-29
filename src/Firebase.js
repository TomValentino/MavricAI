import firebase from 'firebase/compat/app'
import 'firebase/compat/auth'
import "firebase/compat/firestore"




const app = firebase.initializeApp({

  apiKey: "AIzaSyBkyH-p7OwugZ_hzFaygLdRUpn8EzqlNdA",
  authDomain: "ugro-test.firebaseapp.com",
  projectId: "ugro-test",
  storageBucket: "ugro-test.appspot.com",
  messagingSenderId: "845363588926",
  appId: "1:845363588926:web:4995928642518072d7466f"


})

export const firestore = app.firestore()






export const database = {
    folders: firestore.collection('saved-dash-text'),
    getCurrentTimestamp: firebase.firestore.FieldValue.serverTimestamp
}


export const addNew = {
    folders: firestore.collection(localStorage.getItem('user') + ' - test'),
    getCurrentTimestamp: firebase.firestore.FieldValue.serverTimestamp
}







export const auth = app.auth()
export default app