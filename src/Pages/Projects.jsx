/* eslint-disable no-unused-vars */
import { useOutletContext } from "react-router-dom";
import rvservices from "../assets/rvservices.png";
import ayfood from "../assets/ayfood.png";
import gharvest from "../assets/gharvest.png";
import techcare from "../assets/techcare.png";
import rvadmin from "../assets/rv-admin.png";
import ProjectComponent from "../Component/ProjectComponent";
import ScrollToTop from "../Component/ScrollToTop";

export default function Projects() {
  const [darkMode, setDarkMode] = useOutletContext();
  return (
    <section
      className={`${
        darkMode ? "bg-[#0F0F0F]" : "bg-[#dbdbdb]"
      } py-10  lg:px-36 px-5 `}
    >
      <ScrollToTop />
      <div className="">
        <div>
          <p className="lg:text-6xl text-4xl mb-5 text-center text-white font-bold uppercase">
            Projects
          </p>
          <div className="grid gap-5">
            <ProjectComponent
              darkMode={darkMode}
              img={rvadmin}
              link="https://dashboard-rv-home.netlify.app/"
            />
            <ProjectComponent
              darkMode={darkMode}
              img={rvservices}
              link="https://rv-services-homes.netlify.app/"
            />
            <ProjectComponent
              darkMode={darkMode}
              img={gharvest}
              link="https://www.gharvest.us"
            />
            <ProjectComponent
              darkMode={darkMode}
              img={techcare}
              link="https://techcaare.netlify.app"
            />
            <ProjectComponent
              darkMode={darkMode}
              img={ayfood}
              link="https://ayfood.netlify.app"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
