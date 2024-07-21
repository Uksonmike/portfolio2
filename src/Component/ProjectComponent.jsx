import PropTypes from "prop-types";

export default function ProjectComponent({ darkMode, img, link }) {
  return (
    <div
      className={`w-fit mx-auto lg:p-10 p-5 rounded-2xl bg-gradient-to-br border-2 ${
        darkMode
          ? "from-[#313030] to-[#0e0d0d]  border-[#31303034] text-[#fff]"
          : "border-[#0000006f]"
      }`}
    >
      <div className="grid place-items-center  grayscale hover:grayscale-0 transition-all ease-in-out duration-200">
        <div className="w-[600px]">
          <img className="w-full" src={img} alt="project" />
        </div>
        <div className="w-full">
          <a
            target="_blank"
            rel="noreferrer"
            href={link}
            className="h-full w-full py-2"
          >
            <button className="w-full hover:bg-white hover:text-black transition-all duration-200 ease-in-out">
              Live
            </button>
          </a>
        </div>
      </div>
    </div>
  );
}

ProjectComponent.propTypes = {
  darkMode: PropTypes.bool,
  img: PropTypes.string,
  link: PropTypes.string,
};
