import React from "react";
import CustomOverviewSection from "../../utils/custom/CustomOverviewSection";
import Classes from "../../utils/styles/Global.module.css";
import { NewslettersOverviewData } from "../../data/customOverViewData";
import CustomAccordianTable from "../../utils/custom/CustomAccordianTable";
import { NewslettersData } from "../../data/newslettersData";

const Newsletters: React.FC = () => {
  return (
    <div className={`${Classes.container} `}>
      <CustomOverviewSection data={NewslettersOverviewData} />

      <div className="pb-10">
        <CustomAccordianTable data={NewslettersData} isMode="newsletterData" />
      </div>
    </div>
  );
};

export default Newsletters;
