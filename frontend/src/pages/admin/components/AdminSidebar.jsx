import React, { useState } from 'react'
import { adminData } from '../../../data/adminData'
import { Link } from 'react-router-dom';

const AdminSidebar = () => {
  const [acitve, setActive] = useState(0);
  console.log("acive", acitve);

  return (
    <>
      <div className='z-30 p-5 mt-14  min-h-screen w-[20%]'>
        <nav className="bg-white shadow-md border-r border-gray-200 h-screen fixed top-0 left-0 min-w-[250px] py-6 px-4 overflow-auto">
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
            <div className="mt-4">
              <ul className="space-y-4 px-2">
                <li>
                  <a href="javascript:void(0)" className="text-slate-800 text-sm flex items-center font-medium hover:text-blue-600 transition-all">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="w-4 h-4 mr-3"
                      viewBox="0 0 512 512">
                      <path
                        d="M437.02 74.98C388.668 26.63 324.379 0 256 0S123.332 26.629 74.98 74.98C26.63 123.332 0 187.621 0 256s26.629 132.668 74.98 181.02C123.332 485.37 187.621 512 256 512s132.668-26.629 181.02-74.98C485.37 388.668 512 324.379 512 256s-26.629-132.668-74.98-181.02zM111.105 429.297c8.454-72.735 70.989-128.89 144.895-128.89 38.96 0 75.598 15.179 103.156 42.734 23.281 23.285 37.965 53.687 41.742 86.152C361.641 462.172 311.094 482 256 482s-105.637-19.824-144.895-52.703zM256 269.507c-42.871 0-77.754-34.882-77.754-77.753C178.246 148.879 213.13 114 256 114s77.754 34.879 77.754 77.754c0 42.871-34.883 77.754-77.754 77.754zm170.719 134.427a175.9 175.9 0 0 0-46.352-82.004c-18.437-18.438-40.25-32.27-64.039-40.938 28.598-19.394 47.426-52.16 47.426-89.238C363.754 132.34 315.414 84 256 84s-107.754 48.34-107.754 107.754c0 37.098 18.844 69.875 47.465 89.266-21.887 7.976-42.14 20.308-59.566 36.542-25.235 23.5-42.758 53.465-50.883 86.348C50.852 364.242 30 312.512 30 256 30 131.383 131.383 30 256 30s226 101.383 226 226c0 56.523-20.86 108.266-55.281 147.934zm0 0"
                        data-original="#000000" />
                    </svg>
                    <span>Profile</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </>
  )
}

export default AdminSidebar
