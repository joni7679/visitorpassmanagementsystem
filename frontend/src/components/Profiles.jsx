import React, { useContext, useEffect, useState } from 'react'
import { AuthConext } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';
import userImg from '../assets/user.png'
import bannerImg from "../assets/banner.avif"

const Profiles = () => {
    const { userProfile, user } = useContext(AuthConext);
    
    useEffect(() => {
        userProfile()
    }, [])

    if (!user) {
        return <h1>loading profile....</h1>
    }

    return (
        <>
            <div className='w-full min-h-screen flex items-start  overflow-hidden justify-center '>
                <div className='max-w-md mt-14 w-full shadow-lg relative rounded-2xl bg-white'>
                    <div className="banner-img w-full h-28  ">
                        <img src={bannerImg} className='w-full h-full object-cover' alt="" />
                    </div>
                    <div className="user-profile-img w-20 h-20 bg-green-600 rounded-full -mt-[58px] -mb-[58px] mx-auto">
                        <img src={userImg} className='w-full h-full object-cover' alt="" />
                    </div>
                    <div className="user info p-5 mt-14">
                        <p className='text-center font-md capitalize'>{user.name}</p>
                        <p className='text-center font-md capitalize'>{user.role}</p>
                        <p className='text-center font-semibold'>About me</p>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iusto amet quidem autem accusantium sit soluta. Inventore mollitia fugiat corrupti quae? Quam, doloribus odio?</p>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Profiles
