import React from 'react'
import AdminSidebar from './AdminSidebar'
import { Outlet } from 'react-router-dom'
import Header from './Header'

const Dashboard = () => {
    return (
        <>
            <main className='w-full min-h-screen bg-gray-100'>
                <Header />
                <div className='flex items-start  gap-2.5'>
                    <AdminSidebar />
                
                        <Outlet />
                 
                </div>
            </main>
        </>
    )
}

export default Dashboard
