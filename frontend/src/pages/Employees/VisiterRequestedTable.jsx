import axios from 'axios';
import React, { useContext } from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import { VisitorContext } from '../../context/DataContext';
import { ToastContainer, toast } from 'react-toastify';
import ShimmEffectTable from '../../components/ShimmEffectTable';

const VisiterRequestedTable = () => {
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
    return (
        <>
            <div className='w-full'>
                <div className="overflow-x-auto  p-6  ">
                    <div className="flex gap-4 flex-wrap justify-between items-center mb-4">
                        <div className="flex items-center px-4 py-2 rounded-md bg-white border border-gray-300 overflow-hidden max-w-xs w-full">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 192.904 192.904"
                                className="fill-gray-600 mr-2 w-4 h-4">
                                <path
                                    d="m190.707 180.101-47.078-47.077c11.702-14.072 18.752-32.142 18.752-51.831C162.381 36.423 125.959 0 81.191 0 36.422 0 0 36.423 0 81.193c0 44.767 36.422 81.187 81.191 81.187 19.688 0 37.759-7.049 51.831-18.751l47.079 47.078a7.474 7.474 0 0 0 5.303 2.197 7.498 7.498 0 0 0 5.303-12.803zM15 81.193C15 44.694 44.693 15 81.191 15c36.497 0 66.189 29.694 66.189 66.193 0 36.496-29.692 66.187-66.189 66.187C44.693 147.38 15 117.689 15 81.193z">
                                </path>
                            </svg>
                            <input type="email" placeholder="Search visiter name here..." className="w-full outline-none bg-transparent text-slate-600 text-sm" />
                        </div>
                        <button type='button'
                            className="text-slate-900 font-medium flex items-center px-4 py-2 rounded-md bg-white hover:bg-gray-50 border border-gray-300 overflow-hidden cursor-pointer">
                            Export
                        </button>
                    </div>
                    <table className="min-w-full border border-gray-200">
                        <thead className="bg-white whitespace-nowrap">
                            <tr className="border-b border-gray-200">
                                <th className="px-4 py-3 text-left text-[13px] font-medium text-slate-600 border-r border-gray-200">
                                    Name
                                </th>
                                <th className="px-4 py-3 text-left text-[13px] font-medium text-slate-600 border-r border-gray-200">
                                    Date
                                </th>
                                <th className="px-4 py-3 text-left text-[13px] font-medium text-slate-600 border-r border-gray-200">
                                    Phone Number
                                </th>
                                <th className="px-4 py-3 text-left text-[13px] font-medium text-slate-600 border-r border-gray-200">
                                    Time & Purpose
                                </th>
                                <th className="px-4 capitalize py-3 text-left text-[13px] font-medium text-slate-600 border-r border-gray-200">
                                    status
                                </th>
                                <th className="px-4 py-3 text-left text-[13px] font-medium text-slate-600 border-r border-gray-200">
                                    Accepted
                                </th>
                            </tr>
                        </thead>
                        <tbody className="whitespace-nowrap divide-y bg-gray-200">
                            {
                                visitData.length === 0 ? <tr className="bg-gray-50">
                                    <td colSpan={6} className="px-4 py-3 border-r border-gray-200 ">
                                        <h1 className='font-semibold text-center capitalize'>no data here</h1>
                                    </td>
                                </tr> :
                                    visitData.map((val, index) => {
                                        const { _id, date, time, name, phone, purpose, status } = val
                                        return (
                                            <tr key={index} className="bg-gray-50">
                                                <td className="px-4 py-3 border-r border-gray-200">
                                                    <div className="flex items-center w-max">
                                                        <div className="ml-2">
                                                            <p className="text-[13px] text-slate-900 font-medium capitalize">{name}</p>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td className='px-4 py-3 border-r border-gray-200'>
                                                    {new Date(date).toLocaleDateString("en-IN", {
                                                        day: "2-digit",
                                                        month: "long",
                                                        year: "numeric"
                                                    })}
                                                </td>
                                                <td className='px-4 py-3 border-r border-gray-200'>
                                                    <div className="ml-2">
                                                        <p className="text-[13px] text-slate-900 font-medium">{phone}</p>
                                                    </div>
                                                </td>
                                                <td className='px-4 py-3 border-r border-gray-200'>
                                                    <div className="ml-2">
                                                        <p className="text-[13px] text-slate-900 font-medium">Time :{time}</p>
                                                    </div>
                                                    <div className="ml-2">
                                                        <p className="text-[13px] text-slate-900 font-medium">{purpose}</p>
                                                    </div>
                                                </td>
                                                <td className='px-4 py-3 border-r border-gray-200'>
                                                    <span className={`px-2 py-1 capitalize text-green-700  bg-green-100  rounded-md ${statusColor[status]}`}>{status}</span>
                                                </td>
                                                <td className="px-4 py-3 text-[13px] text-slate-900 font-medium border-r border-gray-200 flex items-center gap-1.5">
                                                    <StatusSmsRender status={status} _id={_id} actionLoadingId={actionLoadingId} rejectactionLoadingId={rejectactionLoadingId} handelRejectedVisitor={handelRejectedVisitor}
                                                        handelapproved={handelapproved}
                                                    />
                                                </td>
                                            </tr>
                                        )
                                    })}
                        </tbody>
                    </table>
                </div>
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