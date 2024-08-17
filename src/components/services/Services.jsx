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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-items-center gap-5 py-10">
          <div className="col-span-1">
            <Cards
              animationType={"fade-right"}
              image={webDevelopment}
              title={"Web Development"}
              description={
                "We create visually stunning and user-friendly websites that align with your brand and goals."
              }
            />
          </div>

          <div className="col-span-1">
            <Cards
              animationType={"fade"}
              image={fast}
              title={"Optimize for Success"}
              description={
                "Speed and reliability, guaranteed & High-performance backend solutions."
              }
            />
          </div>
          <div className="col-span-1 md:col-span-2 lg:col-span-1">
            <Cards
              animationType={"fade-left"}
              image={ux}
              title={"UI/UX"}
              description={
                "Focused on user-centered design to create products that are functional and emotionally engaging."
              }
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;
