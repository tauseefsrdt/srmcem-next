import React from "react";
import CustomOverviewSection from "../../utils/custom/CustomOverviewSection";
import { StudentDrivenClubs } from "../../data/customOverViewData";
import Classes from "../../utils/styles/Global.module.css";
import { gridImgData } from "../../data/clubs";
import CustomTopFooter from "../../utils/custom/CustomTopFooter";
import { CustomClubsTopFooterData } from "../../data/customTopFooterData";
const Clubs: React.FC = () => {
  return (
    <>
      <div className={`${Classes["container"]}`}>
        <CustomOverviewSection data={StudentDrivenClubs} />
      </div>
      <div className={`${Classes["container"]} py-7 md:py-10 lg:py-14`}>
        <div className="clubs_grid_image">
          {gridImgData.map((item) => (
            <div className="transition-all duration-200 relative">
              <div key={item.id} className="bg-white shadow-md rounded-t-md ">
                <img className="w-full h-full aspect-[3/2] object-cover object-top  rounded-md" src={item.imgSrc} alt="" />
              </div>
              <h2 className="text-center text-sm font-semibold bg-[#0f4a85] text-white py-2 rounded-b-md "> {item.title}</h2>
            </div>
          ))}
        </div>
      </div>
      <CustomTopFooter data={CustomClubsTopFooterData} />
    </>
  );
};

export default Clubs;
