import React from "react";
import Classes from "../../utils/styles/Global.module.css";
import CustomOverviewSection from "../../utils/custom/CustomOverviewSection";
import { ImpPoliciesOverviewData } from "../../data/customOverViewData";
import ImpPoliciesTable from "./ImpPoliciesDataTable";

const ImpPolicies: React.FC = () => {
  return (
    <div className={`${Classes.container} `}>
      <CustomOverviewSection data={ImpPoliciesOverviewData} />

      <ImpPoliciesTable />
    </div>
  );
};

export default ImpPolicies;
