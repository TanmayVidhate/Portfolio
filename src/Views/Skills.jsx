import React from "react";
import { FaCss3, FaHtml5, FaJs, FaReact, FaNodeJs, FaNpm } from "react-icons/fa";
import { SiMongodb, SiExpress, SiTailwindcss, SiVite, SiPostman, SiNetlify } from "react-icons/si";
import { VscVscode } from "react-icons/vsc";
import { TbBrandGithub } from "react-icons/tb";

function Skills() {
  const iconStyle =
    "p-3 bg-zinc-950 rounded-2xl cursor-pointer transition-all duration-300 border border-[#171d32] " +
    "hover:scale-105 hover:bg-zinc-900 hover:border hover:border-gray-600 zzhover:shadow-[0_0_15px_rgba(255,255,255,0.3)]"


  const headerStyle =
    "text-2xl md:text-4xl font-bold mb-6 relative w-fit " +
    "after:content-[''] after:block after:h-[3px] after:w-0 after:bg-[#8FA5FF] " +
    "after:transition-all after:duration-300 hover:after:w-full " +
    "transition-all duration-300 hover:text-[#8FA5FF] hover:-translate-y-1";

  return (
    <div id="Skills" className=" text-white bg-black bg-opacity-30 shadow-xl p-12 my-20 rounded-lg overflow-hidden md:p-24 md:mx-8">
      <div className="flex flex-col lg:flex-row justify-center gap-16">

        {/* SKILLS */}
        <div className="w-full lg:w-1/2">
          <h1 className={headerStyle}>Skills</h1>

          <div className="flex flex-wrap gap-6 md:gap-8">
            <span className={iconStyle}><FaHtml5 size={50} color="#E34F26" /></span>
            <span className={iconStyle}><FaCss3 size={50} color="#1572b6" /></span>
            <span className={iconStyle}><FaJs size={50} color="#F0DB4F" /></span>
            <span className={iconStyle}><FaReact size={50} color="#61DBFB" /></span>
            <span className={iconStyle}><SiTailwindcss size={50} color="#06b6d4" /></span>
            <span className={iconStyle}><SiMongodb size={50} color="#4DB33D" /></span>
            <span className={iconStyle}><SiExpress size={50} color="#fff" /></span>
            <span className={iconStyle}><FaNodeJs size={50} color="#4DB33D" /></span>
            <span className={iconStyle}><TbBrandGithub size={50} color="#fff" /></span>
          </div>
        </div>

        {/* TOOLS */}
        <div className="w-full lg:w-1/2">
          <h1 className={headerStyle}>Tools</h1>

          <div className="flex flex-wrap gap-6 md:gap-8">
            <span className={iconStyle}><SiVite size={50} color="#41D1FF" /></span>
            <span className={iconStyle}><FaNpm size={50} color="#CC3534" /></span>
            <span className={iconStyle}><SiPostman size={50} color="#EF5B25" /></span>
            <span className={iconStyle}><VscVscode size={50} color="#007ACC" /></span>
            <span className={iconStyle}><SiNetlify size={50} color="#2E51ED" /></span>
          </div>
        </div>

      </div>
    </div>
  );
}

export default Skills;
