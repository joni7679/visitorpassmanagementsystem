import React from 'react'

const VerifyVisiterCard = ({ data }) => {
    return (
        <>
            <div className='p-5'>
                <div className=' w-20 h-20 rounded-full  overflow-hidden mx-auto'>
                    <img src={data?.image} lazy="loading" className='w-full h-full object-cover ' />
                </div>
                <p className='text-me font-semibold capitalize'>visitor name {data?.name}</p>
                <p className='text-me font-semibold capitalize'>visitor email {data?.email}</p>
                <p className='text-me font-semibold capitalize'>host name : Employee</p>
                <p className='text-me font-semibold capitalize'>visitor phone {data?.phone}</p>
                <p className='text-me font-semibold capitalize'> date {new Date(data?.date).toLocaleDateString("en-IN", {
                    day: "2-digit",
                    month: "long",
                    year: "numeric"
                })}</p>
                <p className='text-me font-semibold capitalize'>time {data?.time}</p>
                <p className='text-me font-semibold capitalize'>purpose {data?.purpose}</p>
                <p className='text-me font-semibold capitalize'>location {data?.location}</p>
                <p className='text-me font-semibold capitalize'>status {data?.status}</p>
                
            </div>
        </>
    )
}

export default VerifyVisiterCard
