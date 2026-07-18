import React, { useState } from "react";
import Classes from "../../../utils/styles/Global.module.css";
import CustomOverviewSection from "../../../utils/custom/CustomOverviewSection";
import { DepartmentElectricalEngineeringOverviewData } from "../../../data/customOverViewData";
import CustomTab from "../../../utils/custom/CustomTab";
import { DepartmentElectricalEngineeringTabData } from "../../../data/departments";
import CustomWhySRMCEM from "../../../utils/custom/CustomWhySRMCEM";
import { whySRMCEMCards, whySRMCEMHeading } from "../../../data/whySrmcem";
import Recruiters from "../../home/Recruiters";
import CustomTopFooter from "../../../utils/custom/CustomTopFooter";
import { CustomTopFooterData3 } from "../../../data/customTopFooterData";
import PdfDownloadCard from "../../../utils/custom/PdfDownloadCard";
import { feeStructureData } from "../../../data/FeeStructureData";
const faqs = [
  {
    q: "Which is the best AKTU College in Lucknow for Electrical Engineering?",
    a: "SRMCEM offers an industry-oriented Electrical Engineering program affiliated with AKTU, supported by experienced faculty and modern laboratories.",
  },
  {
    q: "Does Electrical Engineering at SRMCEM follow the AKTU syllabus?",
    a: "Yes. The department follows the latest AKTU curriculum with practical laboratory work, industrial visits, and project-based learning.",
  },
  {
    q: "What are the career opportunities after Electrical Engineering?",
    a: "Graduates can work in power generation, renewable energy, automation, manufacturing, electric vehicles, railways, and government organizations.",
  },
  {
    q: "Is Electrical Engineering a good career in India?",
    a: "Yes. Electrical Engineers are in demand across power utilities, smart grids, renewable energy, EV industries, and infrastructure projects.",
  },
  {
    q: "What laboratories are available for Electrical Engineering students?",
    a: "Students gain practical exposure through Electrical Machines, Power Systems, Control Systems, Power Electronics, and Measurement laboratories.",
  },
  {
    q: "Can Electrical Engineering students get government jobs?",
    a: "Yes. Graduates can prepare for PSU recruitment, UPSC ESE, SSC JE, State Electricity Boards, and other government engineering positions.",
  },
  {
    q: "Does SRMCEM provide industrial exposure?",
    a: "Yes. Students participate in industrial visits, technical workshops, internships, and industry interaction programs.",
  },
  {
    q: "Can students pursue higher education after B.Tech Electrical Engineering?",
    a: "Yes. Students can pursue M.Tech, MBA, MS, GATE preparation, and other specialized technical programs.",
  },
  {
    q: "Is admission available through UPTAC counselling?",
    a: "Yes. Admissions are conducted through UPTAC counselling according to AKTU norms.",
  },
  {
    q: "Why choose SRMCEM for Electrical Engineering?",
    a: "Students benefit from the AKTU curriculum, experienced faculty, practical laboratories, technical training, and placement support.",
  },
];
const DepartmentElectricalEngineering: React.FC = () => {
  const [open, setOpen] = useState<number | null>(0);
  const [showFaq, setShowFaq] = useState(false);
  const displayedFaqs = showFaq ? faqs : faqs.slice(0, 2);
  return (
    <>
      <div className={`${Classes.container}`}>
        <CustomOverviewSection data={DepartmentElectricalEngineeringOverviewData} />
      </div>

      <div className={`${Classes.container} py-7 md:py-10 lg:py-14`}>
        <CustomTab isMode="department-computer-application" customTabData={DepartmentElectricalEngineeringTabData} />
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
    </>
  );
};

export default DepartmentElectricalEngineering;
