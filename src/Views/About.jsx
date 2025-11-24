import React from 'react'
import Aboutimg from ".././assets/about-us.png"

// import { IoArrowForward } from "react-icons/io5";
function About() {
    return (
        <>
            <div id="About" className='text-white  overflow-hidden bg-black shadow-xl mx-0 items-center   md:flex md:flex-wrap md:justify-center md:mx-8 bg-opacity-30 rounded-lg p-12 '>
                <div className='border border-red-600'>
                    <h2 className='text-2xl font-bold md:text-4xl'>About</h2>
                    <div className='flex-wrap flex-col items-center sm:flex sm:justify-center sm:items-center md:flex md:flex-row  border border-red-600'>
                        <img className=" sm:w-1/2" src={Aboutimg} alt="about image" />

                        <ul>
                            <div className='flex gap-3 py-1 border border-red-300'>
                                {/* <IoArrowForward size={30} className="mt-1" /> */}

                                <span className='sm:w-full'>
                                    <h1 className=' font-semibold leading-normal sm:text-3xl md:text-2xl'>
                                        MERN Stack developer
                                    </h1>
                                    <p className='text-sm leading-tight sm:text-xl sm:justify-center md:text-md'>
                                        I build full-stack applications using the MERN stack.
                                        I work on both the frontend and backend to make websites smooth and easy to use.
                                        I enjoy learning new things in technology and improving my skills every day.
                                    </p>
                                </span>
                            </div>
                        </ul>
                    </div>
                </div>
            </div>


        </>
    )
}

export default About