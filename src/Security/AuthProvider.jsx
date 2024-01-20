/* eslint-disable react/prop-types */
import { createContext, useEffect, useState } from "react";
import {
  getAuth,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { app } from "../Security/firebase.config.js";

export const authContext = createContext(null);
const AuthProvider = ({ children }) => {
  const [user, setUser] = useState([]);
  const [loading, setLoading] = useState(true);
  const auth = getAuth(app);

  const signup = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const login = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  const logout = () => {
    setLoading(true);
    return signOut(auth);
  };

  useEffect(() => {
    const subscriber = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      console.log(currentUser);
    });

    return () => {
      return subscriber();
    };
  }, []);

  const dataDistribution = { signup, loading, user, login, logout };
  return (
    <authContext.Provider value={dataDistribution}>
      {children}
    </authContext.Provider>
  );
};

export default AuthProvider;
