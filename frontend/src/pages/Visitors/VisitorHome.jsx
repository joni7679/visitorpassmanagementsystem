import React from 'react'
import StatusCard from '../../components/StatusCard'

const VisitorHome = () => {
    return (
        <>
            <div>
                <p className='text-md capitalize'>welcome back , here's what's happing today</p>
                <div className='w-full mt-5 min-h-screen flex items-start  overflow-hidden justify-center  gap-3.5'>
                    <StatusCard />
                </div>
            </div>
        </>
    )
}

export default VisitorHome
