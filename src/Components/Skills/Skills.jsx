import Marquee from "react-fast-marquee";
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaGitAlt } from "react-icons/fa";
import { SiTailwindcss, SiMongodb, SiExpress, SiFirebase, SiGithub } from "react-icons/si";

const skills = [
    { name: "HTML5", icon: <FaHtml5 className="text-orange-500 text-5xl" /> },
    { name: "CSS3", icon: <FaCss3Alt className="text-blue-500 text-5xl" /> },
    { name: "TailwindCSS", icon: <SiTailwindcss className="text-cyan-500 text-5xl" /> },
    { name: "JavaScript", icon: <FaJs className="text-yellow-500 text-5xl" /> },
    { name: "React", icon: <FaReact className="text-blue-400 text-5xl" /> },
    { name: "Node.js", icon: <FaNodeJs className="text-green-500 text-5xl" /> },
    { name: "Express.js", icon: <SiExpress className="text-gray-500 text-5xl" /> },
    { name: "MongoDB", icon: <SiMongodb className="text-green-700 text-5xl" /> },
    { name: "Firebase", icon: <SiFirebase className="text-yellow-400 text-5xl" /> },
    { name: "Git", icon: <FaGitAlt className="text-orange-600 text-5xl" /> },
    { name: "GitHub", icon: <SiGithub className="text-gray-800 text-5xl" /> },
];

const Skills = () => {
    return (
        <div className="py-10 bg-transparent text-center">
            <div className="text-center text-white">
                <h3 className="text-5xl font-bold">My Skills</h3>
                <h6 className="text-lg">An In-Depth Journey Into My Expertise: A Comprehensive Exploration of My Technical Proficiency, Professional Capabilities, and Creative Mastery That Drive Innovation, Excellence, and Impact in My Field, Showcasing the Skills and Knowledge That Define My Work and Set Me Apart in the Industry</h6>
            </div>
            <div className="overflow-hidden w-full">
                <Marquee pauseOnHover>
                    {skills.map((item, idx) => (
                        <div
                            key={idx}
                            className="card bg-white shadow-lg hover:shadow-xl transition-all duration-300 border rounded-lg p-6 m-4 flex flex-col items-center"
                            style={{
                                transform: "scale(1.1)", // Slightly enlarge cards
                            }}
                        >
                            {item.icon}
                            <p className="text-lg font-medium mt-3">{item.name}</p>
                        </div>
                    ))}
                </Marquee>
            </div>
        </div>
    );
};

export default Skills;
