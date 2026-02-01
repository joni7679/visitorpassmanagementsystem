import { Bell, BellRing, House, LogOut, UserPen, UserRound } from 'lucide-react'
import React, { useContext } from 'react'
import { AuthConext } from '../../../context/AuthContext'
import UserMenu from '../../../components/UserMenu';

const Header = () => {
    return (
        <>
            <header className="z-50 bg-white  px-[5%] py-y p-5">
                <div className="flex flex-wrap items-center w-full relative tracking-wide">
                    <div className="flex items-center gap-y-6 max-sm:flex-col z-50 w-full pb-2">
                        <div className="flex items-center justify-end gap-6 ml-auto">
                            <div className="flex items-center space-x-6">
                                
                            </div>
                            <div className="w-1 h-10 border-l border-gray-400">
                            </div>
                            <UserMenu/>
                        </div>
                    </div>
                </div>
            </header >
        </>
    )
}

export default Header
