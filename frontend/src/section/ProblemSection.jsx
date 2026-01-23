import React from 'react'
import { problems } from '../data/problemsData'

const ProblemSection = () => {
    return (
        <>
            <section className='w-full px-[5%] py-10 bg-blue-200'>
                <div className='container mx-auto  '>
                    <h3 className='text-xl md:text-2xl font-semibold text-center capitalize'>stop using paper log books</h3>
                    <p className='text-center font-md text-gray-500 mt-5 '>
                        Manual visitor tracking is insecure, inefficient, and unprofessional. It's time to modernize your front desk.
                    </p>
                    <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-9 mt-10">
                        {problems.map((p, i) => {
                            const { icon, title, description } = p;

                            return (
                                <div key={i}
                                    className="bg-white border border-gray-200 shadow-md w-full max-w-sm rounded-lg overflow-hidden mx-auto mt-4">
                                    <div className="aspect-[3/2]">

                                    </div>

                                    <div className="p-6">
                                        <h3 className="text-slate-900 text-xl font-semibold">{title}</h3>
                                        <p className="mt-3 text-sm text-slate-500 leading-relaxed">
                                            {description}
                                        </p>

                                    </div>
                                </div>
                            )
                        })}

                    </div>

                </div>
            </section>
        </>
    )
}

export default ProblemSection
