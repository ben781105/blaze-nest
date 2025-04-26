import { Mail, MapPin, Phone } from "lucide-react";

function ContactUs() {
  return (
    <section className="flex flex-col justify-center items-center px-5 py-16 space-y-8 max-w-7xl mx-auto">
      <h2 className="text-3xl font-bold bg-gradient-black-blue">Contact Us</h2>

      <div className="flex flex-col-reverse md:flex-row justify-between items-stretch w-full bg-white rounded-lg shadow-lg overflow-hidden">
        <div className="flex flex-col w-full md:w-1/2 p-8 bg-amber-50">
          <h3 className="text-2xl font-semibold mb-3 text-gray-800">
            Get In Touch
          </h3>
          <p className="text-gray-600 mb-6">
            We are here for you. How can we help you?
          </p>
          <form className="flex flex-col space-y-5 flex-1">
            <div className="space-y-2">
              <label
                htmlFor="name"
                className="text-sm font-medium text-gray-700"
              >
                Name
              </label>
              <input
                id="name"
                type="text"
                name="name"
                placeholder="Enter your name"
                className="w-full py-3 px-4 bg-white border border-amber-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500 transition-all"
                required
              />
            </div>

            <div className="space-y-2">
              <label
                htmlFor="email"
                className="text-sm font-medium text-gray-700"
              >
                Email
              </label>
              <input
                id="email"
                type="email"
                name="email"
                placeholder="Enter your email"
                className="w-full py-3 px-4 bg-white border border-amber-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500 transition-all"
                required
              />
            </div>

            <div className="space-y-2 flex-1 flex flex-col">
              <label
                htmlFor="message"
                className="text-sm font-medium text-gray-700"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                placeholder="Drop your message"
                className="w-full flex-1 min-h-[180px] py-3 px-4 bg-white border border-amber-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500 transition-all resize-none"
                required
              ></textarea>
            </div>

            <button
              type="submit"
              className="py-3 px-6 bg-[#FE9F33] hover:bg-amber-600 text-white font-semibold rounded-lg shadow transition-all duration-200 hover:shadow-lg"
            >
              Submit
            </button>
          </form>
        </div>

        <div className="flex flex-col justify-between w-full md:w-1/2 p-8">
          <div className="flex-1 flex items-center justify-center">
            <img
              src="/svgs/receptionist.svg"
              alt="Customer support"
              className="w-full max-w-md h-auto object-cover rounded-lg shadow-md"
            />
          </div>
          <div className="mt-8 space-y-4">
            <div className="flex items-center space-x-3 text-gray-700 hover:text-amber-700 transition-colors">
              <MapPin className="w-5 h-5 text-amber-600" />
              <span>Awka</span>
            </div>
            <div className="flex items-center space-x-3 text-gray-700 hover:text-amber-700 transition-colors">
              <Phone className="w-5 h-5 text-amber-600" />
              <span>+2347031904310</span>
            </div>
            <div className="flex items-center space-x-3 text-gray-700 hover:text-amber-700 transition-colors">
              <Mail className="w-5 h-5 text-amber-600" />
              <span>trailblazershub24@gmail.com</span>
            </div>
          </div>{" "}
        </div>
      </div>
    </section>
  );
}

export default ContactUs;
