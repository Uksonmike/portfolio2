/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import headshot from "../assets/image.jpg";
import { Link } from "react-router-dom";

export default function ReactangularBlock({ mode, link }) {
  return (
    <Link to={link}>
      <div
        className={`${
          mode
            ? "from-[#313030] to-[#0e0d0d] border-[#31303034] "
            : " border-[#0000006f]"
        } flex md:flex-row flex-col gap-5 lg:p-10 p-5 rounded-3xl  border-2 bg-gradient-to-br transition-all duration-200 md:h-[370px]`}
      >
        <div
          style={{
            backgroundImage: `url("${headshot}")`,
            backgroundPosition: "top",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
          }}
          className="lg:w-[450px] md:w-[350px] w-full md:h-auto sm:h-[370px] h-[250px] rounded-2xl overflow-hidden"
        ></div>
        <div
          className={`${
            mode ? "text-[#9f9f9f] transition-all duration-200" : " "
          } flex flex-col justify-center `}
        >
          <p className="uppercase font-medium sm:text-base text-xs">
            A Frontend Developer
          </p>
          <p
            className={`${
              mode ? "text-white transition-all duration-200" : " "
            } lg:text-6xl sm:text-5xl text-3xl  font-semibold my-4`}
          >
            Michael Ukpong.
          </p>
          <p className="font-medium sm:text-base text-xs">
            I am Frontend Engineer based in Lagos, Nigeria.
          </p>
        </div>
      </div>
    </Link>
  );
}
