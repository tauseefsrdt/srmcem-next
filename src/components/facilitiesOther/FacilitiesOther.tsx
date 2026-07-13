import React from "react";
import CustomOverviewSection from "../../utils/custom/CustomOverviewSection";
import { facilitiesData } from "../../data/customOverViewData";
import CustomFacilities from "../../utils/custom/CustomFacilities";
import CustomCounselingSection from "../../utils/custom/CustomCounselingSection";
import { facilitiesOtherCardsData, otherfacilitiesCardData, otherFacilitiesCardLayoutData, transportationData } from "../../data/FacilitiesData";
import { CafeteriaAndMessData, FacilitiesOtherCardsData } from "../../data/CustomFacilitiesData";
import Classes from "../../utils/styles/Global.module.css";
import CustomTopFooter from "../../utils/custom/CustomTopFooter";
import { CustomTopFooterData3 } from "../../data/customTopFooterData";
import IqacCard from "../iqac/iqacCard";
import CustomCardGrid from "../../utils/custom/CustomCardGrid";

const FacilitiesOther: React.FC = () => {
  return (
    <div>
      <div className={`${Classes["container"]}`}>
        <CustomOverviewSection data={facilitiesData} />
      </div>
      <CustomFacilities layoutData={otherFacilitiesCardLayoutData} facilities={otherfacilitiesCardData} />
      <CustomCounselingSection data={CafeteriaAndMessData} />
      <div className={`${Classes["container"]} py-7 md:py-10 lg:py-14`}>
        <h2 className="text-3xl lg:text-4xl text-center leading-8 pr-4 p-5 py-12 font-bold">Transportation</h2>
        <div className={`flex flex-col items-start mt-5 mb-5 p-5`}>
          <div className={`flex flex-col lg:flex-row w-full gap-10`}>
            <div className="w-full lg:w-[60%] order-2 lg:order-1">
              <p className={`mt-4 text-lg`}>{transportationData?.content}</p>
              {transportationData.contentItem &&
                transportationData.contentItem.map((item) => {
                  const m_name = item.M_name.split(":");
                  const m_mobNo = item.M_mobNo.split(":");
                  const c_name = item.C_name.split(":");
                  const c_mobNo = item.C_mobNo.split(":");
                  return (
                    <div className="mt-8 lg:mt-12 ">
                      <div className="flex gap-1">
                        <b className="text-[#5B5B5B]">{m_name[0].trim()}</b> {" : "} <p>{m_name[1].trim()}</p>
                      </div>
                      <div className="flex gap-1">
                        <b className="text-[#5B5B5B]">{m_mobNo[0].trim()}</b> {" : "} <p>{m_mobNo[1].trim()}</p>
                      </div>
                      <div className="flex gap-1">
                        <b className="text-[#5B5B5B]">{c_name[0].trim()}</b> {" : "} <p>{c_name[1].trim()}</p>
                      </div>
                      <div className="flex gap-1">
                        <b className="text-[#5B5B5B]">{c_mobNo[0].trim()}</b> {" : "} <p>{c_mobNo[1].trim()}</p>
                      </div>
                    </div>
                  );
                })}
            </div>
            <div className="w-full lg:w-[40%] order-1 lg:order-2 border border-gray-200 hover:border-[#FFB703]  transition duration-200  cursor-pointer p-2 rounded-lg">
              <img className="w-full rounded-lg" src={transportationData.src} alt={transportationData.alt} />
            </div>
          </div>
        </div>
      </div>
      <CustomCardGrid heading="" cards={facilitiesOtherCardsData} />
      <div className={`${Classes["container"]} py-7 md:py-10 lg:py-14`}>
        <h2 className="text-3xl lg:text-4xl text-center  leading-8 pr-4 p-5 py-12 font-bold">Additional Facilities</h2>
        <div className=" mt-8 grid-iqac-card mb-5">
          {FacilitiesOtherCardsData?.map((card, index) => {
            const length = FacilitiesOtherCardsData?.length;
            return <IqacCard length={length} index={index} key={index} title={card?.title} icon={card?.icon} description={card?.description} colorCode={"bg-[#233E6F]"} />;
          })}
        </div>
      </div>
      <CustomTopFooter data={CustomTopFooterData3} />
    </div>
  );
};

export default FacilitiesOther;
