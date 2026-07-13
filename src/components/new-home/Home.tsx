// import React from "react";

// import TopBar from "./TopBar";

import Hero from "./Hero";
import AcademicExcellence from "./AcademicExcellence";
import Placements from "./Placements";
import GovtPlacements from "./GovtPlacements";
import IEEE from "./IEEE";
import CampusInfrastructure from "./CampusInfrastructure";
import Clubs from "./Clubs";
import WorldStage from "./WorldStage";
import News from "./News";
import TestmonialSlider from "./TestmonialSlider";
import CSR from "./CSR";
import CTA from "./CTA";
// import Footer from "./Footer";
import CompanyLogos from "./CompanyLogos";
import AcademicPrograms from "./AcademicPrograms";
import Reels from "./Reels";


const Home = () => {
  return (
    <>
      {/* <TopBar /> */}
      {/* < /> */}
      {/* ---- Reference-design sequence + retained original sections ---- */}
      <Hero />
      {/* <HiringNetwork /> */}
      {/* <Accreditation /> */}
      <AcademicExcellence />
      <Placements />
      <WorldStage />
      <GovtPlacements />
      <CompanyLogos />
      <AcademicPrograms />
      <IEEE />
      <News />
      <TestmonialSlider />
      <CampusInfrastructure />
      {/* <Events /> */}
      <Reels />
      <CSR />
      <Clubs />
      <CTA />
      {/* <Footer /> */}
    </>
  );
};



export default Home;
