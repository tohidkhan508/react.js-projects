import React from "react";
import Heroslider from "../sections/pricing/Heroslider";
import PricingSection from "../sections/pricing/PricingSection";

const Pricing = () => {
  return (
    <>
      <Heroslider />
      <div className="py-10">
        <PricingSection />
      </div>
    </>
  );
};

export default Pricing;
