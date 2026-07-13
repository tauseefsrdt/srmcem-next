import React from "react";
const bgImg1 = "/images/trainingPlacement/PlacementRecords/bg-placementTraining.jpg";
import Classes from "../../utils/styles/Global.module.css";
import Counter from "../../utils/custom/Counter";
import { counterDataFoPlacementTrainingPage } from "../../data/counterData";

export const PlacementRecordCountsData = {
  btnText: "Grow with us",
  content: " Empowering students to secure top positions in leading companies year after year.",
};
const PlacementRecordCounts: React.FC = () => {
  return (
    <>
      <div className=" relative bg-cover mb-6  sm:mb-0 bg-center" style={{ backgroundImage: `url(${bgImg1})` }}>
        <div className={`${Classes["container"]}`}>
          <div className="absolute inset-0 bg-black bg-opacity-50"></div>
          <div className="relative text-white text-center py-10 md:py-18 lg:py-24 sm:px-5">
            <button className="mb-3 relative sm:text-xl px-3 sm:px-6 py-1.5 sm:py-3 text-[#233E6F] border-2 border-[#ffb703] hover:bg-transparent font-semibold hover:text-[#ffb703]  bg-[#ffb703]   transition-all duration-300 ease-in-out rounded-xl">
              {PlacementRecordCountsData.btnText}
            </button>
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold my-6 sm:my-10 text-white">{PlacementRecordCountsData.content}</h1>
            <Counter counterData={counterDataFoPlacementTrainingPage} />
          </div>
        </div>
      </div>
    </>
  );
};

export default PlacementRecordCounts;
