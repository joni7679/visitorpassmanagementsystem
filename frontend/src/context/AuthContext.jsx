import axios from "axios";
import { createContext, useEffect, useState } from "react";

export const AuthConext = createContext();
function AuthConextProvider({ children }) {
    const [loading, setLoading] = useState(false);
    const [Error, setError] = useState(null);
    const [user, setUser] = useState(null);
    const backendApi = import.meta.env.VITE_BACKEND_URL;
    const registerUser = async ({ name, email, password, role }) => {
        setLoading(true);
        try {
            const res = await axios.post(`${backendApi}/register`, { name, email, password, role }, { withCredentials: true });
            const finalRes = res.data.data;
            return finalRes;
        } catch (error) {
            console.log("error", error.response?.data || error.message);
            setError(error.response?.data || error.message)
            return null;
        } finally {
            setLoading(false);
        }
    };

    const LoginUser = async ({ email, password }) => {
        setLoading(true);
        try {
            const res = await axios.post(`${backendApi}/login`, { email, password }, { withCredentials: true });
            console.log("res", res.data.data);
            const finalRes = res.data.data;
            setUser(finalRes)
            return finalRes;
        } catch (error) {
            console.log("error", error.response?.data || error.message);
            setError(error.response?.data || error.message)
            return null;
        } finally {
            setLoading(false);
        }
    };


    const userDashboard = async () => {
        try {
            await axios.get(`${backendApi}`)

        } catch (error) {
            console.log("error", error.response?.data || error.message);
            setError(error.response?.data || error.message)
            return null;
        }
    }


    const userProfile = async () => {
        try {
            const res = await axios.get(`${backendApi}/profile`, { withCredentials: true });
            const finalRes = res.data.data;
            setUser(finalRes);
            return finalRes
        } catch (error) {
            console.log("error", error.response?.data || error.message);
            setError(error.response?.data || error.message)
            return null;
        }
    }
    const LogOutuser = async () => {
        try {
            await axios.post(`${backendApi}/logout`, {}, { withCredentials: true });
            console.log("logout successfully");
            setUser(null)
        } catch (error) {
            console.log("error", error.response?.data || error.message);
            setError(error.response?.data || error.message)
            return null;
        }
    }


    useEffect(() => {
        userProfile()
    }, [])




    return <AuthConext.Provider value={{ registerUser, loading, Error, LoginUser, userProfile, user, LogOutuser, userDashboard }}>
        {children}
    </AuthConext.Provider>
}

export default AuthConextProvider