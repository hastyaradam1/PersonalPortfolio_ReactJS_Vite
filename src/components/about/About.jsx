import React, { useEffect } from "react";
import myPic from "../../assets/img/myPhoto.jpg";
import AOS from "aos";
import "aos/dist/aos.css";
const About = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <>
      <div className="text-white container mx-auto" id="about">
        <div className="text-center mx-auto py-9 lg:py-14 text-zinc-300/85">
          <p className="text-3xl md:text-4xl font-bold drop-shadow-2xl">
            About
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 pb-20 md:px-14 lg:px-48">
          <div
            className="flex justify-center items-center"
            data-aos="zoom-in"
            data-aos-duration="600"
          >
            <img
              src={myPic}
              className="w-80 md:w-full mb-2 rounded-3xl object-cover cursor-pointer hover:scale-105 hover:-rotate-1 transition-all duration-300"
            />
          </div>

          <div
            className="col-span-1 xl:col-span-2 space-y-6 px-6"
            data-aos="fade-down"
            data-aos-delay="20"
            data-aos-duration="1000"
          >
            <h1 className="text-2xl md:text-3xl font-semibold">
              I'm "{"Hastyar Adam Murad"}",{" "}
              <span className="animate-opacity-change bg-gradient-to-r font-bold from-red-200 to-blue-400 bg-clip-text text-transparent">
                Full Stack Developer...
              </span>
            </h1>
            <p className="text-justify text-sm md:text-lg text-zinc-300">
              Graduated from University Of Raparin, at the Computer Science
              Department, for Academic Year (2021-2022).
            </p>
            <p className="text-sm md:text-md text-zinc-300/70">
              Right now i'm an Assistant from a Private Institute of Computer at
              Rania.
            </p>
            <p className="text-sm">
              I'm 1 <sup>st</sup> of my Entire class About 4 years.
            </p>
            {/* <p className="text-orange-100 text-sm">
              I want to working as a Freelancer and working for Huge Companies .
            </p> */}
            <p className="text-zinc-300/70 text-sm text-justify">
              {" "}
              My journey in tech began with starts of year (2014), and since
              then, I’ve been dedicated to pushing the boundaries of what’s
              possible in the digital world. I thrive on turning complex
              problems into elegant solutions, and I believe in the power of
              clean, efficient code to drive meaningful user experiences.
              Whether it’s developing a dynamic frontend with React or building
              robust backend systems with Laravel, I approach every project with
              enthusiasm and a commitment to excellence.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
