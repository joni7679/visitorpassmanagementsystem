import axios from 'axios';
import React, { useContext } from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import { VisitorContext } from '../../context/DataContext';
import { ToastContainer, toast } from 'react-toastify';
import ShimmEffectTable from '../../components/ShimmEffectTable';
import { useNavigate } from 'react-router-dom';
import { CSVLink } from 'react-csv';
import { formatDate } from '../../data/formatDate';
import { Calendar, ChartLine, Search, Timer, Trash, User, Wand } from 'lucide-react';

const VisiterRequestedTable = () => {
    const navigate = useNavigate()
    const [visitData, setVisiterData] = useState([])
    const backendApi = import.meta.env.VITE_BACKEND_URL;
    const [loading, setLoading] = useState(false)

    const fetchVisiterReqData = async () => {
        try {
            setLoading(true)
            const res = await axios.get(`${backendApi}/visit/get-all-visit-req`, { withCredentials: true });
            const finalres = res.data.data;
            setVisiterData(finalres)
        } catch (error) {
            console.log("error", error);
        } finally {
            setLoading(false)
        }
    }

    useEffect(() => {
        fetchVisiterReqData()
    }, [])

    const { actionLoadingId, rejectactionLoadingId, getApprovedVisitor, rejectedVisitors } = useContext(VisitorContext)
    if (loading) {
        return <ShimmEffectTable />
    }
    // handelapproved 
    const handelapproved = async (id) => {
        await getApprovedVisitor(id);
        toast.success("You Approved this visiters")
        fetchVisiterReqData()
    }
    const handelRejectedVisitor = async (id) => {
        await rejectedVisitors(id);
        toast.success("You rejected this visiters")
        fetchVisiterReqData()
    }

    const statusColor = {
        pending: "text-yellow-500 bg-yellow-200",
        approved: "text-green-500 bg-green-200",
        rejected: "text-red-500 bg-red-200",
    }
    const csvData = visitData.map((visiter, index) => ({
        SL: index + 1,
        Name: visiter.name,
        Date: formatDate(visiter.date),
        Email: visiter.email,
        Location: visiter.location,
        Phone: visiter.phone,
        Purpose: visiter.purpose,
        Status: visiter.status,
        Time: visiter.time
    }))
    return (
        <>
            <div className='w-full'>
                <div class="overflow-x-auto">
                    <div className="flex gap-4 flex-wrap justify-between items-center mb-4">
                        <div className="flex items-center px-4 py-2 rounded-md bg-white border border-gray-300 overflow-hidden max-w-xs w-full">
                            <Search />
                            <input type="email" placeholder="Search visiter name here..." className="w-full outline-none bg-transparent text-slate-600 text-sm" />
                        </div>
                        <div className='mt-5'>
                            <CSVLink
                                className="text-slate-900 font-medium flex items-center px-4 py-2 rounded-md bg-white hover:bg-gray-50 border border-gray-300 overflow-hidden cursor-pointer"
                                data={csvData}
                                filename={"approvedenployeedata.csv"}
                                target="_blank"
                            >Export</CSVLink>
                        </div>
                    </div>
                    <table class="min-w-full bg-white">
                        <thead class="bg-gray-50 whitespace-nowrap">
                            <tr>

                                <th class="px-4 py-3 text-left text-sm font-medium text-slate-600">
                                    <div class="flex items-center gap-1.5">
                                        <User />
                                        Full Name
                                    </div>
                                </th>
                                <th class="px-4 py-3 text-left text-sm font-medium text-slate-600">
                                    <div class="flex items-center gap-1.5">
                                        <Calendar />
                                        Date
                                    </div>
                                </th>
                                <th class="px-4 py-3 text-left text-sm font-medium text-slate-600">
                                    <div class="flex items-center gap-1.5">
                                        <Timer />
                                        Time & Purpose
                                    </div>
                                </th>
                                <th class="px-4 py-3 text-left text-sm font-medium text-slate-600">
                                    <div class="flex items-center gap-1.5">
                                        <ChartLine />
                                        Status
                                    </div>
                                </th>
                                <th class="px-4 py-3 text-left text-sm font-medium text-slate-600">
                                    <div class="flex items-center gap-1.5">
                                        <Wand />
                                        Action
                                    </div>
                                </th>
                            </tr>
                        </thead>

                        <tbody class="whitespace-nowrap divide-y divide-gray-200">

                            {
                                visitData.length === 0 ?
                                    <tr>
                                        <td class="px-4 py-3 text-sm text-slate-900 font-medium">
                                            <div class="flex items-center cursor-pointer w-max">
                                                <p>
                                                    not data here
                                                </p>
                                            </div>
                                        </td>
                                    </tr>
                                    : visitData.map((user, index) => {
                                        const { _id, date, email, location, name, phone, image, purpose, status, time } = user
                                        return (
                                            <tr key={index}>

                                                <td class="px-4 py-3 text-sm text-slate-900 font-medium">
                                                    <div class="flex items-center cursor-pointer w-max">
                                                        <img src={image} alt="team-1" class="w-16 h-16 rounded-full shrink-0" />
                                                        <div class="ml-2 capitalize">
                                                            <p>{name}</p>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td class="px-4 py-3 text-sm text-slate-600 font-medium">
                                                    {new Date(date).toLocaleDateString("en-IN", {
                                                        day: "2-digit",
                                                        month: "long",
                                                        year: "numeric"
                                                    })}
                                                </td>
                                                <td class="px-4 py-3 text-sm text-slate-600 font-medium capitalize">
                                                    <div className="ml-2">
                                                        <p className="text-[13px] text-slate-900 font-medium">{time}</p>
                                                    </div>
                                                    <div className="ml-2">
                                                        <p className="text-[13px] text-slate-900 font-medium">{purpose}</p>
                                                    </div>
                                                </td>
                                                <td class="px-4 py-3 text-sm text-slate-600 font-medium">

                                                    <div className="ml-2">
                                                        <span className={`px-2 py-1 capitalize text-green-700  bg-green-100  rounded-md ${statusColor[status]}`}>{status}</span>

                                                    </div>
                                                </td>
                                                <td class="flex gap-3 px-4 py-3 text-sm font-medium">
                                                    <StatusSmsRender status={status} _id={_id} actionLoadingId={actionLoadingId} rejectactionLoadingId={rejectactionLoadingId} handelRejectedVisitor={handelRejectedVisitor}
                                                        handelapproved={handelapproved}
                                                    />
                                                </td>
                                            </tr>
                                        )
                                    })}
                        </tbody>
                    </table>
                </div >
            </div >
        </>
    )
}

export default VisiterRequestedTable

function StatusSmsRender({ status,
    _id,
    actionLoadingId,
    rejectactionLoadingId,
    handelapproved,
    handelRejectedVisitor }) {
    if (status === "check-in") {
        return (
            <h3 className='text-md capitalize  text-blue-500'>this visitor check-in</h3>
        )
    }

    if (status === "check-out") {
        return (
            <h3 className='text-md capitalize  text-blue-500'>this visitor check-out</h3>
        )
    }

    if (status === "approved") {
        return (
            <h3 className='text-md capitalize  text-green-500'>you approved this visiotor</h3>
        )
    }
    if (status === "rejected") {
        return (
            <h3 className='text-md capitalize  text-red-500'>you reject this visitor</h3>
        )
    }
    return (
        <>
            <button disabled={rejectactionLoadingId === _id} onClick={() => handelRejectedVisitor(_id)} className={`px-6 py-2.5  text-sm tracking-wider font-medium border-0 outline-0 text-red-700 bg-red-100  rounded-md capitalize ${rejectactionLoadingId === _id ? "cursor-not-allowed" : "hover:bg-red-200 cursor-pointer"}`}>
                {rejectactionLoadingId === _id ? "Rejecting..." : "Rejected"}
            </button>
            <button disabled={actionLoadingId === _id} onClick={() => handelapproved(_id)} className={`px-6 py-2.5  text-sm tracking-wider font-medium border-0 outline-0 text-green-700 bg-green-100  rounded-md ${actionLoadingId === _id ? "cursor-not-allowed" : "cursor-pointer hover:bg-green-200 "}`}>
                {
                    actionLoadingId === _id ? "Approved Request.." : "Approved"
                }
            </button>
        </>
    )
}