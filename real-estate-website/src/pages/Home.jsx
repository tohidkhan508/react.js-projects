import React from "react";
import Heroslider from "../sections/home/Heroslider";
import FeaturedPropertyTypes from "../sections/home/FeaturedPropertyTypes";
import RecentPropertyListed from "../sections/home/RecentPropertyListed";
import OurAwards from "../sections/home/OurAwards";
import ExploreByLocation from "../sections/home/ExploreByLocation";
import OurFeaturedAgents from "../sections/home/OurFeaturedAgents";
import SelectYourPackage from "../sections/home/SelectYourPackage";

const Home = () => {
  return (
    <>
      <Heroslider />
      <FeaturedPropertyTypes />
      <RecentPropertyListed />
      <OurAwards />
      <ExploreByLocation />
      <OurFeaturedAgents />
      <SelectYourPackage />
    </>
  );
};

export default Home;
