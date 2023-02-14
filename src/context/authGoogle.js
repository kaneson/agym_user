import React, { createContext, useEffect, useState } from "react"

import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
import { app } from '../utils/firebase'
import { useRouter } from "next/router";

const provider = new GoogleAuthProvider();

export const AuthGoogleContext = createContext({});

export const AuthGoogleProvider = ({ children }) => {
  const auth = getAuth(app);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const loadStorageAuth = () => {
      const sessionToken = 
        sessionStorage.getItem('@AuthFirebase:token');
      
      const sessionUser = 
        sessionStorage.getItem('@AuthFirebase:user');

      if(sessionToken && sessionUser) {
        setUser(sessionUser);
      }
    };

    loadStorageAuth();
  },[]);

  const router = useRouter();
  
  const signInGoogle = () => {
    signInWithPopup(auth, provider)
      .then(( result ) => {
        const credential = GoogleAuthProvider.credentialFromResult(result)
        
        const token = credential.accessToken
        const user = result.user
  
        setUser(user);
        sessionStorage.setItem('@AuthFirebase:token', token);
        sessionStorage.setItem('@AuthFirebase:user', JSON.stringify(user));
      
        router.push("/");
      }).catch(( error ) => {
        const errorCode = error.code
        const errorMessage = error.message
      
        const email = error.email
        const credential = GoogleAuthProvider.credentialFromError(error)
      }
    );
  }

  const singoutGoogle = () => {
    sessionStorage.clear();
    setUser(null);

    return (
      router.push("/")
    )
  }

  return (
    <AuthGoogleContext.Provider
      value={{ signInGoogle, singoutGoogle, signed: !!user, user }}
    >
      { children }
    </AuthGoogleContext.Provider>
  )
}