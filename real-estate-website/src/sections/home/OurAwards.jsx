import React from "react";
import { FaBriefcase, FaHeart, FaLightbulb, FaTrophy } from "react-icons/fa6";

const OurAwards = () => {
  const stats = [
    { icon: <FaTrophy />, number: "32 M", title: "Blue Burmin Award" },
    { icon: <FaBriefcase />, number: "43 M", title: "Mimo X11 Award" },
    { icon: <FaLightbulb />, number: "51 M", title: "Australian UGC Award" },
    { icon: <FaHeart />, number: "42 M", title: "IITCA Green Award" },
  ];

  return (
    <section className="w-full bg-[#122947] py-20">
      <div className="max-w-7xl mx-auto px-4">
        {/* Heading */}
        <div className="max-w-2xl mx-auto text-center">
          <span className="text-[#27ae60] text-lg font-medium">Our Awards</span>

          <h2 className="text-white text-3xl font-semibold mt-2 leading-tight">
            Over 1,24,000+ Happy User Being With Us Still They Love Our Services
          </h2>
        </div>

        {/* Stats */}
        <div className="flex justify-between mt-16">
          {stats.map((stat, i) => (
            <div key={i} className="text-center">
              {/* Icon Box */}
              <div className="w-24 h-24 mx-auto bg-white/10 rounded-tr-[50px] rounded-bl-[50px] flex items-center justify-center text-white text-4xl cursor-pointer">
                {stat.icon}
              </div>

              {/* Number */}
              <h2 className="text-white text-5xl font-bold mt-4">
                {stat.number}
              </h2>

              {/* Title */}
              <p className="text-gray-400 text-lg mt-2">{stat.title}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurAwards;
