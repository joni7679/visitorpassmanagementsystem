import React from 'react'
import AdminSidebar from './AdminSidebar'
import { Outlet } from 'react-router-dom'
import Header from './Header'

const Dashboard = () => {
    return (
        <>
            <main className='w-full min-h-screen bg-gray-100'>
                <Header />
                <div className='flex   gap-2.5'>
                    <div className='w-[20%]'>
                        <AdminSidebar />
                    </div>
                    <div className='w-[80%] p-5 h-[80vh]  transition-all overflow-scroll work-space  duration-100 ease-out '>
                        <Outlet />
                    </div>
                </div>
            </main>
        </>
    )
}

export default Dashboard
