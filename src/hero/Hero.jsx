import React from "react";
import myPhoto from "../assets/img/myPhoto.jpg";
const Hero = () => {
  return (
    <section className="text-white mx-auto container mt-20">
      <div className="flex flex-col justify-center items-center gap-4">
        <img src={myPhoto} className="w-28 h-28 object-cover rounded-full" />
        <span className="opacity-65 flex items-center">
          Hi i'm Hastyarrrrr<span className="text-xl"> &reg; </span>
          &#770; __ &#770;
        </span>

        <div className="w-auto md:w-6/12 text-center">
          <h2 className="font-semibold p-4 text-4xl md:text-5xl lg:text-6xl bg-gradient-to-r from-pink-500 to-yellow-500 bg-clip-text text-transparent ">
            Designing Tomorrow's Websites with Today's Innovations
          </h2>
        </div>
      </div>
    </section>
  );
};

export default Hero;
