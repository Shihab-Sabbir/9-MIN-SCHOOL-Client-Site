import React, { createContext, useEffect, useState } from 'react'
import { getAuth, onAuthStateChanged } from "firebase/auth";
import app from '../firebase/firebase.config';
export const AuthContext = createContext();
function UserContext({ children }) {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const [isOnline, setIsOnline] = useState(navigator.onLine);
    const [dark, setDark] = useState(false);
    const [product, setProduct] = useState({})
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
        <AuthContext.Provider value={{ user, setUser, loading, setLoading, isOnline, product, setProduct, dark, setDark }}>
            {children}
        </AuthContext.Provider>
    )
}

export default UserContext;