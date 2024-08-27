import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import Header from './Header'
import { FaGithub, FaLinkedin } from 'react-icons/fa';

function Layout() {
  return (
    <div className='min-h-svh w-full  theme-bg '>
      <div className='min-h-svh mx-auto max-w-5xl'>
      <Header />
      <Outlet/>
      </div>
      <div className='text-center gap-2 p-8 theme-bg-gray'> Developed by <span className=' font-bold text-lg'>Anuj Tiwari with ❤️</span> 
      </div>
    </div>
  )
}

export default Layout
