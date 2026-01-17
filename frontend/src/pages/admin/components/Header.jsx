import { Bell, BellRing, House, LogOut, UserPen, UserRound } from 'lucide-react'
import React, { useContext } from 'react'
import { AuthConext } from '../../../context/AuthContext'
import { useEffect } from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Header = () => {
    const [userName, setUserName] = useState(null)
    const { userProfile, user, LogOutuser } = useContext(AuthConext);
    const navigate = useNavigate()
    useEffect(() => {
        userProfile()
        if (user === null) return
        if (user.name) {
            setUserName(user.name)
        }
    }, [user])

    const userHeaderInfo = [

        {
            icon: House,
            lable: "Dashboard"
        },
        {
            icon: UserPen,
            lable: "Profile"
        },
        {
            icon: LogOut,
            lable: "Logout"
        },

    ]

    const handelLoutUser = async () => {
        const confifm = window.confirm("Are U Confirm U Went To LogOut !");
        if (confifm) {
            await LogOutuser();
            alert("Logout successfully");
            navigate(`/`)
        }
    }

    return (
        <>
            <header className="z-50 bg-white  px-[5%] py-7">
                <div className="flex flex-wrap items-center w-full relative tracking-wide">
                    <div className="flex items-center gap-y-6 max-sm:flex-col z-50 w-full pb-2">
                        <div className="flex items-center justify-end gap-6 ml-auto">
                            <div className="flex items-center space-x-6">
                                <div
                                    className="w-9 h-[38px] flex items-center justify-center rounded-xl relative bg-blue-200 cursor-pointer">
                                    <Bell classNam='text-blue-400' />
                                    <span
                                        className="absolute w-5 h-5 flex items-center justify-center -right-2.5 -top-2.5 text-[10px] rounded-full bg-blue-600 text-white">21</span>
                                </div>
                            </div>
                            <div className="w-1 h-10 border-l border-gray-400">
                            </div>
                            <div className="dropdown-menu relative flex shrink-0 group">
                                <div className="flex items-center gap-4">
                                    <p className="text-slate-500 text-sm capitalize">Hi, {userName} </p>
                                    <img src="https://readymadeui.com/team-1.webp" alt="profile-pic"
                                        className="w-[38px] h-[38px] rounded-full border-2 border-gray-300 cursor-pointer" />
                                </div>

                                <div
                                    className="dropdown-content hidden group-hover:block shadow-md p-2 bg-white rounded-md absolute top-[38px] right-0 w-56">
                                    <div className="w-full space-y-2">

                                        <hr className="my-2 -mx-2 border-gray-200" />
                                        {
                                            userHeaderInfo.map((val) => {
                                                const Icon = val.icon
                                                return (
                                                    <div onClick={() => {
                                                        if (val.lable === "Logout") {
                                                            handelLoutUser()
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
                        </div>
                    </div>
                </div>
            </header >
        </>
    )
}

export default Header
