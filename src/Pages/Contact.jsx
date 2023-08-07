/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React from "react";
import { HiOutlineMail } from "react-icons/hi";
import { IoLocationOutline } from "react-icons/io5";
import { IoCallOutline } from "react-icons/io5";
import { useOutletContext } from "react-router-dom";
import ContactBox from "../Component/ContactBox";

export default function Contact() {
  const [darkMode, setDarkMode] = useOutletContext();

  return (
    <section
      className={`${
        darkMode ? "bg-[#0F0F0F] text-white" : "bg-[#dbdbdb]"
      } py-10  lg:px-36 px-5 flex flex-row`}
    >
      <div className="w-[40%]">
        <p>Contact Info</p>
        <div className="mt-10">
            <ContactBox type="email" value="michaelukpongson91@gmail.com"/>
            <ContactBox type="call" value="(+234) 903 338 7545"/>
            <ContactBox type="location" value="Lagos, NG."/>
        </div>
      </div>
      <div className="rounded-2xl bg-gradient-to-br from-[#313030] to-[#0e0d0d]  border-[#31303034] p-10 w-[60%]">
        <p className="text-5xl font-semibold mb-10">Let's work <span className="text-[#5B78F6]">together.</span></p>
        <form action="" className="flex flex-col gap-3">
          <input type="text" placeholder="Name *" className="bg-[#313030] px-5 py-3 rounded-xl block outline-none"/>
          <input type="email" placeholder="Email *" className="bg-[#313030] px-5 py-3 rounded-xl block outline-none"/>
          <input type="text" placeholder="Subject *" className="bg-[#313030] px-5 py-3 rounded-xl block outline-none"/>
          <textarea name="" id="" cols="30" rows="7" placeholder="Message *" className="bg-[#313030] px-5 py-3 rounded-xl block outline-none"/>
          <button className="bg-[#313030] hover:bg-[#fff] hover:text-[#333] transition-all duration-200 px-5 py-3 rounded-xl">Send Message</button>
        </form>
      </div>
    </section>
  );
}
