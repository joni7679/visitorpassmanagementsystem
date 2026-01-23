import axios from "axios";
import { createContext, useState } from "react";
export const VisitorContext = createContext();
function VisitorContextProvider({ children }) {
    const [approvedVisitorsData, setapprovedVisitorsData] = useState([]);
    const [myVisitorsStatus, setMyVisitorsStatus] = useState([])
    const backendApi = import.meta.env.VITE_BACKEND_URL;
    const fetchApprovedVisitors = async () => {
        try {
            const res = await axios.get(`${backendApi}/visit/approved-visiters`, { withCredentials: true });
            setapprovedVisitorsData(res.data.data)
        } catch (error) {
            console.log("error", error)
        }
    }

    const getApprovedVisitor = async (visitorId) => {
        try {
            const res = await axios.patch(`${backendApi}/visit/approve-visit-req/${visitorId}`, {}, { withCredentials: true })
        } catch (error) {
            console.log("error", error)
        }
    }
    const rejectedVisitors = async (visitorId) => {
        try {
            const res = await axios.patch(`${backendApi}/visit/reject-visit-req/${visitorId}`, {}, { withCredentials: true })
        } catch (error) {
            console.log("error", error)
        }
    }

    const fetchMyVisitorStatus = async () => {
        try {
            const res = await axios.get(`${backendApi}/visit/my-visit-req`, { withCredentials: true });
            setMyVisitorsStatus(res.data.data)
        }
        catch (error) {
            console.log("error", error)
        }
    }
     
    return <VisitorContext.Provider value={{ fetchApprovedVisitors, getApprovedVisitor, rejectedVisitors, fetchMyVisitorStatus, approvedVisitorsData, myVisitorsStatus }}>
        {children}
    </VisitorContext.Provider>
}
export default VisitorContextProvider

