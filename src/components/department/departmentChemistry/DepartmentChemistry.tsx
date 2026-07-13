import React from "react";
import CustomOverviewSection from "../../../utils/custom/CustomOverviewSection";
import Recruiters from "../../trainingAndPlacement/Recruiters";
import CustomTab from "../../../utils/custom/CustomTab";
import Classes from "../../../utils/styles/Global.module.css";
import CustomWhySRMCEM from "../../../utils/custom/CustomWhySRMCEM";
import { whySRMCEMCards, whySRMCEMHeading } from "../../../data/whySrmcem";
import CustomTopFooter from "../../../utils/custom/CustomTopFooter";
import { CustomTopFooterData3 } from "../../../data/customTopFooterData";
import { DepartmenChemistrytOverviewData } from "../../../data/customOverViewData";
import { departmentChemistryTabData } from "../../../data/departments";

const DepartmentChemistry: React.FC = () => {
  return (
    <div>
      <div className={`${Classes.container}`}>
        <CustomOverviewSection data={DepartmenChemistrytOverviewData} />
      </div>
      <div className={`${Classes.container} py-7 md:py-10 lg:py-14`}>
        <CustomTab isMode="department-chemistry" customTabData={departmentChemistryTabData} />
      </div>
      <CustomWhySRMCEM heading={whySRMCEMHeading} cards={whySRMCEMCards} />
      <Recruiters />
      <CustomTopFooter data={CustomTopFooterData3} />
    </div>
  );
};

export default DepartmentChemistry;
