import firebase from 'firebase'
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
    apiKey: "AIzaSyDGxeDgRCXqkRUowKoUNCA1RcZsI-kDZJI",
    authDomain: "quiz-app-daed8.firebaseapp.com",
    projectId: "quiz-app-daed8",
    storageBucket: "quiz-app-daed8.appspot.com",
    messagingSenderId: "203959620966",
    appId: "1:203959620966:web:cc0618ceb47cf2f16764a7",
    measurementId: "G-VL1LKHHFNP"
  };


const app = initializeApp(firebaseConfig);
const db = firebase.firestore()
const auth = firebase.auth()
const provider = new firebase.auth.GoogleAuthProvider()
const storage = firebase.storage()


const analytics = getAnalytics(app);

export {auth,provider,storage}
export default db