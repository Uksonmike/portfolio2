/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import { AiOutlineCloudDownload } from "react-icons/ai";
import {
  MdToggleOn,
  MdOutlineToggleOff,
} from "react-icons/md";

export default function Toggler({ state, toggle, file }) {
  return (
    <div className="flex items-center gap-2">
      <button onClick={toggle}>
        {state ? <MdToggleOn color={state ? "white" : "black"} /> : <MdOutlineToggleOff color={state ? "white" : "black"}/>}
      </button>

      <a
        href={file}
        download
        className="flex items-center gap-2 bg-[#474747] text-[#fff] hover:bg-[#fff] hover:text-[#242424] px-3 py-2 rounded-2xl transition-all duration-300"
      >
        <AiOutlineCloudDownload />
        <p className="text-sm font-semibold">Resume</p>
      </a>
    </div>
  );
}
