import React from "react";
import { BsTwitter, BsGithub } from "react-icons/bs";
import { FaLinkedinIn } from "react-icons/fa";
function Footer() {
  return (
    <div className="w-full h-full bg-[#111827] p-10">
      <div className="w-[50%] flex items-center justify-center flex-col">
        <div className="text-white  flex items-center flex-col justify-center font-Poppins ">
          <p className="font-[500] text-[80px] ">
            Any <br />
            ideas ?
          </p>
          <p className="font-Poppins text-[30px]">Let's colloide ourself! 🙌</p>
        </div>
        <div className="text-white p-5">
          <p className="text-[20px] font-Poppins border-b-2 ">
            nrajansowre@gmail.com
          </p>
        </div>
        <div className="flex items-center justify-around w-[50%]">
          <div className="w-10 h-10 bg-white flex items-center justify-center rounded-md">
            <BsTwitter className="text-[#55ACEE] text-[30px]" />
          </div>
          <div className="w-10 h-10 bg-[#55ACEE] flex items-center justify-center rounded-md">
            <FaLinkedinIn className="text-white text-[30px]" />
          </div>
          <div className="w-10 h-10 bg-white flex items-center justify-center rounded-md">
            <BsGithub className="text-black text-[30px]" />
          </div>
        </div>
      </div>
      <div>
        <form action=""></form>
      </div>
    </div>
  );
}

export default Footer;
