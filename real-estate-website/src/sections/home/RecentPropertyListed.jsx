import React from "react";
import { FaMapMarkerAlt } from "react-icons/fa";
import PropertyListedcards from "../reusablecomponents/PropertyListedcards";

const RecentPropertyListed = () => {
  return (
    <section className="w-full py-14 bg-[#f7f9fc]">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center">
          <h1 className="text-4xl font-semibold">Recent Property Listed</h1>

          <p className="mt-4 text-gray-500 max-w-3xl mx-auto">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam.
          </p>
        </div>

        {/* Cards */}
        <PropertyListedcards />
      </div>
    </section>
  );
};

export default RecentPropertyListed;
