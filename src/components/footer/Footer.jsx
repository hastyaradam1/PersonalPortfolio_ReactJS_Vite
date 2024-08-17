import React from "react";
import { FaGithub, FaTwitter } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";
import { FiTwitter } from "react-icons/fi";
const Footer = () => {
  const handleScroll = (event, targetId) => {
    event.preventDefault();
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <footer className="bg-gradient-to-t from-black to-gray-900 py-10 text-gray-400">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 px-4">
        <div className="text-center md:text-left">
          <h3 className="text-2xl font-semibold text-white">Hastya®</h3>
          <p className="mt-2 text-sm">
            Passionate Web Developer creating stunning websites with the latest
            technologies.
          </p>
        </div>

        <div className="text-center">
          <h4 className="text-xl font-semibold text-white">Quick Links</h4>
          <ul className="mt-4 space-y-2">
            <li>
              <a href="#" className="hover:underline">
                Home
              </a>
            </li>
            <li>
              <a
                href="#about"
                onClick={(e) => {
                  handleScroll(e, "about");
                }}
                className="hover:underline"
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#services"
                onClick={(e) => {
                  handleScroll(e, "services");
                }}
                className="hover:underline"
              >
                Services
              </a>
            </li>
            <li>
              <a
                href="#feedback"
                onClick={(e) => {
                  handleScroll(e, "feedback");
                }}
                className="hover:underline"
              >
                Feedback
              </a>
            </li>
            <li>
              <a
                href="#contact"
                onClick={(e) => {
                  handleScroll(e, "contact");
                }}
                className="hover:underline"
              >
                Contact
              </a>
            </li>
          </ul>
        </div>

        <div className="text-center md:text-right">
          <h4 className="text-xl font-semibold text-white">Follow Me</h4>
          <div className="flex justify-center md:justify-end mt-4 space-x-4">
            <a
              href="https://linkedin.com/in/hastyar-adam-554633321"
              target="_blank"
              rel="noreferrer"
              className="text-yellow-400 hover:text-yellow-300"
            >
              <FaLinkedinIn />
            </a>
            <a
              href="https://github.com/hastyaradam1"
              target="_blank"
              rel="noreferrer"
              className="text-yellow-400 hover:text-yellow-300"
            >
              <FaGithub />
            </a>
            <a
              href="https://twitter.com/hastyaradam"
              target="_blank"
              rel="noreferrer"
              className="text-yellow-400 hover:text-yellow-300"
            >
              <FaTwitter />
            </a>
          </div>
          <p className="mt-4">
            <a href="mailto:hastyarblbas@gmail.com" className="hover:underline">
              hastyarblbas@gmail.com
            </a>
          </p>
        </div>
      </div>

      <div className="mt-10 text-center text-gray-600 text-sm">
        © 2024 Hastya®. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
