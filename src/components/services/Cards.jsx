import React from "react";
import fast from "../../assets/img/fast.png";
import ux from "../../assets/img/ux.png";
import webDevelopment from "../../assets/img/webDevelopment.png";
const Cards = () => {
  const data = [
    {
      title: "Web Development",
      description:
        "We create visually stunning and user-friendly websites that align with your brand and goals.",
      img: webDevelopment,
      animationType: "fade-right",
      colSpan: "col-span-1",
    },
    {
      title: "Optimize for Success",
      description:
        "Speed and reliability, guaranteed & High-performance backend solutions.",
      img: fast,
      animationType: "fade",
      colSpan: "col-span-1",
    },
    {
      title: "UI/UX",
      description:
        "Focused on user-centered design to create products that are functional and emotionally engaging.",
      img: ux,
      animationType: "fade-left",
      colSpan: 2,
    },
  ];

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-8 py-12">
      {data.map((item, key) => (
        <div
          data-aos={item.animationType}
          data-aos-duration="650"
          data-aos-easing="ease-in-out"
          className={
            item.colSpan && item.colSpan === 2
              ? "md:col-span-2 lg:col-span-1"
              : "col-span-1"
          }
        >
          <div
            key={key}
            className="flex flex-col items-center py-6 w-72 mx-auto hover:-translate-y-2 hover:bg-slate-300/20 transition-all duration-300 shadow-[0px_0px_250px_0__#1DABEA] bg-slate-200/15 rounded-2xl"
          >
            <div>
              <img src={item.img} className="w-14 object-cover" />
            </div>
            <span className="text-xl font-semibold py-6 underline underline-offset-8 decoration-1">
              {item.title}
            </span>

            <span className="text-center px-4">{item.description}</span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Cards;
