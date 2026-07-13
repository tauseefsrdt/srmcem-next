import React, { useState } from "react";
import Engeenring from "./programs/Engeenring";
import Pharmacy from "./programs/Pharmacy";
import Management from "./programs/Management";
import { tabDataType } from "../../types/new-home/home-data-type";
import ComputerApplication from "./programs/ComputerApplication";
import Commerce from "./programs/Commerce";
import { container } from "../../utils/new-home/tw";

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
    <section id="programs" className="relative overflow-hidden pt-[86px] pb-[92px] px-0 bg-white/55 backdrop-blur-glass border-y border-[rgba(15,47,87,0.08)] max-[940px]:pt-16 max-[940px]:pb-[72px]">
      <div aria-hidden className="pointer-events-none absolute -top-20 right-[-6%] w-[440px] h-[440px] rounded-full bg-gold/[0.12] blur-[120px]" />
      <div aria-hidden className="pointer-events-none absolute -bottom-24 left-[-8%] w-[460px] h-[460px] rounded-full bg-navy-mid/[0.12] blur-[120px]" />
      <div className="relative w-full">
        <div className={container}>
          {heading.map((item: any, index: any) => {
            return (
              <div className="text-center container mx-auto reveal" key={index}>
                <div className="inline-flex justify-center items-center gap-2.5 text-[11px] font-bold  uppercase mb-[18px] text-navy-mid before:content-[''] before:w-[30px] before:h-0.5 before:bg-gold after:content-[''] after:w-[30px] after:h-0.5 after:bg-gold">Programs Offered</div>
                <h2 className="mx-auto font-serif text-[clamp(28px,3.8vw,46px)] leading-[1.12] font-black  text-ink">{item.h1}</h2>
                <p className=" mt-4 text-brand-gray text-[16px] leading-[1.7]">On the college's dynamic campus, you will be part of a diverse and inclusive academic community that fosters intellectual growth and equips you with essential life skills in a supportive environment.</p>
              </div>
            );
          })}

          <ul className="flex justify-center items-center flex-wrap gap-0 mt-[42px] max-[700px]:gap-3 max-[700px]:mt-8" role="tablist" aria-label="Course categories">
            {tabs.map((item: any, index: number) => (
              <li
                key={item.id}
                onClick={() => setActiveTab(item.id)}
                role="tab"
                aria-selected={activeTab === item.id}
                className={`relative inline-flex items-center justify-center min-w-[130px] min-h-[43px] px-[19px] py-[9px] border rounded-pill backdrop-blur-glass text-[15px] font-bold leading-none cursor-pointer transition-all duration-200 hover:-translate-y-px [&+&]:ml-10 max-[940px]:[&+&]:ml-4 max-[700px]:min-w-0 max-[700px]:min-h-[40px] max-[700px]:px-[15px] max-[700px]:py-[9px] max-[700px]:text-[14px] max-[700px]:[&+&]:ml-0 ${
                  activeTab === item.id
                    ? 'text-white bg-[linear-gradient(135deg,#1B4C7F,#0F2F57)] border-transparent shadow-[0_8px_22px_rgba(27,76,127,0.35)]'
                    : 'text-navy-dark/75 bg-white/70 border-navy-mid/20 hover:text-navy-dark hover:border-gold/50'
                }`}
              >
                {index > 0 && (
                  <span
                    aria-hidden="true"
                    className="absolute left-[-21px] top-1/2 -translate-y-1/2 w-px h-[35px] bg-navy-mid/20 max-[940px]:hidden"
                  />
                )}
                {item.title}
              </li>
            ))}
          </ul>
          <div className="mt-[55px] max-[700px]:mt-9">{tabs[activeTab].content}</div>

          <div className="mt-12 flex justify-center reveal">
            <a
              href="#admissions"
              className="inline-flex items-center justify-center gap-2 px-8 py-[14px] rounded-pill bg-[linear-gradient(135deg,#F7CF75,#ffb703)] text-navy-deep text-sm font-bold  shadow-glowGold transition-all duration-300 hover:-translate-y-0.5 hover:shadow-glowGoldStrong"
            >
              Apply Now →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Course;
