import React from 'react'
import { Link } from 'react-router-dom'
function Header() {
  const title = "<BugraAkgun.com.tr />"
  return (
    <nav className='h-24 grid grid-cols-6  text-center '>
        <div className='col-span-2  bg-main_white hover:text-3xl transition-all'>
          <Link className='w-full h-full inline-block  text-2xl font-medium' to="/">
            <span className='relative top-6  '>{title}</span>
          </Link>
        </div>
        <div className=' bg-gray-700 text-white hover:text-3xl transition-all'>
            <Link className='w-full h-full inline-block   text-2xl font-medium ' to="/profile">
                <span className='relative top-6 uppercase '>Profile </span>
            </Link>
        </div>
        <div className=' bg-slate-900 text-white hover:text-3xl transition-all'>
          <Link className='w-full h-full inline-block text-2xl font-medium' to="/blog">
          <span className='relative top-6 uppercase '>Blog </span>
          </Link>
        </div>
        <div className=' bg-gray-700 text-white hover:text-3xl transition-all'>
          <Link className='w-full h-full inline-block text-2xl font-medium' to="/portfolio">
          <span className='relative top-6 uppercase '>Portfolio </span>
          </Link>
        </div>
        <div className='bg-slate-900 text-white hover:text-3xl transition-all'>
          <Link className='w-full h-full inline-block text-2xl font-medium' to="/contact">
          <span className='relative top-6 uppercase '>Contact </span>
          </Link>
        </div>
    </nav>
  )
}

export default Header