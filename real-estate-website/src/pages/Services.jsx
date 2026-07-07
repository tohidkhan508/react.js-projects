import React from "react";
import Heroslider from "../sections/services/Heroslider";
import PropertyTypeCards from "../sections/reusablecomponents/PropertyTypeCards";

const Services = () => {
  return (
    <>
      <Heroslider />
      <section className="flex justify-center pb-14 items-center text-center">
        <PropertyTypeCards />
      </section>
    </>
  );
};

export default Services;
