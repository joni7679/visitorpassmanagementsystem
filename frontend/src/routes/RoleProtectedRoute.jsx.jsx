import { useContext } from "react"
import { AuthConext } from "../context/AutContext"
import { useEffect } from "react";
import { Navigate, Outlet } from "react-router-dom";

const RoleProtectedRoute = ({ allowRole, children }) => {
    const { userProfile, user } = useContext(AuthConext);

    useEffect(() => {
        userProfile()

    }, [user])

    if (!user) {
        return <Navigate to="/" replace />
    }
    
}

export default RoleProtectedRoute