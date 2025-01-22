// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getDatabase, ref } from "firebase/database";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA-cTYXHcTXPBCr8uN5JNRTYV5PX5GTbG0",
  authDomain: "booksmdk-8d30c.firebaseapp.com",
  projectId: "booksmdk-8d30c",
  storageBucket: "booksmdk-8d30c.firebasestorage.app",
  messagingSenderId: "950228006238",
  appId: "1:950228006238:web:52104d67b1f2b17fcecbcf",
  measurementId: "G-4F4B7G9NVL"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app); // Now this will work
const analytics = getAnalytics(app);
const provider = new GoogleAuthProvider();
const database = getDatabase(app);
const requestsRef = ref(database, 'заявки');

export { app, auth, provider };
export {database};
export { requestsRef };
