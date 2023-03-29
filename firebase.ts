import { getApp, getApps, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD-T0B0tvKCl8XDv6mPMGFIGCPEfTo9HVA",
  authDomain: "chatgpt-messenger-yt-a89c2.firebaseapp.com",
  projectId: "chatgpt-messenger-yt-a89c2",
  storageBucket: "chatgpt-messenger-yt-a89c2.appspot.com",
  messagingSenderId: "251966706777",
  appId: "1:251966706777:web:9b5d4513ad59f16791cd48",
};

// Initialize Firebase
const app = getApps().length ? getApp() : initializeApp(firebaseConfig);
const db = getFirestore(app);
export { db };
