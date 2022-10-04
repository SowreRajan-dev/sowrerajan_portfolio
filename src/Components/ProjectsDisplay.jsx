import React from "react";
import agriConnect from "../Assests/Projects_assets/agriconnect.png";
import ieee_sb from "../Assests/Projects_assets/ieee_sb.png";
import pinterest_clone from "../Assests/Projects_assets/pinterest_clone.png";
import hotstar_clone from "../Assests/Projects_assets/hotstar-clone.png";
import blogb from "../Assests/Projects_assets/BlogB.png";
import koruki from "../Assests/Projects_assets/Koruki.png";
import covidstatus from "../Assests/Projects_assets/covidstatus.png";
import { AiFillGithub } from "react-icons/ai";

function ProjectsDisplay() {
  return (
    <div>
      <div className="w-full  h-full flex justify-center flex-col p-10 ">
        <p className="font-Poppins font-semibold text-[2.5rem] mb-5">
          Latest projects
        </p>
        <div className="flex items-center justify-evenly flex-wrap gap-[5rem]">
          <div className="w-[300px] ">
            <p className="font-Poppins font-semibold text-[2.3rem]">
              Agri Connect
            </p>
            <div className="flex items-center justify-evenly flex-wrap gap-2 font-Poppins font-[300] text-white my-5">
              <div className=" bg-black w-20 h-8 flex items-center justify-center rounded-full cursor-pointer">
                <p>Next JS</p>
              </div>
              <div className=" bg-[#34AEE5] w-20 h-8 flex items-center justify-center rounded-full  cursor-pointer">
                <p>Tailwind </p>
              </div>
              <div className=" bg-[#D0D7DF] w-20 h-8 flex items-center justify-center rounded-full cursor-pointer text-black">
                <p>MySQL</p>
              </div>
              <div className=" bg-[#F7FAFC] w-20 h-8 flex items-center justify-center rounded-full cursor-pointer text-black border">
                <p>Prisma</p>
              </div>
              <div className=" bg-[#635BFF] w-20 h-8 flex items-center justify-center rounded-full cursor-pointer">
                <p>Stripe</p>
              </div>
              <div className=" bg-[#764ABC] w-20 h-8 flex items-center justify-center rounded-full cursor-pointer">
                <p>Redux</p>
              </div>
            </div>
            <div className="w-full h-[300px] bg-[#20E58F] rounded-md p-5 cursor-pointer  hover:scale-105 transition duration-300 ease-out">
              <img
                src={agriConnect}
                className="w-full h-full object-contain"
                alt="agri_connect"
              />
            </div>
            <div className="font-Poppins text-[1.2rem] font-[400] mt-5 flex items-center cursor-pointer">
              <p className="px-2">Github</p>
              <span>
                <AiFillGithub />
              </span>
            </div>
          </div>
          <div className="w-[300px] ">
            <p className="font-Poppins font-semibold text-[2.3rem]">
              IEEE Student Branch for SIT{" "}
            </p>
            <div className="flex items-center justify-evenly flex-wrap gap-2 font-Poppins font-[300] text-white my-5">
              <div className=" bg-[#61DAFB] w-20 h-8 flex items-center justify-center rounded-full cursor-pointer">
                <p>React</p>
              </div>
              <div className=" bg-[#34AEE5] p-1 flex items-center justify-center rounded-full  cursor-pointer">
                <p>Styled-Components </p>
              </div>
            </div>
            <div className="w-full h-[300px] bg-[#005F94] rounded-md p-5 cursor-pointer hover:scale-105 transition duration-300 ease-out ">
              <img
                src={ieee_sb}
                className="w-full h-full object-contain"
                alt="ieee_sb"
              />
            </div>
            <div className="font-Poppins text-[1.2rem] font-[400] mt-5 flex items-center cursor-pointer">
              <p className="px-2">Github</p>
              <span>
                <AiFillGithub />
              </span>
            </div>
          </div>
          <div className="w-[300px] ">
            <p className="font-Poppins font-semibold text-[2.3rem]">BlogB </p>
            <div className="flex items-center justify-evenly flex-wrap gap-2 font-Poppins font-[300] text-white my-5">
              <div className=" bg-[#61DAFB] w-20 h-8 flex items-center justify-center rounded-full cursor-pointer">
                <p>React</p>
              </div>
              <div className=" bg-[#254BDD] w-20 h-8 flex items-center justify-center rounded-full  cursor-pointer">
                <p>CSS </p>
              </div>
              <div className=" bg-[#EEEEEE] w-20 h-8 flex items-center justify-center rounded-full text-black  cursor-pointer border">
                <p>Express </p>
              </div>
              <div className=" bg-[#023430] p-1 flex items-center justify-center rounded-full  cursor-pointer">
                <p>Mongo DB </p>
              </div>
              <div className=" bg-[#43853D] w-20 h-8 flex items-center justify-center rounded-full  cursor-pointer">
                <p>Node JS</p>
              </div>

              <div className=" bg-[#1054B7] p-1 flex items-center justify-center rounded-full  cursor-pointer">
                <p>Context api </p>
              </div>
            </div>
            <div className="w-full h-[300px] bg-[#D7C0AD] rounded-md p-5 cursor-pointer  hover:scale-105 transition duration-300 ease-out">
              <img
                src={blogb}
                className="w-full h-full object-contain"
                alt="blogb"
              />
            </div>
            <div className="font-Poppins text-[1.2rem] font-[400] mt-5 flex items-center cursor-pointer">
              <p className="px-2">Github</p>
              <span>
                <AiFillGithub />
              </span>
            </div>
          </div>
          <div className="w-[300px] mt-14">
            <p className="font-Poppins font-semibold text-[2.3rem]">
              Pinterest clone
            </p>
            <div className="flex items-center justify-evenly flex-wrap gap-2 font-Poppins font-[300] text-white my-5">
              <div className=" bg-[#61DAFB] w-20 h-8 flex items-center justify-center rounded-full cursor-pointer">
                <p>React</p>
              </div>
              <div className=" bg-[#254BDD] w-20 h-8 flex items-center justify-center rounded-full  cursor-pointer">
                <p>CSS </p>
              </div>
            </div>
            <div className="w-full h-[300px] bg-[#DAA6AC] rounded-md p-5 cursor-pointer  hover:scale-105 transition duration-300 ease-out">
              <img
                src={pinterest_clone}
                className="w-full h-full object-contain"
                alt="pinterest"
              />
            </div>
            <div className="font-Poppins text-[1.2rem] font-[400] mt-5 flex items-center cursor-pointer">
              <p className="px-2">Github</p>
              <span>
                <AiFillGithub />
              </span>
            </div>
          </div>
          <div className="w-[300px] mt-14">
            <p className="font-Poppins font-semibold text-[2.3rem] ">
              Hotstar clone
            </p>
            <div className="flex items-center justify-evenly flex-wrap gap-2 font-Poppins font-[300] text-white my-5">
              <div className=" bg-[#61DAFB] w-20 h-8 flex items-center justify-center rounded-full cursor-pointer">
                <p>React</p>
              </div>
              <div className=" bg-[#254BDD] w-20 h-8 flex items-center justify-center rounded-full  cursor-pointer">
                <p>CSS </p>
              </div>
            </div>
            <div className="w-full h-[300px] bg-[#181B27] rounded-md p-5 cursor-pointer  hover:scale-105 transition duration-300 ease-out">
              <img
                src={hotstar_clone}
                className="w-full h-full object-scale-down"
                alt="hotstar_clone"
              />
            </div>
            <div className="font-Poppins text-[1.2rem] font-[400] mt-5 flex items-center cursor-pointer  ">
              <p className="px-2">Github</p>
              <span>
                <AiFillGithub />
              </span>
            </div>
          </div>
          <div className="w-[300px] mt-14">
            <p className="font-Poppins font-semibold text-[2.3rem]">Koruki</p>
            <div className="flex items-center justify-evenly flex-wrap gap-2 font-Poppins font-[300] text-white my-5">
              <div className=" bg-[#DD4B25] w-20 h-8 flex items-center justify-center rounded-full cursor-pointer">
                <p>HTML</p>
              </div>
              <div className=" bg-[#254BDD] w-20 h-8 flex items-center justify-center rounded-full  cursor-pointer">
                <p>CSS </p>
              </div>
            </div>
            <div className="w-full h-[300px] bg-[#79a6d3] rounded-md p-5 cursor-pointer  hover:scale-105 transition duration-300 ease-out">
              <img
                src={koruki}
                className="w-full h-full object-scale-down"
                alt="koruki"
              />
            </div>
            <div className="font-Poppins text-[1.2rem] font-[400] mt-5 flex items-center cursor-pointer  ">
              <p className="px-2">Github</p>
              <span>
                <AiFillGithub />
              </span>
            </div>
          </div>
          <div className="w-[300px] mt-14">
            <p className="font-Poppins font-semibold text-[2.3rem]">
              Covid Tracker
            </p>
            <div className="flex items-center justify-evenly flex-wrap gap-2 font-Poppins font-[300] text-white my-5">
              <div className=" bg-[#DD4B25] w-20 h-8 flex items-center justify-center rounded-full cursor-pointer">
                <p>HTML</p>
              </div>
              <div className=" bg-[#254BDD] w-20 h-8 flex items-center justify-center rounded-full  cursor-pointer">
                <p>CSS </p>
              </div>
              <div className=" bg-[#F7DF1E] text-black p-1 flex items-center justify-center rounded-full  cursor-pointer">
                <p>Javascript </p>
              </div>
            </div>
            <div className="w-full h-[300px] bg-[#a243da] rounded-md p-5 cursor-pointer  hover:scale-105 transition duration-300 ease-out">
              <img
                src={covidstatus}
                className="w-full h-full object-scale-down"
                alt="covid-status"
              />
            </div>
            <div className="font-Poppins text-[1.2rem] font-[400] mt-5 flex items-center cursor-pointer  ">
              <p className="px-2">Github</p>
              <span>
                <AiFillGithub />
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectsDisplay;
