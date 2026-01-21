import axios from 'axios';
import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';

const VisitCard = () => {
    const [visitData, setVisiterData] = useState([])
    const backendApi = import.meta.env.VITE_BACKEND_URL;
    const myvisitRequest = async () => {
        try {
            const res = await axios.get(`${backendApi}/visit/my-visit-req`, { withCredentials: true });
            const finalres = res.data.data;
            setVisiterData(finalres)
        } catch (error) {
            console.log("error", error);
        }
    }

    useEffect(() => {
        myvisitRequest()
    }, [])
    const statusColor = {
        pending: "text-yellow-500 bg-yellow-200",
        approved: "text-green-500 bg-green-200",
        rejected: "text-red-500 bg-red-200"
    }

    return (
        <>
            {
                visitData.map((visit, index) => {
                    const { email, date, time, purpose, location, employeeid, status, createdAt } = visit
                    return (
                        <div key={index} className='max-w-md w-full bg-white rounded-2xl shadow-lg space-x-5  p-5 mt-10 capitalize'>
                            <div className='flex items-center justify-between w-full'>
                                <div className="user-info">
                                    <h2 className='text-lg font-semibold text-gray-800 capitalize'></h2>
                                </div>
                                <div>
                                    <span className={`px-3 py-1 text-sm font-medium bg-green-500 capitalize text-white rounded-full ${statusColor[status]}` }>
                                        {status}
                                    </span>
                                </div>
                            </div>
                            <div className='mt-1.5 border border-gray-300'></div>
                            <div className="visit-info grid grid-cols-2 mt-2.5 capitalize">
                                <div>
                                    <p className='font-semibold text-md'>date</p>
                                    <p>{date}</p>
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
                            {createdAt}
                        </div>
                    )
                })
            }
        </>
    )
}

export default VisitCard
