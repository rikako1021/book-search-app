import firebase from 'firebase/app'
import 'firebase/firestore'

if (!firebase.apps.length) {
  firebase.initializeApp({
    apiKey: 'AIzaSyCsmEi-cJ2At4W6u526b0r7XIWgbgqQWp0',
    authDomain: 'book-search-app-1781a.firebaseapp.com',
    databaseURL: 'https://book-search-app-1781a.firebaseio.com',
    projectId: 'book-search-app-1781a',
    storageBucket: 'book-search-app-1781a.appspot.com',
    messagingSenderId: '138696867071',
    appId: '1:138696867071:web:c1650b0f4e41a51cf620ca',
    measurementId: 'G-8W4EKHY727',
  })
}

export default firebase
