import React from "react";
import { FaGithub } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";
import { FiTwitter } from "react-icons/fi";
const Contact = () => {
  return (
    <div
      className="py-16 bg-gradient-to-b from-black to-gray-900 text-white"
      id="contact"
    >
      <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">
        Get In Touch
        <span className="block mt-2 w-16 h-1 bg-yellow-400 mx-auto"></span>
      </h2>

      <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 px-4">
        <form className="space-y-6">
          <div>
            <label className="block text-sm font-medium" htmlFor="name">
              Name
            </label>
            <input
              id="name"
              name="name"
              type="text"
              required
              className="w-full px-4 py-2 mt-1 bg-gray-800 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-400"
            />
          </div>

          <div>
            <label className="block text-sm font-medium" htmlFor="email">
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              className="w-full px-4 py-2 mt-1 bg-gray-800 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-400"
            />
          </div>

          <div>
            <label className="block text-sm font-medium" htmlFor="message">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows="5"
              required
              className="w-full px-4 py-2 mt-1 bg-gray-800 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-400"
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full py-3 bg-yellow-500 hover:bg-yellow-400 rounded-md text-black font-semibold tracking-wide focus:outline-none transition ease-in-out duration-300"
          >
            Send Message
          </button>
        </form>

        <div className="flex flex-col justify-center space-y-6">
          <div>
            <h3 className="text-xl font-semibold mb-2">Contact Information</h3>
            <p className="flex items-center">
              <span className="material-icons text-yellow-400 mr-2">
                Email:
              </span>{" "}
              hasteyarblbas@gmail.com
            </p>
            <p className="flex items-center">
              <span className="material-icons text-yellow-400 mr-2">
                Phone:
              </span>{" "}
              +964 750 186 0846
            </p>
            <p className="flex items-center">
              <span className="material-icons text-yellow-400 mr-2">
                Location_on:
              </span>{" "}
              Chwarqurna, as Sulaymaniyah
            </p>
          </div>

          <div className="flex space-x-4">
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noreferrer"
              className="text-yellow-400 hover:text-yellow-300"
            >
              <FaLinkedinIn />
            </a>
            <a
              href="https://github.com"
              target="_blank"
              rel="noreferrer"
              className="text-yellow-400 hover:text-yellow-300"
            >
              <FaGithub />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noreferrer"
              className="text-yellow-400 hover:text-yellow-300"
            >
              <FiTwitter />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
