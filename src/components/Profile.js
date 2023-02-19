import React from 'react'
import Header from './Header'
import {BsMailbox , BsLinkedin , BsGithub, BsTwitter} from 'react-icons/bs'
function Profile() {
  return (
    <>
      <Header />
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
              <a href="#" className='text-3xl bg-white inline-block rounded-full p-3 hover:opacity-80 transition-all hover:text-blue-600'>
                <BsMailbox />
              </a>
              <a href="#" className='text-3xl bg-white inline-block rounded-full p-3 ml-4 hover:opacity-80 transition-all hover:text-blue-600'>
                <BsLinkedin />
              </a>
              <a href="#" className='text-3xl bg-white inline-block rounded-full p-3 ml-4 hover:opacity-80 transition-all hover:text-blue-600'>
                <BsGithub />
              </a>
              <a href="#" className='text-3xl bg-white inline-block rounded-full p-3 ml-4 hover:opacity-80 transition-all hover:text-blue-600'>
                <BsTwitter />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className='h-[36rem] bg-white flex flex-col justify-center items-center px-96'>
          <h1 className='text-4xl font-black tracking-widest'>ABOUT ME</h1>
          <h2 className='text-xl font-medium tracking-wider mt-9'>Junior Front End Developer</h2>
          <p className='text-lg font-light tracking-wider mt-9'>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
          when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into 
          electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of 
          Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
          </p>
          <div className=' mt-16'>
            <button className=' px-16 py-5 border-theme_red border  transition-all hover:opacity-80'>
              <a href="#" className='text-theme_red text-lg  font-medium '>Hire Me</a>
            </button>
            <button className=' px-16 py-5 border-theme_red border ml-10 transition-all hover:opacity-80'>
              <a href="#" className='text-theme_red text-lg  font-medium'>Download Resume</a>
            </button>
          </div>
      </div>
    </>
  )
}

export default Profile