import React, { useState } from 'react'
import { adminData } from '../../../data/adminData'
import { Link } from 'react-router-dom';

const AdminSidebar = () => {
  const [acitve, setActive] = useState(0);
  console.log("acive", acitve);

  return (
    <>
      <div className='z-30 p-5 mt-14  min-h-screen w-[20%] '>
        <nav className="siderbar bg-white shadow-md border-r border-gray-200 h-screen fixed top-0 left-0 min-w-[250px] py-6 px-4 overflow-auto">
          <div className="relative flex flex-col h-full">
            {adminData.map((val, index) => {
              const { label, icon, path } = val;
              const Icon = icon
              return (
                <div key={index} className='flex gap-1.5'>
                  <Link to={`${path}`} onClick={() => setActive(index)} key={index} className={`hover:bg-blue-200 capitalize mt-2 w-full px-3 py-4 rounded-2xl flex gap-1.5 ${acitve === index ? "bg-blue-500  text-white" : ""}`}>
                    <Icon />
                    {label}
                  </Link>
                </div>
              )
            })}
            <hr className="my-6 border-gray-200" />

          </div>
        </nav>
      </div>
    </>
  )
}

export default AdminSidebar
