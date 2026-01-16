import React, { useState } from 'react'
import InputFiled from '../../components/InputField'
import { useContext } from 'react'
import { AuthConext } from '../../context/AutContext'
import { useNavigate } from 'react-router-dom'


const Login = () => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("")
    const { LoginUser, loading, error } = useContext(AuthConext);
    const navigate = useNavigate()
    // submit logic
    const handleLogin = async (e) => {
        e.preventDefault();
        const data = await LoginUser({ email, password })
        if (data) {
            alert("Login success fully");
            setEmail("");
            setPassword("")
        }
    }

    return (

        <>
            <section className='w-full min-h-screen flex items-start justify-center'>
                <div className="register-form p-4 rounded-2xl shadow-lg max-w-md w-full mt-10">
                    <h1 className='text-center font-semibold capitalize'>Wellcome login your account</h1>
                    <form onSubmit={handleLogin}>
                        <InputFiled type='text' label="Email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Enter Your Email Id Here..." />
                        <InputFiled type='password' label="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Enter Your Password here" error={error} />
                        <button type='submit' className={`px-4 py-3 rounded-2xl text-white cursor-pointer w-full ${loading ? "cursor-not-allowed bg-blue-300" : "bg-blue-500 hover:bg-blue-700 duration-150"}`} >

                            {
                                loading ? "Login...." : "Login"
                            }
                        </button>
                        <p className='mt-4 capitalize'>Don't have a account  <span className='underline'>create now</span></p>
                    </form>
                </div>
            </section>


        </>
    )
}

export default Login
