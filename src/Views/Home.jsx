import React from 'react'
import imag1 from '.././assets/hero-img.png'

function Home() {
    return (
        <>
            <div className='text-white flex w-full justify-between items-start p-10 md:p-20'>
                <div className='md:w-2/4 md:pt-10'>
                    <h1 className='text-3xl md:text-6xl font-bold flex leading-normal tracking-tighter'>
                        Hello, I am Tanmay Vidhate.
                    </h1>
                    <p className='text-sm md:text-2xl tracking-tight'>
                        I am Msc (CA) Student. MERN Stack Developer passionate about technology and web development.
                    </p>
                    <button className='mt-5 md:md-10 text-white py02 text-sm md:text-lg md:py-2 md:px-4 hover:opacity-85 duration-300 hover:scale-105 font-semibold rounded-3xl bg-[#465697] sm:h-9 sm:w-1/2'>
                        <a href='Tanmay_Vidhate_7028982917.pdf' download>Download Resume</a>
                    </button>
                </div>
                <div>
                    <img className="" src={imag1} alt='Hero image 1'></img>
                </div>
            </div>
        </>
    )
}

export default Home