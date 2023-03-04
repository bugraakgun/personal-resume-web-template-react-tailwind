import { useState } from 'react'
import Footer from './Footer'
import Header from './Header'

import { DiHtml5, DiJavascript1, DiReact, DiDatabase, DiPhotoshop, DiTerminalBadge } from 'react-icons/di'
import portfolio_1 from '../img/portfolio_1.jpg'
import portfolio_2 from '../img/portfolio_2.jpg'
import portfolio_3 from '../img/portfolio_3.jpg'
function Portfolio() {
    const [selection, setSelection] = useState(0);
    const portfolio_data = [
        {
            "id": 4,
            "img_src": portfolio_1,
            "title": 'Personal Web Template',
            "keyword": 'Tailwindcss,React,Redux,Router,React-slick',
            "link": 'https://github.com/bugraakgun',
            "link_title": 'github.com/BugraAkgun'
        },
        {
            "id": 4,
            "img_src": portfolio_2,
            "title": 'Personal Web Template',
            "keyword": 'Tailwindcss,React,Redux,Router,React-slick',
            "link": 'https://github.com/bugraakgun',
            "link_title": 'github.com/BugraAkgun'
        },
        {
            "id": 3,
            "img_src": portfolio_3,
            "title": 'Personal Web Template',
            "keyword": 'Tailwindcss,React,Redux,Router,React-slick',
            "link": 'https://github.com/bugraakgun',
            "link_title": 'github.com/BugraAkgun'
        },
        {
            "id": 3,
            "img_src": portfolio_2,
            "title": 'Personal Web Template',
            "keyword": 'Tailwindcss,React,Redux,Router,React-slick',
            "link": 'https://github.com/bugraakgun',
            "link_title": 'github.com/BugraAkgun'
        },
        {
            "id": 2,
            "img_src": portfolio_1,
            "title": 'Personal Web Template',
            "keyword": 'Tailwindcss,React,Redux,Router,React-slick',
            "link": 'https://github.com/bugraakgun',
            "link_title": 'github.com/BugraAkgun'
        },
        {
            "id": 1,
            "img_src": portfolio_2,
            "title": 'Personal Web Template',
            "keyword": 'Tailwindcss,React,Redux,Router,React-slick',
            "link": 'https://github.com/bugraakgun',
            "link_title": 'github.com/BugraAkgun'
        },
        {
            "id": 1,
            "img_src": portfolio_3,
            "title": 'Personal Web Template',
            "keyword": 'Tailwindcss,React,Redux,Router,React-slick',
            "link": 'https://github.com/bugraakgun',
            "link_title": 'github.com/BugraAkgun'
        },
        {
            "id": 2,
            "img_src": portfolio_1,
            "title": 'Personal Web Template',
            "keyword": 'Tailwindcss,React,Redux,Router,React-slick',
            "link": 'https://github.com/bugraakgun',
            "link_title": 'github.com/BugraAkgun'
        },
    ];
    return (
        <>
            <Header />
            <div className='bg-main_white flex flex-col justify-center items-center py-16'>
                <h1 className='text-4xl font-black tracking-widest'>
                    PORTFOLIO SHOWCASE
                </h1>
                <span className='mt-9 text-xl font-light'>
                    Web & Embedded Aplication
                </span>
                <div className='mt-14 grid grid-flow-col gap-x-5'>
                    <button className='border-2 ring-1 border-black px-9 py-4 font-light tracking-widest hover:bg-gray-700 transition-all hover:ring-0 hover:border-gray-700 hover:text-white'
                        onClick={() => setSelection(1)}>
                        <DiJavascript1 className='w-6 h-6 inline-block ' /> JavaScript
                    </button>
                    <button className='border-2 ring-1 border-black px-9 py-4 font-light tracking-widest hover:bg-gray-700 transition-all hover:ring-0 hover:border-gray-700 hover:text-white'
                        onClick={() => setSelection(2)}>
                        <DiReact className='w-6 h-6 inline-block ' /> ReactJS
                    </button>
                    <button className='border-2 ring-1 border-black px-9 py-4 font-light tracking-widest hover:bg-gray-700 transition-all hover:ring-0 hover:border-gray-700 hover:text-white'
                        onClick={() => setSelection(3)}>
                        <DiPhotoshop className='w-6 h-6 inline-block ' /> Photoshop
                    </button>
                    <button className='border-2 ring-1 border-black px-9 py-4 font-light tracking-widest hover:bg-gray-700 transition-all hover:ring-0 hover:border-gray-700 hover:text-white'
                        onClick={() => setSelection(4)}>
                        <DiDatabase className='w-6 h-6 inline-block ' /> Backend
                    </button>
                    <button className='border-2 ring-1 border-black px-9 py-4 font-light tracking-widest hover:bg-gray-700 transition-all hover:ring-0 hover:border-gray-700 hover:text-white'
                        onClick={() => setSelection(0)}>
                        <DiTerminalBadge className='w-6 h-6 inline-block ' /> All
                    </button>
                </div>
            </div>
            <div className='grid grid-cols-4 mb-36 bg-main_white'>
                {
                    portfolio_data.filter(value => (selection ? value.id === selection : value)).map(filtered_value => (

                        <a href={filtered_value.link} className='portfolio-frame relative '>
                            <img src={filtered_value.img_src} className='w-100 h-auto transition-all' />
                            <div className='portfolio-details text-center flex flex-col justify-center'>
                                <span className='text-white text-xl'>{filtered_value.title}</span>
                                <span className='text-gray-700'>{filtered_value.keyword}</span>
                                <span className='text-gray-700'>Demo:<a href={filtered_value.link} target='_blank'>{filtered_value.link_title}</a></span>
                            </div>
                        </a>
                    ))
                }
            </div>


            <Footer />
        </>
    )
}

export default Portfolio