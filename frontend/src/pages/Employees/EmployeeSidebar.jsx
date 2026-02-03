import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { employessData } from '../../data/employessdata';

const EmployeeSidebar = ({ isOpen }) => {
    const [acitve, setActive] = useState(0);
    return (
        <>
            <div class={`bg-white shadow-md ${isOpen ? "close-sidebar" : "min-w-[250px]"} siderbar border-r border-gray-200 h-screen  top-0 left-0  py-6 px-4 overflow-auto duration-150`}>
                <div class="relative flex flex-col h-full mt-[40%] ">
                    {employessData.map((val, index) => {
                        const { label, icon, path } = val;
                        const Icon = icon
                        return (
                            <div className='flex gap-1.5'>
                                <Link to={`${path}`} onClick={() => setActive(index)} key={index} className={`hover:bg-blue-200 capitalize mt-2 w-full px-3 py-4 rounded-2xl flex gap-1.5 ${acitve === index ? "bg-blue-500  text-white" : ""}`}>
                                    <Icon />
                                    {label}
                                </Link>
                            </div>
                        )
                    })}
                    <hr class="my-6 border-gray-200" />
                </div>
            </div>
        </>
    )
}

export default EmployeeSidebar
