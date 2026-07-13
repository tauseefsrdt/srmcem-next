import React from "react";
import CustomOverviewSection from "../../utils/custom/CustomOverviewSection";
import { academicsData } from "../../data/customOverViewData";
import CustomTopFooter from "../../utils/custom/CustomTopFooter";
import { CustomTopFooterData3 } from "../../data/customTopFooterData";
import Accordian from "../../utils/custom/Accordian";
import { AcademicsItems } from "../../data/accordianItemsData";
import Classes from "../../utils/styles/Global.module.css";

const Academics: React.FC = () => {
  return (
    <div>
      <div className={`${Classes.container}`}>
        <CustomOverviewSection data={academicsData} />
      </div>
      <div className={`${Classes.container} pb-6 md:py-10 lg:py-14`}>
        <h2 className="text-3xl lg:text-4xl font-semibold leading-8 sm:pr-4 mb-6">Students Academic Affair Cell</h2>
        <Accordian isMode="academics" items={AcademicsItems} />
      </div>
      <CustomTopFooter data={CustomTopFooterData3} />
    </div>
  );
};

export default Academics;
