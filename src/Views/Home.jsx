import React from "react";
import imag1 from "../assets/hero-img.png";

import { TbBrandGithub } from "react-icons/tb";
import { FaLinkedin } from "react-icons/fa";

function Home() {
    return (
        <div className="w-full min-h-screen text-white lg:px-24 px-10 py-16 flex flex-col lg:flex-row justify-between items-center relative">

            {/* BACKGROUND GLOW */}
            <div className="absolute inset-0 -z-10">
                <div className="absolute top-20 left-10 w-72 h-72 bg-[#8FA5FF] blur-[150px] opacity-30"></div>
                <div className="absolute bottom-10 right-10 w-72 h-72 bg-purple-600 blur-[180px] opacity-20"></div>
            </div>

            {/* LEFT SECTION */}
            <div className="lg:w-2/3 w-full py-5 fade-in-up">

                <h1 className="font-bold leading-tight tracking-tight text-4xl md:text-5xl">
                    Hello, I'm{" "}
                    <span className="bg-gradient-to-r from-[#8FA5FF] to-purple-400 bg-clip-text text-transparent">
                        Tanmay Vidhate
                    </span>
                    .
                </h1>

                <p className="text-base sm:text-xl mt-4 md:text-xl tracking-tight text-gray-300">
                    MSc (CA) student & passionate MERN Stack Developer who loves building
                    clean, responsive and user-friendly web applications.
                </p>

                <div className="flex gap-5 mt-5">
                    <a
                        href="https://www.linkedin.com/in/tanmay-vidhate/"
                        target="_blank"
                        className="transition-all duration-300 hover:scale-110 hover:-translate-y-1 
               hover:drop-shadow-[0_0_10px_rgba(0,119,181,0.6)]"
                    >
                        <FaLinkedin size={50} color="#0077B5" />
                    </a>

                    <a
                        href="https://github.com/TanmayVidhate"
                        target="_blank"
                        className="transition-all duration-300 hover:scale-110 hover:-translate-y-1 
               hover:drop-shadow-[0_0_10px_rgba(255,255,255,0.5)]"
                    >
                        <TbBrandGithub size={50} color="#fff" />
                    </a>
                </div>


                {/* BUTTONS */}
                <div className="mt-8 flex gap-4">
                    <a
                        href="Tanmay_Vidhate_7028982917.pdf"
                        download
                        className="bg-[#465697] hover:bg-[#5b6bb0] py-1 hover:scale-105 transition-all duration-300 
                       text-white font-semibold rounded-md h-10 px-6 text-lg shadow-lg"
                    >
                        Download Resume
                    </a>

                </div>

            </div>

            {/* RIGHT IMAGE SECTION */}
            <div className="w-full lg:w-1/3 flex justify-center fade-in-up delay-200">
                <img
                    className="w-1/2 sm:w-1/2 lg:w-3/4 rounded-full transition-all duration-500 
                     hover:scale-110 hover:-translate-y-2 
                     shadow-[0_0_35px_rgba(255,255,255,0.25)]"
                    src={imag1}
                    alt="Hero"
                />
            </div>

        </div>
    );
}

export default Home;
