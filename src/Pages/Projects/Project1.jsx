
const Project1 = () => {


    return (
        <section className="py-12 px-6 lg:px-32 text-white">
            <div className="max-w-4xl mx-auto bg-gray-800 p-8 rounded-lg shadow-lg">

                {/* Project Title */}
                <h2 className="text-4xl font-bold mb-4">Full-Stack Online Marketplace</h2>

                {/* Project Image */}
                <img
                    src="https://i.ibb.co.com/VpVVmMP3/Screenshot-2025-02-05-at-5-13-34-PM.png"
                    alt="Project Image"
                    className="w-full h-72 object-cover rounded-lg mb-6"
                />

                {/* Technologies Used */}
                <h3 className="text-2xl font-semibold mt-10">Technologies Used</h3>
                <ul className="text-lg space-y-2">
                    <li>Frontend: React, Tailwind CSS, React Tabs, React Router</li>
                    <li>Backend: Node.js, Express</li>
                    <li>Database: MongoDB</li>
                    <li>Authentication: Firebase Authentication</li>
                    <li>Others: DaisyUI, React Toastify</li>
                </ul>

                {/* Project Description */}
                <h3 className="text-2xl font-semibold mt-10">Project Description</h3>
                <p className="text-lg mb-4">
                    A full-stack web application where users can browse job postings, bid on jobs, and manage job listings. Features include authentication, job management, bidding, and user profiles
                </p>

                {/* Live & GitHub Links */}
                <div className="flex space-x-4 mb-6">
                    <a
                        href="https://solosphere-212f2.web.app/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn bg-[#f4a261]"
                    >
                        Live Project
                    </a>
                    <a
                        href="https://github.com/mahdihasan333/solosphere"
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
                    <li>Implementing the bidding system with real-time updates.</li>
                    <li>Managing user authentication and authorization securely with Firebase.</li>
                    <li>Structuring the MongoDB database efficiently to handle job listings and bids.</li>
                </ul>



                {/* Future Improvements */}
                <h3 className="text-2xl font-semibold mt-10">Future Improvements</h3>
                <ul className="text-lg space-y-2">
                    <li>Adding payment integration for job transactions.</li>
                    <li>Implementing real-time chat between job owners and bidders.</li>
                    <li>Enhancing admin dashboard for better job and user management.</li>
                </ul>
            </div>
        </section>
    );
};

export default Project1;
