import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { getAuth } from 'firebase/auth'
const firebaseConfig = {
  apiKey: 'AIzaSyBC6vElQRfGkV6phd2gahFcuFMa-CatAo0',
  authDomain: 'twitter-4c6c8.firebaseapp.com',
  projectId: 'twitter-4c6c8',
  storageBucket: 'twitter-4c6c8.appspot.com',
  messagingSenderId: '650681502990',
  appId: '1:650681502990:web:7e97d21b74c57fd7361b5f',
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
const db = getFirestore()
export const auth = getAuth()
export default db
//imp file
