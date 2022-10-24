import React, { createContext, useEffect, useState } from 'react'
import { getAuth, onAuthStateChanged } from "firebase/auth";
import app from '../firebase/firebase.config';
export const AuthContext = createContext();
function UserContext({ children }) {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const [isOnline, setIsOnline] = useState(navigator.onLine);
    const [price, setPrice] = useState(0)
    const auth = getAuth(app);
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            if (currentUser) {
                setUser(currentUser);
                setLoading(false);
            }
        });
        const handleStatusChange = () => {
            setIsOnline(navigator.onLine);
        };
        return () => {
            unsubscribe();
            handleStatusChange();
        }
    }, [])

    return (
        <AuthContext.Provider value={{ user, setUser, loading, setLoading, isOnline, setPrice, price }}>
            {children}
        </AuthContext.Provider>
    )
}

export default UserContext;