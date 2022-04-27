import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyC8NhXOFziOIqq8riI5UjKGGhRRJI88-pA",
  authDomain: "voluteer-service.firebaseapp.com",
  projectId: "voluteer-service",
  storageBucket: "voluteer-service.appspot.com",
  messagingSenderId: "400276821551",
  appId: "1:400276821551:web:7dd56941701746f328d8da"
};


const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;