import { User } from 'lucide-react'
import React from 'react'

const DashBoardHome = () => {
    return (
        <>
            <div className='w-full min-h-screen px-[5%] bg-gray-100'>
                <h2 className='font-semibold capitalize text-2xl'>dashboard</h2>
                <p className='text-md capitalize'>welcome back , here's what's happing today</p>
                <div className="container mx-auto flex items-center justify-between">
                    <div className='flex items-center justify-between'>
                        <div
                            className="bg-white shadow-sm border max-w-md border-gray-200 p-2 w-full  rounded-lg overflow-hidden mx-auto mt-4">
                            <div className="p-4 ">
                                <div className='flex items-center '>
                                    <h4 className="text-xl font-bold capitalize">total visitor</h4>
                                    <User className='text-blue-500' />
                                </div>

                                <div>
                                    <p className='font-semibold capitalize'>122</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='flex items-center justify-between'>
                        <div
                            className="bg-white shadow-sm border border-gray-200 p-2 w-full max-w-sm rounded-lg overflow-hidden mx-auto mt-4">
                            <div className="p-4 ">
                                <div className='flex items-center '>
                                    <h4 className="text-xl font-bold capitalize">active pass</h4>
                                    <User className='text-blue-500' />
                                </div>

                                <div>
                                    <p className='font-semibold capitalize'>122</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='flex items-center justify-between'>
                        <div
                            className="bg-white shadow-sm border border-gray-200 p-2 w-full max-w-sm rounded-lg overflow-hidden mx-auto mt-4">
                            <div className="p-4 ">
                                <div className='flex items-center '>
                                    <h4 className="text-xl font-bold capitalize">employee</h4>
                                    <User className='text-blue-500' />
                                </div>
                                <div>
                                    <p className='font-semibold capitalize'>122</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default DashBoardHome
