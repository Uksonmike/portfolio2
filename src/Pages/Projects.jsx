/* eslint-disable no-unused-vars */
import React from "react";
import { useOutletContext } from "react-router-dom";
import Experience from "../Component/Experience";
import { FiLinkedin, FiTwitter } from "react-icons/fi";
import SmallBox from "../Component/SmallBox";
import GridLayout from "../Layout/GridLayout";
import { RiCustomerService2Fill } from "react-icons/ri";
import Social from "../Component/Social";
import { Link } from "react-router-dom";
import img1 from "../assets/1.png";
import img2 from "../assets/2.png";
import img3 from "../assets/3.png";
import img4 from "../assets/4.png";
import Project from "../Component/Project";

export default function Projects() {
  const [darkMode, setDarkMode] = useOutletContext();

  return (
    <section
      className={`${
        darkMode ? "bg-[#0F0F0F]" : "bg-[#dbdbdb]"
      } py-10  lg:px-36 px-5 `}
    >
      <div className="md:grid grid-cols-12 gap-5"></div>
      <section className="grid md:grid-cols-1 gap-5 mt-5">
        <div
          className={` lg:p-10 p-5 rounded-2xl bg-gradient-to-br border-2 ${
            darkMode
              ? "from-[#313030] to-[#0e0d0d]  border-[#31303034] text-[#fff]"
              : "border-[#0000006f]"
          }`}
        >
          <Experience title={"Projects"}>
            <div className="grid grid-cols-2 gap-10 place-items-center">
              <Project
                name="Schull.io"
                link="https://schull.io/"
                thumbnail={img3}
              />
              <Project
                name="Ay.Food"
                link="https://ayfood.netlify.app/"
                thumbnail={img1}
              />
              <Project
                name="XConnect"
                link="https://xconnect.geraldblack.co/"
                thumbnail={img2}
              />
              <Project
                name="Schull LMS"
                link="https://adminportal.schull.io/"
                thumbnail={img4}
              />
            </div>
          </Experience>
        </div>
      </section>
      <GridLayout grid={"md:grid-cols-2 mt-7"}>
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
            <Social link="https://www.linkedin.com/in/anom-a-f-86398619b/">
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
          </div>
        </SmallBox>
      </GridLayout>
    </section>
  );
}
