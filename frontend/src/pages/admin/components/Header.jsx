import { ArrowRight, Bell, BellRing, ChevronsLeft, House, LogOut, Menu, UserPen, UserRound, X } from 'lucide-react'
import React, { useContext } from 'react'
import { AuthConext } from '../../../context/AuthContext'
import UserMenu from '../../../components/UserMenu';

const Header = ({ togglebar, isOpen }) => {
    return (
        <>
            <header className="z-50 bg-white  px-[5%] py-y p-5 w-full fixed to-0 ">
                <button onClick={togglebar} className='z-50 px-4 py-2 cursor-pointer absolute top-[70%] bg-blue-500 rounded-2xl text-white'>
                    {
                       ! isOpen ? (<ChevronsLeft />) : (<ArrowRight />)
                    }
                </button>
                <div className="flex  items-center w-full  justify-between gap-2.5">

                    <div className='logo'>
                        <p className='font-semibold capitalize text-2xl'>visitorhub</p>
                    </div>
                    <div className="flex items-center gap-y-6 max-sm:flex-col z-50 w-full pb-2">
                        <div className="flex items-center justify-end gap-6 ml-auto">
                            <div className="w-1 h-10 border-l border-gray-400">
                            </div>
                            <UserMenu />
                        </div>
                    </div>
                </div>
            </header >
        </>
    )
}

export default Header
