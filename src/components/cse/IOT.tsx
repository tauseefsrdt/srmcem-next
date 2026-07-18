import React, { useState } from "react";
import CustomOverviewSection from "../../utils/custom/CustomOverviewSection";
import Recruiters from "../trainingAndPlacement/Recruiters";
import CustomTab from "../../utils/custom/CustomTab";
import Classes from "../../utils/styles/Global.module.css";
import CustomWhySRMCEM from "../../utils/custom/CustomWhySRMCEM";
import { whySRMCEMCards, whySRMCEMHeading } from "../../data/whySrmcem";
import CustomTopFooter from "../../utils/custom/CustomTopFooter";
import { CustomTopFooterData3 } from "../../data/customTopFooterData";
import { CseIOTOverviewData } from "../../data/customOverViewData";
import { DepartmentOfIOTTabData } from "../../data/departments";
import PdfDownloadCard from "../../utils/custom/PdfDownloadCard";
import { feeStructureData } from "../../data/FeeStructureData";
const faqs = [
  {
    q: "Which is the best AKTU College in Lucknow for B.Tech IoT?",
    a: "SRMCEM offers a future-ready B.Tech CSE (Internet of Things) program affiliated with AKTU, focusing on smart devices, embedded systems, cloud computing, automation, and real-world IoT applications.",
  },
  {
    q: "What is Internet of Things (IoT) in B.Tech?",
    a: "Internet of Things (IoT) is a specialized engineering program that teaches students to develop smart connected devices, sensors, embedded systems, cloud platforms, and intelligent automation solutions.",
  },
  {
    q: "Does the IoT program at SRMCEM follow the AKTU syllabus?",
    a: "Yes. The IoT program follows the latest AKTU curriculum while offering project-based learning, practical laboratories, workshops, and industry exposure.",
  },
  {
    q: "What career opportunities are available after B.Tech IoT?",
    a: "Graduates can become IoT Engineers, Embedded System Engineers, Cloud Engineers, Automation Engineers, Smart Device Developers, Robotics Engineers, and Software Developers.",
  },
  {
    q: "Is IoT a good career option in India?",
    a: "Yes. IoT is one of the fastest-growing technology domains with applications in smart cities, healthcare, agriculture, manufacturing, transportation, and industrial automation.",
  },
  {
    q: "What technologies are covered in the IoT course?",
    a: "Students learn Embedded Systems, Sensors, Raspberry Pi, Arduino, Cloud Computing, Wireless Communication, Python, Artificial Intelligence, and Data Analytics.",
  },
  {
    q: "Does SRMCEM provide hands-on IoT projects?",
    a: "Yes. Students develop smart applications through practical laboratories, industry projects, innovation activities, technical workshops, and internships.",
  },
  {
    q: "Can IoT students appear for campus placements?",
    a: "Yes. Students receive placement opportunities in software companies, electronics industries, automation firms, product-based companies, and technology startups.",
  },
  {
    q: "Is IoT better than traditional Computer Science?",
    a: "IoT is ideal for students interested in connected technologies, automation, embedded systems, AI integration, and smart infrastructure while retaining core computer science concepts.",
  },
  {
    q: "Why choose SRMCEM for IoT engineering?",
    a: "SRMCEM offers an AKTU-approved curriculum, experienced faculty, modern laboratories, practical exposure, and industry-focused learning that prepares students for careers in emerging technologies.",
  },
];

const IOT: React.FC = () => {
  const [open, setOpen] = useState<number | null>(0);
  const [showFaq, setShowFaq] = useState(false);
  const displayedFaqs = showFaq ? faqs : faqs.slice(0, 2);
  return (
    <div>
      <div className={`${Classes.container}`}>
        <CustomOverviewSection data={CseIOTOverviewData} />
      </div>
      <div className={`${Classes.container} py-7 md:py-10 lg:py-14`}>
        <CustomTab isMode="department-electronics-engineering" customTabData={DepartmentOfIOTTabData} />
      </div>

      <div className={`${Classes["container"]} py-4 md:py-6 lg:py-8`}>
        <PdfDownloadCard style={true} data={feeStructureData} />
      </div>
      <CustomWhySRMCEM heading={whySRMCEMHeading} cards={whySRMCEMCards} />
      <Recruiters />
      <div className={`${Classes["container"]} overflow-hidden`}>
        <h3 className="text-3xl font-semibold text-center mb-10">Frequently Asked Questions</h3>
        <div className="space-y-3">
          {displayedFaqs.map((f, i) => {
            const isOpen = open === i;
            return (
              <div key={f.q} className="bg-white border border-gray-200 rounded-xl shadow-soft overflow-hidden">
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  aria-expanded={isOpen}
                  className="w-full flex items-center justify-between gap-3 md:gap-4 p-4 md:p-5 text-left hover:bg-gray-50 transition-colors"
                >
                  <span className="text-[13px] md:text-base font-bold text-gray-900">{f.q}</span>
                  <span
                    className={`flex-shrink-0 h-8 w-8 rounded-full bg-[#0A4A8F]/10 text-[#0A4A8F] flex items-center justify-center transition-transform ${isOpen ? "rotate-45" : ""
                      }`}
                  >
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                      <path d="M12 5v14M5 12h14" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
                    </svg>
                  </span>
                </button>
                <div className={`grid transition-all duration-300 ${isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}`}>
                  <div className="overflow-hidden">
                    <p className="px-4 md:px-5 pb-4 md:pb-5 text-[13px] md:text-base text-gray-700 leading-relaxed">{f.a}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div className={`${Classes["container"]} mt-4 mb-6 overflow-hidden`}>
        <div className="flex justify-center">
          <button
            type="button"
            onClick={() => setShowFaq((current) => !current)}
            aria-expanded={showFaq}
            className="inline-flex w-fit items-center justify-center gap-2 rounded-full bg-[#0A4A8F] px-4 md:px-5 py-2.5 md:py-3 text-xs md:text-sm font-bold text-white shadow-soft transition-colors hover:bg-[#07376b]"
          >
            {showFaq ? "Show Less FAQ" : "Read More FAQ"}
            <span aria-hidden="true" className={`transition-transform duration-300 ${showFaq ? "rotate-180" : ""}`}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                <path d="M6 9l6 6 6-6" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </span>
          </button>
        </div>
      </div>
      <CustomTopFooter data={CustomTopFooterData3} />
    </div>
  );
};

export default IOT;
