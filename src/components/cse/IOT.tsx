import React from "react";
import CustomOverviewSection from "../../utils/custom/CustomOverviewSection";
import Recruiters from "../trainingAndPlacement/Recruiters";
import CustomTab from "../../utils/custom/CustomTab";
import Classes from "../../utils/styles/Global.module.css";
import CustomWhySRMCEM from "../../utils/custom/CustomWhySRMCEM";
import { whySRMCEMCards, whySRMCEMHeading } from "../../data/whySrmcem";
import CustomTopFooter from "../../utils/custom/CustomTopFooter";
import { CustomTopFooterData3 } from "../../data/customTopFooterData";
import { CseIOTOverviewData } from "../../data/customOverViewData";
import { DepartmentOfIOTTabData } from "../../data/departments";
import PdfDownloadCard from "../../utils/custom/PdfDownloadCard";
import { feeStructureData } from "../../data/FeeStructureData";


const IOT: React.FC = () => {
  return (
    <div>
      <div className={`${Classes.container}`}>
        <CustomOverviewSection data={CseIOTOverviewData} />
      </div>
      <div className={`${Classes.container} py-7 md:py-10 lg:py-14`}>
        <CustomTab isMode="department-electronics-engineering" customTabData={DepartmentOfIOTTabData} />
      </div>

      <div className={`${Classes["container"]} py-4 md:py-6 lg:py-8`}>
        <PdfDownloadCard style={true} data={feeStructureData} />
      </div>
      <CustomWhySRMCEM heading={whySRMCEMHeading} cards={whySRMCEMCards} />
      <Recruiters />
      <CustomTopFooter data={CustomTopFooterData3} />
    </div>
  );
};

export default IOT;
