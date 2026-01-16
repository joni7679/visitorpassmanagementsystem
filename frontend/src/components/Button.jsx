import React from 'react'

const Button = ({ title, onClick, icon }) => {
  return (
    <>
      <button onClick={onClick} className='px-4 py-3 flex items-center gap-1 text-white capitalize rounded bg-blue-600 hover:bg-blue-700 duration-150 cursor-pointer'>{icon && icon}{title}</button>
    </>
  )
}

export default Button
