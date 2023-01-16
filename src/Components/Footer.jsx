import React from "react";
import { BsTwitter, BsGithub } from "react-icons/bs";
import { FaLinkedinIn } from "react-icons/fa";
function Footer() {
  return (
    <div
      className="w-full h-full bg-[#111827] p-10 flex  justify-around items-center rounded-t-xl footer"
      id="contact"
    >
      <div className="w-[50%] h-full flex items-center justify-center flex-col footer-top">
        <div className="text-white  flex items-center flex-col justify-center font-Poppins h-full">
          <p className="font-[500] text-[4rem] ideasText">
            Any <br />
            ideas?
          </p>
          <p className="font-Poppins text-[30px]">Let's colloide ourself! 🙌</p>
        </div>
        <div className="text-white p-5 h-full">
          <p className="text-[20px] font-Poppins border-b-2 ">
            nrajansowre@gmail.com
          </p>
        </div>
        <div className="flex items-center justify-around w-full md:w-[50%] h-full p-5">
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
      <div className="w-[50%] flex flex-col items-center justify-center p-5 footer-bottom">
        <div>
          <p className="text-white  font-[700] font-Poppins text-[2rem]">
            I'm ready to talk...
          </p>
        </div>
        <form
          action=""
          className="flex flex-col items-center justify-center w-full "
        >
          <div className="">
            <div className="field-group focus:bg-none">
              <input
                type="text"
                id="name"
                name="name"
                className="input-field "
              />
              <label htmlFor="name" className="input-label">
                Name
              </label>
            </div>
            <div className="field-group">
              <input
                type="text"
                id="name"
                name="name"
                className="input-field"
              />
              <label htmlFor="name" className="input-label">
                Email
              </label>
            </div>
            <div className="field-group">
              <textarea
                type="text"
                id="name"
                name="name"
                className="input-field"
              />
              <label htmlFor="name" className="input-label">
                Message
              </label>
            </div>
          </div>
          <button className="mr-10 bg-black text-white w-36 h-10 rounded-full hover:bg-[#467bf7] mt-5">
            Send
          </button>
        </form>
      </div>
    </div>
  );
}

export default Footer;
