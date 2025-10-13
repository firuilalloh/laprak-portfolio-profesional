function Contact() {
  return (
    <section id="contact">
      <div className=" min-h-screen bg-gray-900 text-white flex flex-col items-center justify-center ">
        <h1 className=" text-3xl font-bold mb-4 ">Contact Me</h1>
        <p className=" text-gray-400 mb-8 text-center ">
          Feel free to reach out by filling the form below
        </p>

        <form className="w-full max-w-md space-y-4">
          <input
            type="text"
            placeholder="Your Name"
            className="w-full p-2 rounded bg-gray-800 border border-gray-700 focus:outline-none"
          />
          <input
            type="text"
            placeholder="Your Email"
            className="w-full p-2 rounded bg-gray-800 border border-gray-700 focus:outline-none"
          />
          <textarea
            rows="4"
            placeholder="Your Message"
            className="w-full p-2 rounded bg-gray-800 border border-gray-700 focus:outline-none"
          />
          <button
            type="Submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}
export default Contact;
