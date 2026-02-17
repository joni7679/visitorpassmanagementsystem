import axios from 'axios';
import React, { useContext } from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import { VisitorContext } from '../../context/DataContext';
import { Calendar, ChartLine, Dot, Ellipsis, Eye, FileDown, LocateFixed, Timer, Trash, User, Wand } from 'lucide-react';


const VisitCard = () => {
    const [hostName, setShowHostName] = useState([])
    const { loading, fetchMyVisitorStatus, myVisitorsStatus } = useContext(VisitorContext)
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

    const handleDownoladQrPass = (id) => {
        {/* <div className='w-44  mt-5 h-44 bg-red-300 rounded-2xl overflow-hidden'>
                                                                <img src={qrCode} className='w-full h-full object-cover' />
                                                            </div> */}
    }



    return (
        <>
            {/* {
                myVisitorsStatus.length === 0 ?
                    <div>

                        <p className='text-center capitalize'>
                            No Data here

                        </p>
                    </div> :

                    myVisitorsStatus.map((visit, index) => {
                        const { date, time, purpose, location, employeeid, status, createdAt, qrCode, name } = visit
                        const host = hostName.find(emp => emp._id === employeeid);
                        return (

                            <div key={index} className='max-w-md w-full bg-white rounded-2xl shadow-lg space-x-5  p-5  capitalize '>
                                <div>
                                    <div className='flex items-center justify-between w-full'>
                                        <div className="user-info">
                                            <h2 className='text-lg font-semibold text-gray-800 capitalize'>
                                                {host?.name || "Unknow Host"}
                                            </h2>
                                        </div>
                                        <div>
                                            <span className={`px-3 py-1 text-sm font-medium bg-green-500 capitalize text-white rounded-full ${statusColor[status]}`}>
                                                {status}
                                            </span>
                                        </div>
                                    </div>
                                    <div className='mt-1.5 border border-gray-300'></div>
                                    <div className="visit-info grid grid-cols-2 mt-2.5 capitalize">
                                        <div>
                                            <p className='font-semibold text-md'>date</p>
                                            <p>  {new Date(date).toLocaleDateString("en-IN", {
                                                day: "2-digit",
                                                month: "long",
                                                year: "numeric"
                                            })}</p>
                                        </div>
                                        <div>
                                            <p className='font-semibold text-md'>time</p>
                                            <p>{time}</p>
                                        </div>
                                        <div>
                                            <p className='font-semibold text-md'>location</p>
                                            <p>{location}</p>
                                        </div>
                                    </div>
                                    <div>
                                        <p className='font-md text-gray-800 '>purpose of visit</p>
                                        <p>{purpose}</p>
                                    </div>
                                    <span>requested time </span>
                                    {new Date(createdAt).toLocaleDateString("en-IN", {
                                        day: "2-digit",
                                        month: "long",
                                        year: "numeric"
                                    })}
                                </div>
                                {
                                    status === "approved" && <div>
                                        <div className='w-44  mt-5 h-44 bg-red-300 rounded-2xl overflow-hidden'>
                                            <img src={qrCode} className='w-full h-full object-cover' />
                                        </div>
                                        <a href={qrCode} download={`${name}-visitor-pass.png`} className='px-4 py-2 bg-green-500 text-white capitalize mx-auto  cursor-pointer hover:bg-green-700 duration-0 rounded-2xl'>downolad now</a>
                                    </div>
                                }
                            </div>
                        )
                    })
            } */}
            <div className='w-full'>
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
                                        const { date, email, location, name, employeeid, qrCode, phone, image, purpose, status, time } = user
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
                                                                <span className='px-2 py-1 bg-blue-500 text-white capitalize mx-auto  cursor-pointer hover:bg-blue-700 duration-0 rounded-2xl'>
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
