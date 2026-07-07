import React from "react";

const HeroSection = ({ image, title, description }) => {
  return (
    <>
      <div className="h-17"></div>
      <section
        className="relative w-full h-[300px] bg-cover bg-center flex items-center"
        style={{ backgroundImage: `url(${image})` }}
      >
        {/* Blue Overlay */}
        <div className="absolute inset-0 bg-[#112848a0]"></div>

        {/* Content */}
        <div className="relative max-w-7xl mx-auto w-full px-10 lg:px-20">
          <span className="text-white text-sm font-semibold">{title}</span>

          <h1 className="text-white text-4xl font-bold mt-2">{description}</h1>
        </div>
      </section>
    </>
  );
};

export default HeroSection;
