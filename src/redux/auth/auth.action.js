import { getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth'
import { app } from '../../utils/firebase'

import 'firebase/auth'

const provider = new GoogleAuthProvider();

export const login = () => async dispatch => {
  const auth = getAuth(app);

  signInWithPopup(auth, provider)
    .then(( result ) => {
      const credential = GoogleAuthProvider.credentialFromResult(result)
      
      const token = credential.accessToken
      const user = result.user

      console.log(user,'user info');
    }).catch(( error ) => {
      const errorCode = error.code
      const errorMessage = error.message
    
      const email = error.email
      const credential = GoogleAuthProvider.credentialFromError(error)
    });
}