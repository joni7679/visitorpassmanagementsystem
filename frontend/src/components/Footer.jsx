import { Facebook, Instagram, Linkedin, Twitter } from 'lucide-react'
import React from 'react'

const Footer = () => {

    const socialLinks = [
        {
            icon: Facebook
        },
        {
            icon: Instagram
        }
        ,
        {
            icon: Twitter
        },
        {
            icon:Linkedin 
        }
    ]
    return (
        <>
            <footer className="bg-gray-900 pt-12 pb-8 px-[5%] tracking-wide">
                <div className="max-w-screen-xl mx-auto">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                        <div>
                            <h5 className='font-semibold text-white mb-5'>VisitorHub</h5>
                            <p className='font-md text-gray-400 font-semibold capitalize'>the standard for enterprise visitor management. Secure, scalable, and simple.</p>
                        </div>

                        <div>
                            <h4 className='font-semibold text-white  capitalize'>product</h4>
                            <ul>
                                <li>
                                    <a href="#" className='block mt-2 text-white font-sans capitalize'>features</a>
                                    <a href="#" className='block mt-2 text-white font-sans capitalize'>integrations</a>
                                    <a href="#" className='block mt-2 text-white font-sans capitalize'>enterprise</a>
                                    <a href="#" className='block mt-2 text-white font-sans capitalize'>security</a>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h4 className='font-semibold text-white capitalize'>company</h4>
                            <ul>
                                <li>
                                    <a href="#" className='block mt-2 text-white font-sans capitalize'>about us</a>
                                    <a href="#" className='block mt-2 text-white font-sans capitalize'>carrers</a>
                                    <a href="#" className='block mt-2 text-white font-sans capitalize'>blog</a>
                                    <a href="#" className='block mt-2 text-white font-sans capitalize'>contact</a>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h4 className='font-semibold text-white  capitalize'>social icons</h4>
                            <div className='flex items-center justify-start mt-5 gap-1.5'>

                                {
                                    socialLinks.map((s, i) => {
                                        const Icon=s.icon
                                        return (
                                            <div className='w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center cursor-pointer hover:bg-gray-950 duration-200'>
                                                <Icon className='text-white hover:rotate-45 duration-150' />
                                            </div>
                                        )
                                    })
                                }

                            </div>
                        </div>


                    </div>

                    <p className="text-slate-400 text-sm mt-10 text-center mx-auto text-2xl">© visiterhub. All rights reserved.2026
                    </p>
                </div>
            </footer>
        </>
    )
}

export default Footer
