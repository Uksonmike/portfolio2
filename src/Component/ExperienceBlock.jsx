/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from "react";

export default function ExperienceBlock({duration, role, company, location}) {
  return (
    <div className="mb-5">
      <p className="text-[#9f9f9f] mb-2">{duration}</p>
      <p>
        <span className="text-[#fff] block text-2xl font-medium">
          {role}
        </span>
        <span className="text-[#9f9f9f] font-medium">
          {company} - <i className="font-normal">{location}</i>
        </span>
      </p>
    </div>
  );
}
