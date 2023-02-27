import React from 'react'
import Footer from './Footer'
import Header from './Header'

import { DiHtml5, DiJavascript1, DiReact, DiDatabase, DiPhotoshop } from 'react-icons/di'
import portfolio_1 from '../img/portfolio_1.jpg'
import portfolio_2 from '../img/portfolio_2.jpg'
import portfolio_3 from '../img/portfolio_3.jpg'
function Portfolio() {
    return (
        <>
            <Header />
            <div className='bg-main_white flex flex-col justify-center items-center py-36'>
                <h2 className='text-3xl font-black tracking-widest'>
                    PORTFOLIO SHOWCASE
                </h2>
                <span className='mt-9 text-xl font-light'>
                    Web & Embedded Aplication
                </span>
                <div className='mt-14 grid grid-flow-col gap-x-5'>
                    <button className='border-2 ring-1 border-black px-9 py-4 font-light tracking-widest hover:bg-gray-700 transition-all hover:ring-0 hover:border-gray-700 hover:text-white'>
                        <DiJavascript1 className='w-6 h-6 inline-block ' /> JavaScript
                    </button>
                    <button className='border-2 ring-1 border-black px-9 py-4 font-light tracking-widest hover:bg-gray-700 transition-all hover:ring-0 hover:border-gray-700 hover:text-white'>
                        <DiReact className='w-6 h-6 inline-block ' /> ReactJS
                    </button>
                    <button className='border-2 ring-1 border-black px-9 py-4 font-light tracking-widest hover:bg-gray-700 transition-all hover:ring-0 hover:border-gray-700 hover:text-white'>
                        <DiPhotoshop className='w-6 h-6 inline-block ' /> Photoshop
                    </button>
                    <button className='border-2 ring-1 border-black px-9 py-4 font-light tracking-widest hover:bg-gray-700 transition-all hover:ring-0 hover:border-gray-700 hover:text-white'>
                        <DiDatabase className='w-6 h-6 inline-block ' /> Backend
                    </button>
                </div>
            </div>
            <div className='grid grid-cols-4 mb-36 bg-main_white'>
                <a href="#">
                    <img src={portfolio_1} className='w-100 h-auto hover:brightness-50 transition-all' />
                </a>
                <a href="#">
                    <img src={portfolio_2} className='w-100 h-auto hover:brightness-50 transition-all' />
                </a>
                <a href="#">
                    <img src={portfolio_3} className='w-100 h-auto hover:brightness-50 transition-all ' />
                </a>
                <a href="#">
                    <img src={portfolio_1} className='w-100 h-auto hover:brightness-50 transition-all ' />
                </a>
                <a href="#">
                    <img src={portfolio_2} className='w-100 h-auto hover:brightness-50 transition-all' />
                </a>
                <a href="#">
                    <img src={portfolio_3} className='w-100 h-auto hover:brightness-50 transition-all' />
                </a>
                <a href="#">
                    <img src={portfolio_1} className=' w-100 h-auto hover:brightness-50 transition-all' />
                </a>
                <a href="#">
                    <img src={portfolio_2} className=' w-100 h-auto hover:brightness-50 transition-all' />
                </a>

            </div>
            <Footer />
        </>
    )
}

export default Portfolio