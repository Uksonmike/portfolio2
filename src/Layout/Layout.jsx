/* eslint-disable no-unused-vars */
import React from "react";
import Header from "../Component/Header";
import Footer from "../Component/Footer";
import { Outlet } from "react-router-dom";

export default function Layout() {
  const [darkMode, setDarkMode] = React.useState(true);
  return (
    <>
      <body className={`
        ${
          darkMode ? "bg-[#0F0F0F] text-[#8d8d8d]" : "bg-[#dbdbdb]"
        }`}>
        <Header state={darkMode} setState={setDarkMode} />
        <main>
          <Outlet context={[darkMode, setDarkMode]} />
        </main>
        <Footer state={darkMode} />
      </body>
    </>
  );
}
