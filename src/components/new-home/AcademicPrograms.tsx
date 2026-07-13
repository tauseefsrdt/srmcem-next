import React, { useState } from "react";
import { tabDataType } from "../../types/new-home/home-data-type";
import Engeenring from "./programs/Engeenring";
import ComputerApplication from "./programs/ComputerApplication";
import Pharmacy from "./programs/Pharmacy";
import Management from "./programs/Management";
import Commerce from "./programs/Commerce";
import {  section, sectionTitle } from "../../utils/new-home/tw";

export const tabData: tabDataType[] = [
  {
    heading: [
      {
        h1: "Our Courses",
        para: "On the college’s dynamic campus, you will be part of a diverse and inclusive academic community that fosters intellectual growth and equips you with essential life skills in a supportive environment.",
      },
    ],
    tabs: [
      {
        id: 0,
        title: "Engineering",
        content: <Engeenring />,
      },
      {
        id: 1,
        title: "Computer Application",
        content: <ComputerApplication />,
      },
      {
        id: 2,
        title: "Pharmacy",
        content: <Pharmacy />,
      },
      {
        id: 3,
        title: "Management",
        content: <Management />,
      },
      {
        id: 4,
        title: "Commerce",
        content: <Commerce />,
      },
    ],
  },
];
const {  tabs } = tabData[0];

const AcademicPrograms: React.FC = () => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section className="bg-[linear-gradient(180deg,#FFFFFF_0%,#E0F1FF_100%)]">
      <div className={`${section} `}>
        <div className="w-full">
          <div className="mb-14 reveal" >
            {/* <div className={`${eyebrow} text-navy-mid`}>Courses</div> */}
            <h2 className={`${sectionTitle} text-ink`}>Our <span className="text-[#C11E24]">Courses</span> </h2>
          </div>

          <div className="relative">
            <ul className="w-full flex flex-wrap justify-center gap-2 sm:gap-4 mt-6 lg:mt-10">
              {tabs.map((item: any) => (
                <li
                  key={item.id}
                  onClick={() => setActiveTab(item.id)}
                  className={`cursor-pointer rounded-full border px-3 py-2 text-center text-[12px] font-semibold transition-all duration-300 ${activeTab === item.id ? 'bg-[#C11E24] text-white border-[#C11E24]' : 'bg-white text-[#C11E24] border-[#C11E24]'}`}
                >
                  {item.title}
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-14">{tabs[activeTab].content}</div>
        </div>
      </div>
    </section>
  );
};



export default AcademicPrograms;
