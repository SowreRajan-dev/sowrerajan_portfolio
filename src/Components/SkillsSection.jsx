import React from "react";
import { skillImages } from "../Assests/skills_assests";
const SkillsSection = () => {
  return (
    <div className="mt-10">
      <div>
        <p className="font-Poppins text-[2.5rem] font-bold">Skills</p>
      </div>
      <div className="p-10 flex items-start flex-wrap justify-evenly gap-[5rem]">
        <div className="w-32 h-32">
          <div className="w-full h-full bg-[#0f3b4e] rounded-3xl flex items-center justify-center ">
            <img src={skillImages.reactImg} alt="react" />
          </div>
          <p className="text-center font-Poppins font-[500] text-[1.5rem]">
            React
          </p>
        </div>
        <div className="w-32 h-32">
          <div className="w-full h-full bg-[#899aa1] rounded-3xl flex items-center justify-center ">
            <img src={skillImages.nextjsImg} alt="nextjs" className="w-[80%]" />
          </div>
          <p className="text-center font-Poppins font-[500] text-[1.5rem]">
            Next JS
          </p>
        </div>
        <div className="w-32 h-32">
          <div className="w-full h-full bg-[#1f3f2a] rounded-3xl flex items-center justify-center ">
            <img src={skillImages.nodejsImg} alt="nodejs" className="w-[70%]" />
          </div>
          <p className="text-center font-Poppins font-[500] text-[1.5rem]">
            Node JS
          </p>
        </div>
        <div className="w-32 h-32">
          <div className="w-full h-full bg-[#c0cac6be] rounded-3xl flex items-center justify-center ">
            <img
              src={skillImages.expressImg}
              alt="expressjs"
              className="w-[80%]"
            />
          </div>
          <p className="text-center font-Poppins font-[500] text-[1.5rem]">
            Express JS
          </p>
        </div>
        <div className="w-32 h-32">
          <div className="w-full h-full bg-[#062735] rounded-3xl flex items-center justify-center ">
            <img src={skillImages.pythonImg} alt="python" />
          </div>
          <p className="text-center font-Poppins font-[500] text-[1.5rem]">
            Python
          </p>
        </div>
        <div className="w-32 h-32">
          <div className="w-full h-full bg-[#02e2e2] rounded-3xl flex items-center justify-center ">
            <img src={skillImages.mysqlImg} alt="mysql" />
          </div>
          <p className="text-center font-Poppins font-[500] text-[1.5rem]">
            MySQL
          </p>
        </div>
        <div className="w-32 h-32">
          <div className="w-full h-full bg-[#095a4f] rounded-3xl flex items-center justify-center ">
            <img src={skillImages.mongodbImg} alt="mongodb" />
          </div>
          <p className="text-center font-Poppins font-[500] text-[1.5rem]">
            Mongo DB
          </p>
        </div>
        <div className="w-32 h-32">
          <div className="w-full h-full bg-[#ac0404] rounded-3xl flex items-center justify-center ">
            <img src={skillImages.html5Img} alt="html5" className="w-[60%]" />
          </div>
          <p className="text-center font-Poppins font-[500] text-[1.5rem]">
            HTML 5{" "}
          </p>
        </div>
        <div className="w-32 h-32">
          <div className="w-full h-full bg-[#01505e] rounded-3xl flex items-center justify-center ">
            <img src={skillImages.cssImg} alt="css" className="w-[70%]" />
          </div>
          <p className="text-center font-Poppins font-[500] text-[1.5rem]">
            CSS{" "}
          </p>
        </div>
        <div className="w-32 h-32">
          <div className="w-full h-full bg-[#0f3b4e] rounded-3xl flex items-center justify-center ">
            <img src={skillImages.jsImg} alt="react" />
          </div>
          <p className="text-center font-Poppins font-[500] text-[1.5rem]">
            JavaScript{" "}
          </p>
        </div>
      </div>
    </div>
  );
};

export default SkillsSection;
