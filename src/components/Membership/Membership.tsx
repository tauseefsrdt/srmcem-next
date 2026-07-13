import React from "react";
import CustomOverviewSection from "../../utils/custom/CustomOverviewSection";
import PdfDownloadCard from "../../utils/custom/PdfDownloadCard";
import { MembershipOverviewData } from "../../data/customOverViewData";
import { MembershipData } from "../../data/membership";
import CustomTopFooter from "../../utils/custom/CustomTopFooter";
import { CustomTopFooterData3 } from "../../data/customTopFooterData";
import Classes from "../../utils/styles/Global.module.css";
const Membership: React.FC = () => {
  return (
    <div>
      {/* Membership Overview Section */}
      <div className={`${Classes.container}`}>
        <CustomOverviewSection data={MembershipOverviewData} />
      </div>
      {/* Council Membership Section */}
      <PdfDownloadCard data={MembershipData} />
      {/* Membership Footer Section */}
      <CustomTopFooter data={CustomTopFooterData3} />
    </div>
  );
};

export default Membership;
