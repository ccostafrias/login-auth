import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyAcT60S4SafZ9EQAFlkGQX7AVBZn3sNmaQ",
  authDomain: "react-auth-eabfd.firebaseapp.com",
  projectId: "react-auth-eabfd",
  storageBucket: "react-auth-eabfd.appspot.com",
  messagingSenderId: "761237915660",
  appId: "1:761237915660:web:1cd050e0d4999beff84629"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)