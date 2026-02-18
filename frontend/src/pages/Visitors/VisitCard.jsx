import axios from 'axios';
import React, { useContext } from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import { VisitorContext } from '../../context/DataContext';
import { Calendar, ChartLine, Dot, Ellipsis, Eye, FileDown, LocateFixed, Timer, Trash, User, Wand, X } from 'lucide-react';


const VisitCard = () => {
    const [hostName, setShowHostName] = useState([])
    const { loading, fetchMyVisitorStatus, myVisitorsStatus } = useContext(VisitorContext);
    const [selectPss, setSelectPass] = useState(null)
    const api = import.meta.env.VITE_BACKEND_URL;
    const getEmpData = async () => {
        try {
            const res = await axios.get(`${api}/emp/employees`, { withCredentials: true });
            setShowHostName(res.data.data || [])
        } catch (error) {
            console.log("error", error);
        }
    }
    useEffect(() => {
        fetchMyVisitorStatus()
        getEmpData()
    }, [])
    const statusColor = {
        pending: "text-yellow-500 bg-yellow-200",
        approved: "text-green-500 bg-green-200",
        rejected: "text-red-500 bg-red-200",
    }

    const handleDownoladQrPass = (pass) => {
        setSelectPass(pass)
    }

    const colseModel = () => {
        setSelectPass(null)
    }



    return (
        <>
            <div className='w-full relative'>
                {selectPss &&
                    <>
                        <div className='absolute top-[70%] left-1/2 -transform -translate-x-1/2 -translate-y-1/2'>

                            <div className={`w-52  mt-5 h-52 shadow-md p-5 rounded-2xl overflow-hidden bg-white ${selectPss?"scale-[1.2]":"scale-0"} duration-initial transition-all`}>
                                <X onClick={colseModel} className='text-xl cursor-pointer' />
                                <img src={selectPss.qrCode} className='w-44 h-44 object-cover' />
                            </div>
                        </div>
                    </>
                }

                <div class="overflow-x-auto">
                    <table class="min-w-full bg-white shadow-lg rounded-2xl overflow-hidden">
                        <thead class="bg-gray-50 whitespace-nowrap ">
                            <tr>
                                <th class="px-4 py-3 text-left text-sm font-medium text-slate-600">
                                    <div class="flex items-center gap-1.5">
                                        <User />
                                        Employee Name
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
                                        <LocateFixed />
                                        Location
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
                                myVisitorsStatus.length === 0 ?
                                    <tr>
                                        <td class="px-4 py-3 text-sm text-slate-900 font-medium">
                                            <div class="flex items-center cursor-pointer w-max">
                                                <p>
                                                    not data here
                                                </p>
                                            </div>
                                        </td>
                                    </tr>
                                    : myVisitorsStatus.map((user, index) => {
                                        const { _id, date, email, location, name, employeeid, qrCode, phone, purpose, status, time } = user
                                        const host = hostName.find(emp => emp._id === employeeid);
                                        return (
                                            <tr key={index}>

                                                <td class="px-4 py-3 text-sm text-slate-900 font-medium">
                                                    <div class="flex capitalize items-center cursor-pointer w-max">
                                                        {host?.name || "Unknow Host"}
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
                                                        <span className='px-2 py-1 capitalize text-gray-700  '>{location}</span>
                                                    </div>
                                                </td>
                                                <td class="px-4 py-3 text-sm text-slate-600 font-medium">
                                                    <div className="ml-2">
                                                        <span className={`px-3 py-1 text-sm font-medium bg-green-500 capitalize text-white rounded-full ${statusColor[status]}`}>{status}</span>
                                                    </div>
                                                </td>
                                                <td class="flex  px-4 py-3 text-sm font-medium">
                                                    {/* <Ellipsis className='cursor-pointer' /> */}
                                                    {
                                                        status === "approved" && <div>
                                                            <div className='flex items-center justify-center gap-1.5'>
                                                                <span onClick={() => handleDownoladQrPass(user)} className='px-2 py-1 bg-blue-500 text-white capitalize mx-auto  cursor-pointer hover:bg-blue-700 duration-0 rounded-2xl'>
                                                                    <Eye />
                                                                </span>
                                                                <a href={qrCode} download={`${name}-visitor-pass.png`} className='px-2 py-1 bg-green-500 text-white capitalize mx-auto  cursor-pointer hover:bg-green-700 duration-0 rounded-2xl'>
                                                                    <FileDown />
                                                                </a>
                                                            </div>
                                                        </div>
                                                    }
                                                </td>
                                            </tr>
                                        )
                                    })}
                        </tbody>
                    </table>
                </div >
            </div>
        </>
    )
}

export default VisitCard
