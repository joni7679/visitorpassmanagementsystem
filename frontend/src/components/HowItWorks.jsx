import React from 'react'

const HowItWorks = () => {
    const howItWorksData = [
        {
            id: 1,
            title: "Register",
            desc: "host invite visitor or visitor self regisiter via the web portal"
        },
        {
            id: 2,
            title: "schedule",
            desc: "visitor details are confirmed and added to the organzation calender"
        }
        ,
        {
            id: 3,
            title: "generate qr ",
            desc: "employee approved visitor requested than a unique secure qr pass is generated and emiled to the visitor"
        },
        {
            id: 4,
            title: "check-in",
            desc: "a unique secure qr pass is generated and emiled to the visitor"
        }
    ]
    return (
        <>
            <section className='works-sction px-[5%] py-8'>
                <h3 className='font-semibold text-2xl md:text-4xl text-center capitalize'>how it works</h3>
                <p className='text-center  capitalize mt-5 text-gray-800'>a stremlined flow for hots, visitor , and security tearms.</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-5">
                    {
                        howItWorksData.map((v) => {
                            const { id, title, desc } = v
                            return (
                                <div key={v.id} className="bg-white shadow-sm border border-gray-200 p-2 w-full max-w-sm rounded-lg overflow-hidden mx-auto mt-4">
                                    <div className='w-10 h-10 bg-blue-800 rounded-b-full flex items-center justify-center mx-auto mb-6'>
                                        <div className='font-medium text-white  inline-block'>{id}</div>
                                    </div>
                                    <p className='font-medium capitalize text-center'>{title}</p>
                                    <p className='font-sm capitalize text-center text-gray-700'>{desc}</p>
                                </div>
                            )
                        })
                    }
                </div>
            </section>
        </>
    )
}

export default HowItWorks
