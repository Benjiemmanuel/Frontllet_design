import React from "react";
import Header from "../components/Header";
import HeroSection from "../components/HeroSection";
import Quote from "../components/Quote";
import Layout from "../components/NetworlOfBuilders";
import AreaOfFocus from "../components/AreaOfFocus";
import OurConceptInnovations from "../components/OurConceptInnovations";
import OurService from "../components/OurService";

const HomePage = () => {
  return (
    <div>
      <Header />
      <HeroSection />
      <Quote />
      <Layout />
      <AreaOfFocus />
      <OurConceptInnovations />
      <OurService/>
    </div>
  );
};

export default HomePage;
