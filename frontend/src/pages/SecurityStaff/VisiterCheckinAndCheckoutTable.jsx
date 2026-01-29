import { Search, Trash } from 'lucide-react'
import React from 'react'

const VisiterCheckinAndCheckoutTable = () => {
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
                                host Name
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
                            <th className="px-4  capitalize py-3 text-left text-[13px] font-medium text-slate-600 border-r border-gray-200">
                                actions
                            </th>
                        </tr>
                    </thead>
                    <tbody className="whitespace-nowrap divide-y divide-gray-200">
                        <tr className="odd:bg-gray-50">
                            <td className="px-4 py-3 border-r border-gray-200">
                                <div className="flex items-center w-max">
                                    <div className="ml-2">
                                        <p className="text-[13px] text-slate-900 font-medium">Abhijit halder</p>
                                    </div>
                                </div>
                            </td>
                            <td className='px-4 py-3 border-r border-gray-200'>
                                Mr.Rahul Das
                            </td>
                            <td className='px-4 py-3 border-r border-gray-200'>
                                <div className="ml-2">
                                    <p>check out</p>
                                </div>
                            </td>
                            <td className='px-4 py-3 border-r border-gray-200'>
                                10:00 am
                            </td>
                            <td className='px-4 py-3 border-r border-gray-200'>
                                11:00 am
                            </td>
                            <td className='px-4 py-3 border-r border-gray-200'>
                                <div className="ml-2">
                                    <button className="px-3 py-1 rounded-lg  text-sm tracking-wider font-medium border-0 outline-0 text-blue-700 bg-blue-100  capitalize">complete</button>
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </>
    )
}

export default VisiterCheckinAndCheckoutTable
