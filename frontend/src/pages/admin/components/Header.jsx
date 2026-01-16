import { BellRing, UserRound } from 'lucide-react'
import React from 'react'

const Header = () => {
    return (
        <>
            <div className='py-3  h-[16vh] bg-white px-[5%] w-full shadow-md '>
                <div className='flex  justify-between'>
                    <h3 className='font-semibold capitalize '>
                        overview
                    </h3>
                    <div className='flex items-center justify-center gap-1.5'>
                        <div className='w-20 h-20 shadow-md rounded-full flex items-center justify-center cursor-pointer hover:bg-gray-200 duration-150'>
                            <UserRound />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Header
