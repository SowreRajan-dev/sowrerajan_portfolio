import React from "react";
import aboutArrow from "../Assests/Vectors/Vector_1.png";
import SkillsSection from "./SkillsSection";
import HandVector from "../Assests/Vectors/handVector.png";
const About = () => {
  return (
    <div className="p-10  " id="about">
      <div className="flex items-center justify-center">
        <div>
          <div className="relative">
            <p className="font-Poppins text-[2.5rem] font-bold">About Me</p>
            <img
              src={aboutArrow}
              alt="curve_arrow"
              className="w-[190px] absolute top-[50px] z-[-10]"
            />
          </div>
          <div className="mt-10 w-[80%] break-words border-l-4 border-black ">
            <p className="ml-10 font-Nunito text-[1.3rem] font-medium">
              I am a Highly motivated, optimistic, adaptive and skilled student
              seeking to develop best experiences as a part of an engaging and
              high-minded team to build unique projects and gain extra
              knowledge.
              <br />
              Love to make Full stack Web Apps.
            </p>
          </div>
        </div>
        <div className="flex items-center justify-center">
          <img src={HandVector} alt="hand-vector" />
        </div>
      </div>
      <div>
        <SkillsSection />
      </div>
    </div>
  );
};

export default About;
