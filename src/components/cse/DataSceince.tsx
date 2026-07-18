import React, { useState } from "react";
import CustomOverviewSection from "../../utils/custom/CustomOverviewSection";
import Recruiters from "../trainingAndPlacement/Recruiters";
import CustomTab from "../../utils/custom/CustomTab";
import Classes from "../../utils/styles/Global.module.css";
import CustomWhySRMCEM from "../../utils/custom/CustomWhySRMCEM";
import { whySRMCEMCards, whySRMCEMHeading } from "../../data/whySrmcem";
import CustomTopFooter from "../../utils/custom/CustomTopFooter";
import { CustomTopFooterData3 } from "../../data/customTopFooterData";
import { CseDataScienceOverviewData } from "../../data/customOverViewData";
import { DepartmentDataScienceTabData } from "../../data/departments";
import PdfDownloadCard from "../../utils/custom/PdfDownloadCard";
import { feeStructureData } from "../../data/FeeStructureData";
const faqs = [
  {
    q: "Which is the best AKTU College in Lucknow for B.Tech Data Science?",
    a: "SRMCEM is among the leading AKTU-affiliated colleges in Lucknow offering B.Tech in Computer Science & Engineering (Data Science) with an industry-oriented curriculum, experienced faculty, modern laboratories, and project-based learning.",
  },
  {
    q: "What is the scope of Data Science after B.Tech from an AKTU college?",
    a: "Data Science graduates can pursue careers as Data Scientists, Data Analysts, Machine Learning Engineers, Business Intelligence Analysts, AI Engineers, and Data Engineers across IT, healthcare, banking, finance, and e-commerce industries.",
  },
  {
    q: "Does SRMCEM follow the latest AKTU syllabus for Data Science?",
    a: "Yes. The B.Tech CSE (Data Science) program at SRMCEM follows the latest AKTU curriculum while incorporating practical projects, coding exercises, industry exposure, and emerging technologies.",
  },
  {
    q: "What programming languages are taught in Data Science?",
    a: "Students learn Python, SQL, R, Java, C++, statistics, data visualization, machine learning, big data analytics, and database management as part of the curriculum.",
  },
  {
    q: "Is Data Science better than Computer Science Engineering?",
    a: "Data Science is a specialization of Computer Science Engineering that focuses on data analytics, artificial intelligence, and machine learning while maintaining a strong computer science foundation.",
  },
  {
    q: "What are the placement opportunities after B.Tech Data Science?",
    a: "Graduates can work in software companies, fintech organizations, consulting firms, healthcare analytics, AI startups, and multinational companies in various analytics and AI roles.",
  },
  {
    q: "Can I get admission to Data Science through UPTAC counselling?",
    a: "Yes. Admission to B.Tech CSE (Data Science) at SRMCEM is available through UPTAC counselling as per AKTU admission guidelines.",
  },
  {
    q: "Does SRMCEM provide practical learning in Data Science?",
    a: "Yes. Students work on live datasets, coding assignments, mini projects, internships, hackathons, and industry-oriented case studies to gain hands-on experience.",
  },
  {
    q: "What skills should a Data Science student develop?",
    a: "Students should build strong skills in programming, mathematics, statistics, machine learning, problem-solving, communication, and data visualization.",
  },
  {
    q: "Why choose SRMCEM for Data Science in Lucknow?",
    a: "SRMCEM combines the AKTU curriculum with experienced faculty, modern computing laboratories, industry interactions, technical workshops, and placement support to prepare students for data-driven careers.",
  },
];
const DataSceince: React.FC = () => {
  const [open, setOpen] = useState<number | null>(0);
  const [showFaq, setShowFaq] = useState(false);
  const displayedFaqs = showFaq ? faqs : faqs.slice(0, 2);
  return (
    <div>
      <div className={`${Classes.container} `}>
        <CustomOverviewSection data={CseDataScienceOverviewData} />
      </div>
      <div className={`${Classes.container} py-7 md:py-10 lg:py-14`}>
        <CustomTab isMode="department-computer-application" customTabData={DepartmentDataScienceTabData} />
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

export default DataSceince;
