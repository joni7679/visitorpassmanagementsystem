import React, { useState } from 'react'

const useDashboardLayout = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleSidebar = () => {
        setIsOpen(!isOpen)
    }
    

    return (
        <>

        </>
    )
}

export default useDashboardLayout
