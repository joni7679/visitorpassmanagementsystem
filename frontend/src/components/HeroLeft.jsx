import React from 'react'
import Button from "../components/Button"

const HeroLeft = () => {
    return (
        <>
            <div className="w-full md:w-[40%] ">
                <div className='hero-info'>
                    <h1 className='text-md font-semibold capitalize text-3xl md:text-5xl'>secure & seamless visitor management</h1>
                    <p className='mt-5 text-gray-400 text-md'>Replace outdated paper logs with a secure, QR-based digital visitor pass system. Enhance security and impress your guests from the moment they arrive.</p>
                </div>

                <div className='mt-5 flex items-center  gap-2.5 btn-group'>
                    <Button title="get started for free" />
                    <button className='px-4 py-3 cursor-pointer hover:bg-blue-600 hover:text-white duration-300 rounded border-gray-500 border capitalize'>
                        requested to demo
                    </button>
                </div>
            </div>
        </>
    )
}

export default HeroLeft
