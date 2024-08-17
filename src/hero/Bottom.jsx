import React from "react";
import viteLogo from "../assets/img/Vitejs-logo.svg";
import tailwindLogo from "../assets/img/tailwind.svg";
import laravel from "../assets/img/laravel.svg";
import react from "../assets/img/react.svg";
const Bottom = () => {
  return (
    <section className="text-white mt-20 md:mt-10">
      <div className="w-full bg-zinc-200/0 py-3 animate-pulse duration-1000 px-10 md:px-40">
        <div className="flex gap-8 justify-around flex-wrap">
          <img src={viteLogo} className="w-16" />
          <img src={tailwindLogo} className="w-16 " />
          <img src={laravel} className="w-16 " />
          <img src={react} className="w-16" />
        </div>
      </div>
    </section>
  );
};

export default Bottom;
