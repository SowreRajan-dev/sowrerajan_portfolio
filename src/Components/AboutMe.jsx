import React from "react";
import { AiOutlineArrowRight } from "react-icons/ai";
import resume from "../Assests/resume-sowrerajan.pdf";

const AboutMe = () => {
  return (
    <div className="mt-20 w-[80%] h-[100%] p-12 flex items-center justify-center flex-col bg-gradient-to-r from-[#FBED96] to-[#ABECD6] rounded-lg ">
      <div className="flex items-center justify-center flex-col ">
        <h2 className="font-Nunito font-bold text-[2rem] name ">
          <header className="mb-10 group">
            <h1 className="mb-1  text-xl  md:text-3xl text-center text-[#000] capitalize font-Nunito">
              hi, I'm <br className="block md:hidden" />
              <span className="inline-flex h-20 pt-2 overflow-x-hidden animate-type group-hover:animate-type-reverse whitespace-nowrap text-brand-accent will-change-transform">
                Sowrerajan 👋
              </span>
              <span className="box-border inline-block w-1 h-10 ml-2 -mb-2 bg-black md:-mb-4 md:h-10 animate-cursor will-change-transform"></span>
            </h1>
            <div className="text-xl font-semibold md:text-3xl text-center">
              developer by choice and designer for fun
            </div>
          </header>
        </h2>
        <p className="text-center text-[1.5rem] p-10 font-Poppins xl:text-[2rem] break-words aboutContent">
          I am a{" "}
          <b className="text-transparent bg-clip-text bg-gradient-to-br from-[#40c4ff] to-[#189fff]">
            Full Stack Web developer
          </b>{" "}
          and i love to learn new skills about web technologies and love to
          encourage responsiveness and user experience.
        </p>
      </div>
      <div className="flex items-center justify-center ">
        <button className="mr-10 bg-[#111827] text-white w-36 h-10 rounded-full hover:bg-[#467bf7] ">
          <a href="/#contact">Contact</a>
        </button>
        <div className="flex items-center cursor-pointer">
          <a href={resume} className="mr-5 hover:text-[#46b0f7]" download>
            Download CV{" "}
          </a>
          <AiOutlineArrowRight />
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
