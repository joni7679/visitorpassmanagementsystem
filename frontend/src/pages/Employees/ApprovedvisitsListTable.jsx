import React from 'react'
import Button from '../../components/Button'
import { Plus } from 'lucide-react'
const ApprovedvisitsListTable = () => {
    return (
        <>
            <div classNameName='w-full'>
                <div className='flex items-center justify-between  mt-8'>
                    <h4 className='mt-5 font-semibold capitalize '>Approved visit list</h4>
                    <Button title="new invite" icon={<Plus />} />
                </div>
                <div className="overflow-x-auto p-6">
                    <div className="flex gap-4 flex-wrap justify-between items-center mb-4">
                        <div className="flex items-center px-4 py-2 rounded-md bg-white border border-gray-300 overflow-hidden max-w-xs w-full">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 192.904 192.904"
                                className="fill-gray-600 mr-2 w-4 h-4">
                                <path
                                    d="m190.707 180.101-47.078-47.077c11.702-14.072 18.752-32.142 18.752-51.831C162.381 36.423 125.959 0 81.191 0 36.422 0 0 36.423 0 81.193c0 44.767 36.422 81.187 81.191 81.187 19.688 0 37.759-7.049 51.831-18.751l47.079 47.078a7.474 7.474 0 0 0 5.303 2.197 7.498 7.498 0 0 0 5.303-12.803zM15 81.193C15 44.694 44.693 15 81.191 15c36.497 0 66.189 29.694 66.189 66.193 0 36.496-29.692 66.187-66.189 66.187C44.693 147.38 15 117.689 15 81.193z">
                                </path>
                            </svg>
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
                                <th className="px-4 py-3 text-left text-[13px] font-medium text-slate-600 border-r border-gray-200">
                                    Name
                                </th>
                                <th className="px-4 py-3 text-left text-[13px] font-medium text-slate-600 border-r border-gray-200">
                                    Date
                                </th>
                                <th className="px-4 py-3 text-left text-[13px] font-medium text-slate-600 border-r border-gray-200">
                                    Duration
                                </th>
                                <th className="px-4 py-3 text-left text-[13px] font-medium text-slate-600 border-r border-gray-200">
                                    Status
                                </th>
                                <th className="px-4 py-3 text-left text-[13px] font-medium text-slate-600 border-r border-gray-200">
                                    ddd
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
                                    12/01/25
                                </td>

                                <td className='px-4 py-3 border-r border-gray-200'>
                                    <div className="ml-2">
                                        <p className="text-[13px] text-slate-900 font-medium">1 hour</p>
                                    </div>
                                    <div className="ml-2">
                                        <p className="text-[13px] text-slate-900 font-medium">Resume review</p>
                                    </div>
                                </td>
                                <td className="px-4 py-3 text-[13px] text-slate-900 font-medium border-r border-gray-200 flex items-center gap-1.5">

                                    <button className="px-6 py-2.5 cursor-pointer text-sm tracking-wider font-medium border-0 outline-0 text-green-700 bg-green-100 hover:bg-green-200 rounded-md">Approved</button>

                                </td>
                                <td className='px-4 py-3 border-r border-gray-200 fl'>


                                    <button className="px-6 py-2.5 cursor-pointer text-sm tracking-wider font-medium  outline-0 text-black border-[1px] capitalize rounded-md mr-2">resend pass</button>

                                    <button className="px-6 py-2.5 cursor-pointer text-sm tracking-wider font-medium border-0 outline-0 text-red-700 bg-red-100 hover:bg-red-200 rounded-md capitalize">cencel</button>
                                </td>

                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    )
}

export default ApprovedvisitsListTable
