import React from "react";
const Cards = ({ image, title, description, animationType }) => {
  return (
    <div
      data-aos={animationType}
      data-aos-duration="500"
      data-aos-easing="ease-in-out"
    >
      <div className="w-72 group min-h-[300px]  hover:-translate-y-2 hover:bg-slate-300/20 transition-all duration-300 shadow-[0px_0px_250px_0__#1DABEA] flex flex-col items-center pt-4 px-6 pb-4 bg-slate-200/15 rounded-2xl">
        {/* img circle */}
        <div className=" pb-8">
          <img src={image} className="w-14 object-cover" />
        </div>
        {/* title */}
        <span className="text-xl m-2 font-semibold mb-5 justify-center">
          {title} <hr />
        </span>
        {/* description */}
        <p className="text-center">{description}</p>
        {/* <div>
          <button
            className="font-bold mt-6 text-md border border-black bg-lime-200/65 px-12 py-3 rounded-full text-black
        hover:text-white hover:bg-inherit hover:border-white"
          >
            More.
          </button>
        </div> */}
      </div>
    </div>
  );
};

export default Cards;
