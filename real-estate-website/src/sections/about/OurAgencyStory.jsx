import React from "react";

const OurAgencyStory = () => {
  return (
    <section className="w-full py-14">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div>
          <h2 className="font-bold text-black/80 text-4xl">Our Agency Story</h2>
          <p className="mt-2 text-gray-500">
            Check out our company story and work process
          </p>
          <div className="max-w-xl mt-8">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
            <p className="mt-8">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip.
            </p>
          </div>
          <button className="bg-[#27AE60] px-6 py-3 mt-6 rounded-3xl text-white text-lg font-semibold cursor-pointer">
            More About Us
          </button>
        </div>
        <div>
          <img
            src="/about/OurAgencyStory/about-agency-story.jpg"
            alt="OurAgencyStory"
            className="h-100"
          />
        </div>
      </div>
    </section>
  );
};

export default OurAgencyStory;
