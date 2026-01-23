import React, { useContext, useEffect, useState } from 'react'
import { userHeaderInfo } from '../data/userHeaderInfo'
import { AuthConext } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import userImg from '../assets/user.png'
const UserMenu = () => {
    const [userName, setUserName] = useState(null)
    const { LogOutuser, user, userProfile } = useContext(AuthConext);
    const navigate = useNavigate()
    useEffect(() => {
        userProfile()
    }, [])
    useEffect(() => {
        if (user === null) return
        if (user?.name) {
            setUserName(user.name)
        }
    }, [])
    const handelUserDashboard = () => {
        navigate(`/dashboard/${user.role}`)
    }
    const handelUserProfile = () => {
        navigate(`/dashboard/${user.role}/myprofile`)
    }
    const handelLoutUser = async () => {
        const confifm = window.confirm("Are U Confirm U Went To LogOut !");
        if (confifm) {
            await LogOutuser();
            toast.success("Logout successfully");
            navigate(`/`)
        }
    }

    return (
        <>
            <div className="dropdown-menu relative flex shrink-0 group">
                <div className="flex items-center gap-4">
                    <p className="text-slate-500 text-sm capitalize">Hi, {userName} </p>
                    <img src={userImg} alt="profile-pic"
                        className="w-[38px] h-[38px] rounded-full border-2 border-gray-300 cursor-pointer" />
                </div>

                <div
                    className="dropdown-content hidden group-hover:block shadow-md p-2 bg-white rounded-md absolute top-[38px] right-0 w-56">
                    <div className="w-full space-y-2">

                        <hr className="my-2 -mx-2 border-gray-200" />
                        {
                            userHeaderInfo.map((val, index) => {
                                const Icon = val.icon
                                return (
                                    <div key={index} onClick={() => {
                                        if (val.lable === "Logout") {
                                            handelLoutUser()
                                        }
                                        if (val.lable === "Profile") {
                                            handelUserProfile()
                                        }
                                        if (val.lable === "Dashboard") {
                                            handelUserDashboard()
                                        }
                                    }}
                                        className={`text-[15px] gap-1.5 text-slate-800 font-medium cursor-pointer flex items-center p-2 rounded-md dropdown-item transition duration-300 ease-in-out ${val.lable === "Logout" ? "hover:bg-red-200 hover:text-red-500" : "hover:bg-blue-200"}`}>
                                        <Icon />
                                        <p>{val.lable}</p>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        </>
    )
}

export default UserMenu
