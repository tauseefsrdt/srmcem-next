import React from "react";
import CustomOverviewSection from "../../../utils/custom/CustomOverviewSection";
import { DepartmentManagementOverviewData } from "../../../data/customOverViewData";
import Classes from "../../../utils/styles/Global.module.css";
import CustomTab from "../../../utils/custom/CustomTab";
import { DepartmentManagementData } from "../../../data/departments";
import CustomWhySRMCEM from "../../../utils/custom/CustomWhySRMCEM";
import { whySRMCEMCards, whySRMCEMHeading } from "../../../data/whySrmcem";
import Recruiters from "../../trainingAndPlacement/Recruiters";
import CustomTopFooter from "../../../utils/custom/CustomTopFooter";
import { CustomTopFooterData3 } from "../../../data/customTopFooterData";
import PdfDownloadCard from "../../../utils/custom/PdfDownloadCard";
import { feeStructureData } from "../../../data/FeeStructureData";

const ManagementDepartment: React.FC = () => {
  return (
    <div>
      <div className={`${Classes.container}`}>
        <CustomOverviewSection data={DepartmentManagementOverviewData} />
      </div>
      <div className={`${Classes.container} py-7 md:py-10 lg:py-14`}>
        <CustomTab isMode="department-computer-application" customTabData={DepartmentManagementData} />
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

export default ManagementDepartment;
