import { Search, Trash } from 'lucide-react'
import React, { useContext, useEffect } from 'react'
import { VisitorContext } from '../../context/DataContext'
import ShimmEffectTable from '../../components/ShimmEffectTable';

const VisiterCheckinAndCheckoutTable = () => {
    const { fetchCheckInAndCheckOutVisitor, visitHistory, loading, 
    } = useContext(VisitorContext);

    useEffect(() => {
        fetchCheckInAndCheckOutVisitor();
    }, [])
    if (loading) {
        return <ShimmEffectTable/>
    }
    return (
        <>
            <div className="overflow-x-auto p-6">
                <div className="flex gap-4 flex-wrap justify-between items-center mb-4">
                    <div className="flex items-center px-4 py-2 rounded-md bg-white border border-gray-300 overflow-hidden max-w-xs w-full">
                        <Search />
                        <input type="email" placeholder="Search visiter name here..." className="w-full outline-none bg-transparent text-slate-600 text-sm" />
                    </div>
                    <button type='button'
                        className="text-slate-900 font-medium flex items-center px-4 py-2 rounded-md bg-white hover:bg-gray-50 border border-gray-300 overflow-hidden cursor-pointer">
                        Export
                    </button>
                </div>
                <table className="min-w-full border border-gray-200">
                    <thead className="bg-white whitespace-nowrap">
                        <tr className="border-b border-gray-200">
                            <th className="px-4  capitalize py-3 text-left text-[13px] font-medium text-slate-600 border-r border-gray-200">
                                visitor details
                            </th>
                            <th className="px-4  capitalize py-3 text-left text-[13px] font-medium text-slate-600 border-r border-gray-200">
                                Phone
                            </th>
                            <th className="px-4  capitalize py-3 text-left text-[13px] font-medium text-slate-600 border-r border-gray-200">
                                event type
                            </th>
                            <th className="px-4  capitalize py-3 text-left text-[13px] font-medium text-slate-600 border-r border-gray-200">
                                Check-in Time
                            </th>
                            <th className="px-4  capitalize py-3 text-left text-[13px] font-medium text-slate-600 border-r border-gray-200">
                                Check-out Time
                            </th>

                        </tr>
                    </thead>
                    <tbody className="whitespace-nowrap divide-y divide-gray-200">
                        {visitHistory.map((visitor ,index) => {
                            const { name, phone, checkInTime, checkOutTime, employeeid, status } = visitor
                            return (
                                <tr key={index} className="bg-gray-50">
                                    <td className="px-4 py-3 border-r border-gray-100">
                                        <div className="flex items-center w-max">
                                            <div className="ml-2">
                                                <p className="text-[13px] text-slate-900 font-medium">{name || "unknow"}</p>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="px-4 py-3 border-r border-gray-100">
                                        <div className="flex items-center w-max">
                                            <div className="ml-2">
                                                <p className="text-[13px] text-slate-900 font-medium">{phone || "unknow"}</p>
                                            </div>
                                        </div>
                                    </td>
                                    <td className='px-4 py-3 border-r border-gray-200'>
                                        <div className="ml-2">
                                            <p>{status || ""}</p>
                                        </div>
                                    </td>
                                    <td className='px-4 py-3 border-r border-gray-200'>
                                        {new Date(checkInTime).toLocaleString("en-IN",
                                            {
                                                day: "2-digit",
                                                month: "short",
                                                year: "numeric",
                                                hour: "2-digit",
                                                minute: "2-digit",
                                                hour12: true
                                            }
                                        )}
                                    </td>
                                    <td className='px-4 py-3 border-r border-gray-200'>
                                        {
                                            checkOutTime ?
                                                new Date(checkOutTime).toLocaleString("en-IN",
                                                    {
                                                        day: "2-digit",
                                                        month: "short",
                                                        year: "numeric",
                                                        hour: "2-digit",
                                                        minute: "2-digit",
                                                        hour12: true
                                                    }
                                                )
                                                :
                                                <span className='font-sm capitalize'>not check-out</span>
                                        }
                                    </td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
            </div>
        </>
    )
}

export default VisiterCheckinAndCheckoutTable
