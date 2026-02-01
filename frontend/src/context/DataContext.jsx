import axios from "axios";
import { createContext, useState } from "react";
export const VisitorContext = createContext();
function VisitorContextProvider({ children }) {
    const [approvedVisitorsData, setapprovedVisitorsData] = useState([]);
    const [myVisitorsStatus, setMyVisitorsStatus] = useState([])
    const [empData, setEmpData] = useState([]);
    const [actionLoadingId, setActionLoadingId] = useState(null)
    const [rejectactionLoadingId, setrejectActionLoadingId] = useState(null);
    const [loading, setLoading] = useState(false)
    const [verifyPassUser, setVieryfyPassUser] = useState(null)
    const [visitHistory, setVisitHistory] = useState([]);
    const [error, setError] = useState(null)
    axios.defaults.withCredentials = true
    const backendApi = import.meta.env.VITE_BACKEND_URL;

    const fetchApprovedVisitors = async () => {
        try {
            const res = await axios.get(`${backendApi}/visit/approved-visiters`,);
            setapprovedVisitorsData(res.data.data)
        } catch (error) {
            console.log(error.response?.data?.message || "Something is wrong")
        }
    }

    const getApprovedVisitor = async (visitorId) => {

        try {
            setActionLoadingId(visitorId)
            const res = await axios.patch(`${backendApi}/visit/approve-visit-req/${visitorId}`, {},)
        } catch (error) {
            console.log(error.response?.data?.message || "Something is wrong")
        } finally {
            setLoading(false)
        }

    }
    const rejectedVisitors = async (visitorId) => {
        try {
            setrejectActionLoadingId(visitorId)
            const res = await axios.patch(`${backendApi}/visit/reject-visit-req/${visitorId}`, {},)
        } catch (error) {
            console.log(error.response?.data?.message || "Something is wrong")
        } finally {
            setrejectActionLoadingId(null)
        }

    }

    const fetchMyVisitorStatus = async () => {
        try {
            setLoading(true)
            const res = await axios.get(`${backendApi}/visit/my-visit-req`,);
            setMyVisitorsStatus(res.data.data)
        }
        catch (error) {
            console.log(error.response?.data?.message || "Something is wrong")
        }
        finally {
            setLoading(false)
        }
    }
    const getEmpData = async () => {
        try {
            setLoading(true)
            const res = await axios.get(`${backendApi}/emp/employees`,);
            setEmpData(res.data.data)
        } catch (error) {
            console.log(error.response?.data?.message || "Something is wrong")
        } finally {
            setLoading(false)
        }
    }

    const verifyPassVisitor = async (visitorId) => {
        setLoading(true)
        try {
            const visitorData = await axios.get(`${backendApi}/security/verify/${visitorId}`);
            console.log("visitorData", visitorData.data.data);
            const finalRes = visitorData.data.data
            setVieryfyPassUser(finalRes)
        } catch (error) {
            console.log(error.response?.data?.message || "Something is wrong", error)
        } finally {
            setLoading(false)
        }

    }

    const checkInVisitor = async (visitorId) => {
        try {
            const visitorData = await axios.patch(`${backendApi}/security/check-in/${visitorId}`);
            const finalRes = visitorData.data.data;
        } catch (error) {
            console.log(error.response?.data?.message || "Something is wrong", error)
        }
    }

    const checkOutVisitor = async (visitorId) => {
        try {
            const visitorData = await axios.patch(`${backendApi}/security/check-out/${visitorId}`);
            const finalRes = visitorData.data.data;
        } catch (error) {
            console.log(error.response?.data?.message || "Something is wrong")
        }
    }

    const fetchCheckInAndCheckOutVisitor = async () => {
        setLoading(true)
        try {
            const visitorData = await axios.get(`${backendApi}/security/all-visitor-status`);
            setVisitHistory(visitorData.data.data)
        } catch (error) {
            console.log(error.response?.data?.message || "Something is wrong",)
        } finally {
            setLoading(false)
        }
    }
    return <VisitorContext.Provider value={{ loading, actionLoadingId, rejectactionLoadingId, fetchApprovedVisitors, getApprovedVisitor, rejectedVisitors, fetchMyVisitorStatus, approvedVisitorsData, myVisitorsStatus, getEmpData, empData, verifyPassVisitor, verifyPassUser, checkInVisitor, checkOutVisitor, fetchCheckInAndCheckOutVisitor, visitHistory }}>
        {children}
    </VisitorContext.Provider>
}
export default VisitorContextProvider

