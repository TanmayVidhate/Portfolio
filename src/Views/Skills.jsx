import React from 'react'
import { FaCss3, FaHtml5, FaJs, FaReact, FaNodeJs } from 'react-icons/fa';
import { SiMongodb, SiExpress, SiTailwindcss, SiVite } from 'react-icons/si';

import { TbBrandGithub } from "react-icons/tb";

function Skills() {
  return (
    <>
      <div id="Skills" className='p-10 md:p-24'>
        <div className='flex justify-center items-center'>

          {/* first div */}
          <div>
            <h1 className='text-2xl md:text-4xl text-white font-bold '>Skills</h1>
            <div className=''>
              <div className='flex flex-wrap items-center justify-start'>
                <div className='flex flex-wrap   gap-5 md:p-12 py-10 '>
                  <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
                    <FaHtml5 size={50} color='#E34F26' />
                  </span>

                  <span className="p-3 bg-zinc-950 flex items-center rounded-2xl ">
                    <FaCss3 size={50} color='#1572b6' />
                  </span>

                  <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
                    <FaJs size={50} color='#F0DB4F' />
                  </span>

                  <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
                    <FaReact size={50} color='#61DBFB' />
                  </span>

                  {/* <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
                  <SiVite size={50} color='#41D1FF' />
                </span> */}

                  <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
                    <SiTailwindcss size={50} color='#06b6d4' />
                  </span>

                  <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
                    <SiMongodb size={50} color='#4DB33D' />
                  </span>

                  <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
                    <SiExpress size={50} color='#4DB33D' />
                  </span>

                  <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
                    <FaNodeJs size={50} color='#4DB33D' />
                  </span>

                  <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
                    <TbBrandGithub size={50} color='#fff' />
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Second Div */}
          <div>
            <h1 className='text-2xl md:text-4xl text-white font-bold'>Tools</h1>
            <div>
              <div className='flex flex-wrap items-start justify-around '>
                <div className='flex flex-wrap  gap-5 md:p-12 py-10 '>
                  <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
                    <FaHtml5 size={50} color='#E34F26' />
                  </span>

                  <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
                    <FaCss3 size={50} color='#1572b6' />
                  </span>

                  <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
                    <FaJs size={50} color='#F0DB4F' />
                  </span>

                  <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
                    <FaReact size={50} color='#61DBFB' />
                  </span>

                  {/* <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
                  <SiVite size={50} color='#41D1FF' />
                </span> */}

                  <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
                    <SiTailwindcss size={50} color='#06b6d4' />
                  </span>

                  <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
                    <SiMongodb size={50} color='#4DB33D' />
                  </span>

                  <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
                    <SiExpress size={50} color='#4DB33D' />
                  </span>

                  <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
                    <FaNodeJs size={50} color='#4DB33D' />
                  </span>

                  <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
                    <TbBrandGithub size={50} color='#fff' />
                  </span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </>
  )
}

export default Skills