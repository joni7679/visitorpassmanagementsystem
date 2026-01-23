import React, { useState } from "react";
import HeroLeft from "./HeroLeft";
import HeroRight from "./HeroRight";

const Hero = () => {
    return (
        <>
            <section className="px-[5%] py-3 ">
                <div className="container mx-auto flex-col md:flex-row flex items-center gap-2 justify-between min-h-screen">
                    <HeroLeft />
                    <HeroRight />
                </div>
            </section>
        </>
    );
};

export default Hero;




