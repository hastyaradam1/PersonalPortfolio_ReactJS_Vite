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

        <div className="grid grid-cols-1 xl:grid-cols-3 pb-20 md:px-14 lg:px-48">
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
            className="col-span-1 md:col-span-1 xl:col-span-2 space-y-6 px-6"
            data-aos="fade-down"
            data-aos-delay="20"
            data-aos-duration="1000"
          >
            <h1 className="text-2xl font-semibold">
              I'm "{"Hastyar Adam Murad"}",{" "}
              <span className="animate-opacity-change bg-gradient-to-r font-bold from-red-200 to-blue-400 bg-clip-text text-transparent">
                Full Stack Web Developer...
              </span>
            </h1>
            <p className="text-justify text-sm md:text-lg text-zinc-300">
              With a strong foundation in Computer Science, I graduated top of
              my class from the University of Raparin in the Academic Year
              2021-2022. Currently, I'm an Assistant at a Private Computer
              Institute in Rania, where I share my expertise and love for
              technology with the next generation of developers.
            </p>
            <p className="text-justify text-sm md:text-lg text-zinc-300">
              My tech journey began in 2014, and since then, I've been driven by
              the desire to innovate and create impactful digital experiences. I
              specialize in turning complex challenges into streamlined
              solutions through clean, efficient code. Whether crafting dynamic
              user interfaces with React or building scalable backend systems
              with Laravel, I approach each project with enthusiasm and a
              relentless pursuit of excellence.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
