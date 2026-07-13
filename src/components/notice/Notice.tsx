import React from "react";
import CustomOverviewSection from "../../utils/custom/CustomOverviewSection";
import { NoticeOverviewData } from "../../data/customOverViewData";
import NoticeListing from "./NoticeListing";
import Classes from "../../utils/styles/Global.module.css";
const Notice: React.FC = () => {
  return (
    <div>
      <div className={`${Classes["container"]}`}>
        <CustomOverviewSection data={NoticeOverviewData} />
      </div>
      <NoticeListing />
    </div>
  );
};

export default Notice;
