
import React from 'react'
import Header from '../pages/admin/components/Header'
import { useState } from 'react';
import Sidebar from './Sidebar';
import { adminData } from '../data/adminData';
import { visitorData } from '../data/visitordata';
import { securityData } from '../data/securitysfaffdata';
import { employessData } from '../data/employessdata';
import { useContext } from 'react';
import { AuthConext } from '../context/AuthContext';
import { useEffect } from 'react';
import { Outlet } from 'react-router-dom';
const DashboardLayout = () => {
    const { userProfile, user } = useContext(AuthConext);
    const [isOpen, setIsOpen] = useState(false);

    const togglebar = () => {
        setIsOpen(!isOpen)
    }


    if (!user) {
        return <p>Loading...</p>
    }
    useEffect(() => {
        userProfile()
    }, [])

    const role = user?.role

    const getSidebarRoleData = (role) => {
        if (role === "admin") {
            return adminData
        }
        if (role === "security") {
            return securityData
        }
        if (role === "employee") {
            return employessData
        }
        if (role === "visitor") {
            return visitorData
        }
    }

    return (
        <>

            <main className='w-full min-h-screen bg-gray-100'>
                <Header togglebar={togglebar} isOpen={isOpen} />
                <div className='flex items-center justify-center  gap-2.5 w-full'>
                    <div className={` ${isOpen ? "w-0" : "w-[20%]"}  transition-all duration-100 ease-out`}>
                        <Sidebar togglebar={togglebar} isOpen={isOpen} data={getSidebarRoleData(role)} />
                    </div>
                    <div className={`${isOpen ? "w-[100%]" : "w-[80%]"}   h-[80vh]  transition-all overflow-scroll work-space  duration-100 ease-out`}>
                        <Outlet />
                    </div>
                </div>
            </main>
        </>
    )
}

export default DashboardLayout
