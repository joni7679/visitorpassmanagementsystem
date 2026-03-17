import axios from "axios";
import { createContext, useEffect, useState } from "react";
axios.defaults.withCredentials = true

export const AuthConext = createContext();
function AuthConextProvider({ children }) {
    const [Error, setError] = useState(null);
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(false)
    const [authLoader, setAuthLoader] = useState(true)
    const [userByRole, setUserByRole] = useState([])
    const [vistercountStatus, setVisitorCountStatus] = useState(null)
    const [editUserData, setEditUserData] = useState(null)
    const backendApi = import.meta.env.VITE_BACKEND_URL;
    const registerUser = async ({ name, email, password, role }) => {
        setLoading(true);
        try {
            const res = await axios.post(`${backendApi}/auth/register`, { name, email, password, role });
            const finalRes = res.data;
            console.log("res", finalRes)
            return finalRes;
        } catch (error) {
            setError(error.response?.data.message)
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
            const res = await axios.post(`${backendApi}/auth/login`, { email, password });
            const finalRes = res.data;
            console.log("res", finalRes)
            setUser(finalRes)
            return finalRes;
        } catch (error) {
            setError(error.response?.data.message)
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
            const res = await axios.get(`${backendApi}/auth/profile`);
            const finalRes = res.data;
            setUser(finalRes);
            return finalRes
        } catch (error) {
            console.warn(error.response?.data?.message)
        } finally {
            setAuthLoader(false)
        }
    }
    const LogOutuser = async () => {
        setLoading(true);
        try {
            await axios.post(`${backendApi}/auth/logout`, {},);
            console.log("logout successfully");
            setUser(null)
        } catch (error) {
            setError(error.response?.data?.message)
            return null;
        } finally {
            setLoading(false)
        }
    }

    const fetchAllUserByRole = async () => {
        try {
            setLoading(true)
            const user = await axios.get(`${backendApi}/auth/getuserbyrole`)
            const finalRes = user.data.data;
            setUserByRole(finalRes)
            console.log("user", finalRes)
        } catch (error) {
            setError(error.response?.data?.message)
            return null
        } finally {
            setLoading(false)
        }
    }

    const getVisitorCountStatus = async () => {
        try {
            setLoading(true)
            const user = await axios.get(`${backendApi}/visitor/report`)
            const finalRes = user.data;
            setVisitorCountStatus(finalRes)
            console.log("user", finalRes)
        } catch (error) {
            setError(error.response?.data?.message)
            return null
        } finally {
            setLoading(false)
        }
    }

    const getFetchSingleByIdUser = async (id) => {
        try {
            setLoading(true)
            const user = await axios.get(`${backendApi}/auth/user/${id}`)
            const finalRes = user.data.data;
            setEditUserData(finalRes)
        } catch (error) {
            setError(error.response?.data?.message)
            return null
        } finally {
            setLoading(false)
        }
    }

    const updateUser = async (id, updateuser) => {
        try {
            setLoading(true)
            const user = await axios.put(`${backendApi}/auth/user/${id}`, updateuser)
            const finalRes = user.data;
            console.log("finalres", finalRes);
            setEditUserData(finalRes)
            return finalRes
        } catch (error) {
            setError(error.response?.data?.message)
            return null
        } finally {
            setLoading(false)
        }
    }

    const handleDeleteUser = async (id) => {
        try {
            setLoading(true)
            const user = await axios.delete(`${backendApi}/auth/delete-user/${id}`);
            console.log("user", user)
        } catch (error) {
            setError(error.response?.data?.message)
            return null
        }
        finally {
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


    return <AuthConext.Provider value={{ registerUser, authLoader, loading, Error, LoginUser, userProfile, user, LogOutuser, userDashboard, fetchAllUserByRole, userByRole, getVisitorCountStatus, vistercountStatus, handleDeleteUser, getFetchSingleByIdUser, editUserData, updateUser }}>
        {children}
    </AuthConext.Provider>
}

export default AuthConextProvider