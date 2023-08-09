/* eslint-disable no-unused-vars */
import React from "react";
import Header from "../Component/Header";
import Footer from "../Component/Footer";
import { Outlet } from "react-router-dom";

export default function Layout() {
  const [darkMode, setDarkMode] = React.useState(true);
  return (
    <>
      <div className={`
        ${
          darkMode ? "bg-[#0F0F0F]" : "bg-[#dbdbdb]"
        }`}>
        <Header state={darkMode} setState={setDarkMode} />
        <main>
          <Outlet context={[darkMode, setDarkMode]} />
        </main>
        <Footer state={darkMode} />
      </div>
    </>
  );
}
