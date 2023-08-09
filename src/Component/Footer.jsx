/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import { NavLink } from "react-router-dom";


export default function Footer({state}) {
    const activeStyle = {
        fontWeight: "bold",
        color: "#fff",
      };

      const date = new Date()
      
  return (
    <footer className={`${state ? 'bg-[#0F0F0F] text-[#8d8d8d]' : 'bg-[#dbdbdb]'} py-10 w-full text-center flex flex-col items-center transition-all duration-200`}>
      <p className={`${state ? "text-white" : "text-[#333]"} text-2xl font-bold `}>Uksonmike</p>
      <ul className="flex flex-col md:flex-row text-xs gap-8 font-medium my-6">
        <NavLink
          to={""}
         className={"hover:text-white transition-all duration-300"}
        >
          <li>Home</li>
        </NavLink>
        <NavLink
          to={"about"}
         className={"hover:text-white transition-all duration-300"}
        >
          <li>About</li>
        </NavLink>
        <NavLink
          to={"project"}
         className={"hover:text-white transition-all duration-300"}
        >
          <li>Projects</li>
        </NavLink>
        <NavLink
          to={"contact"}
         className={"hover:text-white transition-all duration-300"}
        >
          <li>Contact</li>
        </NavLink>
      </ul>
      <p className="text-xs">&copy; All Rights Reserved {date.getFullYear()}.</p>
    </footer>
  );
}
