
const ContactForm = () => {
  return (
    <section id="contact" className="min-h-screen flex items-center justify-center p-4">

      <div >

      </div>

      <div className="flex flex-col md:flex-row p-6 items-center justify-center rounded-lg shadow-lg w-full max-w-4xl">
        {/* Left Side - Contact Info */}
        <div className="text-white w-full md:w-1/2 p-4">
          <h2 className="text-2xl font-semibold text-white mb-4">Mahdi Hassan</h2>
          <p className="mb-2 flex items-center"><span className="mr-2">📧</span> mahdioffi333@gmail.com</p>
          <p className="mb-2 flex items-center"><span className="mr-2">📞</span> +8801576502411</p>
          <p className="mb-2 flex items-center"><span className="mr-2">🌐</span> facebook.com/arman2mia</p>
          <p className="mb-2 flex items-center"><span className="mr-2">💬</span> m.me/arman2mia</p>
          <p className="mb-2 flex items-center"><span className="mr-2">🔗</span> linkedin.com/in/arman-mia-am</p>
          <p className="mb-2 flex items-center"><span className="mr-2">👨‍💻</span> github.com/arman-miaa</p>
        </div>

        {/* Right Side - Contact Form */}
        <div className="w-full">
          <form className="bg-[#1a2338] p-6 rounded-lg shadow-md">
            <label className="block text-white mb-2">Full Name</label>
            <input type="text" className="w-full p-2 mb-4 rounded text-black border border-gray-700" placeholder="Enter your full name" />

            <label className="block text-white mb-2">Email Address</label>
            <input type="email" className="w-full p-2 mb-4 rounded text-black border border-gray-700" placeholder="Enter your email address" />

            <label className="block text-white mb-2">Message</label>
            <textarea className="w-full p-2 mb-4 rounded text-black border border-gray-700" placeholder="Write your message here"></textarea>

            <button type="submit" className="w-full bg-[#f4a261] text-white p-2 rounded hover:bg-blue-600 transition">
              SUBMIT
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;