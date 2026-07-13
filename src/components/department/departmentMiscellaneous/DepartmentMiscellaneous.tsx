import React from "react";
import CustomOverviewSection from "../../../utils/custom/CustomOverviewSection";
import Recruiters from "../../trainingAndPlacement/Recruiters";
import CustomTab from "../../../utils/custom/CustomTab";
import Classes from "../../../utils/styles/Global.module.css";
import CustomWhySRMCEM from "../../../utils/custom/CustomWhySRMCEM";
import { whySRMCEMCards, whySRMCEMHeading } from "../../../data/whySrmcem";
import CustomTopFooter from "../../../utils/custom/CustomTopFooter";
import { CustomTopFooterData3 } from "../../../data/customTopFooterData";
import { DepartmenMiscellaneousOverviewData } from "../../../data/customOverViewData";
import { departmentmiscellaneousTabData } from "../../../data/departments";

const DepartmentMiscellaneous: React.FC = () => {
  return (
    <div>
      <div className={`${Classes.container} `}>
        <CustomOverviewSection data={DepartmenMiscellaneousOverviewData} />
      </div>
      <div className={`${Classes.container} py-7 md:py-10 lg:py-14`}>
        <CustomTab isMode="department-computer-application" customTabData={departmentmiscellaneousTabData} />
      </div>
      <CustomWhySRMCEM heading={whySRMCEMHeading} cards={whySRMCEMCards} />
      <Recruiters />
      <CustomTopFooter data={CustomTopFooterData3} />
    </div>
  );
};

export default DepartmentMiscellaneous;
