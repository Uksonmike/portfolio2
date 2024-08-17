/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React from "react";
import { useOutletContext } from "react-router-dom";
import ContactBox from "../Component/ContactBox";
import Social from "../Component/Social";
import { SiBuildkite, SiGithub } from "react-icons/si";
import { FiLinkedin, FiTwitter } from "react-icons/fi";
import MessageComponent from "../Component/MessageComponent";
import ScrollToTop from "../Component/ScrollToTop";

export default function Contact() {
  const [darkMode, setDarkMode] = useOutletContext();

  return (
    <section
      className={`${
        darkMode ? "bg-[#0F0F0F] text-white" : "bg-[#dbdbdb]"
      } lg:py-20 py-[50px] lg:px-36 px-5 flex md:flex-row flex-col gap-5`}
    >
      <ScrollToTop />
      <div className="lg:w-[40%]">
        <p>Contact Info</p>
        <div className="md:mt-10 mt-5">
          <div>
            <ContactBox type="email" value="michaelukpongson91@gmail.com" />
            <ContactBox type="call" value="(+234) 903 338 7545" />
            <ContactBox type="location" value="Lagos, NG." />
          </div>
          <div className="mb-10 md:mb-0">
            <p className="font-semibold">Socials</p>
            <div className="flex gap-4 md:mt-10 mt-5">
              <Social link="https://www.linkedin.com/in/michael-ukpong-178a5811a/">
                <div
                  className={
                    darkMode
                      ? "lg:p-7 p-5 bg-gradient-to-br from-[#313030] to-[#0e0d0d] hover:bg-gradient-to-br hover:from-[#ffffff] hover:to-[#9f9f9f] text-white hover:text-black hover:bg-[#fff] transition-all duration-200 rounded-full"
                      : "lg:p-7 p-5 bg-[#0000001a] text-[#333] hover:bg-[#00000054] transition-all duration-200 rounded-full"
                  }
                >
                  <FiLinkedin size={25} />
                </div>
              </Social>
              <Social link="https://twitter.com/Uksonmike">
                <div
                  className={
                    darkMode
                      ? "lg:p-7 p-5 bg-gradient-to-br from-[#313030] to-[#0e0d0d] hover:bg-gradient-to-br hover:from-[#ffffff] hover:to-[#9f9f9f] text-white hover:text-black hover:bg-[#fff] transition-all duration-200 rounded-full"
                      : "lg:p-7 p-5 bg-[#0000001a] text-[#333] hover:bg-[#00000054] transition-all duration-200 rounded-full"
                  }
                >
                  <FiTwitter size={25} />
                </div>
              </Social>
              <Social link="https://github.com/Uksonmike">
                <div
                  className={
                    darkMode
                      ? "lg:p-7 p-5 bg-gradient-to-br from-[#313030] to-[#0e0d0d] hover:bg-gradient-to-br hover:from-[#ffffff] hover:to-[#9f9f9f] text-white hover:text-black hover:bg-[#fff] transition-all duration-200 rounded-full"
                      : "lg:p-7 p-5 bg-[#0000001a] text-[#333] hover:bg-[#00000054] transition-all duration-200 rounded-full"
                  }
                >
                  <SiGithub size={25} />
                </div>
              </Social>
            </div>
          </div>
        </div>
      </div>
      <div className="rounded-2xl bg-gradient-to-br from-[#313030] to-[#0e0d0d]  border-[#31303034] lg:p-10 p-5 lg:w-[60%] w-full">
        <p className="lg:text-5xl text-3xl font-semibold lg:mb-10 mb-5">
          Let's work <span className="text-[#5B78F6]">together.</span>
        </p>
        <MessageComponent />
      </div>
    </section>
  );
}
