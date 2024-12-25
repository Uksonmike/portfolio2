/* eslint-disable no-unused-vars */
import React from "react";
import { useOutletContext } from "react-router-dom";
import headshot from "../assets/Headshot.jpg";
import Experience from "../Component/Experience";
import ExperienceBlock from "../Component/ExperienceBlock";
import { FiLinkedin, FiTwitter } from "react-icons/fi";
import SmallBox from "../Component/SmallBox";
import GridLayout from "../Layout/GridLayout";
import { RiCustomerService2Fill } from "react-icons/ri";
import { SiBuildkite, SiGithub } from "react-icons/si";
import Social from "../Component/Social";
import { Link } from "react-router-dom";
import ScrollToTop from "../Component/ScrollToTop";

export default function About() {
  const [darkMode, setDarkMode] = useOutletContext();

  return (
    <section
      className={`${
        darkMode ? "bg-[#0F0F0F]" : "bg-[#dbdbdb]"
      } py-10  lg:px-36 px-5 `}
    >
      <ScrollToTop />
      <div className="">
        <div></div>
        <div>
          <p className="lg:text-6xl text-4xl mb-5 text-center text-white font-bold uppercase">
            Summary
          </p>
          <div
            className={`lg:h-[240px] md:h-[260px] lg:p-10 p-5 rounded-2xl bg-gradient-to-br border-2 ${
              darkMode
                ? "from-[#313030] to-[#0e0d0d]  border-[#31303034] text-[#fff]"
                : "border-[#0000006f]"
            }`}
          >
            <p className="text-4xl font-semibold mb-2">Michael Ukpong</p>
            <p className="text-md">
              A front-end engineer with 3 years of hands-on experience in
              creating designs that work smoothly. I enjoy solving problems
              creatively and take pride in building web applications that look
              great and feel effortless to use. Working with others to bring
              ideas to life is something I value, and I am always eager to learn
              and take on new challenges to keep growing.
            </p>
          </div>
        </div>
      </div>
      <section className="grid md:grid-cols-2 gap-5 mt-5">
        <div
          className={` lg:p-10 p-5 rounded-2xl bg-gradient-to-br border-2 ${
            darkMode
              ? "from-[#313030] to-[#0e0d0d]  border-[#31303034] text-[#fff]"
              : "border-[#0000006f]"
          }`}
        >
          <Experience title={"Experience"}>
            <ExperienceBlock
              duration={"Aug. 2022 - Till Date"}
              role={"Frontend Engineer"}
              company={"Schull Technologies"}
              location={"Lagos, Nigeria"}
            />
            <ExperienceBlock
              duration={"May. 2022 - Oct. 2023"}
              role={"Frontend Engineer"}
              company={"Stock Afrika"}
              location={"Lagos, Nigeria"}
            />
            <ExperienceBlock
              duration={"Apr. 2024"}
              role={"Quality Analyst, AI Ops"}
              company={"Hugo Technologies"}
              location={"Illinois, US"}
            />
          </Experience>
        </div>
        <div
          className={`lg:p-10 p-5 rounded-2xl bg-gradient-to-br border-2 ${
            darkMode
              ? "from-[#313030] to-[#0e0d0d]  border-[#31303034] text-[#fff]"
              : "border-[#0000006f]"
          }`}
        >
          <Experience title={"Education"}>
            <ExperienceBlock
              duration={"Aug. 2015 - Sept. 2019"}
              role={"B.Sc Physics"}
              company={"Akwa Ibom State University"}
              location={"Akwa Ibom, Nigeria."}
            />
          </Experience>
        </div>
      </section>
      <GridLayout grid={"md:grid-cols-3 mt-7"}>
        <Link to="/contact">
          <SmallBox text="Let's Work Together" name="Contact" mode={darkMode}>
            <div className="p-5 mb-2 bg-[#0000001a] hover:bg-[#00000054] transition-all duration-200 rounded-full m-auto">
              <RiCustomerService2Fill
                color={darkMode ? "#fff" : "black"}
                size={90}
              />
            </div>
          </SmallBox>
        </Link>
        <SmallBox text="Stay with me" name="Profile" mode={darkMode}>
          <div
            className={`${
              darkMode
                ? "from-[#313030] to-[#0e0d0d] border-[#31303034]"
                : "border-[#0000006f]"
            } flex justify-evenly lg:gap-3 gap-1 mb-2 p-5 rounded-[40px] bg-gradient-to-br border-2 `}
          >
            <Social link="https://www.linkedin.com/in/michael-ukpong-178a5811a/">
              <div
                className={
                  darkMode
                    ? "p-5 bg-[#0000001a] text-white hover:text-black hover:bg-[#fff] transition-all duration-200 rounded-full"
                    : "p-5 bg-[#0000001a] text-black hover:bg-[#00000054] transition-all duration-200 rounded-full"
                }
              >
                <FiLinkedin className="lg:text-[30px] text-[25px]" />
              </div>
            </Social>
            <Social link="https://twitter.com/Uksonmike">
              <div
                className={
                  darkMode
                    ? "p-5 bg-[#0000001a] text-white hover:text-black hover:bg-[#fff] transition-all duration-200 rounded-full"
                    : "p-5 bg-[#0000001a] text-black hover:bg-[#00000054] transition-all duration-200 rounded-full"
                }
              >
                <FiTwitter className="lg:text-[30px] text-[20px]" />
              </div>
            </Social>
            <Social link="https://github.com/Uksonmike">
              <div
                className={
                  darkMode
                    ? "p-5 bg-[#0000001a] text-white hover:text-black hover:bg-[#fff] transition-all duration-200 rounded-full"
                    : "p-5 bg-[#0000001a] text-black hover:bg-[#00000054] transition-all duration-200 rounded-full"
                }
              >
                <SiGithub className="lg:text-[30px] text-[20px]" />
              </div>
            </Social>
          </div>
        </SmallBox>
        <Link to="/project">
          <SmallBox text="Let's Work Together" name="Projects" mode={darkMode}>
            <div className="p-5 mb-2 bg-[#0000001a] hover:bg-[#00000054] transition-all duration-200 rounded-full m-auto">
              <SiBuildkite color={darkMode ? "#fff" : "black"} size={100} />
            </div>
          </SmallBox>
        </Link>
      </GridLayout>
    </section>
  );
}
