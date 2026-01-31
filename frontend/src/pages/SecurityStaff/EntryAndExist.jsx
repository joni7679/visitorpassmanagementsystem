import React from 'react'
import ScanQRCode from './ScanQRCode'
import VisitorData from './VisitorData'

function EntryAndExist() {
    return (
        <>
            <main>
                <div className='w-full shadow-md p-5 rounded-2xl bg-white'>
                    <div className='flex items-center justify-center gap-3'>
                        <p>Verify Pss</p>
                    </div>
                    <div className='flex items-center justify-center gap-3.5 mt-5'>
                        <div className='max-w-md w-full  shadow-lg rounded-2xl h-64'>
                            <ScanQRCode />
                        </div>
                        <div className='max-w-md w-full  shadow-lg rounded-2xl h-90'>
                            
                            {/* employeeid */}
                           <VisitorData/>
                        </div>
                    </div>
                </div>
            </main>
        </>
    )
}

export default EntryAndExist
