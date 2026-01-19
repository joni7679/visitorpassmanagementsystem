import React, { useEffect, useState } from 'react'
import InputFiled from '../../components/InputField'
import { Clock } from 'lucide-react'
import axios from 'axios';
import Checkbox from '../../components/Checkbox';

const CreateVisitRequested = () => {
    const [empData, setEmpData] = useState([]);
    const api = import.meta.env.VITE_BACKEND_URL;

    const getEmpData = async () => {
        try {
            const res = await axios.get(`${api}/employees`, { withCredentials: true });
            setEmpData(res.data.data)
        } catch (error) {
            console.log("error", error);
        }
    }

    useEffect(() => {
        getEmpData()
    }, [])

    return (
        <>
            <div className='bg-white w-[50rem] p-5 mt-11 shadow-lg rounded-2xl '>
                <form action="" className='mt-3.5'>
                    <div className='flex items-center justify-between w-full  gap-2.5'>
                        <div className='w-1/2'>
                            <InputFiled label="Full Name" placeholder="Enter full Name here" />
                        </div>
                        <div className='w-1/2'>
                            <InputFiled label="Email" placeholder="Enter Email id here" />
                        </div>
                    </div>
                    <div className='flex items-center justify-between w-full gap-2.5 '>
                        <div className='w-1/2'>
                            <InputFiled label="Company Name" placeholder="company name" />
                        </div>
                        <div className='w-1/2'>
                            <InputFiled label="Phone number" placeholder=" Phone number" />
                        </div>
                    </div>
                    <div className='flex items-center gap-1.5'>
                        <Clock className='text-blue-500' />
                        <p className='font-serif capitalize'>visit information</p>
                    </div>
                    <div className='flex items-center justify-between gap-2.5'>
                        <div className='w-1/2'>
                            <input type="date" name="" id="" className='px-4   mt-3 py-3 pr-10 bg-[#f0f1f2] focus:bg-transparent w-full text-sm border border-gray-200 focus:border-black outline-0 rounded-md transition-all' />
                        </div>
                        <div className='w-1/2'>
                            <input type="time" name="" id="" className='px-4   mt-3 py-3 pr-10 bg-[#f0f1f2] focus:bg-transparent w-full text-sm border border-gray-200 focus:border-black outline-0 rounded-md transition-all' />
                        </div>
                    </div>
                    <div className='flex items-center justify-between mt-5 gap-2.5'>
                        <div className='w-1/2'>
                            <label htmlFor="" className=''>Host Name</label>
                            <select className='px-4   mt-3 py-3 pr-10 bg-[#f0f1f2] focus:bg-transparent w-full text-sm border border-gray-200 focus:border-black outline-0 rounded-md transition-all'>
                                <option value="">Slect option</option>
                                {
                                    empData.map((val) => {
                                        return (
                                            <option key={val._id} value={val._id} className='capitalize'>{val.name}</option>
                                        )
                                    })
                                }
                            </select>
                        </div>
                        <div className='w-1/2'>
                            <label htmlFor="" className=''>Purpose</label>
                            <select className='px-4   mt-3 py-3 pr-10 bg-[#f0f1f2] focus:bg-transparent w-full text-sm border border-gray-200 focus:border-black outline-0 rounded-md transition-all'>
                                <option value="">Slect option</option>
                                <option value="" className='capitalize'>Metting</option>
                                <option value="" className='capitalize'>Interview</option>
                                <option value="" className='capitalize'>Delivery</option>
                                <option value="" className='capitalize'>Vendor/ Maintence</option>
                                <option value="" className='capitalize'>Other</option>
                            </select>
                        </div>
                    </div>
                    <div className='flex items-center justify-between mt-5 gap-2.5'>
                        <div className='w-1/2'>
                            <label htmlFor="" >Location</label>
                            <select disabled="true" className='px-4   mt-3 py-3 pr-10 bg-[#f0f1f2] focus:bg-transparent w-full text-sm border border-gray-200 focus:border-black outline-0 rounded-md transition-all w-full'>
                                <option value="">Slect option</option>
                                <option value="" className='capitalize'>Main Office-Floor 1</option>
                                <option value="" className='capitalize'>Main Office-Floor 2</option>
                                <option value="" className='capitalize'>Main Office-Floor 3</option>
                                <option value="" className='capitalize'>Main Office-Floor 4</option>
                                <option value="" className='capitalize'>Conference Office A</option>
                                <option value="" className='capitalize'>Conference Office 8</option>
                            </select>
                        </div>
                    </div>
                    <div className='mt-5 flex items-center gap-1.5'>
                        <Checkbox/>
                    </div>
                    <button className='px-6 py-2.5 min-w-[200px] rounded-md cursor-pointer text-slate-900 text-sm tracking-wider font-medium border border-blue-600 outline-0 bg-transparent hover:bg-blue-800 mt-5 hover:text-white  duration-200'>Send Requested</button>
                </form>
            </div>

        </>
    )
}

export default CreateVisitRequested
