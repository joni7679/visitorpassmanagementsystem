import React, { useContext, useEffect } from 'react'
import { Clock } from 'lucide-react';
import { AuthConext } from '../../context/AuthContext';
import { DiCssTricks } from "react-icons/di";
import StatusCard from '../../components/StatusCard';

const Employesshome = () => {
  return (
    <>
      <div>
        <p className='text-md capitalize'>welcome back , here's what's happing today</p>
        <div className='w-full min-h-screen flex items-start   justify-center  gap-3.5 overflow-x-scroll'>
          <StatusCard />
        </div>
      </div>
    </>
  )
}

export default Employesshome
