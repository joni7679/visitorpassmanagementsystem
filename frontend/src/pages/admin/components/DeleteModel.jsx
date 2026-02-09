import React from 'react'
import { MdDelete } from "react-icons/md";
import { ImCancelCircle } from "react-icons/im";

const DeleteModel = ({ handleCloseModel, handleDelete, loading }) => {

    return (
        <>
            <div className='w-full max-w-md rounded-3xl shadow-2xl px-3 py-5 relative h-52 bg-white'>
                <MdDelete className='text-5xl text-red-600 absolute left-1/2 top-[-0%]' />
                <div className='mt-12'>
                    <p className='font-semibold  capitalize text-center '>
                        are u sure you want to delete this user
                    </p>
                    <p className='text-gray-600 text-center capitalize'>
                        this action cannot be undone
                    </p>
                    <div className='flex gap-3.5'>
                        <button onClick={handleCloseModel} type='button' className='px-4 py-2 flex bg-gray-400 text-white items-center gap-2 rounded-2xl  capitalize text-
                        xl w-full mt-5 cursor-pointer  '>cancel
                            <ImCancelCircle className='inline-block' />
                        </button>
                        <button disabled={loading} onClick={handleDelete} type='submit' className={`px-4 cursor-pointer py-2 rounded-2xl  text-white capitalize text-
                        xl w-full mt-5  ${loading?"cursor-not-allowed bg-red-400":"cursor-pointer bg-red-500 hover:bg-red-600  duration-150 "}`}>
                            {
                                loading ? "Deleting..." : "Delete"
                            }
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default DeleteModel