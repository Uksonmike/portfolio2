/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import { Link } from "react-router-dom";
import { FaPersonWalkingArrowRight, FaPlus } from "react-icons/fa6";

export default function SmallBox({ children, text, name, mode}) {
  return (
      <div
        className={`md:h-[300px] h-[230px] flex justify-center flex-col lg:p-10 p-5 rounded-2xl bg-gradient-to-br border-2 ${
          mode
            ? "from-[#313030] to-[#0e0d0d]  border-[#31303034] text-[#9f9f9f]"
            : "border-[#0000006f]"
        }`}
      >
        {children}

        <div className="flex items-end justify-between">
          <div>
            <p className="uppercase sm:text-sm text-xs font-semibold mb-2">{text}</p>
            <p
              className={`${
                mode ? "text-white" : "text-black"
              } font-semibold lg:text-2xl sm:text-xl text-base`} 
            >
              {name}
            </p>
          </div>
          <FaPlus color={mode ? "#9f9f9f" : "#000"} size={16} />
        </div>
      </div>
  );
}
