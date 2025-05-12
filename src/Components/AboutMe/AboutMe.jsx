import Lottie from "react-lottie";
import animationData from "../../../src/assets/Animation.json";

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
    <section id="about" className="py-16 bg-[#0f172a] text-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">
          About Me
        </h2>

        <div className="grid md:grid-cols-2 gap-10 items-center">
          {/* Left: Text */}
          <div className="space-y-6 text-center md:text-left">
            <h3 className="text-2xl font-semibold text-[#f4a261]">
              I'm Mahdi Hassan
            </h3>
            <p className="text-gray-300 leading-relaxed text-justify">
              A frontend-focused developer passionate about clean UI and smooth
              UX. I specialize in building responsive web applications using
              React and I'm currently learning backend development to become a
              full-stack developer.
            </p>
            <p className="text-gray-300 leading-relaxed text-justify">
              Beyond code, I enjoy storytelling and reading books that fuel my
              creativity and help me think differently.
            </p>
            
          </div>

          {/* Right: Lottie Animation */}
          <div className="flex justify-center">
            <div className="w-[80%] lg:w-[70%]">
              <Lottie options={lottieOptions} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
