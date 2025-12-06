import React from "react";
import imag1 from "../assets/profile/tanmay.jpeg";

import { TbBrandGithub } from "react-icons/tb";
import { FaLinkedin } from "react-icons/fa";

import { useTypewriter, Cursor } from "react-simple-typewriter";

function Home() {
  const [text] = useTypewriter({
    words: ["Tanmay Vidhate.", "MERN Stack Developer."],
    loop: true,
  });

  return (
    <div
      className="w-full text-white px-6 sm:px-10 md:px-16 lg:px-24 lg:min-h-screen py-16 
                        flex justify-center items-center gap-4 
                        relative overflow-hidden max-lg:flex-wrap-reverse lg:flex-row"
    >
      {/* BACKGROUND GLOW */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 left-5 sm:left-10 w-56 sm:w-72 h-56 sm:h-72 bg-[#8FA5FF] blur-[120px] opacity-30"></div>
        <div className="absolute bottom-10 right-5 sm:right-10 w-56 sm:w-72 h-56 sm:h-72 bg-purple-600 blur-[150px] opacity-25"></div>
      </div>

      {/* LEFT SECTION */}
      <div className="w-full lg:w-2/3 flex flex-col gap-4 fade-in-up text-center lg:text-left ">
        <h1
          className="font-bold leading-tight tracking-tight 
                               text-xl sm:text-4xl lg:text-3xl md:text-4xl xl:text-5xl"
        >
          Hello, I'm{" "}
          <span className="bg-gradient-to-r from-[#8FA5FF] to-purple-400 bg-clip-text text-transparent">
            {text}
          </span>
          <Cursor />
        </h1>

        <p className="text-sm sm:text-base md:text-lg xl:text-xl text-gray-300 max-w-xl mx-auto lg:mx-0">
          MSc (CA) student & passionate MERN Stack Developer who loves building
          clean, responsive and user-friendly web applications.
        </p>

        {/* SOCIAL ICONS */}
        <div className="flex justify-center lg:justify-start gap-5 mt-4">
          <a
            href="https://www.linkedin.com/in/tanmay-vidhate/"
            target="_blank"
            className="transition-all duration-300 hover:scale-110 hover:-translate-y-1 
                                   hover:drop-shadow-[0_0_10px_rgba(0,119,181,0.6)]"
          >
            <FaLinkedin size={45} className="sm:size-50" color="#0077B5" />
          </a>

          <a
            href="https://github.com/TanmayVidhate"
            target="_blank"
            className="transition-all duration-300 hover:scale-110 hover:-translate-y-1 
                                   hover:drop-shadow-[0_0_10px_rgba(255,255,255,0.5)]"
          >
            <TbBrandGithub size={45} className="sm:size-50" color="#fff" />
          </a>
        </div>

        {/* BUTTONS */}
        <div className="mt-6 flex flex-wrap justify-center lg:justify-start gap-4">
          {/* Download Resume */}
          <a
            href="https://drive.google.com/uc?export=download&id=1CRJcqREp1hg8i-Soe_Z56cngFPW8lBXg"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gray-800 hover:bg-gray-700 text-white font-medium 
                                   rounded-md px-6 py-2 text-base sm:text-lg shadow-sm
                                   transition-colors duration-200 max-sm:w-72 tracking-wide"
          >
            Download Resume
          </a>

          {/* View Resume */}
          <a
            href="https://drive.google.com/file/d/1CRJcqREp1hg8i-Soe_Z56cngFPW8lBXg/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-medium 
                                   rounded-md px-6 py-2 text-base sm:text-lg shadow-sm
                                   transition-colors duration-200 max-sm:w-72 tracking-wide"
          >
            View Resume
          </a>
        </div>
      </div>

      {/* RIGHT IMAGE SECTION */}
      <div className="fade-in-up delay-200 rounded-full overflow-hidden ">
        <img
          className="
                               transition-all duration-500 hover:scale-105 hover:-translate-y-2 
                               shadow-[0_0_25px_rgba(255,255,255,0.25)] object-contain sm:w-56 sm:h-56 w-48 h-48 lg:min-w-80 lg:min-h-80"
          src={imag1}
          alt="Hero"
        />
      </div>
    </div>
  );
}

export default Home;
