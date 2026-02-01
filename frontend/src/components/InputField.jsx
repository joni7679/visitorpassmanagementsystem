import React from 'react'

const InputFiled = ({ icon, SecIcon, label, type = "text", readOnly, onChange, value, placeholder , onIconClike}) => {
    return (
        <>
            <div className='mb-4'>
                {
                    label && <label className='capitalize'>{label}</label>
                }
                <div className='relative'>
                    <input type={type} value={value} onChange={onChange} readOnly={readOnly} className={`px-4    mt-3 py-3 pr-10 bg-[#f0f1f2] focus:bg-transparent w-full text-sm border border-gray-200 focus:border-black outline-0 rounded-md transition-all `} placeholder={placeholder} />
                    {
                        SecIcon &&
                        <span onClick={onIconClike} className='absolute  right-3 top-[35%] cursor-pointer'>
                            <SecIcon />
                        </span>
                    }
                </div>

            </div>
        </>
    )
}

export default InputFiled
