import React, { useState } from "react";
import CustomOverviewSection from "../../utils/custom/CustomOverviewSection";
import { academicCalendarsData } from "../../data/customOverViewData";
import CustomTopFooter from "../../utils/custom/CustomTopFooter";
import { CustomTopFooterData3 } from "../../data/customTopFooterData";
import PdfDownloadCard from "../../utils/custom/PdfDownloadCard";
import {
  academicCalendarsForEvenSemesterCards,
  academicCalendarsForEvenSemesterCustomTabData,
  academicCalendarsForEvenSemesterData1,
  academicCalendarsForEvenSemesterData2,
  academicCalendarsForEvenSemesterData3,
  ActivityPlannaer,
  eResourcesData,
} from "../../data/AcademicsCalenderSwayamData";
import CustomCardGrid from "../../utils/custom/CustomCardGrid";
import CustomTab from "../../utils/custom/CustomTab";
import Classes from "../../utils/styles/Global.module.css";
import { FaAngleDown, FaAngleRight } from "react-icons/fa";

const AcademicsCalender: React.FC = () => {
  const [accordian, setAccordian] = useState(false);
  return (
    <div>
      <div className={`${Classes["container"]}`}>
        <CustomOverviewSection data={academicCalendarsData} />
      </div>
      <PdfDownloadCard data={academicCalendarsForEvenSemesterData1} />
      <PdfDownloadCard data={ActivityPlannaer} />
      <div className={`${Classes["container"]}`}>
        <div className={`mb-4 border-2 overflow-hidden transition-all duration-300  ${accordian ? "border-[#ffb703] " : "border-gray-100"} rounded-t-lg`}>
          <div onClick={() => setAccordian(!accordian)} className="flex justify-between items-center px-4 py-3 bg-gray-100 cursor-pointer ">
            <span className="font-semibold">Archive</span>
            {accordian ? <FaAngleRight /> : <FaAngleDown color="#ffb703" />}
          </div>
          <div className={`transition-all duration-300   ${accordian ? "max-h-[10000px] " : "max-h-0"}`}>
            <PdfDownloadCard isHover={false} data={academicCalendarsForEvenSemesterData2} />
          </div>
        </div>
        {/* <h2 className="text-4xl font-bold text-start mb-12">Archive</h2> */}
      </div>
      {/* <PdfDownloadCard data={academicCalendarsForEvenSemesterData2} /> */}
      <div className="anual-fast text-white">
        <div className={`${Classes.container} py-7 md:py-10 lg:py-14`}>
          <div className="bg-opacity-10 p-5 sm:p-10  border border-[#FFFFFF]">
            <div className="flex gap-x-10 flex-col md:flex-row md:items-center py-5">
              <h3 className="text-3xl lg:text-4xl font-bold text-nowrap md:min-w-[250px] lg:min-w-[400px] text-white">{eResourcesData.title}</h3>
              <p className="mt-4 sm:mt-0">{eResourcesData.content}</p>
            </div>
            <div className="mt-5 sm:mt-10">
              <CustomTab isMode="academic" customTabData={academicCalendarsForEvenSemesterCustomTabData} />
            </div>
          </div>
        </div>
      </div>
      <CustomCardGrid heading="Student Chapters" cards={academicCalendarsForEvenSemesterCards} />
      <div className={`${Classes["container"]}`}>
        <h2 className="text-4xl font-bold text-start">Student Council Meetings</h2>
      </div>
      <PdfDownloadCard data={academicCalendarsForEvenSemesterData3} />
      <CustomTopFooter data={CustomTopFooterData3} />
    </div>
  );
};

export default AcademicsCalender;
