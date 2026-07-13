import React from "react";
import AcountCellTable from "./AcountCellTable";
import Classes from "../../utils/styles/Global.module.css";
import CustomOverviewSection from "../../utils/custom/CustomOverviewSection";
import { AccountCellOverviewData } from "../../data/customOverViewData";

const AcountCell: React.FC = () => {
  return (
    <div className={`${Classes.container} `}>
      <CustomOverviewSection data={AccountCellOverviewData} />

      <AcountCellTable />
    </div>
  );
};

export default AcountCell;
