import React from 'react'
import pp1 from '../img/profile-pp-1.png'
import Slider from "react-slick";

function WhatTheSay() {
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
    <div className="bg-main_white flex flex-col justify-center items-center pb-32">
        <div className="my-12">
          <h2 className="text-black font-black text-3xl tracking-widest">
            WHAT THEY SAY
          </h2>
          <span className="font-light text-xl tracking-widest my-11 inline-block">
            Web & Embedded Aplication
          </span>
        </div>
        <Slider {...settings} className="w-2/3 ">
          <div className="bg-white p-14 ">
            <h2 className="text-black font-black text-xl tracking-widest">
              WHAT THEY SAY -1
            </h2>
            <span className="text-xl font-normal text-theme_red tracking-wide block mt-3">
              Facebook Inc.
            </span>
            <p className=" font-light text-gray-800 my-4">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </p>
            <img src={pp1} alt="profile-1" className="w-28 h-28 absolute " />
          </div>

          <div className="bg-white p-14 ">
            <h2 className="text-black font-black text-xl tracking-widest">
              WHAT THEY SAY -2
            </h2>
            <span className="text-xl font-normal text-theme_red tracking-wide block mt-3">
              Facebook Inc.
            </span>
            <p className=" font-light text-gray-800 my-4">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </p>
            <img src={pp1} alt="profile-1" className="w-28 h-28 absolute " />
          </div>

          <div className="bg-white p-14 ">
            <h2 className="text-black font-black text-xl tracking-widest">
              WHAT THEY SAY -3
            </h2>
            <span className="text-xl font-normal text-theme_red tracking-wide block mt-3">
              Facebook Inc.
            </span>
            <p className=" font-light text-gray-800 my-4">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </p>
            <img src={pp1} alt="profile-1" className="w-28 h-28 absolute " />
          </div>

          <div className="bg-white p-14 ">
            <h2 className="text-black font-black text-xl tracking-widest">
              WHAT THEY SAY -4
            </h2>
            <span className="text-xl font-normal text-theme_red tracking-wide block mt-3">
              Facebook Inc.
            </span>
            <p className=" font-light text-gray-800 my-4">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </p>
            <img src={pp1} alt="profile-1" className="w-28 h-28 absolute " />
          </div>
        </Slider>
      </div>
  )
}

export default WhatTheSay