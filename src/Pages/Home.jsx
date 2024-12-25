/* eslint-disable no-unused-vars */
import React from "react";
import signature from "../assets/signature.png";
import signatureblack from "../assets/signatureblack.png";
// import html from "../assets/html.png";
// import sass from "../assets/sass.png";
import typescript from "../assets/typescript.png";
import js from "../assets/js.png";
import react from "../assets/react.png";
// import figma from "../assets/figma.png";
// import github from "../assets/github.png";
import GridLayout from "../Layout/GridLayout";
import Typer from "../Component/Typer";
import ReactangularBlock from "../Component/ReactangularBlock";
import SmallBox from "../Component/SmallBox";
import { FaLinkedin, FaTwitter } from "react-icons/fa";
import { RiCustomerService2Fill } from "react-icons/ri";
import { useOutletContext } from "react-router-dom";
import { Link } from "react-router-dom";
import ScrollToTop from "../Component/ScrollToTop";

export default function Home() {
  const [darkMode, setDarkMode] = useOutletContext();

  return (
    <section
      className={`${
        darkMode ? "bg-[#0F0F0F]" : "bg-[#dbdbdb]"
      } py-10  lg:px-36 px-5 `}
    ><ScrollToTop/>
      <GridLayout grid={"lg:grid-cols-2"}>
        <ReactangularBlock link="about" mode={darkMode} />
        <div className="flex flex-col gap-5">
          <div
            className={`${
              darkMode
                ? "text-[#9f9f9f] from-[#313030] to-[#0e0d0d] border-[#31303034]"
                : "border-[#0000006f]"
            } transition-all duration-200 p-3 rounded-full bg-gradient-to-r  border-2 md:text-base sm:text-sm text-xs`}
          >
            <Typer
              dataText={[
                "Creating Modern, Responsive, and User-Friendly Web Solutions.",
                "Transforming Ideas into Beautiful and Functional Web Interfaces.",
                "Transforming Ideas into Beautiful and Functional Web Interfaces.",
              ]}
            />
          </div>
          <GridLayout grid={"md:grid md:grid-cols-2"}>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://drive.google.com/file/d/17GBuLluQEIFLVqjOZYKFXUMqbNylS8EC/view?usp=drive_link"
            >
              <SmallBox text="More About Me" name="Resume" mode={darkMode}>
                <div className="w-[150px] rounded-lg overflow-hidden m-auto mb-5">
                  <img src={darkMode ? signature : signatureblack} alt="" />
                </div>
              </SmallBox>
            </a>
            <Link to={"project"}>
              <SmallBox text="Showcase" name="Projects" mode={darkMode}>
                <div className="w-[150px] rounded-lg overflow-hidden m-auto mb-5">
                  <img
                    src="https://images.unsplash.com/photo-1542039375-28138150cc31?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1174&q=80"
                    alt=""
                  />
                </div>
              </SmallBox>
            </Link>
          </GridLayout>
        </div>
      </GridLayout>
      <GridLayout grid={"lg:grid-cols-33 md:grid-cols-3 mt-6"}>
        <Link to={"contact"}>
          <SmallBox text="Let's Work Together" name="Contact" mode={darkMode}>
            <div className="p-2 mb-2 bg-[#0000001a] hover:bg-[#00000054] transition-all duration-200 rounded-full mx-auto">
              <RiCustomerService2Fill
                color={darkMode ? "#fff" : "black"}
                className="lg:text-[100px] md:text-[90px] text-[100px]"
              />
            </div>
          </SmallBox>
        </Link>
        <SmallBox
          text="What I can Work with"
          name="Tech Stacks"
          mode={darkMode}
        >
          <div className="flex gap-2 md:mb-0 mb-8">
            <div className="lg:w-[100px] md:w-[50px] sm:w-[80px] w-[50px] rounded-lg overflow-hidden m-auto lg:mb-8 md:mb-10">
              <img src={typescript} alt="" />
            </div>
            <div className="lg:w-[100px] md:w-[50px] sm:w-[80px] w-[50px] rounded-lg overflow-hidden m-auto lg:mb-8 md:mb-10">
              <img src={react} alt="" />
            </div>
            <div className="lg:w-[100px] md:w-[50px] sm:w-[80px] w-[50px] rounded-lg overflow-hidden m-auto lg:mb-8 md:mb-10">
              <img src={js} alt="" />
            </div>
          </div>
        </SmallBox>
        <SmallBox text="Stay with me" name="Profile" mode={darkMode}>
          <div
            className={`${
              darkMode
                ? "from-[#313030] to-[#0e0d0d] border-[#31303034]"
                : "border-[#0000006f]"
            } flex justify-evenly lg:gap-5 gap-2 mb-2 sm:p-5 p-3 rounded-[40px] bg-gradient-to-br  border-2 `}
          >
            <a
              href="https://www.linkedin.com/in/michael-ukpong-178a5811a/"
              target="__blank"
            >
              <div
                className={
                  darkMode
                    ? "lg:p-8 md:p-4 sm:p-8 p-4 bg-[#0000001a] text-white hover:text-black hover:bg-[#fff] transition-all duration-200 rounded-full"
                    : "lg:p-8 md:p-4 sm:p-8 p-4 bg-[#0000001a] text-black hover:bg-[#00000054] transition-all duration-200 rounded-full"
                }
              >
                <FaLinkedin className="lg:text-[30px] md:text-[20px] text-[30px]" />
              </div>
            </a>
            <a href="https://twitter.com/Uksonmike" target="__blank">
              <div
                className={
                  darkMode
                    ? "lg:p-8 md:p-4 sm:p-8 p-4 bg-[#0000001a] text-white hover:text-black hover:bg-[#fff] transition-all duration-200 rounded-full"
                    : "lg:p-8 md:p-4 sm:p-8 p-4 bg-[#0000001a] text-black hover:bg-[#00000054] transition-all duration-200 rounded-full"
                }
              >
                <FaTwitter className="lg:text-[30px] md:text-[20px] text-[30px]" />
              </div>
            </a>
          </div>
        </SmallBox>
      </GridLayout>
    </section>
  );
}
