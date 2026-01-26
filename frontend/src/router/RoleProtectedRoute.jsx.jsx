import { useContext } from "react"
import { AuthConext } from "../context/AuthContext"
import { useEffect } from "react";
import { Navigate, Outlet } from "react-router-dom";
import Loader from "../components/Loader";

const RoleProtectedRoute = ({ allowRole, children }) => {
    const { userProfile, authLoader, user } = useContext(AuthConext);
    useEffect(() => {
        userProfile()
    }, [])

    if (authLoader) {
        return <h1>Loader...</h1>
    }
    if (!user) {
        return <Navigate to="/" replace />
    }
    if (allowRole && user.role !== allowRole) {
        return <Navigate to="/" replace />
    }
    return children
}

export default RoleProtectedRoute