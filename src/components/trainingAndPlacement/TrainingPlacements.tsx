import React from "react";
import CustomOverviewSection from "../../utils/custom/CustomOverviewSection";
import { PlacementOverviewData } from "../../data/customOverViewData";

import GoalsSlider from "./Goals";
import PlacementRecordCounts from "./PlacementRecordCounts";
import PlacementRecords from "./PlacementRecords";
import Recruiters from "./Recruiters";
import PlacementDrives from "./PlacementDrives";
import CustomTopFooter from "../../utils/custom/CustomTopFooter";
import { CustomTopFooterData1 } from "../../data/customTopFooterData";
import Classes from "../../utils/styles/Global.module.css";
const TrainingPlacements: React.FC = () => {
  return (
    <>
      <div className={`${Classes.container} `}>
        <CustomOverviewSection data={PlacementOverviewData} />
      </div>
      <PlacementRecordCounts />
      <GoalsSlider />
      <PlacementRecords />
      <Recruiters />
      <PlacementDrives />
      <CustomTopFooter data={CustomTopFooterData1} />
    </>
  );
};

export default TrainingPlacements;
