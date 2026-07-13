import React from "react";
import Banner from "./Banner";
import MemorialCollege from "./MemorialCollege";
import Course from "./course/Course";
// import Recruiters from "./Recruiters";
import Events from "./Events";
import AlumniSlider from "./Alumni";
import StudentInnovation from "./StudentInnovation";
import CustomTopFooter from "../../utils/custom/CustomTopFooter";
import { CustomTopFooterData1 } from "../../data/customTopFooterData";
import Placements from "./Placement";
import MobilePlacements from "./MobilePlacement";

const Home: React.FC = () => {
  return (
    <div className="font-rubik overflow-x-hidden leading-relaxed">
      <Banner />
      <MemorialCollege />
      <Course />
      <div className="hidden sm:block">
        <Placements />
      </div>
      <div className="sm:hidden">
        <MobilePlacements />
      </div>
      {/* <Recruiters /> */}
      <Events />
      <AlumniSlider />
      <StudentInnovation />
      <CustomTopFooter data={CustomTopFooterData1} />
    </div>
  );
};

export default Home;
