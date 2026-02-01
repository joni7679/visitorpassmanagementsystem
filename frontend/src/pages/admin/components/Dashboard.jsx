import React from 'react'
import AdminSidebar from './AdminSidebar'
import { Outlet } from 'react-router-dom'
import Header from './Header'

const Dashboard = () => {
    return (
        <>
            <main className='w-full min-h-screen bg-gray-100'>
                <Header />
                <div className='flex items-center justify-center  gap-2.5'>
                    <div className='w-[20%]'>
                        <AdminSidebar />
                    </div>
                    <div className='w-[80%]'>
                        <Outlet />
                    </div>
                </div>
            </main>
        </>
    )
}

export default Dashboard
