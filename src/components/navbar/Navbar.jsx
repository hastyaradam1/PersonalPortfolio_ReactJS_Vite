import React from "react";
import { HiOutlineMail } from "react-icons/hi";
const Navbar = () => {
  return (
    <>
      <div className="container mx-auto md:w-9/12">
        <nav className="flex justify-between items-center text-white py-6 px-4 border-b-2 border-b-zinc-200/20">
          <div className="mx-auto md:mx-0 flex justify-center items-center">
            <div className="bg-zinc-300/20 p-4 rounded-full border-zinc-300">
              <HiOutlineMail className="w-5 h-5 opacity-65" />
            </div>
            <span className="pl-6 opacity-65">hasteyarblbas@gmail.com</span>
          </div>

          <div className="hidden md:flex gap-6 opacity-65">
            <p className="cursor-pointer">
              <a href="https://www.facebook.com/Marshallmm/" target="_blank">
                Facebook
              </a>
            </p>
            <p className="cursor-pointer">
              <a href="https://www.instagram.com/hastyar_adam/" target="_blank">
                Instagram
              </a>
            </p>
            <p className="cursor-pointer">
              <a
                href="https://iq.linkedin.com/in/hastyar-adam-554633321"
                target="_blank"
              >
                Linkedin
              </a>
            </p>
          </div>
        </nav>
      </div>
    </>
  );
};

export default Navbar;
