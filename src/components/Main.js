import React from 'react'
import { BsFillEmojiHeartEyesFill,BsFillEmojiSmileFill, BsFillEmojiSmileUpsideDownFill ,BsEmojiLaughingFill } from "react-icons/bs";
import { Link } from 'react-router-dom';

function Main() {
  return (
    <>
        <div className="grid grid-cols-2 grid-rows-2 h-[90vh] "> 
          <div className=' w-full h-full  bg-profile bg-cover hover:shadow-main ease-in-out duration-75'>
            <Link to='/profile' className='w-full h-full bg-black/25 grid  justify-center content-center  '>
              <span className=' text-6xl text-main_icons flex justify-center'><BsFillEmojiSmileFill /> </span>
              <div className='text-white  font-black font-Lato tracking-wide text-4xl'>
                PROFILE
              </div>
            </Link>
          </div>
          <div className='w-full h-full bg-blog bg-cover hover:shadow-main ease-in-out duration-75'>
            <Link to='/blog' className='w-full h-full bg-black/25 grid  justify-center content-center'>
              <span className=' text-6xl text-main_icons flex justify-center'><BsFillEmojiHeartEyesFill /> </span>
              <div className='text-white  font-black font-Lato tracking-wide text-4xl'>
                BLOG 
              </div>
            </Link>
          </div>
          <div className='w-full h-full bg-portfolio bg-cover hover:shadow-main ease-in-out duration-75'>
            <Link to='/portfolio' className='w-full h-full bg-black/25 grid  justify-center content-center'>
              <span className=' text-6xl text-main_icons flex justify-center'><BsFillEmojiSmileUpsideDownFill /> </span>
              <div className='text-white  font-black font-Lato tracking-wide text-4xl'>
                PORTFOLIO
              </div>
            </Link>
          </div>
          <div className='w-full h-full bg-contact bg-cover hover:shadow-main ease-in-out duration-75'>
            <Link to='/contact' className='w-full h-full bg-black/25 grid  justify-center content-center'>
              <span className=' text-6xl text-main_icons flex justify-center'><BsEmojiLaughingFill /> </span>
              <div className='text-white  font-black font-Lato tracking-wide text-4xl'>
                CONTACT
              </div>
            </Link>
          </div>
      </div> 
      <div className='flex justify-center items-center h-[10vh] bg-footer'>
        <span className='text-gray-200'>
          2023 Buğra Akgün tüm hakları saklıdır.
        </span>
      </div>
    </>
  )
}

export default Main