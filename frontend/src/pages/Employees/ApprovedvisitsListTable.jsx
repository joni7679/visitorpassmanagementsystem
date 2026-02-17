import React, { useContext, useEffect } from 'react'
import Button from '../../components/Button'
import { Calendar, ChartLine, Mail, Plus, Search, Timer, Trash, User, UserCog, Wand } from 'lucide-react'
import { VisitorContext } from '../../context/DataContext'
import ShimmEffectTable from '../../components/ShimmEffectTable'
import { useNavigate, useParams } from 'react-router-dom'
import { CSVLink } from 'react-csv'
import { formatDate } from '../../data/formatDate'
import useAuthhook from '../../hooks/useAuthHook'
const ApprovedvisitsListTable = () => {
    const navigate = useNavigate()
    const { user } = useAuthhook()
    const { loading, fetchApprovedVisitors, approvedVisitorsData } = useContext(VisitorContext)

    useEffect(() => {
        fetchApprovedVisitors(user._id)
    }, [])


    if (loading) {
        return <ShimmEffectTable />
    }

    const handelInviter = () => {
        navigate(`/dashboard/employee/inviter_visitor`)
    }

    const csvData = approvedVisitorsData.map((visiter, index) => ({
        SL: index + 1,
        Name: visiter.name,
        Date: formatDate(visiter.date),
        Email: visiter.email,
        Location: visiter.location,
        Phone: visiter.phone,
        Purpose: visiter.purpose,
        Status: visiter.status,
        Time: visiter.time
    }))

    return (
        <>
            <div classNameName='w-full '>
                <div className='flex items-center justify-between '>
                    <h4 className='mt-5 font-semibold capitalize '>Approved visit list</h4>
                    <Button title="new invite" onClick={handelInviter} icon={<Plus />} />
                </div>
                <div class="overflow-x-auto">
                    <div className="flex gap-4 flex-wrap justify-between items-center mb-4">
                        <div className="flex items-center px-4 py-2 rounded-md bg-white border border-gray-300 overflow-hidden max-w-xs w-full">
                            <Search />
                            <input type="email" placeholder="Search visiter name here..." className="w-full outline-none bg-transparent text-slate-600 text-sm" />
                        </div>
                        <div className='mt-5'>
                            <CSVLink
                                className="text-slate-900 font-medium flex items-center px-4 py-2 rounded-md bg-white hover:bg-gray-50 border border-gray-300 overflow-hidden cursor-pointer"
                                data={csvData}
                                filename={"approvedenployeedata.csv"}
                                target="_blank"
                            >Export</CSVLink>
                        </div>
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
                                        <Calendar />
                                        Date
                                    </div>
                                </th>
                                <th class="px-4 py-3 text-left text-sm font-medium text-slate-600">
                                    <div class="flex items-center gap-1.5">
                                        <Timer />
                                        Time & Purpose
                                    </div>
                                </th>
                                <th class="px-4 py-3 text-left text-sm font-medium text-slate-600">
                                    <div class="flex items-center gap-1.5">
                                        <ChartLine />
                                        Status
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
                                approvedVisitorsData.length === 0 ?
                                    <tr>
                                        <td class="px-4 py-3 text-sm text-slate-900 font-medium">
                                            <div class="flex items-center cursor-pointer w-max">
                                                <p>
                                                    not data here
                                                </p>
                                            </div>
                                        </td>
                                    </tr>
                                    : approvedVisitorsData.map((user, index) => {
                                        const { date, email, location, name, phone, image, purpose, status, time } = user
                                        return (
                                            <tr key={index}>

                                                <td class="px-4 py-3 text-sm text-slate-900 font-medium">
                                                    <div class="flex items-center cursor-pointer w-max">
                                                        <img src={image} alt="team-1" class="w-16 h-16 rounded-full shrink-0" />
                                                        <div class="ml-2 capitalize">
                                                            <p>{name}</p>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td class="px-4 py-3 text-sm text-slate-600 font-medium">
                                                    {new Date(date).toLocaleDateString("en-IN", {
                                                        day: "2-digit",
                                                        month: "long",
                                                        year: "numeric"
                                                    })}
                                                </td>
                                                <td class="px-4 py-3 text-sm text-slate-600 font-medium capitalize">
                                                    <div className="ml-2">
                                                        <p className="text-[13px] text-slate-900 font-medium">{time}</p>
                                                    </div>
                                                    <div className="ml-2">
                                                        <p className="text-[13px] text-slate-900 font-medium">{purpose}</p>
                                                    </div>
                                                </td>
                                                <td class="px-4 py-3 text-sm text-slate-600 font-medium">

                                                    <div className="ml-2">
                                                        <span className='px-2 py-1 capitalize text-green-700 bg-green-100  rounded-md'>{status}</span>
                                                    </div>
                                                </td>
                                                <td class="flex gap-3 px-4 py-3 text-sm font-medium">
                                                    <button className="px-6 py-2.5 cursor-pointer text-sm tracking-wider font-medium  outline-0 text-black border-[1px] capitalize rounded-md mr-2">resend pass</button>
                                                    <button type="button" class="flex items-center gap-2 rounded-lg text-red-600 bg-red-50 border border-gray-200 px-3 py-1 cursor-pointer">
                                                        <Trash />
                                                        Cancel
                                                    </button>
                                                </td>
                                            </tr>
                                        )
                                    })}
                        </tbody>
                    </table>
                </div >
            </div>


        </>
    )
}

export default ApprovedvisitsListTable
