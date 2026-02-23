import axios from 'axios';
import { Calendar, Mail, Phone, User, Wand } from 'lucide-react';
import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import userImg from '../../assets/user.png'
import InvitedVisitor from './InvitedVisitor';
import InViteForm from './InViteForm';
const VisitorTable = () => {
    const [visitorId, setVisitorId] = useState(null);
    const [visitordata, setvisitorData] = useState([])
    const backendApi = import.meta.env.VITE_BACKEND_URL;

    const getVisitor = async () => {
        try {
            const res = await axios.get(`${backendApi}/auth/get-visitor`);
            console.log("res", res)
            setvisitorData(res.data.data)
        } catch (error) {
            console.error("server error", error)
        }
    }

    useEffect(() => {
        getVisitor()
    }, [])

    const handleInvite = (id) => {
        console.log("id", id)
        setVisitorId(id)
    }

    const visitorById = visitordata.find(user => user._id === visitorId);
    console.log("visitorById", visitorById)

    const handleCloseModel = () => {
        setVisitorId(null)
    }

    return (
        <>
            <div className='w-full h-full relative'>
                {visitorId &&
                    <div className='absolute  top-[60%] min-h-screen cursor-pointer left-1/2 inset-[-10] -transform -translate-x-1/2  -translate-y-1/2 overly w-full h-full flex items-center justify-center  px-[10%]'>
                        <InViteForm handleCloseModel={handleCloseModel}  visitorById={visitorById}/>
                    </div>
                }
                <div class="overflow-x-auto">
                    <div className="flex gap-4 flex-wrap justify-between items-center mb-4">
                    </div>
                    <table class="min-w-full bg-white">
                        <thead class="bg-gray-50 whitespace-nowrap">
                            <tr>

                                <th class="px-4 py-3 text-left text-sm font-medium text-slate-600">
                                    <div class="flex items-center gap-1.5">
                                        <User />
                                        Full Name
                                    </div>
                                </th>
                                <th class="px-4 py-3 text-left text-sm font-medium text-slate-600">
                                    <div class="flex items-center gap-1.5">
                                        <Mail />
                                        Email
                                    </div>
                                </th>
                                <th class="px-4 py-3 text-left text-sm font-medium text-slate-600">
                                    <div class="flex items-center gap-1.5">
                                        <Phone />
                                        Phone
                                    </div>
                                </th>

                                <th class="px-4 py-3 text-left text-sm font-medium text-slate-600">
                                    <div class="flex items-center gap-1.5">
                                        <Wand />
                                        Action
                                    </div>
                                </th>
                            </tr>
                        </thead>

                        <tbody class="whitespace-nowrap divide-y divide-gray-200">

                            {
                                visitordata.length === 0 ?
                                    <tr>
                                        <td class="px-4 py-3 text-sm text-slate-900 font-medium">
                                            <div class="flex items-center cursor-pointer w-max">
                                                <p>
                                                    not data here
                                                </p>
                                            </div>
                                        </td>
                                    </tr>
                                    : visitordata.map((user, index) => {
                                        const { _id, email, name, phone, image, } = user
                                        return (
                                            <tr key={index}>

                                                <td class="px-4 py-3 text-sm text-slate-900 font-medium">
                                                    <div class="flex items-center cursor-pointer w-max">
                                                        <img src={image || userImg} alt="team-1" class="w-16 h-16 rounded-full shrink-0" />
                                                        <div class="ml-2 capitalize">
                                                            <p>{name}</p>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td class="px-4 py-3 text-sm text-slate-600 font-medium">
                                                    {email}
                                                </td>
                                                <td class="px-4 py-3 text-sm text-slate-600 font-medium">
                                                    {phone || 'N/A'}
                                                </td>


                                                <td class="flex gap-3 px-4 py-3 text-sm font-medium">
                                                    <button onClick={() => handleInvite(_id)} className='flex items-center gap-2 rounded-lg text-blue-600 bg-blue-50 border border-gray-200 px-3 py-1 cursor-pointer capitalize'>
                                                        invite visitor
                                                    </button>
                                                </td>
                                            </tr>
                                        )
                                    })}
                        </tbody>
                    </table>
                </div >
            </div >
        </>
    )
}

export default VisitorTable
