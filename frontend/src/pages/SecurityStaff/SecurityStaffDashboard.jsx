import React from 'react'
import Header from '../admin/components/Header'
import SecurityStaffSidebar from './SecurityStaffSidebar'
import { Outlet } from 'react-router-dom'

const SecurityStaffDashboard = () => {
    return (
        <>
            <main className='w-full min-h-screen bg-gray-100'>
                <Header />
                <div className='flex items-start  gap-2.5 w-full'>
                    <div className='w-[20%]'>
                        <SecurityStaffSidebar />
                    </div>
                    <div className='w-[80%] p-5 mt-11  work-space'>
                        <Outlet />
                    </div>
                </div>
            </main>
        </>
    )
}

export default SecurityStaffDashboard
