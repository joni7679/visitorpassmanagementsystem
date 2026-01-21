import React, { useEffect, useState } from 'react'
import InputFiled from '../../components/InputField'
import { Clock } from 'lucide-react'
import axios from 'axios';
import Checkbox from '../../components/Checkbox';
import { useContext } from 'react';
import { AuthConext } from '../../context/AuthContext';

const CreateVisitRequested = () => {
    const backendApi = import.meta.env.VITE_BACKEND_URL;
    const [empData, setEmpData] = useState([]);
    const [phoneNumber, setPhoneNumber] = useState("");
    const [empId, setEmpid] = useState("");
    const [time, setTime] = useState("");
    const [date, setDate] = useState("");
    const [purpose, setPurpose] = useState("");
    const [location, setLocation] = useState("");
    const [loading, setLoading] = useState(true)
    const { user, userProfile } = useContext(AuthConext);
    useEffect(() => {
        userProfile()
    }, [])
    const api = import.meta.env.VITE_BACKEND_URL;
    const getEmpData = async () => {
        try {
            const res = await axios.get(`${api}/emp/employees`, { withCredentials: true });
            setEmpData(res.data.data)
        } catch (error) {
            console.log("error", error);
        }
    }
    useEffect(() => {
        getEmpData()
    }, [])
    const createVisitReq = async (e) => {
        const visiterData = {
            name: user.name,
            email: user.email,
            phone: phoneNumber,
            userid: user._id,
            employeeid: empId,
            date,
            time,
            purpose,
            location
        }
        e.preventDefault();
        setLoading(true)
        try {
            const visiter = await axios.post(`${backendApi}/visit/create-visit-req`, visiterData, { withCredentials: true })
            console.log("visiter", visiter);
            alert("visit requested send successfully")
            setPhoneNumber("");
            setEmpid("");
            setDate("");
            setTime("");
            setPurpose("");
            setLocation("")
            setLoading(false)
        } catch (error) {
            console.log(error);
        } finally {
            setLoading(false)
        }
    }

    return (
        <>
            <div className='bg-white w-[50rem] p-5 mt-11 shadow-lg rounded-2xl '>
                <form onSubmit={createVisitReq} action="" className='mt-3.5'>
                    <div className='flex items-center justify-between w-full  gap-2.5'>
                        <div className='w-1/2'>
                            <InputFiled label="Full Name" value={user.name} readOnly placeholder="Enter full Name here" />
                        </div>
                        <div className='w-1/2'>
                            <InputFiled label="Email" value={user.email} readOnly placeholder="Enter Email id here" />
                        </div>
                    </div>
                    <div className='flex items-center justify-between w-full gap-2.5 '>
                        <div className='w-1/2'>
                            <InputFiled label="Phone number" value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} placeholder=" Phone number" />
                        </div>
                    </div>
                    <div className='flex items-center gap-1.5'>
                        <Clock className='text-blue-500' />
                        <p className='font-serif capitalize'>visit information</p>
                    </div>
                    <div className='flex items-center justify-between gap-2.5'>
                        <div className='w-1/2'>
                            <input type="date" name="" id="" value={date} onChange={(e) => setDate(e.target.value)} className='px-4   mt-3 py-3 pr-10 bg-[#f0f1f2] focus:bg-transparent w-full text-sm border border-gray-200 focus:border-black outline-0 rounded-md transition-all' />
                        </div>
                        <div className='w-1/2'>
                            <input type="time" name="" id="" value={time} onChange={(e) => setTime(e.target.value)} className='px-4   mt-3 py-3 pr-10 bg-[#f0f1f2] focus:bg-transparent w-full text-sm border border-gray-200 focus:border-black outline-0 rounded-md transition-all' />
                        </div>
                    </div>
                    <div className='flex items-center justify-between mt-5 gap-2.5'>
                        <div className='w-1/2'>
                            <label htmlFor="" className=''>Host Name</label>
                            <select value={empId} onChange={(e) => setEmpid(e.target.value)} className='px-4   mt-3 py-3 pr-10 bg-[#f0f1f2] focus:bg-transparent w-full text-sm border border-gray-200 focus:border-black outline-0 rounded-md transition-all'>
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
                            <select className='px-4   mt-3 py-3 pr-10 bg-[#f0f1f2] focus:bg-transparent w-full text-sm border border-gray-200 focus:border-black outline-0 rounded-md transition-all' value={purpose} onChange={(e) => setPurpose(e.target.value)}>
                                <option value="">Slect option</option>
                                <option value="Metting" className='capitalize'>Metting</option>
                                <option value="Interview" className='capitalize'>Interview</option>
                                <option value="Delivery" className='capitalize'>Delivery</option>
                                <option value="Vendor/ Maintence" className='capitalize'>Vendor/ Maintence</option>
                                <option value="Other" className='capitalize'>Other</option>
                            </select>
                        </div>
                    </div>
                    <div className='flex items-center justify-between mt-5 gap-2.5'>
                        <div className='w-1/2'>
                            <label htmlFor="" >Location</label>
                            <select className='px-4   mt-3 py-3 pr-10 bg-[#f0f1f2] focus:bg-transparent w-full text-sm border border-gray-200 focus:border-black outline-0 rounded-md transition-all w-full' value={location} onChange={(e) => setLocation(e.target.value)}>
                                <option value="">Slect option</option>
                                <option value="Main Office-Floor 1" className='capitalize'>Main Office-Floor 1</option>
                                <option value="Main Office-Floor 2" className='capitalize'>Main Office-Floor 2</option>
                                <option value="Main Office-Floor 3" className='capitalize'>Main Office-Floor 3</option>
                                <option value="Main Office-Floor 4" className='capitalize'>Main Office-Floor 4</option>
                                <option value="Conference Office A" className='capitalize'>Conference Office A</option>
                            </select>
                        </div>
                    </div>
                    <div className='mt-5 flex items-center gap-1.5'>
                        <Checkbox />
                    </div>
                    <button disabled={loading} className={`px-6 py-2.5 min-w-[200px] rounded-md cursor-pointer text-slate-900 text-sm tracking-wider font-medium border  outline-0  mt-5  ${loading ? "cursor-not-allowed" : " border-blue-600 hover:bg-blue-800 cursor-pointer bg-transparent hover:text-white  duration-200 "}`}>{loading ? "Requesting..." : "Send Request"}</button>
                </form>
            </div>

        </>
    )
}

export default CreateVisitRequested
