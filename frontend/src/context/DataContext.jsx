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


    const backendApi = import.meta.env.VITE_BACKEND_URL;
    const fetchApprovedVisitors = async () => {
        try {
            const res = await axios.get(`${backendApi}/visit/approved-visiters`, { withCredentials: true });
            setapprovedVisitorsData(res.data.data)
        } catch (error) {
            console.log(error.response?.data?.message || "Something is wrong", error)
        }
    }

    const getApprovedVisitor = async (visitorId) => {

        try {

            setActionLoadingId(visitorId)
            const res = await axios.patch(`${backendApi}/visit/approve-visit-req/${visitorId}`, {}, { withCredentials: true })
        } catch (error) {
            console.log(error.response?.data?.message || "Something is wrong", error)
        } finally {
            setLoading(false)

        }

    }
    const rejectedVisitors = async (visitorId) => {
        try {

            setrejectActionLoadingId(visitorId)
            const res = await axios.patch(`${backendApi}/visit/reject-visit-req/${visitorId}`, {}, { withCredentials: true })
        } catch (error) {
            console.log(error.response?.data?.message || "Something is wrong", error)
        } finally {

            setrejectActionLoadingId(null)
        }
    }

    const fetchMyVisitorStatus = async () => {
        try {
            setLoading(true)
            const res = await axios.get(`${backendApi}/visit/my-visit-req`, { withCredentials: true });
            // console.log(res.data.data)
            setMyVisitorsStatus(res.data.data)
        }
        catch (error) {
            console.log(error.response?.data?.message || "Something is wrong", error)
        }
        finally {
            setLoading(false)
        }
    }
    const getEmpData = async () => {
        try {
            setLoading(true)
            const res = await axios.get(`${backendApi}/emp/employees`, { withCredentials: true });
            setEmpData(res.data.data)
        } catch (error) {
            console.log(error.response?.data?.message || "Something is wrong", error)
        } finally {
            setLoading(false)
        }
    }
    return <VisitorContext.Provider value={{ loading, actionLoadingId, rejectactionLoadingId, fetchApprovedVisitors, getApprovedVisitor, rejectedVisitors, fetchMyVisitorStatus, approvedVisitorsData, myVisitorsStatus, getEmpData, empData }}>
        {children}
    </VisitorContext.Provider>
}
export default VisitorContextProvider

