import React, { createContext, useState, useEffect, useContext } from 'react';
import { auth, googleProvider, phoneAuth, emailSignIn, emailSignUp } from '../util/firebase';
import { signInWithPopup, PhoneAuthProvider, signInWithCredential } from 'firebase/auth';
import { toast } from 'react-toastify';

export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((firebaseUser) => {
      setUser(firebaseUser);
    });
    return unsubscribe;
  }, []);

  const loginWithEmail = (email, password) =>
    emailSignIn(auth, email, password);

  const loginWithPhone = async (phoneNumberOrVerificationId, appVerifierOrCode) => {
    if (appVerifierOrCode instanceof PhoneAuthProvider.RecaptchaVerifier) {
      // First step: Send verification code
      return phoneAuth(auth, phoneNumberOrVerificationId, appVerifierOrCode);
    } else {
      // Second step: Sign in with verification code
      const credential = PhoneAuthProvider.credential(phoneNumberOrVerificationId, appVerifierOrCode);
      return signInWithCredential(auth, credential);
    }
  };

  const loginWithGoogle = () =>
    signInWithPopup(auth, googleProvider);

  const registerWithEmail = (email, password) =>
    emailSignUp(auth, email, password);

  const logout = () => auth.signOut();

  return (
    <AuthContext.Provider value={{
      user, loginWithEmail, loginWithPhone, loginWithGoogle, registerWithEmail, logout
    }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuthContext = () => useContext(AuthContext);