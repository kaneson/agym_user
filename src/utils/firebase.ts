import { initializeApp } from "firebase/app"
import { getAuth } from 'firebase/auth'

import 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyC033BU8lfGqQAwDDBf1htuFZhNSzY4_Ls",
  authDomain: "agym-76ef5.firebaseapp.com",
  projectId: "agym-76ef5",
  storageBucket: "agym-76ef5.appspot.com",
  messagingSenderId: "439071044168",
  appId: "1:439071044168:web:504f3c8d2382dbe4c05e7d"
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);