import React, { useContext, useEffect, useState } from 'react'
import { VisitorContext } from '../../context/DataContext'
import { toast } from 'react-toastify';
import VerifyShimmerEffect from './VerifyShimmerEffect';
import VerifyVisiterCard from './VerifyVisiterCard';


const VisitorData = () => {
    const [data, setData] = useState(null)
    const { verifyPassVisitor, loading, verifyPassUser, checkInVisitor, checkOutVisitor, rejectedVisitors } = useContext(VisitorContext);
    console.log("visti", verifyPassUser);
    useEffect(() => {
        if (verifyPassUser) {
            setData(verifyPassUser);
        }
    }, [verifyPassUser]);

    if (loading) {
        return <VerifyShimmerEffect />
    }
    if (!data) {
        return <h2 className='font-semibold capitalize p-5'>data not found here</h2>
    }
    const handleCheckInVisitor = async () => {
        await checkInVisitor(data?.visitorId);
        toast.success("visitor checked in successfully")
        setTimeout(() => {
            setData(null)
        }, 5000);

    }

    const handleCheckOutVisitor = async () => {
        await checkOutVisitor(data?.visitorId);
        toast.success("visitor checked out successfully")
        setTimeout(() => {
            setData(null)
        }, 5000);
    }

    const handleRejectedVisitor = async () => {
        // await rejectedVisitors(data?._id);
        await rejectedVisitors(data._id);
        toast.success("You rejected this visiters")
        console.log("id", data._id)
        setTimeout(() => {
            setData(null)
        }, 5000);
    }

    return (
        <>
            {
                data.status === "check-in" ? <div className='flex items-center justify-center flex-col gap-2.5'>
                    <VerifyVisiterCard data={data} />
                    <button onClick={handleCheckOutVisitor} className='px-5 py-2 rounded-xl bg-green-500 text-white cursor-pointer hover:bg-green-700 duration-200'>Allow to Check-out</button>
                </div> :
                    data.status === "check-out" ? <div className=' flex items-center justify-center font-semibold capitalize h-full'>
                        <p className='font-semibold capitalize'>this user alredy check-out invalid pass</p>
                    </div> :
                        verifyPassUser && <>
                            <VerifyVisiterCard data={data} />
                            <div className='mt-5 flex items-center justify-center gap-3'>
                                <button onClick={handleCheckInVisitor} className='px-5 py-2 rounded-xl bg-green-500 text-white cursor-pointer hover:bg-green-700 duration-200'>Allow to Check-in</button>
                                <button onClick={handleRejectedVisitor} className='px-5 py-2 rounded-xl bg-red-500 text-white cursor-pointer hover:bg-red-700 duration-200 capitalize'>denied</button>
                            </div>
                        </>
            }
        </>
    )
}

export default VisitorData
