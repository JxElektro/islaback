// This is the AuthProvider component
import { createContext, useContext } from "react";
import { GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth";
import { auth } from "../firebase";
import { useNavigate } from "react-router-dom";



export const authContext = createContext();

export function useAuth() {
  return useContext(authContext);
}



export function AuthProvider({ children }) {
  const user = { login: true };
  const navigate = useNavigate();
  const loginWithGoogle = () => {
    signInWithPopup(auth, new GoogleAuthProvider()).then((result) => {
      // Si el usuario se loguea correctamente, se redirige a la página de Home
      console.log(result);
      navigate("/home");
    });
  };

  const logout = () => {
    signOut().then(() => {
      console.log("User signed out");
    });
  };

  return (
    <authContext.Provider value={{ user, loginWithGoogle, logout }}>
      {children}
    </authContext.Provider>
  );
}

// Path: islaback\src\Context\authContext.js