// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCRW3qxbnnMdvqxCWXfwjBE75vtCmzEYnU",
  authDomain: "nuxt-spa-book-app-58bb5.firebaseapp.com",
  projectId: "nuxt-spa-book-app-58bb5",
  storageBucket: "nuxt-spa-book-app-58bb5.firebasestorage.app",
  messagingSenderId: "296362943639",
  appId: "1:296362943639:web:39522402dbfc18a03035d2"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

export default ( context, inject ) => {
  inject('firebase', firebaseApp)
}