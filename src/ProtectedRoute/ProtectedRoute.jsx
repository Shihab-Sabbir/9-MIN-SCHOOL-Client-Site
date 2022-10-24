import { Spinner } from 'flowbite-react';
import React, { useContext } from 'react'
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../UserContext/UserContext';

function ProtectedRoute({ children }) {
    const { user, loading, setLoading } = useContext(AuthContext);
    const location = useLocation();
    if (loading) {
        setTimeout(() => {
            setLoading(false)
        }, 1500);
        return (
            <>
                <div className="text-center pt-[15%] min-h-screen">
                    <Spinner aria-label="Center-aligned spinner example" />
                </div>
            </>
        )
    }
    if (user?.uid) {
        return children;
    }
    else {
        return <Navigate to='/login' state={{ from: location }} replace />
    }
}

export default ProtectedRoute;