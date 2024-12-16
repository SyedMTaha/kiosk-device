import React, { createContext, useContext, useState, useEffect } from 'react';
import { auth } from '../lib/firebase'; // Import Firebase auth
import { doc, getDoc } from 'firebase/firestore';
import db from '../lib/firebase'; // Import Firestore

// Create User Context
const UserContext = createContext();

// User Context Provider
export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true); // Track loading state

  useEffect(() => {
    // Listen for authentication state changes
    const unsubscribe = auth.onAuthStateChanged(async (firebaseUser) => {
      if (firebaseUser) {
        // Fetch user details from Firestore
        const userDocRef = doc(db, 'users', firebaseUser.email);
        const userDocSnap = await getDoc(userDocRef);

        if (userDocSnap.exists()) {
          setUser({
            email: firebaseUser.email,
            ...userDocSnap.data(),
          });
        } else {
          console.error('No user data found in Firestore.');
          setUser(null);
        }
      } else {
        // No user is signed in
        setUser(null);
      }
      setLoading(false); // Loading complete
    });

    // Cleanup the listener on component unmount
    return () => unsubscribe();
  }, []);

  return (
    <UserContext.Provider value={{ user, setUser, loading }}>
      {!loading && children}
    </UserContext.Provider>
  );
};

// Custom hook to use the User Context
export const useUser = () => {
  return useContext(UserContext);
};
