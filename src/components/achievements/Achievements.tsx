import React from "react";
import CustomTopFooter from "../../utils/custom/CustomTopFooter";
import { CustomTopFooterData3 } from "../../data/customTopFooterData";
import CustomOverviewSection from "../../utils/custom/CustomOverviewSection";
import { AchievementsOverviewData } from "../../data/customOverViewData";
import { AchievementsData } from "../../data/achievementsData";
import CustomCard from "../../utils/custom/CustomCard";
import Classes from "../../utils/styles/Global.module.css";
import { achievementsContent, achievementsTableData } from "../../data/achievementsitems";
import CustomAccordianTable from "../../utils/custom/CustomAccordianTable";

const Achievements: React.FC = () => {
  return (
    <div>
      {/* Achievements Overview Section */}
      <div className={`${Classes.container}`}>
        <CustomOverviewSection data={AchievementsOverviewData} />
      </div>
      {/* Achievements Card Section */}
      <div className={`${Classes.container} pb-7 md:pb-10 lg:pb-14`}>
        <CustomCard data={AchievementsData?.AchievementsData} />
        <div className="mx-auto my-8 sm:mt-16 sm:mb-16">
          <h2 className="text-center text-3xl font-bold">{achievementsContent?.content1}</h2>
          <h2 className="text-center text-3xl font-bold">{achievementsContent?.content2}</h2>
        </div>
        <CustomAccordianTable data={achievementsTableData} isMode="achievementData" />
      </div>
      {/* Achievements Footer Section */}
      <CustomTopFooter data={CustomTopFooterData3} />
    </div>
  );
};

export default Achievements;
