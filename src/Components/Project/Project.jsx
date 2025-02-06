import { Link } from "react-router-dom";

const Project = () => {
    return (
        <section id="project" className="text-white ">
            <div className="flex flex-col justify-center items-center gap-3 font-bold">
                <h2>My Projects</h2>
                <h6 className="text-center">
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
                    <div className="card-body p-2">
                        <h2 className="card-title text-2xl lg:text-5xl font-bold text-black">New album is released!</h2>
                        <p className="my-2">Click the button to listen on Spotiwhy app.</p>

                        <ul className="space-y-2">
                            <li>1</li>
                            <li>2</li>
                            <li>3</li>
                            <li>4</li>
                        </ul>
                        {/* technology */}
                        <div className="flex flex-wrap lg:gap-3 items-center">
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
                    <div className="card-body p-2">
                        <h2 className="card-title text-2xl lg:text-5xl font-bold text-black">New album is released!</h2>
                        <p className="my-2">Click the button to listen on Spotiwhy app.</p>

                        <ul className="space-y-2">
                            <li>1</li>
                            <li>2</li>
                            <li>3</li>
                            <li>4</li>
                        </ul>
                        {/* technology */}
                        <div className="flex flex-wrap lg:gap-3 items-center">
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
                            className="rounded-xl h-full"
                            src="https://i.ibb.co.com/23jtvhjQ/Screenshot-2025-02-06-at-5-37-36-PM.png"
                            alt="pic" />
                    </figure>
                    <div className="card-body p-2">
                        <h2 className="card-title text-2xl lg:text-5xl font-bold text-black">New album is released!</h2>
                        <p className="my-2">Click the button to listen on Spotiwhy app.</p>

                        <ul className="space-y-2">
                            <li>1</li>
                            <li>2</li>
                            <li>3</li>
                            <li>4</li>
                        </ul>
                        {/* technology */}
                        <div className="flex flex-wrap lg:gap-3 items-center">
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