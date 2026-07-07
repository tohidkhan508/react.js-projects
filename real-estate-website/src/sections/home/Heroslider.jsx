import React from "react";
import { FaMagnifyingGlass } from "react-icons/fa6";

const Heroslider = () => {
  return (
    <section
      className="w-full min-h-screen bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: "url('/home/hero-slider/home-hero-logo.png')",
      }}
    >
      <div className="flex flex-col justify-center items-center min-h-screen">
        <h1 className="text-white text-6xl font-bold">Search Your Next Home</h1>
        <p className="text-white mt-4 mb-10 text-lg">
          Find new & featured property located in your local city.
        </p>

        <div className="max-w-7xl w-full bg-white mx-auto rounded-lg py-4 mt-4">
          <form className="grid grid-cols-4 items-stretch justify-between">
            <div className="flex flex-col px-4 justify-center border-r w-full border-gray-500/20">
              <label className="font-semibold text-gray-500">City/Street</label>
              <input
                type="text"
                placeholder="Location"
                className="mt-2 border border-gray-500/20 w-full rounded-lg focus:outline-none px-4 py-1 placeholder:text-black font-semibold text-md"
              />
            </div>

            <div className="flex flex-col px-4 justify-center border-r border-gray-500/20">
              <label className="font-semibold text-gray-500">
                Property Type
              </label>
              <input
                type="text"
                placeholder="Property Type"
                className="mt-2 border border-gray-500/20  w-full rounded-lg focus:outline-none px-4 py-1 placeholder:text-black font-semibold text-md"
              />
            </div>

            <div className="flex flex-col px-4 justify-center border-r border-gray-500/20">
              <label className="font-semibold text-gray-500">Price Range</label>
              <input
                type="text"
                placeholder="Price Range"
                className="mt-2 border border-gray-500/20  w-full rounded-lg focus:outline-none px-4 py-1 placeholder:text-black font-semibold text-md"
              />
            </div>

            <div className="flex items-center px-4 justify-center gap-8">
              <span className="font-semibold text-lg">Advance Filter</span>

              <button
                type="submit"
                className="bg-[#27ae60] px-8 py-5 rounded-lg text-white cursor-pointer"
              >
                <FaMagnifyingGlass />
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Heroslider;
