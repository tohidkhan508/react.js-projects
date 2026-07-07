import React from "react";
import { FaCheck, FaTimes } from "react-icons/fa";
import PackageCards from "../reusablecomponents/PackageCards";

const SelectYourPackage = () => {
  return (
    <section className="w-full py-14">
      <div className="max-w-7xl mx-auto flex flex-col justify-center text-center">
        <div className="">
          <h1 className="text-6xl font-bold text-black/80">
            Select Your Package
          </h1>
          <p className="max-w-2xl mx-auto mt-4 text-md text-gray-500">
            At vero eos et accusamus et iusto odio dignissimos ducimus qui
            blanditiis praesentium voluptatum deleniti atque corrupti quos
            dolores
          </p>
        </div>
        <PackageCards />
      </div>
    </section>
  );
};

export default SelectYourPackage;
