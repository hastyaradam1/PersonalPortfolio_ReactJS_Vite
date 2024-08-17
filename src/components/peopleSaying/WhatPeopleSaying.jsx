import React from "react";
import ClientCard from "./ClientCard";
import women2IMG from "../../assets/img/women2.jpg";
import menIMG from "../../assets/img/men.webp";
const WhatPeopleSaying = () => {
  return (
    <>
      <div className="text-white py-10 max-w-7xl mx-auto" id="feedback">
        <h1 className="text-center text-zinc-300 text-4xl md:text-5xl font-bold">
          What clients are saying &#129300;
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-items-center gap-10 pt-12 ">
          <ClientCard
            name={"Ms.Harme"}
            image={women2IMG}
            description={
              "Working with Your Company has been a game-changer for us. Their user-centered design approach turned our complex ideas into a sleek, intuitive platform that our customers love. The team's creativity and attention to detail were instrumental in delivering a product that not only meets but exceeds our expectations."
            }
            rate={5}
            animationType={"fade-down"}
          />

          <ClientCard
            name={"Mr.Hunar"}
            image={menIMG}
            description={
              "Your Company brought our vision to life with remarkable skill and precision. Their dedication to understanding our needs and translating them into an engaging and functional design was outstanding. We've received fantastic feedback from our users, thanks to their exceptional work."
            }
            rate={3}
            animationType={"fade-up"}
          />

          <ClientCard
            name={"Ms.Harme"}
            image={women2IMG}
            description={
              "The collaboration with Company was seamless from start to finish. They took the time to truly understand our brand and goals, resulting in a website that perfectly captures our message. Their innovative solutions and prompt support have made a significant positive impact on our online presence."
            }
            rate={2}
            animationType={"fade-left"}
          />

          {/* <ClientCard name={"Ms.Sazan"} image={women2IMG} /> */}
        </div>
      </div>
    </>
  );
};

export default WhatPeopleSaying;
