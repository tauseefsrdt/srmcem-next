import React from "react";
import CustomOverviewSection from "../../utils/custom/CustomOverviewSection";
import { CampusTourData } from "../../data/customOverViewData";
import { CampusTourCarouselImages } from "../../data/campusTourData";
// import CustomCardGrid from "../../utils/custom/CustomCardGrid";
import CustomCarousel from "../../utils/custom/CustomCarousel";
// import CustomCampusTourAccordian from "../../utils/custom/CustomCampusTourAccordian";
// import { CustomCampusTourAccordianData } from "../../data/campusTour";
import { CustomTopFooterData3 } from "../../data/customTopFooterData";
import CustomTopFooter from "../../utils/custom/CustomTopFooter";
import Classes from "../../utils/styles/Global.module.css";

const CampusTour: React.FC = () => {
  return (
    <div>
      {/* Achievements Overview Section */}
      <div className={`${Classes["container"]}`}>
        <CustomOverviewSection data={CampusTourData} />
      </div>
      <CustomCarousel images={CampusTourCarouselImages} />
      {/* <CustomCardGrid heading="Infrastructure Audits" cards={campusTourCards} />
      <CustomCampusTourAccordian items={CustomCampusTourAccordianData} contentType={"Extension of Approvals"} /> */}
      <CustomTopFooter data={CustomTopFooterData3} />
    </div>
  );
};

export default CampusTour;
