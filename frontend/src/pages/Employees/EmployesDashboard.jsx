import React from 'react'
import Header from '../admin/components/Header'
import EmployeeSidebar from './EmployeeSidebar'
import { Outlet } from 'react-router-dom'

const EmployesDashboard = () => {
    
    return (
        <>
            <main className='w-full min-h-screen bg-gray-100'>
                <Header />
                <div className='flex items-center justify-center  gap-2.5 w-full'>
                    <div className='w-[20%] '>
                        <EmployeeSidebar />
                    </div>
                    <div className='w-[80%] p-5 h-[80vh] overflow-scroll work-space'>
                        <Outlet />
                    </div>
                </div>
            </main>
        </>
    )
}

export default EmployesDashboard
