import { initializeApp } from "firebase/app";
import {
  getAuth,
  GoogleAuthProvider,
  FacebookAuthProvider,
  TwitterAuthProvider,
} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDqZiVTaiSr9ds1eIzSsWNLMVJs054LTRA",
  authDomain: "travelapp-af7b8.firebaseapp.com",
  projectId: "travelapp-af7b8",
  storageBucket: "travelapp-af7b8.appspot.com",
  messagingSenderId: "498804842836",
  appId: "1:498804842836:web:b38de882631e3dae1fe8c1",
  measurementId: "G-JDCSKMP1XS",
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();
const facebookProvider = new FacebookAuthProvider();
const twitterProvider = new TwitterAuthProvider();

export { auth, googleProvider, facebookProvider, twitterProvider };
