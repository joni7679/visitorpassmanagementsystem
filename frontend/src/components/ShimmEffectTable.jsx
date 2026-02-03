import React from 'react'

const ShimmEffectTable = () => {
    const arry = new Array(5).fill(0)
    return (
        <>
            <div classNameName='w-90'>
                <div className="max-w-md mt-[20%]">
                    <div className="flex gap-4 flex-wrap justify-between items-center mb-4">
                    </div>
                    <table className="min-w-full border border-gray-200">
                        <thead className="bg-white whitespace-nowrap">
                            <tr className="border-b border-gray-200">
                                <th className="bg-gray-300 animate-pulse  px-4 py-3 text-left text-[13px] font-medium text-slate-600 border-r border-gray-200">

                                </th>
                                <th className="bg-gray-300 animate-pulse  px-4 py-3 text-left text-[13px] font-medium text-slate-600 border-r border-gray-200">

                                </th>
                                <th className="bg-gray-300 animate-pulse  px-4 py-3 text-left text-[13px] font-medium text-slate-600 border-r border-gray-200">

                                </th>
                                <th className="bg-gray-300 animate-pulse  px-4 py-3 text-left text-[13px] font-medium text-slate-600 border-r border-gray-200">

                                </th>
                                <th className="bg-gray-300 animate-pulse  px-4 capitalize py-3 text-left text-[13px] font-medium text-slate-600 border-r border-gray-200">

                                </th>
                                <th className="bg-gray-300 animate-pulse  px-4 py-3 text-left text-[13px] font-medium text-slate-600 border-r border-gray-200">

                                </th>
                            </tr>
                        </thead>
                        <tbody className="whitespace-nowrap divide-y bg-gray-300 animate-pulse">


                            {
                                arry.map((_, index) => {

                                    return (
                                        <tr key={index} className="bg-gray-50">
                                            <td className="px-4 py-3 border-r border-gray-400 animate-pulse">
                                                <div className="flex items-center w-max">
                                                    <div className="ml-2">

                                                    </div>
                                                </div>
                                            </td>
                                            <td className='px-4 py-3 border-r border-gray-400 animate-pulse'>

                                            </td>
                                            <td className='px-4 py-3 border-r border-gray-400 animate-pulse'>
                                                <div className="ml-2">

                                                </div>
                                            </td>
                                            <td className='px-4 py-3 border-r border-gray-400 animate-pulse'>
                                                <div className="ml-2">
                                                </div>
                                                <div className="ml-2">
                                                </div>
                                            </td>
                                            <td className='px-4 py-3 border-r border-gray-400 animate-pulse'>
                                            </td>
                                            <td className="px-4 py-3 text-[13px] text-slate-900 font-medium border-r border-gray-400 animate-pulse flex items-center gap-1.5">
                                            </td>
                                        </tr>
                                    )
                                })
                            }
                        </tbody>
                    </table>
                </div>
            </div >
        </>
    )
}

export default ShimmEffectTable
