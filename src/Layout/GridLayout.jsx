/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";

export default function GridLayout({children, grid}) {
  return (
    <div className={`grid ${grid} gap-5`}>
      {children}
    </div>
  );
}
