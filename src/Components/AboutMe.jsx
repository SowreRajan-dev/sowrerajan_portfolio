import React from "react";
import { AiOutlineArrowRight } from "react-icons/ai";
const AboutMe = () => {
  return (
    <div className="mt-20 w-[80%] h-96 flex items-center justify-center flex-col bg-gradient-to-r from-[#FBED96] to-[#ABECD6] rounded-lg">
      <div className="flex items-center justify-center flex-col">
        <h2 className="font-Nunito font-bold text-[2rem] ">
          Hello, I'm Sowrerajan 🤙
        </h2>
        <p className="text-center text-[1.5rem] p-10 font-Poppins">
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
          Contact
        </button>
        <div className="flex items-center cursor-pointer">
          <p className="mr-5 hover:text-[#46b0f7]">Download CV </p>
          <AiOutlineArrowRight />
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
