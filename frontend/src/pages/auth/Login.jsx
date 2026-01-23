import React, { useState } from 'react'
import InputFiled from '../../components/InputField'
import { useContext } from 'react'
import { AuthConext } from '../../context/AuthContext'
import { Link, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'


const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("")
    const { LoginUser, loading, Error } = useContext(AuthConext);
    const navigate = useNavigate()
    // submit logic
    const handleLogin = async (e) => {
        e.preventDefault();
        const data = await LoginUser({ email, password });
        if (data) {
            toast.success("Login success fully");
            const role = data.role;
            if (role === "admin") {
                navigate(`/dashboard/admin`)
            }
            if (role === "security") {
                navigate(`/dashboard/securitystaff`)
            }
            if (role === "employee") {
                navigate(`/dashboard/employee`)
            }
            if (role === "visitor") {
                navigate(`/dashboard/visitor`)
            }
        }
    }

    return (

        <>
            <section className='w-full min-h-screen flex items-start justify-center'>
                <div className="register-form p-4 rounded-2xl shadow-lg max-w-md w-full mt-10">
                    <h1 className='text-center font-semibold capitalize'>Wellcome login your account</h1>
                    <form onSubmit={handleLogin}>
                        <InputFiled type='text' label="Email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Enter Your Email Id Here..." />
                        <InputFiled type='password' label="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Enter Your Password here" />
                        {
                            Error && <div className='bg-red-300 px-4 py-7 rounded'><span className='text-red-500 capitalize'>{Error}</span></div>
                        }
                        <button type='submit' className={`px-4 py-3 mt-5 rounded-2xl text-white  w-full ${loading ? "cursor-not-allowed bg-blue-300" : "bg-blue-500 hover:bg-blue-700 duration-150 cursor-pointer"}`} >
                            {
                                loading ? "Login...." : "Login"
                            }
                        </button>
                        <p className='mt-4 capitalize'>Don't have a account  <Link to={`/register`} className='underline text-green-600'>create now</Link></p>
                    </form>
                </div>
            </section>


        </>
    )
}

export default Login
