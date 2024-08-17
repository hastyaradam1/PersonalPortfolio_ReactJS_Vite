import React from "react";
const ClientCard = ({ name, image, description, rate, animationType }) => {
  return (
    <div data-aos={animationType}>
      <div className="border border-zinc-400/15 shadow-lg w-80 rounded-xl relative hover:scale-105 transition-all duration-200 hover:border hover:border-indigo-200/50 hover:shadow-[0_4px_10px_rgba(255,255,255,0.1),_0_2px_5px_rgba(0,0,0,0.7)]">
        <div className="flex justify-start items-center">
          <div className="w-20 h-20">
            <img
              src={image}
              className="h-full w-full object-cover rounded-full p-3"
            />
          </div>
          <p className="text-xl opacity-70">{name}</p>
        </div>
        <div className="flex justify-end text-xl text-yellow-300 items-center pr-3 pb-0 pt-0 absolute top-14 right-0">
          {Array.from({ length: rate }).map((_, key) => (
            <span key={key}>&#9733;</span>
          ))}
        </div>
        <div className="px-6 pb-2 pt-2">
          <p className="text-justify pb-5 opacity-95">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default ClientCard;
