import { Calendar, ChartLine, Mail, Pencil, Trash, User, UserCog, Wand } from 'lucide-react'
import React, { useContext, useEffect } from 'react'
import { AuthConext } from '../../../context/AuthContext'
import ShimmEffectTable from '../../../components/ShimmEffectTable';

const EmployeesTable = () => {
    const { fetchAllUserByRole, userByRole, loading } = useContext(AuthConext);

    useEffect(() => {
        fetchAllUserByRole()
    }, [])
    if (loading) return <ShimmEffectTable />
    return (
        <>
            <div className="w-full">
                <div class="overflow-x-auto">
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
                                        <UserCog />
                                        Role
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
                                        <Calendar />
                                        Joined date
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
                                userByRole.length === 0 ?
                                    <tr>
                                        <td class="px-4 py-3 text-sm text-slate-900 font-medium">
                                            <div class="flex items-center cursor-pointer w-max">
                                                <p>
                                                    not data here
                                                </p>
                                            </div>
                                        </td>
                                    </tr>
                                    : userByRole.map((user, index) => {
                                        const { name, email, role, createdAt } = user
                                        return (
                                            <tr key={index}>

                                                <td class="px-4 py-3 text-sm text-slate-900 font-medium">
                                                    <div class="flex items-center cursor-pointer w-max">
                                                        <img src='https://readymadeui.com/team-1.webp' alt="team-1" class="w-9 h-9 rounded-full shrink-0" />
                                                        <div class="ml-2 capitalize">
                                                            <p>{name}</p>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td class="px-4 py-3 text-sm text-slate-600 font-medium">
                                                    <a href="mailto:timj1456@gmail.com" class="underline">
                                                        {email}
                                                    </a>
                                                </td>
                                                <td class="px-4 py-3 text-sm text-slate-600 font-medium capitalize">
                                                    {role}
                                                </td>
                                                <td class="px-4 py-3 text-sm text-slate-600 font-medium">
                                                    <span class="inline-flex items-center border border-gray-200 gap-2 px-2 py-1 rounded-lg">
                                                        <span class="w-2 h-2 bg-green-600 rounded-full"></span>
                                                        Active
                                                    </span>
                                                </td>
                                                <td class="px-4 py-3 text-sm text-slate-600 font-medium">
                                                  {new Date(createdAt).toLocaleString("en-IN")}
                                                </td>
                                                <td class="flex gap-3 px-4 py-3 text-sm font-medium">
                                                    <button type="button" class="flex items-center gap-2 rounded-lg text-blue-600 bg-blue-50 border border-gray-200 px-3 py-1 cursor-pointer">
                                                        <Pencil />
                                                        Edit
                                                    </button>
                                                    <button type="button" class="flex items-center gap-2 rounded-lg text-red-600 bg-red-50 border border-gray-200 px-3 py-1 cursor-pointer">
                                                        <Trash />
                                                        Delete
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

export default EmployeesTable
