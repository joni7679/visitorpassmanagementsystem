import React from 'react'
import Header from '../admin/components/Header'
import EmployeeSidebar from './EmployeeSidebar'
import { Outlet } from 'react-router-dom'

const EmployesDashboard = () => {
    return (
        <>
            <main className='w-full min-h-screen bg-gray-100'>
                <Header />
                <div className='flex items-start  gap-2.5 w-full'>
                    <EmployeeSidebar />
                    <div className='w-[80%] p-5'>
                        <Outlet />
                    </div>
                </div>
            </main>
        </>
    )
}

export default EmployesDashboard
