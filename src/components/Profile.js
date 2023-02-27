import React from 'react'
import Header from './Header'
import Footer from './Footer'
import pp1 from '../img/profile-pp-1.png'

import { DiHtml5, DiJavascript1, DiReact, DiCss3 } from 'react-icons/di'
import Slider from "react-slick";
function Profile() {
  const settings = {
    autoplay: true,
    autoplaySpeed: 5000,
    arrows: false,
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 2,
    slidesToScroll: 1
  };
  return (
    <>
      <Header />
      <div className='h-[36rem] bg-main_white flex flex-col justify-center items-center px-96'>
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
      <div className='h-[38rem] bg-table bg-cover  bg-blend-darken bg-dark_effect flex flex-col justify-center items-center'>
        <span className='text-white text-4xl font-black tracking-widest'>MY SKILLS</span>
        <span className='text-white text-2xl font-light tracking-widest mt-10'>Web Developer</span>
        <div className='flex flex-row text-center mt-12 gap-10'>
          <div className='h-60 w-60 rounded-full border-4 border-theme_red bg-main_white flex justify-center items-center flex-col gap-y-3 hover:border-8 transition-all'>
            <span href="#" className='text-4xl bg-theme_red inline-block rounded-full p-3 hover:opacity-80 transition-all hover:text-blue-600'>
              <DiJavascript1 className='text-white' />
            </span>
            <h3 className='text-black font-black text-2xl -tracking-wide'>JavaScript</h3>
          </div>
          <div className='h-60 w-60 rounded-full border-4 border-theme_red bg-main_white flex justify-center items-center flex-col gap-y-3 hover:border-8 transition-all'>
            <span href="#" className='text-4xl bg-theme_red inline-block rounded-full p-3 hover:opacity-80 transition-all hover:text-blue-600'>
              <DiReact className='text-white' />
            </span>
            <h3 className='text-black font-black text-2xl -tracking-wide'>ReactJS</h3>
          </div>
          <div className='h-60 w-60 rounded-full border-4 border-theme_red bg-main_white flex justify-center items-center flex-col gap-y-3 hover:border-8 transition-all'>
            <span href="#" className='text-4xl bg-theme_red inline-block rounded-full p-3 hover:opacity-80 transition-all hover:text-blue-600'>
              <DiHtml5 className='text-white' />
            </span>
            <h3 className='text-black font-black text-2xl -tracking-wide'>HTML5</h3>
          </div>
          <div className='h-60 w-60 rounded-full border-4 border-theme_red bg-main_white flex justify-center items-center flex-col gap-y-3 hover:border-8 transition-all'>
            <span href="#" className='text-4xl bg-theme_red inline-block rounded-full p-3 hover:opacity-80 transition-all hover:text-blue-600'>
              <DiCss3 className='text-white' />
            </span>
            <h3 className='text-black font-black text-2xl -tracking-wide'>CSS3</h3>
          </div>
        </div>
      </div>
      <div className='flex flex-col justify-center items-center bg-main_white'>
        <div className='mt-28 text-center'>
          <h2 className='text-black font-black text-3xl tracking-widest'>
            WORK EXPERIENCE
          </h2>
          <span className=' font-light text-xl tracking-widest my-11 inline-block'>
            Web & Embedded Aplication
          </span>
        </div>
        <div className='w-2/3 text-center grid gap-y-28'>
          <div className='bg-experience_1 bg-dark_effect bg-blend-darken'>
            <h3 className='text-white text-3xl tracking-widest font-black pt-24'>
              ORDULU TEKNOLOJI
            </h3>
            <span className='text-theme_red text-xl pt-6 inline-block  font-normal'>
              FEBRUARY 2023 -
            </span>
            <p className='px-48 text-white pt-5 pb-20'>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
              industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type
              and scrambled it to make a type specimen book. It has survived not only five centuries, but also the
              leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s
              with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with
              desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum
            </p>
          </div>
          <div className='bg-experience_1 bg-dark_effect bg-blend-darken'>
            <h3 className='text-white text-3xl tracking-widest font-black pt-24'>
              ENETKI SAVUNMA
            </h3>
            <span className='text-theme_red text-xl pt-6 inline-block  font-normal'>
              JANUARY 2022 - FEBRUARY 2023
            </span>
            <p className='px-48 text-white pt-5 pb-20'>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
              industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type
              and scrambled it to make a type specimen book. It has survived not only five centuries, but also the
              leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s
              with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with
              desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum
            </p>
          </div>
        </div>
      </div>
      <div className='bg-main_white flex flex-col justify-center items-center pb-32'>
        <div className='my-12'>
          <h2 className='text-black font-black text-3xl tracking-widest'>
            WHAT THEY SAY
          </h2>
          <span className='font-light text-xl tracking-widest my-11 inline-block'>
            Web & Embedded Aplication
          </span>
        </div>
        <Slider {...settings} className="w-2/3 ">


          <div className='bg-white p-14 '>
            <h2 className='text-black font-black text-xl tracking-widest'>
              WHAT THEY SAY -1
            </h2>
            <span className='text-xl font-normal text-theme_red tracking-wide block mt-3'>
              Facebook Inc.
            </span>
            <p className=' font-light text-gray-800 my-4'>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard
              dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
            </p>
            <img src={pp1} alt="profile-1" className='w-28 h-28 absolute ' />
          </div>


          <div className='bg-white p-14 '>
            <h2 className='text-black font-black text-xl tracking-widest'>
              WHAT THEY SAY -2
            </h2>
            <span className='text-xl font-normal text-theme_red tracking-wide block mt-3'>
              Facebook Inc.
            </span>
            <p className=' font-light text-gray-800 my-4'>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard
              dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
            </p>
            <img src={pp1} alt="profile-1" className='w-28 h-28 absolute ' />
          </div>


          <div className='bg-white p-14 '>
            <h2 className='text-black font-black text-xl tracking-widest'>
              WHAT THEY SAY -3
            </h2>
            <span className='text-xl font-normal text-theme_red tracking-wide block mt-3'>
              Facebook Inc.
            </span>
            <p className=' font-light text-gray-800 my-4'>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard
              dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
            </p>
            <img src={pp1} alt="profile-1" className='w-28 h-28 absolute ' />
          </div>


          <div className='bg-white p-14 '>
            <h2 className='text-black font-black text-xl tracking-widest'>
              WHAT THEY SAY -4
            </h2>
            <span className='text-xl font-normal text-theme_red tracking-wide block mt-3'>
              Facebook Inc.
            </span>
            <p className=' font-light text-gray-800 my-4'>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard
              dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
            </p>
            <img src={pp1} alt="profile-1" className='w-28 h-28 absolute ' />
          </div>
        </Slider>
      </div>
      <Footer />

    </>
  )
}

export default Profile