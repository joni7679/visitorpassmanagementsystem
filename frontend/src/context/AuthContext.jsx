import axios from "axios";
import { createContext, useEffect, useState } from "react";

export const AuthConext = createContext();
function AuthConextProvider({ children }) {
    const [Error, setError] = useState(null);
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(false)
    const [authLoader, setAuthLoader] = useState(true)
    const backendApi = import.meta.env.VITE_BACKEND_URL;
    const registerUser = async ({ name, email, password, role }) => {
        setLoading(true);
        try {
            const res = await axios.post(`${backendApi}/auth/register`, { name, email, password, role }, { withCredentials: true });
            const finalRes = res.data.data;
            return finalRes;
        } catch (error) {
            setError(error.response?.data.message || "server error")
            return null;
        } finally {
            setLoading(false);
            setTimeout(() => {
                setError(null)
            }, 2000);
        }
    };

    const LoginUser = async ({ email, password }) => {
        setLoading(true);
        try {
            const res = await axios.post(`${backendApi}/auth/login`, { email, password }, { withCredentials: true });
            const finalRes = res.data.data;
            setUser(finalRes)
            return finalRes;
        } catch (error) {
            setError(error.response?.data.message || "server error")
            return null;
        } finally {
            setTimeout(() => {
                setError(null)
            }, 2000);
            setLoading(false)
        }
    };
    const userDashboard = async () => {
        if (!user || user.role === null) return
        setLoading(true)
        try {
            const res = await axios.get(`${backendApi}/auth/${user.role}/dashboard`, { withCredentials: true })
            return res.data
        } catch (error) {
            setError(error.response?.data?.message || "Something is wrong")
            return null;
        } finally {
            setLoading(false)
        }
    }

    const userProfile = async () => {
        try {
            const res = await axios.get(`${backendApi}/auth/profile`, { withCredentials: true });
            const finalRes = res.data.data;
            setUser(finalRes);
            return finalRes
        } catch (error) {
           console.warn(error.response?.data?.message || "Something is wrong")
        } finally {
            setAuthLoader(false)
        }
    }
    const LogOutuser = async () => {
        setLoading(true);
        try {
            await axios.post(`${backendApi}/auth/logout`, {}, { withCredentials: true });
            console.log("logout successfully");
            setUser(null)
        } catch (error) {
            setError(error.response?.data?.message || "Something is wrong")
            return null;
        } finally {
            setLoading(false)
        }
    }

    useEffect(() => {
        const checkAuthStatus = async () => {
            try {
                if (user) {
                    await userProfile()
                }
            } catch (error) {
                console.log("user not founded", error)
            }
            finally {
                setAuthLoader(false)
            }
        }
        checkAuthStatus()
    }, [])

    return <AuthConext.Provider value={{ registerUser, authLoader, loading, Error, LoginUser, userProfile, user, LogOutuser, userDashboard }}>
        {children}
    </AuthConext.Provider>
}

export default AuthConextProvider