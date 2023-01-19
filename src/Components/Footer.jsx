import React from "react";
import { useRef } from "react";
import { BsTwitter, BsGithub } from "react-icons/bs";
import { FaLinkedinIn } from "react-icons/fa";
import emailjs from "@emailjs/browser";

function Footer() {
  const formRef = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        process.env.REACT_APP_EmailJS_SERVICEID,
        process.env.REACT_APP_EMAILJS_TEMPLETEID,
        formRef.current,
        process.env.REACT_APP_EMAILJS_PUBLIC_KEY
      )
      .then((res) => {})
      .catch((error) => console.log(error));
  };
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
        <button
          className="text-white p-5 h-full"
          onClick={() => (window.location = "mailto:nrajansowre@gmail.com")}
        >
          <p className="text-[20px] font-Poppins border-b-2 ">
            nrajansowre@gmail.com
          </p>
        </button>
        <div className="flex items-center justify-around w-full md:w-[50%] h-full p-5">
          <div className="w-10 h-10 bg-white flex items-center justify-center rounded-md">
            <a href="https://twitter.com/NSowrerajan">
              <BsTwitter className="text-[#55ACEE] text-[30px]" />
            </a>
          </div>
          <div className="w-10 h-10 bg-[#55ACEE] flex items-center justify-center rounded-md">
            <a href="https://www.linkedin.com/in/sowrerajan-n-04b69b209/">
              <FaLinkedinIn className="text-white text-[30px]" />
            </a>
          </div>
          <div className="w-10 h-10 bg-white flex items-center justify-center rounded-md">
            <a href="https://github.com/SowreRajan-dev">
              <BsGithub className="text-black text-[30px]" />
            </a>
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
          ref={formRef}
          onSubmit={sendEmail}
          className="flex flex-col items-center justify-center w-full "
        >
          <div className="">
            <div className="field-group focus:bg-none">
              <input
                type="text"
                id="name"
                name="user_name"
                className="input-field "
              />
              <label htmlFor="name" className="input-label">
                Name
              </label>
            </div>
            <div className="field-group">
              <input
                type="text"
                id="email"
                name="user_email"
                className="input-field"
              />
              <label htmlFor="name" className="input-label">
                Email
              </label>
            </div>
            <div className="field-group">
              <textarea
                type="text"
                id="message"
                name="message"
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
