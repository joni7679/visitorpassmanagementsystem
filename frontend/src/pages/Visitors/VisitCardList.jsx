import React from 'react'
import VisitCard from './VisitCard'

const VisitCardList = () => {
    return (
        <>
            <div className='w-full grid md:grid-cols-2  grid-cols-1 gap-2.5 px-[5%]'>
                <VisitCard />
            </div>
        </>
    )
}

export default VisitCardList
