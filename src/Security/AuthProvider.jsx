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
import useAxiosPublic from "../Hooks/useAxiosPublic.jsx";

export const authContext = createContext(null);
const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const auth = getAuth(app);
  const axiosPublic = useAxiosPublic();

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

      if (currentUser) {
        // setUser(currentUser);
        const userEmail = { email: currentUser.email };
        axiosPublic.post("/jwt", userEmail).then((res) => {
          console.log("response from jwt post", res.data);
          localStorage.setItem("token", res.data.result);
          setLoading(false);
        });
      } else {
        localStorage.removeItem("token");
        setLoading(false);
      }

      setLoading(false);
    });

    return () => {
      return subscriber();
    };
  }, [auth, axiosPublic]);

  const dataDistribution = { signup, loading, user, login, logout };
  return (
    <authContext.Provider value={dataDistribution}>
      {children}
    </authContext.Provider>
  );
};

export default AuthProvider;
