import PropTypes from "prop-types";

export default function Project({ thumbnail, name, link }) {
  return (
    <div className="hover:translate-x-3 duration-200 transition-all ease-in-out">
      <a
        target="_blank"
        rel="noreferrer"
        className="flex-1 text-center py-2"
        href={link}
      >
        <div className="w-[500px]">
          <img src={thumbnail} alt="project screen" />
        </div>
      </a>
      <div className="flex bg-[#00000059]">
        <p className="flex-1 text-center py-2">{name}</p>
        <a
          target="_blank"
          rel="noreferrer"
          className="flex-1 text-center py-2"
          href={link}
        >
          Live
        </a>
      </div>
    </div>
  );
}

Project.propTypes = {
  thumbnail: PropTypes.string,
  name: PropTypes.string,
  link: PropTypes.string,
};
