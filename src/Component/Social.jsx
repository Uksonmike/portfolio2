/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { Children } from "react";

export default function Social({children, link }) {
  return (
    <a href={link} target="__blank">
      {children}
    </a>
  );
}
