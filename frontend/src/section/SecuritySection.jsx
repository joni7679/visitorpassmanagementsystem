import React from 'react'
import Button from '../components/Button'
import securityImg from "../assets/imges/security.png"

const SecuritySection = () => {
    return (
        <>
            <section className="px-[5%] py-3 ">
                <div className="container mx-auto flex-col md:flex-row flex items-center gap-2 justify-between min-h-screen">
                    <div className="w-full md:w-[40%] ">
                        <div className='hero-info'>
                            <h2 className='text-md font-semibold capitalize text-3xl md:text-5xl'> Enterprise-Grade Security</h2>
                            <p className='mt-5 text-gray-400 text-md'>  Built on a robust MERN stack architecture with security at its core. Your data is encrypted, backed up, and compliant with global standards.</p>
                        </div>
                    </div>
                    <div className="w-full md:w-1/2 ">
                        <div className="hero-img w-full rounded-2xl overflow-hidden">
                            <img src={securityImg} alt="security-img" loading="lazy" className='w-full h-full object-cover ' />
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default SecuritySection
