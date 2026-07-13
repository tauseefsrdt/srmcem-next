import Recruiters from "@/components/trainingAndPlacement/Recruiters";
import { DepartmentMechanicalEngineeringOverviewData } from "../../../data/customOverViewData";
import { CustomTopFooterData3 } from "../../../data/customTopFooterData";
import { DepartmentMechanicalEngineeringTabData } from "../../../data/departments";
import { feeStructureData } from "../../../data/FeeStructureData";
import { whySRMCEMCards, whySRMCEMHeading } from "../../../data/whySrmcem";
import CustomOverviewSection from "../../../utils/custom/CustomOverviewSection";
import CustomTab from "../../../utils/custom/CustomTab";
import CustomTopFooter from "../../../utils/custom/CustomTopFooter";
import CustomWhySRMCEM from "../../../utils/custom/CustomWhySRMCEM";
import PdfDownloadCard from "../../../utils/custom/PdfDownloadCard";
import Classes from "../../../utils/styles/Global.module.css";


const DepartmentMechanicalEngineering = () => {
  return (
    <div>
      <div className={`${Classes.container}`}>
        <CustomOverviewSection data={DepartmentMechanicalEngineeringOverviewData} />
      </div>
      <div className={`${Classes.container} py-7 md:py-10 lg:py-14`}>
        <CustomTab isMode="department-civil-engeneering" customTabData={DepartmentMechanicalEngineeringTabData} />
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

export default DepartmentMechanicalEngineering;
