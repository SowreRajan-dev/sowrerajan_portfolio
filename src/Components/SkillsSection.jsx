import React from "react";
import { skillImages } from "../Assests/skills_assests";
const SkillsSection = () => {
  return (
    <div className="mt-10">
      <div>
        <p className="font-Poppins text-[2.5rem] font-bold">Skills</p>
      </div>
      <div className="p-10 flex items-start flex-wrap justify-evenly gap-[5rem] ">
        <a href="https://reactjs.org/">
          <div className="w-32 h-32 skills-container hover:scale-105 transition-all  ease-in-out">
            <div className="w-full h-full bg-[#0f3b4e] rounded-3xl flex items-center justify-center ">
              <img src={skillImages.reactImg} alt="react" />
            </div>
            <p className="text-center font-Poppins font-[500] text-[1.5rem] skills-text">
              React
            </p>
          </div>
        </a>
        <a href="https://nextjs.org/">
          <div className="w-32 h-32 skills-container hover:scale-105 transition-all  ease-in-out">
            <div className="w-full h-full bg-[#899aa1] rounded-3xl flex items-center justify-center ">
              <img
                src={skillImages.nextjsImg}
                alt="nextjs"
                className="w-[80%]"
              />
            </div>
            <p className="text-center font-Poppins font-[500] text-[1.5rem] skills-text">
              Next JS
            </p>
          </div>
        </a>
        <a href="https://nodejs.org/en/">
          <div className="w-32 h-32 skills-container hover:scale-105 transition-all  ease-in-out">
            <div className="w-full h-full bg-[#1f3f2a] rounded-3xl flex items-center justify-center ">
              <img
                src={skillImages.nodejsImg}
                alt="nodejs"
                className="w-[70%]"
              />
            </div>
            <p className="text-center font-Poppins font-[500] text-[1.5rem] skills-text">
              Node JS
            </p>
          </div>
        </a>
        <a href="https://expressjs.com/">
          <div className="w-32 h-32 skills-container hover:scale-105 transition-all  ease-in-out">
            <div className="w-full h-full bg-[#c0cac6be] rounded-3xl flex items-center justify-center ">
              <img
                src={skillImages.expressImg}
                alt="expressjs"
                className="w-[80%]"
              />
            </div>
            <p className="text-center font-Poppins font-[500] text-[1.5rem] skills-text">
              Express JS
            </p>
          </div>
        </a>
        <a href="https://www.python.org/">
          <div className="w-32 h-32 skills-container hover:scale-105 transition-all  ease-in-out">
            <div className="w-full h-full bg-[#062735] rounded-3xl flex items-center justify-center ">
              <img src={skillImages.pythonImg} alt="python" />
            </div>
            <p className="text-center font-Poppins font-[500] text-[1.5rem] skills-text">
              Python
            </p>
          </div>
        </a>
        <a href="https://www.mysql.com/">
          <div className="w-32 h-32 skills-container hover:scale-105 transition-all  ease-in-out">
            <div className="w-full h-full bg-[#02e2e2] rounded-3xl flex items-center justify-center ">
              <img src={skillImages.mysqlImg} alt="mysql" />
            </div>
            <p className="text-center font-Poppins font-[500] text-[1.5rem] skills-text">
              MySQL
            </p>
          </div>
        </a>
        <a href="https://www.mongodb.com/">
          <div className="w-32 h-32 skills-container hover:scale-105 transition-all  ease-in-out">
            <div className="w-full h-full bg-[#095a4f] rounded-3xl flex items-center justify-center ">
              <img src={skillImages.mongodbImg} alt="mongodb" />
            </div>
            <p className="text-center font-Poppins font-[500] text-[1.5rem] skills-text">
              Mongo DB
            </p>
          </div>
        </a>
        <a href="https://developer.mozilla.org/en-US/docs/Glossary/HTML5">
          <div className="w-32 h-32 skills-container hover:scale-105 transition-all  ease-in-out">
            <div className="w-full h-full bg-[#ac0404] rounded-3xl flex items-center justify-center ">
              <img src={skillImages.html5Img} alt="html5" className="w-[60%]" />
            </div>
            <p className="text-center font-Poppins font-[500] text-[1.5rem] skills-text">
              HTML 5{" "}
            </p>
          </div>
        </a>
        <a href="https://developer.mozilla.org/en-US/docs/Web/CSS">
          <div className="w-32 h-32 skills-container hover:scale-105 transition-all  ease-in-out">
            <div className="w-full h-full bg-[#01505e] rounded-3xl flex items-center justify-center ">
              <img src={skillImages.cssImg} alt="css" className="w-[70%]" />
            </div>
            <p className="text-center font-Poppins font-[500] text-[1.5rem] skills-text">
              CSS{" "}
            </p>
          </div>
        </a>
        <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript">
          <div className="w-32 h-32 skills-container hover:scale-105 transition-all  ease-in-out">
            <div className="w-full h-full bg-[#0f3b4e] rounded-3xl flex items-center justify-center ">
              <img src={skillImages.jsImg} alt="react" />
            </div>
            <p className="text-center font-Poppins font-[500] text-[1.5rem] skills-text">
              JavaScript{" "}
            </p>
          </div>
        </a>
      </div>
    </div>
  );
};

export default SkillsSection;
