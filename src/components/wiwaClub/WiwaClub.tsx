import React from "react";
import CustomOverviewSection from "../../utils/custom/CustomOverviewSection";
import { WiwaClubData } from "../../data/customOverViewData";
import CustomTopFooter from "../../utils/custom/CustomTopFooter";
import Classes from "../../utils/styles/Global.module.css";
import CustomForm from "../../utils/custom/CustomForm";
import { initialJoinOurClubData, joinOurClubData, joinOurClubDataValidation } from "../../data/formData";
import Accordian from "../../utils/custom/Accordian";
import { clubMembersItems } from "../../data/accordianItemsData";
import PhotoGallerySlider from "./PhotoGallerySlider";
import { CustomClubsTopFooterData } from "../../data/customTopFooterData";

const WiwaClub: React.FC = () => {
  return (
    <>
      <div className={`${Classes.container}`}>
        <CustomOverviewSection data={WiwaClubData} />
      </div>
      <div className={`${Classes.container} py-7 md:py-10 lg:py-14`}>
        <div className="w-full flex gap-x-10 items-start">
          <div className="w-full max-w-[calc(100%-400px)] ">
            <h3 className="text-2xl font-bold mb-5">Photo Gallery</h3>
            <PhotoGallerySlider />
            <h3 className="text-2xl font-bold my-5"> Club Members</h3>
            <Accordian isMode="wiwa-club" items={clubMembersItems} />
          </div>
          <div className="w-full  max-w-[400px] bg-[#173E5DBD] px-3 py-4 rounded-md ">
            <h3 className="text-3xl font-medium text-white mb-3">Join our Club</h3>
            <CustomForm btnTitle="Submit" formData={joinOurClubData} initialValues={initialJoinOurClubData} validationSchema={joinOurClubDataValidation} />
          </div>
        </div>
      </div>
      <CustomTopFooter data={CustomClubsTopFooterData} />
    </>
  );
};

export default WiwaClub;
