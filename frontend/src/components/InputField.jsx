import React from 'react'

const InputFiled = ({ icon, secIcon, label, type = "text",readOnly, onChange, value, placeholder }) => {
    return (
        <>
            <div className='mb-4'>
                {
                    label && <label className='capitalize'>{label}</label>
                }
                <input type={type} value={value} onChange={onChange} readOnly={readOnly} className={`px-4   mt-3 py-3 pr-10 bg-[#f0f1f2] focus:bg-transparent w-full text-sm border border-gray-200 focus:border-black outline-0 rounded-md transition-all `} placeholder={placeholder} />
            </div>
        </>
    )
}

export default InputFiled
