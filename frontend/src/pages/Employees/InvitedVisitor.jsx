import React from 'react'
import InputFiled from '../../components/InputField'
import { Clock, Users } from 'lucide-react'
import { useState } from 'react'
import useAuthhook from '../../hooks/useAuthHook'
import { toast } from 'react-toastify'
import axios from 'axios'
import { useEffect } from 'react'
import VisitorTable from './VisitorTable'

const InvitedVisitor = () => {
    const [visitorId, setVisitorId] = useState(null);
    const [visitordata, setvisitorData] = useState([])
    const [phone, setPhoneNumber] = useState("");
    const [date, setDate] = useState("")
    const [purpose, setPurpose] = useState("")
    const [loading, setLoading] = useState(false)
    const [time, setTime] = useState("")
    const backendApi = import.meta.env.VITE_BACKEND_URL;
    const { user } = useAuthhook();
    const getVisitor = async () => {
        try {
            const res = await axios.get(`${backendApi}/auth/get-visitor`);
            console.log("res", res)
            setvisitorData(res.data.data)
        } catch (error) {
            console.error("server error", error)
        }
    }

    useEffect(() => {
        getVisitor()
    }, [])

    const handleInViteVisitor = async (e) => {
        e.preventDefault();
        const visiterData = {
            name: user.name,
            email: user.email,
            phone: phoneNumber,
            userid: user._id,
            employeeid: user._id,
            date,
            time,
            purpose,
        }

        setLoading(true)
        try {
            const visiter = await axios.post(`${backendApi}/visit/create-visit-req`, visitorData, { withCredentials: true })
            toast.success("visit requested send successfully")
            setPhoneNumber("");
            setEmpid("");
            setDate("");
            setTime("");
            setPurpose("");
            // setImage(null)
            // setLoading(false)
        } catch (error) {
            const msg = error?.response.data?.message
            setError(msg);
            toast.error(msg)
        } finally {
            setLoading(false)
        }
    }

    return (
        <>
            <VisitorTable />

        </>
    )
}

export default InvitedVisitor
