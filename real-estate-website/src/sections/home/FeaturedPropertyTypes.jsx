import React from "react";
import PropertyTypeCards from "../reusablecomponents/PropertyTypeCards";

const FeaturedPropertyTypes = () => {
  return (
    <section className="w-full py-14 bg-[#f7f9fc]">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col items-center text-center">
          <h1 className="text-4xl font-semibold">Featured Property Types</h1>
          <p className="font-semibold mt-2 text-gray-500 text-lg">
            Find All Type of Property.
          </p>
        </div>
        <PropertyTypeCards />
      </div>
    </section>
  );
};

export default FeaturedPropertyTypes;
