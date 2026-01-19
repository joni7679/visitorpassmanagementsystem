import React, { useContext, useEffect } from 'react'
import Button from './Button'
import { AuthConext } from '../context/AuthContext';
import UserMenu from './UserMenu';

const Navbar = () => {
    const { userProfile, user } = useContext(AuthConext);
    const navitems = [
        {
            label: "Home"
        },
        {
            label: "About us"
        },
        {
            label: "how it works"
        }
    ]

    useEffect(()=>{
        userProfile()
    },[])
    return (
        <>
            <nav className=' py-3 px-[5%] w-full shadow-md'>
                <div className='container mx-auto flex items-center justify-between'>
                    <div className="logo">
                        <h1 className='font-extrabold capitalize'>visiterhub</h1>
                    </div>
                    <div className="nav-center">
                        {
                            navitems.map((val, i) => {
                                return (
                                    <a href="#" key={i} className='text-xl capitalize mr-6 '>{val.label}</a>
                                )
                            })
                        }
                    </div>
                    {
                        user ? <UserMenu/> : <Button title="Get Started" />
                    }
                </div>
            </nav>
        </>
    )
}

export default Navbar
