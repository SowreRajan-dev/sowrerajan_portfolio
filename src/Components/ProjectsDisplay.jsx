import React from "react";
import agriConnect from "../Assests/Projects_assets/agriconnect.jpeg";
function ProjectsDisplay() {
  return (
    <div>
      <div className="w-full  h-full flex justify-center flex-col p-10 ">
        <p className="font-Poppins font-semibold text-[2.5rem] mb-5">
          Latest projects
        </p>
        <div className="flex items-center justify-evenly">
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
            </div>
            <div className="w-full h-[300px] bg-green-300 rounded-md p-5 cursor-pointer">
              <img
                src={agriConnect}
                className="w-full h-full object-contain"
                alt="agri_connect"
              />
            </div>
            <div className="font-Poppins text-[1.2rem] font-[400] mt-5 ">
              <p className=" underline ">Github</p>
            </div>
          </div>
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
            </div>
            <div className="w-full h-[300px] bg-green-300 rounded-md p-5 cursor-pointer">
              <img
                src={agriConnect}
                className="w-full h-full object-contain"
                alt="agri_connect"
              />
            </div>
            <div className="font-Poppins text-[1.2rem] font-[400] mt-5 ">
              <p className=" underline ">Github</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectsDisplay;
