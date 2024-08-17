import React, { useEffect } from "react";
import Cards from "./Cards";
import fast from "../../assets/img/fast.png";
import ux from "../../assets/img/ux.png";
import webDevelopment from "../../assets/img/webDevelopment.png";
import AOS from "aos";
import "aos/dist/aos.css";
const Services = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <>
      <div className="text-white max-w-6xl mx-auto mt-10" id="services">
        <div className="text-center mx-auto py-9 lg:py-6 text-zinc-300/85">
          <p className="text-4xl md:text-5xl font-bold">
            What can i do for You
          </p>
        </div>
        <Cards />
      </div>
    </>
  );
};

export default Services;
