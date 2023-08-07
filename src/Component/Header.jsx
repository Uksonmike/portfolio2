/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import { NavLink } from "react-router-dom";
import { AiOutlineCloudDownload } from "react-icons/ai";
import { MdToggleOn, MdOutlineToggleOff } from "react-icons/md";

export default function Header({ state, setState }) {
  const activeStyle = {
    fontWeight: "bold",
    color: state ? "#fff" : "#000",
  };

  const toggleDark = () => {
    setState(!state)
  }
  return (
    <header
      className={`
        ${
          state ? "bg-[#0F0F0F] text-[#8d8d8d]" : "bg-[#dbdbdb]"
        } lg:px-36 px-5 py-5 hidden md:block transition-all duration-200`}
    >
      <nav className="flex justify-between items-center">
        <NavLink to={""}>
          <p className={`${state ? "text-white" : "text-[#333]"} text-2xl font-bold `}>Mike.dev</p>
        </NavLink>
        <ul className="flex gap-10 font-medium">
          <NavLink
            to={""}
            style={({ isActive }) => (isActive ? activeStyle : null)}
            className={state ? "hover:text-[#fff] transition-all duration-200" : ""}
          >
            <li>Home</li>
          </NavLink>
          <NavLink
            to={"about"}
            style={({ isActive }) => (isActive ? activeStyle : null)}
            className={state ? "hover:text-[#fff] transition-all duration-200" : ""}
          >
            <li>About</li>
          </NavLink>
          <NavLink
            to={"projects"}
            style={({ isActive }) => (isActive ? activeStyle : null)}
            className={state ? "hover:text-[#fff] transition-all duration-200" : ""}
          >
            <li>Projects</li>
          </NavLink>
          <NavLink
            to={"contact"}
            style={({ isActive }) => (isActive ? activeStyle : null)}
            className={state ? "hover:text-[#fff] transition-all duration-200" : ""}
          >
            <li>Contact</li>
          </NavLink>
        </ul>
        <div className="flex items-center gap-2">
          <button onClick={toggleDark}>
            {state ? <MdToggleOn/> : <MdOutlineToggleOff/>}
          </button>

          <a
            href="#"
            className="flex items-center gap-2 bg-[#474747] text-[#fff] hover:bg-[#fff] hover:text-[#242424] px-3 py-2 rounded-2xl transition-all duration-300"
          >
            <AiOutlineCloudDownload />
            <p className="text-sm font-semibold">Resume</p>
          </a>
        </div>
      </nav>
    </header>
  );
}
