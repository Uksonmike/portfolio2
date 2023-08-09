/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import { HiOutlineMail } from "react-icons/hi";
import { IoLocationOutline } from "react-icons/io5";
import { IoCallOutline } from "react-icons/io5";

export default function ContactBox({ type, value }) {
  return (
    <div className="flex items-center lg:gap-7 gap-4 lg:mb-10 mb-5">
      <div className="p-5 lg:text-3xl text-xl rounded-2xl bg-gradient-to-br from-[#313030] to-[#0e0d0d]">
        {(type === "email" && <HiOutlineMail />) ||
          (type === "call" && <IoCallOutline />) ||
          (type === "location" && <IoLocationOutline />)}
      </div>
      <div>
        <p className="text-[#9f9f9f] text-xs uppercase">{
            (type === "email" && "Mail Us") ||
            (type === "call" && "Contact Us") ||
            (type === "location" && "Location")
          }</p>
        <a
          href={
            (type === "email" && "mailto:michaelukpongson91@gmail.com") ||
            (type === "call" && "tel:+2349033387545") ||
            (type === "location" && "#")
          }
          className="font-semibold lg:text-lg text-base"
        >
          {value}
        </a>
      </div>
    </div>
  );
}
