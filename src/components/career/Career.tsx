import React from "react";
import CustomOverviewSection from "../../utils/custom/CustomOverviewSection";
import { CareerOverviewData } from "../../data/customOverViewData";
import Classes from "../../utils/styles/Global.module.css";
import Link from "next/link";
import { FaLongArrowAltLeft } from "react-icons/fa";
const Career: React.FC = () => {
  return (
    <div>
      <div className={`${Classes["container"]}`}>
        <CustomOverviewSection data={CareerOverviewData} />
      </div>
      <div className={`${Classes["container"]} py-7 md:py-10 lg:py-14 bg-gray-50 shadow-md rounded-lg mb-7 md:mb-10 lg:mb-14`}>
        <h2 className="text-center text-3xl lg:text-4xl font-bold">Coming Soon</h2>
        <div className="mt-7 md:mt-10 lg:mt-14 flex justify-center">
          <Link href="/"
            className="bg-[#ffb703] group hover:bg-transparent uppercase border-2 border-[#ffb703] px-6 py-3 rounded-md font-bold  text-[#233E6F] hover:text-[#ffb703] inline-flex items-center gap-x-1 "
          >
            <span className="mt-0.5 transition-all duration-300  group-hover:rotate-[360deg]">
              <FaLongArrowAltLeft size={24} />
            </span>{" "}
            Back
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Career;
