import React from "react";
import { ActOfService, HonoringBravehearts, OutreachActivition } from "../../data/customOverViewData";
import CustomOverviewSection from "../../utils/custom/CustomOverviewSection";
import Classes from "../../utils/styles/Global.module.css";
import { honoringData, outreachImages } from "../../data/outReachData";
import CustomTopFooter from "../../utils/custom/CustomTopFooter";
import { CustomTopFooterData1 } from "../../data/customTopFooterData";
import CustomCardSlider from "../../utils/custom/CustomCardSlider";

const OutReach: React.FC = () => {
  return (
    <div>
      <div className={`${Classes["container"]}`}>
        <CustomOverviewSection data={OutreachActivition} />
      </div>
      {/* Start */}

      <div className={`${Classes["container"]} py-7 md:py-10 lg:py-14`}>
        <div className="parent_grid_gallary">
          <div className="children relative">
            <img src={outreachImages[0].src} alt="" />
            {/* <div className="bg-black bg-opacity-50 text-white flex items-center min-h-[70px] absolute bottom-0 left-0 w-full px-3 rounded-b-lg text-sm ">
              Women's Safety Seminar, 2023
            </div> */}
          </div>
          <div className="children">
            <img src={outreachImages[3].src} alt="" />
          </div>
          <div className="children relative">
            <img src={outreachImages[5].src} alt="" />
            {/* <div className="bg-black bg-opacity-50 text-white flex items-center min-h-[70px] absolute bottom-0 left-0 w-full px-3 rounded-b-lg text-sm ">
              WOMEN Welfare Awareness EVENT 26 June 21
            </div> */}
          </div>
          <div className="children ">
            <img src={outreachImages[4].src} alt="" />
          </div>
          <div className="children relative">
            <img src={outreachImages[6].src} alt="" />
            {/* <div className="bg-black bg-opacity-50 text-white flex items-center min-h-[70px] absolute bottom-0 left-0 w-full px-3 rounded-b-lg text-sm ">
              Stationary Material Distribution Ceremony 22 March 2024
            </div> */}
          </div>
          <div className="children relative">
            <img src={outreachImages[1].src} alt="" />
            {/* <div className="bg-black bg-opacity-50 text-white flex items-center min-h-[70px] absolute bottom-0 left-0 w-full px-3 rounded-b-lg text-sm ">
              SRMCEM NSS Camp at Village Anaura Kalan, Lucknow
            </div> */}
          </div>
          <div className="children relative">
            <img src={outreachImages[2].src} alt="" />
            {/* <div className="bg-black bg-opacity-50 text-white flex items-center min-h-[70px] absolute bottom-0 left-0 w-full px-3 rounded-b-lg text-sm ">
              Swacchata Pakhwara 01-15 July 2020
            </div> */}
          </div>
          <div className="children relative">
            <img src={outreachImages[7].src} alt="" />
            {/* <div className="bg-black bg-opacity-50 text-white flex items-center min-h-[70px] absolute bottom-0 left-0 w-full px-3 rounded-b-lg text-sm ">
              Food Distribution by ME Dept. 08 Nov 2020
            </div> */}
          </div>
          <div className="children">
            <img src={outreachImages[8].src} alt="" />
          </div>
        </div>
      </div>
      {/* End */}
      <div className={`${Classes["container"]}`}>
        <CustomOverviewSection data={HonoringBravehearts} />
      </div>
      {/* Start */}
      <div className={`${Classes["container"]} py-7 md:py-10 lg:py-14`}>
        <div className="w-full flex flex-col md:flex-row   gap-2">
          {/* Main Section */}
          <div className="w-full border-2 border-gray-200 hover:border-[#ffb703] rounded-md px-5 py-4 flex flex-col justify-between">
            <img className="w-full max-h-[400px] object-cover" src={honoringData.main.imgSrc} alt="Honoring Main" />
            <p className="mt-auto text-xl">{honoringData.main.description}</p>
          </div>

          {/* Secondary Section */}
          <div className="w-full flex flex-col gap-y-2">
            {honoringData.secondary.map((item, index) => (
              <div
                key={index}
                className="w-full border-2 border-gray-200 hover:border-[#ffb703]  rounded-md px-3 py-2 flex flex-row md:flex-col lg:flex-row items-center lg:items-center gap-x-4"
              >
                <img className="w-full max-w-[227px]" src={item.imgSrc} alt={`Honoring ${index + 1}`} />
                <p>{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* End */}
      <div className="w-full empower flex items-center">
        <div
          className={`${Classes["container"]} py-7 md:py-10 lg:py-14 h-full  relative after:content-[''] after:w-[100px] after:h-[150px] after:rounded-tl-md  after:absolute after:top-5 after:left-1 md:after:-left-3 after:border-t-4 after:border-l-4 after:border-[#ffb703] before:content-[''] before:w-[100px] before:h-[150px] before:rounded-br-md before:absolute before:bottom-5 before:right-1.5 md:before:-right-3 before:border-b-4 before:border-r-4 before:border-[#ffb703] `}
        >
          <div className="w-full flex justify-center items-center h-full ">
            <h1 className="text-2xl sm:text-3xl lg:text-4xl text-white font-medium text-center leading-[60px] sm:leading-[80px]">
              Empowering communities, enriching lives—SRMCEM stands committed to making a difference through compassion and action.
            </h1>
          </div>
        </div>
      </div>
      <div className={`${Classes["container"]}`}>
        <CustomOverviewSection data={ActOfService} />
      </div>
      <CustomCardSlider />
      <CustomTopFooter data={CustomTopFooterData1} />
    </div>
  );
};

export default OutReach;
