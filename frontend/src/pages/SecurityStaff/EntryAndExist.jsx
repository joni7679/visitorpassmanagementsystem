import React from 'react'
import Button from '../../components/Button'

function EntryAndExist() {
    return (
        <>
            <main>
                <div className='w-full shadow-md p-5 rounded-2xl bg-white'>
                    <div className='flex items-center justify-center gap-3'>
                        <Button title="Check in" />
                        <Button title="Check out" />
                    </div>
                    <div className='flex items-center justify-center gap-3.5 mt-5'>
                        <div className='max-w-md w-full bg-red-700 shadow-lg rounded-2xl h-64'></div>
                        <div className='max-w-md w-full bg-red-700 shadow-lg rounded-2xl h-64'></div>
                    </div>
                </div>
            </main>
        </>
    )
}

export default EntryAndExist
