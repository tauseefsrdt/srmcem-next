import React, { useState } from "react";
import CustomOverviewSection from "../../../utils/custom/CustomOverviewSection";
import Recruiters from "../../trainingAndPlacement/Recruiters";
import CustomTab from "../../../utils/custom/CustomTab";
import Classes from "../../../utils/styles/Global.module.css";
import CustomWhySRMCEM from "../../../utils/custom/CustomWhySRMCEM";
import { whySRMCEMCards, whySRMCEMHeading } from "../../../data/whySrmcem";
import CustomTopFooter from "../../../utils/custom/CustomTopFooter";
import { CustomTopFooterData3 } from "../../../data/customTopFooterData";
import { DepartmentCivilEngeneeringOverviewData } from "../../../data/customOverViewData";
import { DepartmentCivilEngeneeringTabData } from "../../../data/departments";
import PdfDownloadCard from "../../../utils/custom/PdfDownloadCard";
import { feeStructureData } from "../../../data/FeeStructureData";
const faqs = [
  {
    q: "Which is the best AKTU College in Lucknow for Civil Engineering?",
    a: "SRMCEM is among the preferred AKTU-affiliated engineering colleges in Lucknow, offering quality education, laboratories, experienced faculty, and industry-focused learning in Civil Engineering.",
  },
  {
    q: "What career opportunities are available after Civil Engineering from an AKTU college?",
    a: "Graduates can work as Structural Engineers, Site Engineers, Highway Engineers, Construction Managers, Environmental Engineers, Surveyors, and Government Engineers.",
  },
  {
    q: "Does Civil Engineering at SRMCEM follow the AKTU syllabus?",
    a: "Yes. The Civil Engineering department follows the latest AKTU curriculum while integrating practical training, industrial visits, and project-based learning.",
  },
  {
    q: "Is Civil Engineering a good career in 2026?",
    a: "Yes. Demand for Civil Engineers continues to grow due to infrastructure development, smart cities, highways, metro projects, and sustainable construction.",
  },
  {
    q: "Does SRMCEM provide practical training for Civil Engineering students?",
    a: "Yes. Students gain practical experience through modern laboratories, surveying equipment, workshops, internships, and industrial exposure.",
  },
  {
    q: "What laboratories are available in the Civil Engineering department?",
    a: "The department includes Survey Lab, Concrete Lab, Soil Mechanics Lab, Fluid Mechanics Lab, Transportation Engineering Lab, and Environmental Engineering Lab.",
  },
  {
    q: "Can Civil Engineering students get placements through campus recruitment?",
    a: "Yes. Eligible students receive placement opportunities with construction companies, infrastructure firms, consulting organizations, and government sectors.",
  },
  {
    q: "Is Civil Engineering available through UPTAC counselling?",
    a: "Yes. Civil Engineering admissions at SRMCEM are available through UPTAC counselling as per AKTU admission guidelines.",
  },
  {
    q: "What skills are important for Civil Engineering students?",
    a: "Students should develop technical knowledge, analytical thinking, surveying skills, project management, AutoCAD proficiency, and problem-solving abilities.",
  },
  {
    q: "Why choose SRMCEM for Civil Engineering in Lucknow?",
    a: "Students benefit from AKTU-approved curriculum, experienced faculty, modern laboratories, practical learning, industry interaction, and placement support.",
  },
];
const DepartmentCivilEngeneering: React.FC = () => {
  const [open, setOpen] = useState<number | null>(0);
  const [showFaq, setShowFaq] = useState(false);
  const displayedFaqs = showFaq ? faqs : faqs.slice(0, 2);
  return (
    <div>
      <div className={`${Classes.container}`}>
        <CustomOverviewSection data={DepartmentCivilEngeneeringOverviewData} />
      </div>
      <div className={`${Classes.container} py-7 md:py-10 lg:py-14`}>
        <CustomTab isMode="department-civil-engeneering" customTabData={DepartmentCivilEngeneeringTabData} />
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

export default DepartmentCivilEngeneering;
