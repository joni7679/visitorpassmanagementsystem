import React, { useState } from 'react'
import { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import InputFiled from '../../../components/InputField'
import { AuthConext } from '../../../context/AutContext'

const CreateStaff = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("")
    const [role, setRole] = useState("")
    const { registerUser, loading, error } = useContext(AuthConext);
    const navigate = useNavigate()
    // submit logic
    const handleSubmit = async (e) => {
        e.preventDefault();
        const data = await registerUser({ name, email, password, role })
        if (data) {
            alert("Register success fully");
            setName("");
            setEmail("");
            setPassword("");
            setRole("")
        }
    }

    return (

        <>
            <section className='w-full min-h-screen flex items-start justify-center'>
                <div className="register-form p-4 bg-white rounded-2xl shadow-lg max-w-md w-full mt-10">
                    <form onSubmit={handleSubmit}>
                        <InputFiled type='text' label="Name " value={name} onChange={(e) => setName(e.target.value)} placeholder="Enter Your Name Here..." />
                        <InputFiled type='text' label="Email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Enter Your Email Id Here..." />
                        <InputFiled type='password' label="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Enter Your Password here" error={error} />
                        <select value={role} onChange={(e)=>setRole(e.target.value)} id="" className='w-full cursor-pointer capitalize mt-2 pl-10 pr-4 py-3 border shadow-md border-gray-100 rounded-xl focus:ring-2 focus:ring-green-500 focus:outline-none'>
                            <option value="">Slect Any Role</option>
                            <option value="admin">admin</option>
                            <option value="employee">employee</option>
                            <option value="security">security</option>
                        </select>
                        <button type='submit' className={`px-4 mt-6 py-3 rounded-2xl text-white  w-full ${loading ? "cursor-not-allowed bg-blue-300" : "bg-blue-500 hover:bg-blue-700 duration-150 cursor-pointer"}`} >

                            {
                                loading ? "Regster...." : "Regigster"
                            }
                        </button>
                    </form>
                </div>
            </section>
        </>
    )
}

export default CreateStaff
