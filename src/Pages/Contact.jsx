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
      } py-10  lg:px-28 px-5 `}
    >
      <div>
        <p>Contact Info</p>
        <div className="mt-10">
            <ContactBox type="email"/>
            <ContactBox type="call"/>
            <ContactBox type="location"/>
          {/* <div className="flex items-center gap-7 mb-7">
            <div className="p-5 text-3xl rounded-2xl bg-gradient-to-br from-[#313030] to-[#0e0d0d]  border-[#31303034]">
              <HiOutlineMail />
            </div>
            <div>
              <p className="text-[#9f9f9f] uppercase">Mail Us</p>
              <a href="mailto:michaelukpongson91@gmail.com">
                michaelukpongson91@gmail.com
              </a>
            </div>
          </div>
          <div className="flex items-center gap-7 mb-7">
            <div className="p-5 text-3xl rounded-2xl bg-gradient-to-br from-[#313030] to-[#0e0d0d]  border-[#31303034]">
              <IoCallOutline />
            </div>
            <div>
              <p className="text-[#9f9f9f] uppercase">Mail Us</p>
              <a href="mailto:michaelukpongson91@gmail.com">
                michaelukpongson91@gmail.com
              </a>
            </div>
          </div>
          <div className="flex items-center gap-7 mb-7">
            <div className="p-5 text-3xl rounded-2xl bg-gradient-to-br from-[#313030] to-[#0e0d0d]  border-[#31303034]">
              <IoLocationOutline />
            </div>
            <div>
              <p className="text-[#9f9f9f] uppercase">Mail Us</p>
              <a href="mailto:michaelukpongson91@gmail.com">
                michaelukpongson91@gmail.com
              </a>
            </div>
          </div> */}
        </div>
      </div>
      <div></div>
    </section>
  );
}
