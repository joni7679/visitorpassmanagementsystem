import React, { useState } from 'react'
import InputFiled from '../../components/InputField'
import { useContext } from 'react'
import { AuthConext } from '../../context/AuthContext'
import { useNavigate } from 'react-router-dom'


const Register = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("")
    const { registerUser, loading, Error } = useContext(AuthConext);
    const navigate = useNavigate()
    // submit logic
    const handleSubmit = async (e) => {
        e.preventDefault();
        const data = await registerUser({ name, email, password })
        if (data) {
            alert("Register success fully");
            setName("");
            setEmail("");
            setPassword("")
        }
    }

    return (

        <>
            <section className='w-full min-h-screen flex items-start justify-center'>

                <div className="register-form p-4 rounded-2xl shadow-lg max-w-md w-full mt-10">
                    <h1 className='text-center font-semibold capitalize'>Register your account</h1>
                    <form onSubmit={handleSubmit}>
                        <InputFiled type='text' label="Name " value={name} onChange={(e) => setName(e.target.value)} placeholder="Enter Your Name Here..." />
                        <InputFiled type='text' label="Email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Enter Your Email Id Here..." />
                        <InputFiled type='password' label="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Enter Your Password here" />

                        {
                            Error && <div className='bg-red-300 px-4 py-7 rounded'><span className='text-red-500 capitalize'>{Error}</span></div>

                        }
                        <button type='submit' className={`px-4 mt-5 py-3 rounded-2xl text-white  w-full ${loading ? "cursor-not-allowed bg-blue-300" : "bg-blue-500 hover:bg-blue-700 duration-150 cursor-pointer"}`} >




                            {
                                loading ? "Regster...." : "Regigster"
                            }
                        </button>
                        <p className='mt-4 capitalize'>Already have a accoutn  <span className='underline'>Login now</span></p>
                    </form>
                </div>
            </section>
        </>
    )
}

export default Register
