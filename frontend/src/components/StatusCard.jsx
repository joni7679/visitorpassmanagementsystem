import React, { useContext, useEffect } from 'react'
import { Clock ,User} from 'lucide-react';
import { DiCssTricks } from "react-icons/di";
import { AuthConext } from '../context/AuthContext';

const StatusCard = () => {
    const { getVisitorCountStatus, loading, vistercountStatus } = useContext(AuthConext);

    useEffect(() => {
        getVisitorCountStatus()
    }, [])

    if (loading || !vistercountStatus) {
        return <p>Loading....</p>
    }
    const cardArry = Object.entries(vistercountStatus);
    return (
        <>
            <div>
                <div className='w-full  grid md:grid-cols-4  sm:grid-cols-2 grid-cols-1 gap-3.5'>
                    <div className='w-56 h-32 p-5 shadow-lg relative rounded-2xl bg-white'>
                        <div className='flex  items-center  gap-1.5' >
                            <div className="w-12 h-12 bg-white shadow-lg rounded-2xl flex items-center justify-center">
                                <User className='text-red-400' />
                            </div>
                            <div className='flex items-center justify-center flex-col'>
                                <p className=' text-xl'>{vistercountStatus.total}</p>
                                <div className='flex items-center justify-center gap-2' >
                                    <p className=' capitalize font-semibold'>total  requested</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='w-56 h-32 p-5 shadow-lg relative rounded-2xl bg-white'>
                        <div className='flex items-center  gap-1.5' >
                            <div className="w-12 h-12 bg-white shadow-lg rounded-2xl flex items-center justify-center">
                                <User />
                            </div>
                            <div className='flex items-center justify-center flex-col'>
                                <p className='text-green-500 text-xl'>{vistercountStatus.approved}</p>
                                <div className='flex items-center justify-center gap-2' >
                                    <p className='text-green-500 capitalize font-semibold'>approved requested</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='w-56 h-32 p-5 shadow-lg relative rounded-2xl bg-white'>
                        <div className='flex items-center  gap-1.5' >
                            <div className="w-12 h-12 bg-white shadow-lg rounded-2xl flex items-center justify-center">

                            </div>
                            <div className='flex items-center justify-center flex-col'>
                                <p className='text-yellow-400 text-xl'>{vistercountStatus.pending}</p>
                                <div className='flex items-center justify-center gap-2' >
                                    <p className='text-yellow-400 capitalize font-semibold'>pending requested</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='w-56 h-32 p-5 shadow-lg relative rounded-2xl bg-white'>
                        <div className='flex items-center  gap-1.5' >
                            <div className="w-12 h-12 bg-white shadow-lg rounded-2xl flex items-center justify-center">
                                <Clock className='text-red-400' />
                            </div>
                            <div className='flex items-center justify-center flex-col'>
                                <p className='text-red-400 text-xl'>{vistercountStatus.rejected}</p>
                                <div className='flex items-center justify-center gap-2' >
                                    <p className='text-red-400 capitalize font-semibold'>rejected requested</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default StatusCard
