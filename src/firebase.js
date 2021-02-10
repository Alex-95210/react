import firebase from "firebase/app"
import "firebase/auth"

const app = firebase.initializeApp({
    apiKey: "AIzaSyDKwQSnoljUCbmja9uagV8dvSyT3OuR_T8",
    authDomain: "rent-car-9c9ca.firebaseapp.com",
    projectId: "rent-car-9c9ca",
    storageBucket: "rent-car-9c9ca.appspot.com",
    messagingSenderId: "382853595719",
    appId: "1:382853595719:web:aa0c09afa0818042e8a762",
    measurementId: "G-KXX8ZR3R85"
})

export const auth = app.auth()
export default app