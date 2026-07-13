import React from "react";
import Program from "./Program";
import AlternateProfileSection from "./AlternateProfileSection";
import { profileData } from "../../data/messageData";
import CustomOverviewSection from "../../utils/custom/CustomOverviewSection";
import { MessageOverviewData } from "../../data/customOverViewData";
import CustomTopFooter from "../../utils/custom/CustomTopFooter";
import { CustomTopFooterData1 } from "../../data/customTopFooterData";
import Classes from "../../utils/styles/Global.module.css";

const Message: React.FC = () => {
  return (
    <>
      <div>
        {/* <LeaderVision /> */}
        <div className={`${Classes["container"]}`}>
          <CustomOverviewSection data={MessageOverviewData} />
        </div>
        <AlternateProfileSection people={profileData} />
        <Program />
        <CustomTopFooter data={CustomTopFooterData1} />
      </div>
    </>
  );
};

export default Message;
