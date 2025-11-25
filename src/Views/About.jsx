import React from "react";
import Aboutimg from "../../src/assets/About.png";

function About() {
  const headerStyle =
    "text-2xl md:text-4xl font-bold mb-6 relative w-fit " +
    "after:content-[''] after:block after:h-[3px] after:w-0 after:bg-[#8FA5FF] " +
    "after:transition-all after:duration-300 hover:after:w-full " +
    "transition-all duration-300 hover:text-[#8FA5FF] hover:-translate-y-1";

  return (
    <div
      id="About"
      className="text-white bg-black bg-opacity-30 shadow-xl p-12 mt-10 rounded-lg overflow-hidden md:mx-8"
    >
      <h2 className={headerStyle}>About</h2>

      <div className="flex flex-col lg:flex-row items-center justify-center gap-10 lg:">

        {/* LEFT IMAGE */}
        <div className="w-full lg:w-1/2 flex justify-center md:order-2">
          <img
            src={Aboutimg}
            alt="about"
            className="
              w-1/2 sm:w-1/2 md:w-2/3 lg:w-3/4 
              rounded-full 
              transition-all duration-300 
              hover:scale-105 hover:-translate-y-2
              hover:shadow-[0_0_35px_rgba(255,255,255,0.3)] 
            "
          />
        </div>

        {/* RIGHT TEXT */}
        <div className="w-full md:order-1 lg:w-1/2">

          {/* Title */}
          <h1
            className="
              font-semibold leading-normal 
              text-3xl md:text-2xl lg:text-3xl mb-4
              transition-all duration-300
              hover:text-[#8FA5FF]
              hover:-translate-y-1
            "
          >
            MERN Stack Developer
          </h1>

          {/* Intro Paragraph */}
          <p className="text-sm sm:text-xl md:text-md leading-tight mb-6">
            I build full-stack applications using the MERN stack.
            I work on both the frontend and backend to create smooth and efficient web experiences.
            I enjoy learning new technologies and improving my development skills every day.
          </p>

          {/* EXPERIENCE SECTION */}
          <div
            className="
              mt-6 p-5 rounded-xl bg-white bg-opacity-10 
              border border-gray-600
              transition-all duration-300 
              hover:bg-opacity-20 hover:shadow-[0_0_20px_rgba(255,255,255,0.2)]
            "
          >
            <h3
              className="
                text-xl font-semibold mb-2
                transition-all duration-300 hover:text-[#8FA5FF]
              "
            >
              Professional Experience
            </h3>

            <p className="text-sm sm:text-lg"><strong>Software Engineer Intern</strong></p>
            <p className="text-sm sm:text-lg mb-2">Erdac Solutions Pvt. Ltd. (Feb 2025 - June 2025)</p>

            <ul className="list-disc ml-5 text-sm sm:text-lg space-y-1 leading-tight">
              <li>Designed, developed, and maintained software applications using React, Vite, and TypeScript.</li>
              <li>Diagnosed and resolved bugs and performance issues to improve stability.</li>
              <li>Wrote clean and maintainable code following best practices using Git & GitHub.</li>
              <li>Collaborated with cross-functional teams to plan and deliver new features.</li>
            </ul>
          </div>

        </div>
      </div>
    </div>
  );
}

export default About;
