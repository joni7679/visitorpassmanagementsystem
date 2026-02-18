import { Calendar, ChartLine, Mail, Pencil, Search, Trash, User, UserCog, Wand } from 'lucide-react'
import React, { useContext, useEffect, useState } from 'react'
import { AuthConext } from '../../../context/AuthContext'
import ShimmEffectTable from '../../../components/ShimmEffectTable';
import { CSVLink } from 'react-csv';
import DeleteModel from './DeleteModel';
import { toast } from 'react-toastify';
import userImg from '../../../assets/user.png'
import EditUser from './EditUser';

const EmployeesTable = () => {
    const { getFetchSingleByIdUser, fetchAllUserByRole, userByRole, loading, handleDeleteUser } = useContext(AuthConext);
    const [userid, setUserId] = useState(null);
    const [editUserid, setEditUserId] = useState(null)
    useEffect(() => {
        fetchAllUserByRole()
    }, [])
    if (loading) return <ShimmEffectTable />

    const handleEditUser = async (id) => {
        setEditUserId(id)
        await getFetchSingleByIdUser(id)
    }

    const deleteUserId = (id) => {
        setUserId(id)
    }

    const handleCloseModel = () => {
        setUserId(null)
        setEditUserId(null)
    }

    const handleDelete = async () => {
        await handleDeleteUser(userid);
        toast.success("Successfully delete this user");
        setUserId(null)
        setTimeout(() => {
            fetchAllUserByRole()
        }, 3000)
    }

    return (
        <>
            <div className="w-full relative">
                {userid && <div onClick={handleCloseModel} className='relative w-full h-full'>
                    <div className='fixed top-1/2 cursor-pointer left-1/2 -transform -translate-x-1/2  -translate-y-1/2 overly w-full h-full flex items-center justify-center'>
                        <DeleteModel handleCloseModel={handleCloseModel} handleDelete={handleDelete} loading={loading} />
                    </div>
                </div>}
                {editUserid && <div className='relative w-full h-full'>
                    <div className='fixed top-[60%] cursor-pointer left-1/2 -transform -translate-x-1/2  -translate-y-1/2 overly w-full h-full flex items-center justify-center  '>
                        <EditUser handleCloseModel={handleCloseModel} />
                    </div>
                </div>}
                <div className="overflow-x-auto">
                    <div className="flex gap-4 flex-wrap justify-between items-center mb-4">
                        <div className="flex items-center px-4 py-2 rounded-md bg-white border border-gray-300 overflow-hidden max-w-xs w-full">
                            <Search />
                            <input type="email" placeholder="Search visiter name here..." className="w-full outline-none bg-transparent text-slate-600 text-sm" />
                        </div>
                        <div>
                            <CSVLink
                                className="text-slate-900 font-medium flex items-center px-4 py-2 rounded-md bg-white hover:bg-gray-50 border border-gray-300 overflow-hidden cursor-pointer"
                                data={userByRole}
                                filename={"employee.csv"}
                                target="_blank"
                            >Export</CSVLink>
                        </div>
                    </div>
                    <table className="min-w-full bg-white">
                        <thead className="bg-gray-50 whitespace-nowrap">
                            <tr>

                                <th className="px-4 py-3 text-left text-sm font-medium text-slate-600">
                                    <div className="flex items-center gap-1.5">
                                        <User />
                                        Full Name
                                    </div>
                                </th>
                                <th className="px-4 py-3 text-left text-sm font-medium text-slate-600">
                                    <div className="flex items-center gap-1.5">
                                        <Mail />
                                        Email
                                    </div>
                                </th>
                                <th className="px-4 py-3 text-left text-sm font-medium text-slate-600">
                                    <div className="flex items-center gap-1.5">
                                        <UserCog />
                                        Role
                                    </div>
                                </th>
                                <th className="px-4 py-3 text-left text-sm font-medium text-slate-600">
                                    <div className="flex items-center gap-1.5">
                                        <ChartLine />
                                        Status
                                    </div>
                                </th>
                                <th className="px-4 py-3 text-left text-sm font-medium text-slate-600">
                                    <div className="flex items-center gap-1.5">
                                        <Calendar />
                                        Joined date
                                    </div>
                                </th>
                                <th className="px-4 py-3 text-left text-sm font-medium text-slate-600">
                                    <div className="flex items-center gap-1.5">
                                        <Wand />
                                        Action
                                    </div>
                                </th>
                            </tr>
                        </thead>

                        <tbody className="whitespace-nowrap divide-y divide-gray-200">

                            {
                                userByRole.length === 0 ?
                                    <tr>
                                        <td className="px-4 py-3 text-sm text-slate-900 font-medium">
                                            <div className="flex items-center cursor-pointer w-max">
                                                <p className='font-semibold text-xl capitalize'>
                                                    not data here
                                                </p>
                                            </div>
                                        </td>
                                    </tr>
                                    : userByRole.map((user, index) => {
                                        const { _id, name, email, role, createdAt } = user
                                        return (
                                            <tr key={index}>

                                                <td className="px-4 py-3 text-sm text-slate-900 font-medium">
                                                    <div className="flex items-center cursor-pointer w-max">
                                                        <img src={userImg} alt="team-1" className="w-9 h-9 rounded-full shrink-0" />
                                                        <div className="ml-2 capitalize">
                                                            <p>{name}</p>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td className="px-4 py-3 text-sm text-slate-600 font-medium">
                                                    <a href="mailto:timj1456@gmail.com" className="underline">
                                                        {email}
                                                    </a>
                                                </td>
                                                <td className="px-4 py-3 text-sm text-slate-600 font-medium capitalize">
                                                    {role}
                                                </td>
                                                <td className="px-4 py-3 text-sm text-slate-600 font-medium">
                                                    <span className="inline-flex items-center border border-gray-200 gap-2 px-2 py-1 rounded-lg">
                                                        <span className="w-2 h-2 bg-green-600 rounded-full"></span>
                                                        Active
                                                    </span>
                                                </td>
                                                <td className="px-4 py-3 text-sm text-slate-600 font-medium">
                                                    {new Date(createdAt).toLocaleString("en-IN")}
                                                </td>
                                                <td className="flex gap-3 px-4 py-3 text-sm font-medium">
                                                    <button onClick={() => handleEditUser(user._id)} type="button" className="flex items-center gap-2 rounded-lg text-blue-600 bg-blue-50 border border-gray-200 px-3 py-1 cursor-pointer">
                                                        <Pencil />
                                                        Edit
                                                    </button>
                                                    <button onClick={() => deleteUserId(user._id)} type="button" className="flex items-center gap-2 rounded-lg text-red-600 bg-red-50 border border-gray-200 px-3 py-1 cursor-pointer">
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
