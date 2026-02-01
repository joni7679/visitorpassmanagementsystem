import React, { useContext, useEffect } from 'react'
import Button from './Button'
import { AuthConext } from '../context/AuthContext';
import UserMenu from './UserMenu';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const { userProfile, user } = useContext(AuthConext);
    const navitems = [
        {
            label: "Features"
        },
        {
            label: "How it Works"
        },
        {
            label: "Solutions"
        },
        {
            label: "Pricing"
        }
    ]
    useEffect(() => {
        userProfile()
    }, [])
    return (
        <>
            <nav className=' py-3 px-[5%] w-full shadow-md'>
                <div className='container mx-auto flex items-center justify-between'>
                    <div className="logo">
                        <Link to={`/`} className='font-extrabold capitalize'>visiterhub</Link>
                    </div>
                    <div className="nav-center hidden md:block">
                        {
                            navitems.map((val, i) => {
                                return (
                                    <a href="#" key={i} className='text-xl  mr-6 capitalize '>{val.label}</a>
                                )
                            })
                        }
                    </div>
                    {
                        user ? <UserMenu /> : 
                            <div className=' flex items-center gap-1.5'>
                                <Link to={`/login`} className='px-4  capitalize py-3 cursor-pointer hover:bg-blue-600 hover:text-white duration-300 rounded border-gray-500 border capitalize'>
                                    login
                                </Link>
                                <Button title="Get Started" />
                            </div>
                    }
                </div>
            </nav>
        </>
    )
}

export default Navbar
