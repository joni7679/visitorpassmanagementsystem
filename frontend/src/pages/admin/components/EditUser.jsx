import React, { useState } from 'react'
import { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import InputFiled from '../../../components/InputField'
import { AuthConext } from '../../../context/AuthContext'
import { toast } from 'react-toastify'
import { LoaderCircle } from 'lucide-react'
import { useEffect } from 'react'

const EditUser = ({ handleCloseModel }) => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [role, setRole] = useState("")
    const { editUserData, updateUser, loading, Error } = useContext(AuthConext);
    // const navigate = useNavigate()
    // edit user  logic
    console.log("editUserData", editUserData);
    useEffect(() => {
        if (editUserData) {
            setName(editUserData.name || "")
            setEmail(editUserData.email || "")
            setRole(editUserData.role || "")
        }
    }, [editUserData])

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!name || !email || !role) {
            toast.error("All Fileds is required");
            return
        }
        const userData = {
            name: name,
            email: email,
            role: role
        }
        let data = await updateUser(editUserData._id, userData)
        if (data) {
            toast.success("User Data Update success-fully");
            setName("");
            setEmail("")
            setRole("")
            handleCloseModel()
        }
        else {
            toast.error(Error)
        }
    }

    return (
        <>
            <div className="register-form p-4 bg-white rounded-2xl shadow-lg max-w-md w-full ">
                <span onClick={handleCloseModel}>close</span>
                <h4 className='font-semibold text-center'>Edit user data</h4>
                <form onSubmit={handleSubmit} className='mt-4'>
                    <InputFiled type='text' label="Name " value={name} onChange={(e) => setName(e.target.value)} placeholder="Enter Your Name Here..." />
                    <InputFiled type='text' label="Email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Enter Your Email Id Here..." />
                    <select value={role} onChange={(e) => setRole(e.target.value)} id="" className='w-full cursor-pointer capitalize mt-2 pl-10 pr-4 py-3 border shadow-md border-gray-100 rounded-xl focus:ring-2 focus:ring-green-500 focus:outline-none'>
                        <option value="">Slect Any Role</option>
                        <option value="employee">employee</option>
                        <option value="security">security</option>
                    </select>
                    <button type='submit' className={`px-4 mt-6 py-3 rounded-2xl text-white  w-full flex items-center justify-center ${loading ? "cursor-not-allowed bg-blue-300" : "bg-blue-500 hover:bg-blue-700 duration-150 cursor-pointer"}`} >
                        {
                            loading ? <LoaderCircle className='animate-spin' /> : "Update"
                        }
                    </button>
                </form>
            </div>
        </>
    )
}

export default EditUser
