import { Link } from "react-router-dom";
import image from "../../../public/wmremove-transformed.png";
import { FaGithub, FaLinkedin, FaTwitter, FaFacebook } from "react-icons/fa";

const Header = () => {
  return (
    <section id="home">
      <section className="text-white min-h-screen flex items-center justify-center px-6">
        <div className="flex flex-col lg:flex-row justify-center items-center gap-10">
          <div className="text-center lg:text-left">
            <h1 className="text-4xl md:text-5xl font-bold">
              Hi, I'm <span className="text-white">Mahdi Hassan</span>
            </h1>
            <h2 className="text-3xl md:text-4xl font-semibold mt-2">
              <p className="text-2xl font-bold">Web Developer</p>
            </h2>
            <p className="mt-4 text-gray-300 text-justify">
              I am a passionate Web Developer with expertise in frontend
              technologies and a growing knowledge of backend development. I
              love solving problems, building user-friendly interfaces, and
              continuously improving my skills to stay ahead in the
              ever-evolving world of technology.
            </p>

            {/* Social Icons using React-Icons */}
            <div className="mt-6 flex gap-6 justify-center md:justify-start text-3xl">
              <a
                href="https://github.com/mahdihasan333"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white"
              >
                <FaGithub />
              </a>
              <a
                href="https://www.linkedin.com/in/mahdi-hassan-dev/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 hover:text-blue-500"
              >
                <FaLinkedin />
              </a>
              <a
                href="https://x.com/MahdiHassanDev"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-300 hover:text-blue-400"
              >
                <FaTwitter />
              </a>
              <a
                href="https://www.facebook.com/mahdi1hassan"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:text-blue-700"
              >
                <FaFacebook />
              </a>
            </div>

            <div className="mt-6 flex gap-4 justify-center md:justify-start">
              <Link to="https://drive.google.com/file/d/14Nw-RFmHYjly3ug20AxBOOVfHXOekmBj/view?usp=sharing" target="_blank">
                <button className="bg-[#f4a261] text-white px-6 py-2 rounded-lg">
                  Resume
                </button>
              </Link>

              <button className="border border-[#f4a261] hover:bg-blue-400 text-white px-6 py-2 rounded-lg">
                Hire Me
              </button>
            </div>
          </div>

          <div className="w-full">
            <img src={image} alt="pic" className="w-full ml-12" />
          </div>
        </div>
      </section>
    </section>
  );
};

export default Header;
