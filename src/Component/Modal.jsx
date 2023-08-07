/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";

export default function Modal({text, text2, handlClick}) {
    
  return (
    <div>
      <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none transition-all duration-500">
        <div className="relative w-auto my-6 mx-auto max-w-3xl ">
          <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full text-white outline-none focus:outline-none bg-[#2A2145]">
            {/*body*/}
            <div className="relative md:py-16 py-10 md:px-10 px-3 flex-auto text-center items-center align-middle flex flex-col mx-auto">
              {/* <img className="md:w-auto  w-[60px]" src={sent} alt="" /> */}
              <p className="mt-6 text-[#FDCA01] lg:text-xl font-medium md:text-lg text-base md:w-[500px] w-[310px]">
                {text}
              </p>
              <p className="font-normal md:text-base text-sm mt-3 md:w-3/4">{text2}</p>
            </div>
            <div className="flex items-center justify-end p-6 rounded-b">
              <button
                className="absolute top-3 right-0 text-slate-400 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                type="button"
                onClick={handlClick}
              >
                X
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="opacity-40 fixed inset-0 z-40 bg-black"></div>
    </div>
  );
}
