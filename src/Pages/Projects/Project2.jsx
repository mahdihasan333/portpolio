
const Project2 = () => {
    
    
    return (
        <section className="py-12 px-6 lg:px-32 text-white">
            <div className="max-w-4xl mx-auto bg-gray-800 p-8 rounded-lg shadow-lg">
                
                {/* Project Title */}
                <h2 className="text-4xl font-bold mb-4">Pet Adoption Platform</h2>
                
                {/* Project Image */}
                <img 
                    src="https://i.ibb.co.com/hTrhKQj/Screenshot-2025-02-05-at-5-37-28-PM.png" 
                    alt="Project Image" 
                    className="w-full h-72 object-cover rounded-lg mb-6"
                />
                
                {/* Technologies Used */}
                <h3 className="text-2xl font-semibold mt-10">Technologies Used</h3>
                <ul className="text-lg space-y-2">
                    <li>Frontend: React JS, Tailwind CSS</li>
                    <li>Others: Surge for deployment</li>
                    
                </ul>
                
                {/* Project Description */}
                <h3 className="text-2xl font-semibold mt-10">Project Description</h3>
                <p className="text-lg mb-4">
                Peddy is an innovative pet adoption platform that connects potential pet owners with animals in need. It offers a user-friendly interface to browse pets, learn about their backgrounds, and adopt them easily. The platform also supports shelters by streamlining the adoption process.
                </p>

                {/* Live & GitHub Links */}
                <div className="flex flex-col items-center justify-center gap-4 mb-6">
                    <a 
                        href="https://assignment-6-pet-adoption.surge.sh/" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="btn bg-[#f4a261]"
                    >
                        Live Project
                    </a>
                    <a 
                        href="https://github.com/mahdihasan333/pet-adoption" 
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
                    <li>Implementing sorting and filtering for better user experience.</li>
                    <li>Ensuring responsiveness across different devices.</li>
                    <li>Handling user authentication and account management.</li>
                    
                </ul>

                {/* Future Improvements */}
                <h3 className="text-2xl font-semibold mt-10">Future Improvements</h3>
                <ul className="text-lg space-y-2">
                    <li>Adding shelter management features for better tracking.</li>
                    <li>Integrating payment/donation system for pet care.</li>
                    <li>Implementing AI-powered pet recommendations based on user preferences.</li>
                    
                </ul>
            </div>
        </section>
    );
};

export default Project2;
