import React from 'react'
import Header from '../admin/components/Header'
import VisitorSideBar from './VisitorSideBar'
import { Outlet } from 'react-router-dom'

const VisitorDashboard = () => {
  return (
    <>
      <main className='w-full min-h-screen bg-gray-100'>
        <Header />
        <div className='flex items-start  gap-2.5'>
          <VisitorSideBar />

          <Outlet />

        </div>
      </main>
    </>
  )
}

export default VisitorDashboard
