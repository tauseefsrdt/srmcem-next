import React, { useState } from "react";
import Classes from "../../../utils/styles/Global.module.css";
import Engeenring from "./Engeenring";
import Pharmacy from "./Pharmacy";
import Management from "./Management";
import { tabDataType } from "../../../types/home-data-type";
import ComputerApplication from "./ComputerApplication";
import Commerce from "./Commerce";

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
const { heading, tabs } = tabData[0];

const Course: React.FC = () => {
  const [activeTab, setActiveTab] = useState(0);
  return (
    <section className="py-7 md:py-10 lg:py-14 ">
      <div className="w-full">
        <div className={`${Classes["container"]} `}>
          {heading.map((item: any, index: any) => {
            return (
              <div className="heading" key={index}>
                <h2 className="text-center text-3xl lg:text-4xl font-bold ">{item.h1}</h2>
                <p className="text-center mt-3 lg:mt-4  ">{item.para}</p>
              </div>
            );
          })}

          <ul className="w-full flex sm:justify-center space-x-2 sm:space-x-4 lg:space-x-10 mt-6 lg:mt-10 overflow-x-auto manage_button_scroll">
            {tabs.map((item: any) => (
              <li
                key={item.id}
                onClick={() => setActiveTab(item.id)}
                className={` ${item.id === tabs.length - 1
                  ? ""
                  : "sm:after:content-[''] after:absolute after:top-1 after:-right-[10px]  lg:after:-right-6 sm:after:bg-[#1d3d775e] sm:after:w-[2px] sm:after:h-[30px]"
                  } ${item.id === 0 ? "" : "ml-2"} ${item.id === 1 ? "min-w-[200px]" : "min-w-[130px]"} relative transition-all duration-300  px-3 text-nowrap text-center py-2 text-[12px] text-base cursor-pointer font-semibold border border-[#1B3A6F] rounded-full ${activeTab === item.id ? "text-white bg-[#1B3A6F]" : "text-gray-500"
                  } `}
              >
                {item.title}
              </li>
            ))}
          </ul>
          <div className="mt-14">{tabs[activeTab].content}</div>
        </div>
      </div>
    </section>
  );
};

export default Course;
