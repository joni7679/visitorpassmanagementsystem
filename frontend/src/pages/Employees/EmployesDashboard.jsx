import React, { useState } from 'react'
import Header from '../admin/components/Header'
import EmployeeSidebar from './EmployeeSidebar'
import { Outlet } from 'react-router-dom'

const EmployesDashboard = () => {
    const [isOpen, setIsOpen] = useState(false);

    const togglebar = () => {
        setIsOpen(!isOpen)
    }

    return (
        <>
            <main className='w-full min-h-screen bg-gray-100'>
                <Header togglebar={togglebar}  isOpen={isOpen}/>
                <div className='flex items-center justify-center  gap-2.5 w-full'>
                    <div className={` ${isOpen ? "w-0" : "w-[20%]"}  transition-all duration-100 ease-out`}>
                        <EmployeeSidebar isOpen={isOpen} />
                    </div>
                    <div className={`  ${isOpen ? "w-[100%]" : "w-[80%]"}  p-5 h-[80vh]  transition-all overflow-scroll work-space  duration-100 ease-out`}>
                        <Outlet />
                    </div>
                </div>
            </main>
        </>
    )
}

export default EmployesDashboard
