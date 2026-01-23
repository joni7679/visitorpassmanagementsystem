import React from 'react'
import heroImg from "../assets/imges/bannerImg.png"
const HeroRight = () => {
    return (
        <>
            <div className="w-full md:w-1/2 ">
                <div className="hero-img w-full rounded-2xl overflow-hidden">
                    <img src={heroImg} alt="" loading="lazy" className='w-full h-full object-cover ' />
                </div>
            </div>
        </>
    )
}

export default HeroRight
