/* eslint-disable no-unused-vars */
import React from "react";
import { useOutletContext } from "react-router-dom";
import headshot from "../assets/profile.jfif";
import Experience from "../Component/Experience";
import ExperienceBlock from "../Component/ExperienceBlock";
import { FiLinkedin, FiTwitter } from "react-icons/fi";
import SmallBox from "../Component/SmallBox";
import GridLayout from "../Layout/GridLayout";
import { RiCustomerService2Fill } from "react-icons/ri";
import { SiBuildkite, SiGithub } from "react-icons/si"; 

export default function About() {
  const [darkMode, setDarkMode] = useOutletContext();

  return (
    <section
      className={`${
        darkMode ? "bg-[#0F0F0F]" : "bg-[#dbdbdb]"
      } py-10  lg:px-28 px-5 `}
    >
      <div className="grid grid-cols-12 gap-5">
        <div>
          <div
            className={`h-[320px] p-5 rounded-3xl bg-gradient-to-br border-2 ${
              darkMode
                ? "from-[#313030] to-[#0e0d0d]  border-[#31303034] text-[#9f9f9f]"
                : "border-[#0000006f]"
            }`}
          >
            <div
              style={{
                backgroundImage: `url("${headshot}")`,
                backgroundPosition: "top",
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
              }}
              className="w-full h-full rounded-3xl"
            ></div>
          </div>
        </div>
        <div>
          <p className="text-6xl mb-5 text-center text-white font-bold uppercase">
            Summary
          </p>
          <div
            className={`h-[240px] p-10 rounded-2xl bg-gradient-to-br border-2 ${
              darkMode
                ? "from-[#313030] to-[#0e0d0d]  border-[#31303034] text-[#fff]"
                : "border-[#0000006f]"
            }`}
          >
            <p className="text-4xl font-semibold mb-2">Michael Ukpong</p>
            <p className="text-md">
              I am highly motivated and ambitious, driven by a deep passion for
              everything related to technology. I possess a strong desire for
              personal and professional growth, constantly seeking new knowledge
              and skills. With a keen eye for detail, I prioritize writing clean
              and efficient code. Currently, I am actively seeking an
              exceptional opportunity that will allow me to flourish and advance
              my career as a software engineer.
            </p>
          </div>
        </div>
      </div>
      <section className="grid grid-cols-2 gap-5 mt-5">
        <div
          className={` p-10 rounded-2xl bg-gradient-to-br border-2 ${
            darkMode
              ? "from-[#313030] to-[#0e0d0d]  border-[#31303034] text-[#fff]"
              : "border-[#0000006f]"
          }`}
        >
          <Experience title={"Experience"}>
            <ExperienceBlock
              duration={"Aug. 2022 - Till Date"}
              role={"Frontend Developer"}
              company={"Schull Technologies"}
              location={"Lagos, Nigeria."}
            />
            <ExperienceBlock
              duration={"Nov. 2023 - Jan. 2024"}
              role={"Backend Developer Intern"}
              company={"Univelcity"}
              location={"Lagos, Nigeria."}
            />
          </Experience>
        </div>
        <div
          className={`p-10 rounded-2xl bg-gradient-to-br border-2 ${
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
      <GridLayout grid={"grid-cols-3 mt-7"}>
        <SmallBox text="Let's Work Together" name="Contact" mode={darkMode}>
          <div className="p-2 mb-2 bg-[#0000001a] hover:bg-[#00000054] transition-all duration-200 rounded-full m-auto">
            <RiCustomerService2Fill
              color={darkMode ? "#fff" : "black"}
              size={100}
            />
          </div>
        </SmallBox>
        <SmallBox text="Stay with me" name="Profile" mode={darkMode}>
          <div
            className={`${
              darkMode
                ? "from-[#313030] to-[#0e0d0d] border-[#31303034]"
                : "border-[#0000006f]"
            } flex gap-5 mb-2 p-5 rounded-[40px] bg-gradient-to-br  border-2 `}
          >
            <a
              href="https://www.linkedin.com/in/michael-ukpong-178a5811a/"
              target="__blank"
            >
              <div
                className={
                  darkMode
                    ? "p-8 bg-[#0000001a] text-white hover:text-black hover:bg-[#fff] transition-all duration-200 rounded-full"
                    : "p-8 bg-[#0000001a] text-black hover:bg-[#00000054] transition-all duration-200 rounded-full"
                }
              >
                <SiGithub className="" size={20} />
              </div>
            </a>
            <a
              href="https://www.linkedin.com/in/michael-ukpong-178a5811a/"
              target="__blank"
            >
              <div
                className={
                  darkMode
                    ? "p-8 bg-[#0000001a] text-white hover:text-black hover:bg-[#fff] transition-all duration-200 rounded-full"
                    : "p-8 bg-[#0000001a] text-black hover:bg-[#00000054] transition-all duration-200 rounded-full"
                }
              >
                <FiLinkedin className="" size={20} />
              </div>
            </a>
            <a href="https://twitter.com/Uksonmike" target="__blank">
              <div
                className={
                  darkMode
                    ? "p-8 bg-[#0000001a] text-white hover:text-black hover:bg-[#fff] transition-all duration-200 rounded-full"
                    : "p-8 bg-[#0000001a] text-black hover:bg-[#00000054] transition-all duration-200 rounded-full"
                }
              >
                <FiTwitter className="" size={20} />
              </div>
            </a>
          </div>
        </SmallBox>
        <SmallBox text="Let's Work Together" name="Projects" mode={darkMode}>
          <div className="p-2 mb-2 bg-[#0000001a] hover:bg-[#00000054] transition-all duration-200 rounded-full m-auto">
            <SiBuildkite
              color={darkMode ? "#fff" : "black"}
              size={100}
            />
          </div>
        </SmallBox>
      </GridLayout>
    </section>
  );
}
