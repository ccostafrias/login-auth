import { createContext, useEffect, useState } from "react";
import { useAuthState } from 'react-firebase-hooks/auth';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { auth } from "../services/firebaseConfig"

export const AuthContext = createContext({})

export function AuthProvider({ children }) {
    const [
      user,
      loading,
      error
    ] = useAuthState(auth);

    if (loading) {
      return (
        <h1>Loading...</h1>
      )
    }

    return (
        <AuthContext.Provider
          value={{ 
            user, 
            signed: !!user,
          }}
        >
          {children}
        </AuthContext.Provider>
    );
}