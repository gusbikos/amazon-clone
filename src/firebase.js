// connecting firebase backend to my react project
import firebase from "firebase"

    const firebaseConfig = {
        apiKey: "AIzaSyAcIbqP22DDJLiYQ7aMVEgXmxWZRUEKxvs",
        authDomain: "clone-a8e93.firebaseapp.com",
        projectId: "clone-a8e93",
        storageBucket: "clone-a8e93.appspot.com",
        messagingSenderId: "808592992669",
        appId: "1:808592992669:web:6bf32eed24e067e2346774",
        measurementId: "G-LN3SM0H6GM",
    }

    const firebaseApp = firebase.initializeApp(firebaseConfig)

    const db = firebaseApp.firestore()
    const auth = firebase.auth()

export { db, auth }

