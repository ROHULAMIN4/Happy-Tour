import React, { useState, useEffect } from "react";
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";
import intialAuthentication from "./Fireabase.init";
intialAuthentication();
const UseFirebase = () => {
  const [user, setUser] = useState({});

  const auth = getAuth();
  const provider = new GoogleAuthProvider();
  const singInUsingGoogle = () => {
    signInWithPopup(auth, provider).then((result) => {
      const user = result.user;
      setUser(user);
    });
  };
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        setUser({});
      }
    });
    return () => unsubscribe;
  }, []);
  const logOut = () => {
    signOut(auth).then(() => {
      setUser();
    });
  };

  return {
    singInUsingGoogle,
    user,
    setUser,
    logOut,
  };
};

export default UseFirebase;
