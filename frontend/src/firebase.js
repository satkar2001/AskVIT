
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDArVa0UjpW7PqmrsMWcjsS82QvezLCmg4",
  authDomain: "quora-clone-mern.firebaseapp.com",
  projectId: "quora-clone-mern",
  storageBucket: "quora-clone-mern.appspot.com",
  messagingSenderId: "182383235813",
  appId: "1:182383235813:web:fd9e0c34fcc0a4f07c7a0c",
  measurementId: "G-62KKTN74PZ",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth();
const provider = new GoogleAuthProvider();

export { auth, provider };
