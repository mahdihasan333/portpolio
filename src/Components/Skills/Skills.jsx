import Marquee from "react-fast-marquee";
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaGitAlt } from "react-icons/fa";
import { SiTailwindcss, SiMongodb, SiExpress, SiFirebase, SiGithub } from "react-icons/si";

const skillCategories = {
    Frontend: [
        { name: "HTML5", icon: <FaHtml5 className="text-orange-500 text-5xl" /> },
        { name: "CSS3", icon: <FaCss3Alt className="text-blue-500 text-5xl" /> },
        { name: "TailwindCSS", icon: <SiTailwindcss className="text-cyan-500 text-5xl" /> },
        { name: "JavaScript", icon: <FaJs className="text-yellow-500 text-5xl" /> },
        { name: "React", icon: <FaReact className="text-blue-400 text-5xl" /> },
    ],
    Backend: [
        { name: "Node.js", icon: <FaNodeJs className="text-green-500 text-5xl" /> },
        { name: "Express.js", icon: <SiExpress className="text-gray-500 text-5xl" /> },
        { name: "MongoDB", icon: <SiMongodb className="text-green-700 text-5xl" /> },
    ],
    Tools: [
        { name: "Firebase", icon: <SiFirebase className="text-yellow-400 text-5xl" /> },
        { name: "Git", icon: <FaGitAlt className="text-orange-600 text-5xl" /> },
        { name: "GitHub", icon: <SiGithub className="text-gray-800 text-5xl" /> },
    ],
};

const Skills = () => {
    return (
        <section id="skills" className="py-12 text-center  text-white">
            <div className="mb-10">
                <h3 className="text-5xl font-bold">My Skills</h3>
                <p className="text-lg max-w-2xl mx-auto mt-4 text-gray-300">
                    Showcasing my expertise in frontend, backend, and tools that drive innovation and excellence.
                </p>
            </div>

            {/* Skill Categories with Marquee */}
            {Object.entries(skillCategories).map(([category, skills], index) => (
                <div key={index} className="mb-10">
                    <h4 className="text-3xl font-semibold mb-5 text-cyan-400">{category}</h4>
                    <div className="overflow-hidden">
                        <Marquee pauseOnHover gradient={true} gradientColor={[20, 20, 20]}>
                            {skills.map((item, idx) => (
                                <div
                                    key={idx}
                                    className="bg-white shadow-lg hover:shadow-xl transition-all duration-300 border rounded-lg p-6 mx-4 flex flex-col items-center"
                                >
                                    {item.icon}
                                    <p className="text-lg font-medium mt-3 text-black">{item.name}</p>
                                </div>
                            ))}
                        </Marquee>
                    </div>
                </div>
            ))}
        </section>
    );
};

export default Skills;
