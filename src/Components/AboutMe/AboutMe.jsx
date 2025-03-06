import Lottie from "react-lottie";
import animationData from '../../../src/assets/Animation.json'

const AboutMe = () => {
    const lottieOptions = {
        loop: true,
        autoplay: true,
        animationData: animationData,
        rendererSettings: {
            preserveAspectRatio: "xMidYMid slice",
        },
    };

    return (
        <section className="text-white py-10">
            <h2 className="text-2xl lg:text-5xl mb-4 text-center font-bold">About Me</h2>

            <div id="about" className="flex flex-col lg:flex-row justify-center items-center gap-6 font-bold">
                {/* About Text */}
                <div className="text-center md:text-left w-full p-4">
                    <h6 className="text-justify text-base">
                        Hi! I'm Mahdi Hassan, a passionate and dedicated web developer who loves creating beautiful and functional websites. My journey into programming started out of curiosity, which has now turned into a full-blown passion. I began with frontend development, mastering technologies like React, and now I'm learning backend development to become a full-stack developer in the future.
                        I enjoy building user-friendly and dynamic web applications that not only look great but are also easy to use. The entire process of turning ideas into interactive websites excites me the most—whether it's designing clean, responsive layouts or solving complex coding challenges.
                        Outside of programming, I have a special love for storytelling. While I’m currently more focused on technology, expressing stories—whether through writing or the visual elements of my projects—has always inspired me. Alongside that, reading books is another one of my favorite hobbies, which takes me into new worlds of thought and creativity.
                        When I'm not busy coding or learning new technologies, I engage in activities that fuel my creativity and help me stay balanced.
                        I'm always eager to learn new things, improve my skills, and connect with people passionate about technology and innovation. Let's create something amazing together!
                    </h6>
                </div>

                {/* Lottie Animation (Image/GIF) */}
                <div className="w-full md:w-[50%] p-4">
                    <Lottie options={lottieOptions} />
                </div>
            </div>
        </section>
    );
};

export default AboutMe;
