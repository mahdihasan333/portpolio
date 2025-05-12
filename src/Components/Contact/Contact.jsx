import {
  FaEnvelope,
  FaPhoneAlt,
  FaWhatsapp,
  FaDiscord,
  FaLinkedin,
  FaFacebook,
  FaTwitter,
} from "react-icons/fa";

const ContactForm = () => {
  return (
    <section id="contact">
      <div className="text-white flex flex-col justify-center items-center gap-5 mt-10">
        <h2 className="text-5xl font-bold">Contact Me</h2>
        <h6>
          You can contact me at the places mentioned below. I will try to get
          back to you as fast as I can.
        </h6>
      </div>

      <div className="text-white flex items-center justify-center p-4">
        <div className="flex flex-col md:flex-row p-6 items-center justify-center rounded-lg shadow-lg w-full max-w-4xl">
          {/* Left Side - Contact Info */}
          <div className="text-white w-full md:w-1/2 p-4">
            <h2 className="text-2xl font-semibold text-white mb-4">Mahdi Hassan</h2>

            <p className="mb-2 flex items-center">
              <FaEnvelope className="mr-2 text-[#facc15]" />
              <a
                href="mailto:mahdioffi333@gmail.com"
                className="text-gray-300 hover:text-[#facc15]"
              >
                mahdioffi333@gmail.com
              </a>
            </p>

            <p className="mb-2 flex items-center">
              <FaPhoneAlt className="mr-2 text-[#34d399]" />
              <span>+8801576502411</span>
            </p>

            <p className="mb-2 flex items-center">
              <FaWhatsapp className="mr-2 text-[#25D366]" />
              <a
                href="https://wa.me/+8801576502411"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#25D366] hover:text-[#128C7E]"
              >
                WhatsApp: +8801576502411
              </a>
            </p>

            <p className="mb-2 flex items-center">
              <FaDiscord className="mr-2 text-[#7289DA]" />
              <a
                href="https://discord.com/users/1254146831324156007"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#7289DA] hover:text-[#99AAB5]"
              >
                Discord: mahdi_hassan_rafi
              </a>
            </p>

            <p className="mb-2 flex items-center">
              <FaFacebook className="mr-2 text-[#1877F2]" />
              <a
                href="https://www.facebook.com/mahdi1hassan"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#1877F2] hover:text-[#0A6ED9]"
              >
                Facebook
              </a>
            </p>

            <p className="mb-2 flex items-center">
              <FaLinkedin className="mr-2 text-[#0A66C2]" />
              <a
                href="https://www.linkedin.com/in/mahdi-hassan-dev/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#0A66C2] hover:text-[#004182]"
              >
                LinkedIn
              </a>
            </p>

            <p className="mb-2 flex items-center">
              <FaTwitter className="mr-2 text-[#1DA1F2]" />
              <a
                href="https://x.com/MahdiHassanDev"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#1DA1F2] hover:text-[#004B7F]"
              >
                Twitter
              </a>
            </p>
          </div>

          {/* Right Side - Contact Form */}
          <div className="w-full">
            <form className="bg-[#1a2338] p-6 rounded-lg shadow-md">
              <label className="block text-white mb-2">Full Name</label>
              <input
                type="text"
                className="w-full p-2 mb-4 rounded text-black border border-gray-700"
                placeholder="Enter your full name"
              />

              <label className="block text-white mb-2">Email Address</label>
              <input
                type="email"
                className="w-full p-2 mb-4 rounded text-black border border-gray-700"
                placeholder="Enter your email address"
              />

              <label className="block text-white mb-2">Message</label>
              <textarea
                className="w-full p-2 mb-4 rounded text-black border border-gray-700"
                placeholder="Write your message here"
              ></textarea>

              <button
                type="submit"
                className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600 transition"
              >
                SUBMIT
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
