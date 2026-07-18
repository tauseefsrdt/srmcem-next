import React, { useState } from "react";
import CustomOverviewSection from "../../../utils/custom/CustomOverviewSection";
import CustomWhySRMCEM from "../../../utils/custom/CustomWhySRMCEM";
import { whySRMCEMCards, whySRMCEMHeading } from "../../../data/whySrmcem";
import Recruiters from "../../home/Recruiters";
import CustomTopFooter from "../../../utils/custom/CustomTopFooter";
import { CustomTopFooterData3 } from "../../../data/customTopFooterData";
import { DepartmentElectronicsAndCommunicationsEngineeringOverviewData } from "../../../data/customOverViewData";
import CustomTab from "../../../utils/custom/CustomTab";
import { DepartmentElectronicsEngineeringTabData } from "../../../data/departments";
import Classes from "../../../utils/styles/Global.module.css";
import PdfDownloadCard from "../../../utils/custom/PdfDownloadCard";
import { feeStructureData } from "../../../data/FeeStructureData";
const faqs = [
  {
    q: "Which is the best AKTU College in Lucknow for Electronics and Communication Engineering?",
    a: "SRMCEM offers an AKTU-approved ECE program with modern laboratories, experienced faculty, and industry-focused learning.",
  },
  {
    q: "What is the scope of Electronics and Communication Engineering?",
    a: "ECE graduates can build careers in telecommunications, semiconductor industries, embedded systems, IoT, VLSI, robotics, and consumer electronics.",
  },
  {
    q: "Does the ECE department follow the AKTU curriculum?",
    a: "Yes. The department follows the latest AKTU syllabus with practical laboratory sessions and project-based education.",
  },
  {
    q: "What software and technologies do ECE students learn?",
    a: "Students learn Embedded Systems, VLSI, Digital Electronics, Microprocessors, MATLAB, IoT, Communication Systems, and Signal Processing.",
  },
  {
    q: "Can ECE students work in software companies?",
    a: "Yes. Many ECE graduates build careers in software development, cloud computing, data analytics, and IT services alongside core electronics roles.",
  },
  {
    q: "Does SRMCEM provide practical laboratory training?",
    a: "Yes. Students perform experiments in communication, embedded systems, digital electronics, and microprocessor laboratories.",
  },
  {
    q: "Are internships available for ECE students?",
    a: "Yes. Students are encouraged to undertake internships, industrial visits, and technical workshops.",
  },
  {
    q: "Can ECE graduates prepare for GATE?",
    a: "Yes. The curriculum provides a strong academic foundation for GATE, higher education, and research.",
  },
  {
    q: "Is Electronics and Communication Engineering a good career option?",
    a: "Yes. It offers opportunities in both hardware and software industries with growing demand for skilled professionals.",
  },
  {
    q: "Why choose SRMCEM for ECE?",
    a: "SRMCEM combines quality academics, practical exposure, industry interaction, and placement assistance under the AKTU framework.",
  },
];
const DepartmentElectronicsAndComm: React.FC = () => {
  const [open, setOpen] = useState<number | null>(0);
  const [showFaq, setShowFaq] = useState(false);
  const displayedFaqs = showFaq ? faqs : faqs.slice(0, 2);
  return (
    <div>
      <div className={`${Classes.container} `}>
        <CustomOverviewSection data={DepartmentElectronicsAndCommunicationsEngineeringOverviewData} />
      </div>
      <div className={`${Classes.container} py-7 md:py-10 lg:py-14`}>
        <CustomTab isMode="department-civil-engeneering" customTabData={DepartmentElectronicsEngineeringTabData} />
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

export default DepartmentElectronicsAndComm;
