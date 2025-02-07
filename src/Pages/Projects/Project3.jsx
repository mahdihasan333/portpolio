
const Project3 = () => {


    return (
        <section className="py-12 px-6 lg:px-32 text-white">
            



            <div className="max-w-4xl mx-auto bg-gray-800 p-8 rounded-lg shadow-lg">
                
                {/* Project Title */}
                <h2 className="text-4xl font-bold mb-4">BPL DREAM 11</h2>
                
                {/* Project Image */}
                <img
                    src="https://i.ibb.co.com/23jtvhjQ/Screenshot-2025-02-06-at-5-37-36-PM.png"
                    alt="Project Image"
                    className="w-full h-72 object-cover rounded-lg mb-6"
                />
                
                {/* Technologies Used */}
                <h3 className="text-2xl font-semibold mt-10">Technologies Used</h3>
                <ul className="text-lg space-y-2">
                    <li>Frontend: React JS, Tailwind CSS, DaisyUI</li>
                    <li>Others: React Toastify</li>
                    
                </ul>
                
                {/* Project Description */}
                <h3 className="text-2xl font-semibold mt-10">Project Description</h3>
                <p className="text-lg mb-4">
                A fantasy cricket team selection platform where users can create Dream 11 teams, view player stats, manage selections, claim credits, and subscribe for updates. The platform offers intuitive navigation and player management tools.
                </p>

                {/* Live & GitHub Links */}
                <div className="flex space-x-4 mb-6">
                    <a 
                        href="https://bpl-dream-11-project.surge.sh/" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="btn bg-[#f4a261]"
                    >
                        Live Project
                    </a>
                    <a 
                        href="https://github.com/mahdihasan333/dream-11" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-white btn btn-outline"
                    >
                        GitHub Repo
                    </a>
                </div>

                {/* Challenges Faced */}
                <h3 className="text-2xl font-semibold mt-10">Challenges Faced</h3>
                <ul className="text-lg space-y-2">
                    <li>Designing a user-friendly interface for selecting players.</li>
                    <li>Implementing real-time player updates efficiently.</li>
                    <li>Managing credit system and team validation rules.</li>
                    
                </ul>

                {/* Future Improvements */}
                <h3 className="text-2xl font-semibold mt-10">Future Improvements</h3>
                <ul className="text-lg space-y-2">
                    <li>Adding real-time match performance tracking.</li>
                    <li>Integrating leaderboard and ranking system.</li>
                    <li>Allowing social sharing of teams and stats.</li>
                    
                </ul>
            </div>

        </section>
    );
};

export default Project3;
