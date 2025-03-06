import { Link } from "react-router-dom";

const Project = () => {
    return (
        <section id="project" className="text-white ">
            <div className="flex flex-col justify-center items-center gap-3 font-bold pb-10">
                <h2 className="text-5xl font-bold">My Projects</h2>
                <h6 className="text-center ">
                    Explore three of my top projects that highlight my web development journey. Each project card features the tech stack, live site, GitHub link, challenges faced, and future improvement plans, reflecting my growth and problem-solving skills in coding</h6>
            </div>

            <div className="flex flex-col justify-center lg:p-10 items-center gap-10">
                {/* card 1 */}

                <div className="card h-full w-full bg-teal-900 md:card-side shadow-xl p-2 lg:gap-6 lg:p-5">
                    <figure className="lg:w-[50%] lg:h-[0%]">
                        <img
                            className="rounded-xl"
                            src="https://i.ibb.co.com/VpVVmMP3/Screenshot-2025-02-05-at-5-13-34-PM.png"
                            alt="pic" />
                    </figure>
                    <div className="card-body p-2 lg:w-[50%]">
                        <h2 className="card-title text-2xl lg:text-5xl font-bold text-black">Full-Stack Online Marketplace</h2>
                        <p className="my-2">A full-stack web application where users can browse job postings, bid on jobs, and manage job listings. Features include authentication, job management, bidding, and user profiles</p>


                        {/* technology */}
                        <div className="flex flex-wrap lg:justify-start gap-1 justify-center lg:gap-3 items-center">
                            <h6 className="p-3 bg-[#f4a261] badge">Tailwind CSS</h6>
                            <h6 className="p-3 bg-[#f4a261] badge">DaisyUI</h6>
                            <h6 className="p-3 bg-[#f4a261] badge">ReactJS</h6>

                        </div>

                        <div className="flex text-sm gap-2 lg:text-lg">
                            <Link to='/projects1'>
                                <button className="btn bg-[#f4a261]" >view Details</button>
                            </Link>
                            <Link to='https://solosphere-212f2.web.app/' target="_blank">
                                <button className="btn bg-[#f4a261]" >live link</button>
                            </Link>
                            <Link to='https://github.com/mahdihasan333/solosphere' target="_blank">
                                <button className="btn bg-[#f4a261]" >github repo</button>
                            </Link>
                        </div>



                    </div>
                </div>


                <div className="card h-full w-full bg-teal-900 md:card-side shadow-xl p-2 lg:gap-6 lg:p-5">
                    <figure className="lg:w-[50%] lg:h-[0%]">
                        <img
                            className="rounded-xl"
                            src="https://i.ibb.co.com/hTrhKQj/Screenshot-2025-02-05-at-5-37-28-PM.png"
                            alt="pic" />
                    </figure>
                    <div className="card-body p-2 lg:w-[50%]">
                        <h2 className="card-title text-2xl lg:text-5xl font-bold text-black">Pet Adoption Platform</h2>
                        <p className="my-2">Peddy is an innovative pet adoption platform that connects potential pet owners with animals in need. It offers a user-friendly interface to browse pets, learn about their backgrounds, and adopt them easily. The platform also supports shelters by streamlining the adoption process.</p>


                        {/* technology */}
                        <div className="flex flex-wrap gap-1 lg:justify-start justify-center lg:gap-3 items-center">
                            <h6 className="p-3 bg-[#f4a261] badge">Tailwind CSS</h6>
                            <h6 className="p-3 bg-[#f4a261] badge">DaisyUI</h6>
                            <h6 className="p-3 bg-[#f4a261] badge">ReactJS</h6>

                        </div>

                        <div className="flex text-sm gap-2 lg:text-lg">
                            <Link to='/projects2'>
                                <button className="btn bg-[#f4a261]" >view Details</button>
                            </Link>
                            <Link to='https://assignment-6-pet-adoption.surge.sh/' target="_blank">
                                <button className="btn bg-[#f4a261]" >live link</button>
                            </Link>
                            <Link to='https://github.com/mahdihasan333/pet-adoption' target="_blank">
                                <button className="btn bg-[#f4a261]" >github repo</button>
                            </Link>
                        </div>



                    </div>
                </div>


                <div className="card h-full w-full bg-teal-900 md:card-side shadow-xl p-2 lg:gap-6 lg:p-5">
                    <figure className="lg:w-[50%] lg:h-[0%]">
                        <img
                            className="rounded-xl h-full"
                            src="https://i.ibb.co.com/23jtvhjQ/Screenshot-2025-02-06-at-5-37-36-PM.png"
                            alt="pic" />
                    </figure>
                    <div className="card-body p-2 lg:w-[50%]">
                        <h2 className="card-title text-2xl lg:text-5xl font-bold text-black">BPL DREAM 11</h2>
                        <p className="my-2">A fantasy cricket team selection platform where users can create Dream 11 teams, view player stats, manage selections, claim credits, and subscribe for updates. The platform offers intuitive navigation and player management tools.</p>


                        {/* technology */}
                        <div className="flex flex-wrap lg:gap-3 lg:justify-start gap-1 justify-center items-center">
                            <h6 className="p-3 bg-[#f4a261] badge">Tailwind CSS</h6>
                            <h6 className="p-3 bg-[#f4a261] badge">DaisyUI</h6>
                            <h6 className="p-3 bg-[#f4a261] badge">ReactJS</h6>

                        </div>

                        <div className="flex text-sm gap-2 lg:text-lg">
                            <Link to='/projects3'>
                                <button className="btn bg-[#f4a261]" >view Details</button>
                            </Link>
                            <Link to='https://bpl-dream-11-project.surge.sh/' target="_blank">
                                <button className="btn bg-[#f4a261]" >live link</button>
                            </Link>
                            <Link to='https://github.com/mahdihasan333/dream-11' target="_blank">
                                <button className="btn bg-[#f4a261]" >github repo</button>
                            </Link>
                        </div>



                    </div>
                </div>


            </div>

        </section>
    );
};

export default Project;