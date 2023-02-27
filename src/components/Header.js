import React from 'react'
import { Link } from 'react-router-dom'
import { BsMailbox, BsLinkedin, BsGithub, BsTwitter } from 'react-icons/bs'
function Header() {
  const title = "<BugraAkgun.com.tr />"
  return (
    <>
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
      <div className='h-[40rem] bg-about-section bg-cover '>
        <div className='grid grid-cols-2'>
          <div className='col-start-2 pt-40'>
            <span className='text-3xl font-normal text-white tracking-wide block'>
              Hi, I' Am
            </span>
            <span className='text-4xl font-black text-white tracking-widest block mt-3'>
              MUHAMMED BUGRA AKGÜN
            </span>
            <span className='text-xl font-normal text-theme_red tracking-wide block mt-3'>
              Junior Front End Developer
            </span>
            <div className='mt-12'>
              <a href="#" className='text-3xl bg-main_white inline-block rounded-full p-3 hover:opacity-80 transition-all hover:text-blue-600'>
                <BsMailbox />
              </a>
              <a href="#" className='text-3xl bg-main_white inline-block rounded-full p-3 ml-4 hover:opacity-80 transition-all hover:text-blue-600'>
                <BsLinkedin />
              </a>
              <a href="#" className='text-3xl bg-main_white inline-block rounded-full p-3 ml-4 hover:opacity-80 transition-all hover:text-blue-600'>
                <BsGithub />
              </a>
              <a href="#" className='text-3xl bg-main_white inline-block rounded-full p-3 ml-4 hover:opacity-80 transition-all hover:text-blue-600'>
                <BsTwitter />
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Header