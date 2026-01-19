import React, { useState } from 'react'

const Checkbox = () => {
    const [isChecked, setIsChecked] = useState(false)

    const handleCheckboxChange = () => {
        setIsChecked(!isChecked);
        console.log("checked", isChecked);
    }

    return (
        <label className='flex items-center cursor-pointer gap-2  text-black'>
            <div className='relative'>
                <input
                    type='checkbox'
                    checked={isChecked}
                    onChange={handleCheckboxChange}
                    className={` ${!isChecked ? "border-green-900" : "bg-gray-500"}`}
                />

            </div>
            <span className='capitalize mr-2.5'>i am confirm the information provided is correct</span>
        </label>
    )
}

export default Checkbox
