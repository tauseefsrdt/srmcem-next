import React from "react";
import Classes from "../../../utils/styles/Global.module.css";
import CustomOverviewSection from "../../../utils/custom/CustomOverviewSection";
import { DepartmentElectricalEngineeringOverviewData } from "../../../data/customOverViewData";
import CustomTab from "../../../utils/custom/CustomTab";
import { DepartmentElectricalEngineeringTabData } from "../../../data/departments";
import CustomWhySRMCEM from "../../../utils/custom/CustomWhySRMCEM";
import { whySRMCEMCards, whySRMCEMHeading } from "../../../data/whySrmcem";
import Recruiters from "../../home/Recruiters";
import CustomTopFooter from "../../../utils/custom/CustomTopFooter";
import { CustomTopFooterData3 } from "../../../data/customTopFooterData";
import PdfDownloadCard from "../../../utils/custom/PdfDownloadCard";
import { feeStructureData } from "../../../data/FeeStructureData";

const DepartmentElectricalEngineering: React.FC = () => {
  return (
    <>
      <div className={`${Classes.container}`}>
        <CustomOverviewSection data={DepartmentElectricalEngineeringOverviewData} />
      </div>

      <div className={`${Classes.container} py-7 md:py-10 lg:py-14`}>
        <CustomTab isMode="department-computer-application" customTabData={DepartmentElectricalEngineeringTabData} />
      </div>
      <div className={`${Classes["container"]} py-4 md:py-6 lg:py-8`}>
        <PdfDownloadCard style={true} data={feeStructureData} />
      </div>
      <CustomWhySRMCEM heading={whySRMCEMHeading} cards={whySRMCEMCards} />
      <Recruiters />
      <CustomTopFooter data={CustomTopFooterData3} />
    </>
  );
};

export default DepartmentElectricalEngineering;
