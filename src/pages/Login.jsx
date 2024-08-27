import React, { useRef, useState } from 'react'
import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';

function Login() {

  const { login } = useAuth()

  const navigate = useNavigate()

  const [error, setError] = useState();

  const email = useRef();
  const password = useRef();

  const handelLogin = (e) => {
    e.preventDefault()
    const userData = {
      email: email.current.value,
      password: password.current.value,
    };
    const Errors = login(userData);
    if (!Errors) {
      navigate("/")
    }
    setError(Errors)
  }

  return (
    <>
      <form onSubmit={handelLogin} className='mt-24 flex flex-col  gap-4 w-[400px] mx-auto'>
        <h1 className='text-center font-extrabold text-xl my-4'>Login</h1>
        <input ref={email} className='border-2 theme-bg-gray rounded px-2 py-px border-gray-500/30' type="email" required name='email' placeholder='ibrar@email.com' />
        <input ref={password} className='border-2 theme-bg-gray rounded px-2 py-px border-gray-500/30' type="password" required name='password' placeholder='password' />
        <button type='submit' className='theme-bg-i rounded text-lg font-semibold p-1 ' >Login</button>
        <p className='w-max mx-auto  text-red-600'>{error}</p>
      </form>
    </>
  )
}

export default Login
