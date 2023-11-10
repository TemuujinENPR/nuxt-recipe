import * as firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyBREem7BG7oWM9ym91wu7ISFE2kv_5cxjE",
  authDomain: "nuxt-recipe-auth.firebaseapp.com",
  projectId: "nuxt-recipe-auth",
  storageBucket: "nuxt-recipe-auth.appspot.com",
  messagingSenderId: "9536048904",
  appId: "1:9536048904:web:89445cee223923936ca6bd"
}

let app = null
if (!firebase.apps.length) {
  app = firebase.initializeApp(firebaseConfig);
}

export default firebase