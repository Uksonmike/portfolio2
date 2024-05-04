/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import {
  MdDehaze,
  MdClear,
} from "react-icons/md";
import Resume from "../assets/Michael_Ukpong_Resume.pdf";
import Toggler from "./Toggler";

export default function Header({ state, setState }) {
  const [nav, setNav] = useState(false);
  const activeStyle = {
    fontWeight: "bold",
    color: state ? "#fff" : "#000",
  };

  const style = {
    backgroundColor: state ? "#121212" : "#fff",
    color: state ? "white" : "black",
  };

  const handleNav = () => {
    setNav(!nav);
  };

  const toggleDark = () => {
    setState(!state);
  };
  return (
    <>
      <header className="md:hidden z-[999]">
        <div className="px-5 py-5 flex justify-between">
          <button onClick={() => setNav(!nav)}>
            {nav ? (
              <MdClear size={30} color={state ? "white" : "black"} />
            ) : (
              <MdDehaze size={30} color={state ? "white" : "black"} />
            )}
          </button>
          <Toggler state={state} file={Resume} toggle={toggleDark} />
        </div>
      </header>
      <div
        style={style}
        className={
          nav
            ? "translate-y-[-90px] h-[100vh] w-full text-white absolute top-[90px] left-0 flex transition-all duration-500 items-center justify-center text-center overflow-hidden"
            : "absolute translate-y-[-90px] h-[100vh] w-full bg-opacity-20 text-white top-[90px] left-[-100%] transition-all duration-[500ms] flex items-center justify-center text-center overflow-hidden"
        }
      >
        <ul className="md:text-[20px]">
          <Link to="/" className="links" onClick={handleNav}>
            <li className="my-[10px] mb-[30px] hover:cursor-pointer">HOME</li>
          </Link>
          <Link to="/about" className="links" onClick={handleNav}>
            <li className="mb-[30px] hover:cursor-pointer">ABOUT</li>
          </Link>
          <Link to="/project" className="links" onClick={handleNav}>
            <li className="mb-[30px] hover:cursor-pointer">PROJECT</li>
          </Link>
          <Link to="/contact" className="links" onClick={handleNav}>
            <li className="mb-[30px] hover:cursor-pointer">CONTACT</li>
          </Link>
        </ul>
      </div>
      <header
        className={`
        ${
          state ? "bg-[#0F0F0F] text-[#8d8d8d]" : "bg-[#dbdbdb]"
        } lg:px-36 px-5 py-5 hidden md:block transition-all duration-200`}
      >
        <nav className="flex justify-between items-center">
          <NavLink to={""}>
            <p
              className={`${
                state ? "text-white" : "text-[#333]"
              } text-2xl font-bold `}
            >
              A.F
            </p>
          </NavLink>
          <ul className="flex gap-10 font-medium">
            <NavLink
              to={""}
              style={({ isActive }) => (isActive ? activeStyle : null)}
              className={
                state ? "hover:text-[#fff] transition-all duration-200" : ""
              }
            >
              <li>Home</li>
            </NavLink>
            <NavLink
              to={"about"}
              style={({ isActive }) => (isActive ? activeStyle : null)}
              className={
                state ? "hover:text-[#fff] transition-all duration-200" : ""
              }
            >
              <li>About</li>
            </NavLink>
            <NavLink
              to={"project"}
              style={({ isActive }) => (isActive ? activeStyle : null)}
              className={
                state ? "hover:text-[#fff] transition-all duration-200" : ""
              }
            >
              <li>Projects</li>
            </NavLink>
            <NavLink
              to={"contact"}
              style={({ isActive }) => (isActive ? activeStyle : null)}
              className={
                state ? "hover:text-[#fff] transition-all duration-200" : ""
              }
            >
              <li>Contact</li>
            </NavLink>
          </ul>
          <Toggler state={state} file={Resume} toggle={toggleDark} />
        </nav>
      </header>
    </>
  );
}
