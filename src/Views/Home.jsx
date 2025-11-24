import React from 'react'
import imag1 from '.././assets/hero-img.png'

function Home() {
    return (
        <>
            <div className='text-white  w-full justify-between items-start p-10 sm:flex-col md:p-15 lg:flex lg:flex-row  '>
                <div className='border border-red-400 sm:py-5 sm:px-4 md:w-full md:pt-10'>
                    <h1 className='  font-bold flex leading-normal tracking-tighter sm:text-4xl  md:text-5xl'>
                        Hello, I am Tanmay Vidhate.
                    </h1>
                    <p className='text-sm  tracking-tight sm:text-xl sm:mt-3  md:text-xl'>
                        I am Msc (CA) Student. MERN Stack Developer passionate about technology and web development.
                    </p>
                    <button className='mt-5 text-white py02 text-sm  hover:opacity-85 duration-300 hover:scale-105 font-semibold rounded-md bg-[#465697] sm:h-10 sm:w-1/3 md:md-10 md:w-full md:text-lg  md:px-4 lg:w-1/2 '>
                        <a href='Tanmay_Vidhate_7028982917.pdf' download>Download Resume</a>
                    </button>
                </div>
                <div className='sm:w-full sm:block md:w-full lg: border border-red-500 '>
                    <img className=" sm:m-auto sm:w-1/2 lg:w-4/6 " src={imag1} alt='Hero image 1'></img>
                </div>
            </div>
        </>
    )
}

export default Home