import React from 'react'
import imag1 from '.././assets/7358602-removebg-preview.png'

function Home() {
    return (
        <>
            <div className='text-white flex w-full justify-between items-start p-10 md:p-20'>
                <div className='md:w-2/4 md:pt-10'>
                    <h1 className='text-3xl md:text-6xl font-bold flex leading-normal tracking-tighter'>
                        Hello I am Tanmay Vidhate.
                    </h1>
                    <p className='text-sm md:text-2xl tracking-tight'>
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Modi ipsum vero ducimus eius quaerat, alias fuga, dolores quidem labore molestiae exercitationem facilis qui quam impedit ea eligendi. Reprehenderit, est sint!
                    </p>
                    <button className='mt-5 md:md-10 text-white py02 text-sm md:text-lg md:py-2 md:px-4 hover:opacity-85 duration-300 hover:scale-105 font-semibold rounded-3xl bg-[#465697]'>
                        Contact Me
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