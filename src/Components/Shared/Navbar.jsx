import { useState } from "react";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const NavOptions = [
        { path: "#home", name: "Home" },
        { path: "#about", name: "About" },
        { path: "#skills", name: "Skills" },
        { path: "#project", name: "Project" },
        { path: "#contact", name: "Contact" },
    ];

    return (
        <div className="bg-[#101736] pb-28">
            {/* Sticky Navbar */}
            <div className="fixed top-0 left-0 w-full bg-opacity-80 backdrop-blur-md shadow-md flex items-center justify-between px-6 py-4 z-[100]">
                {/* Navbar Start */}
                <div className="navbar-start">
                    <a href="#" className="text-2xl font-bold text-[#f4a261]">{'<Mahdi/>'}</a>
                </div>

                {/* Navbar Center (Desktop) */}
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 space-x-6 text-white">
                        {NavOptions.map((option, index) => (
                            <li key={index}>
                                <a
                                    href={option.path}
                                    className="hover:text-gray-300 transition duration-300 cursor-pointer"
                                >
                                    {option.name}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Mobile Menu Button */}
                <div className="lg:hidden">
                    <button
                        onClick={() => setIsOpen(true)}
                        className="btn btn-ghost text-white focus:outline-none"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-6 w-6"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </button>
                </div>
            </div>

            {/* Full-Screen Mobile Menu */}
            <div
                className={`fixed inset-0 bg-gray-900 bg-opacity-90 flex flex-col items-center justify-center transition-all duration-500 ease-in-out ${isOpen ? "opacity-100 scale-100 z-[200]" : "opacity-0 scale-95 -z-50 pointer-events-none"
                    }`}
            >
                <button
                    onClick={() => setIsOpen(false)}
                    className="absolute top-6 right-6 text-white text-3xl z-[201]"
                >
                    ✕
                </button>

                <ul className="text-white text-2xl space-y-4">
                    {NavOptions.map((option, index) => (
                        <li key={index} className="w-full text-center">
                            <a
                                href={option.path}
                                className="block w-full px-6 py-3 rounded-lg bg-gray-800/70 text-white 
                          hover:bg-gray-700 hover:scale-105 transition-all duration-300 
                          shadow-md hover:shadow-lg cursor-pointer"
                                onClick={() => setIsOpen(false)}
                            >
                                {option.name}
                            </a>
                        </li>
                    ))}
                </ul>

            </div>
        </div>
    );
};

export default Navbar;
