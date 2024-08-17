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
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt commodi,et placeat nulla, ea consequatur libero iure ad molestiae nam veniam nisi! Aspernatur facere amet similique at itaque, natus eaque."
            }
            rate={5}
            animationType={"fade-down"}
          />

          <ClientCard
            name={"Mr.Hunar"}
            image={menIMG}
            description={
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt commodi,et placeat nulla, ea consequatur libero iure ad molestiae nam veniam nisi! Aspernatur facere amet similique at itaque, natus eaque."
            }
            rate={3}
            animationType={"fade-up"}
          />

          <ClientCard
            name={"Ms.Harme"}
            image={women2IMG}
            description={
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt commodi,et placeat nulla, ea consequatur libero iure ad molestiae nam veniam nisi! Aspernatur facere amet similique at itaque, natus eaque."
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
