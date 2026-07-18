import React, { useState } from "react";
import CustomOverviewSection from "../../../utils/custom/CustomOverviewSection";
import { DepartmentManagementOverviewData } from "../../../data/customOverViewData";
import Classes from "../../../utils/styles/Global.module.css";
import CustomTab from "../../../utils/custom/CustomTab";
import { DepartmentManagementData } from "../../../data/departments";
import CustomWhySRMCEM from "../../../utils/custom/CustomWhySRMCEM";
import { whySRMCEMCards, whySRMCEMHeading } from "../../../data/whySrmcem";
import Recruiters from "../../trainingAndPlacement/Recruiters";
import CustomTopFooter from "../../../utils/custom/CustomTopFooter";
import { CustomTopFooterData3 } from "../../../data/customTopFooterData";
import PdfDownloadCard from "../../../utils/custom/PdfDownloadCard";
import { feeStructureData } from "../../../data/FeeStructureData";
const faqs = [
  {
    q: "Which is the best AKTU College in Lucknow for MBA and BBA?",
    a: "SRMCEM offers career-focused Management programs with experienced faculty, industry interaction, internships, and placement assistance.",
  },
  {
    q: "Does the MBA program follow the AKTU syllabus?",
    a: "Yes. The MBA curriculum follows AKTU guidelines while integrating case studies, business simulations, and practical learning.",
  },
  {
    q: "What specializations are available in MBA?",
    a: "Students can explore areas such as Marketing, Finance, Human Resources, Operations, Business Analytics, and Entrepreneurship.",
  },
  {
    q: "What are the career opportunities after MBA?",
    a: "Graduates can work as Business Analysts, Marketing Managers, HR Managers, Financial Analysts, Operations Managers, and Entrepreneurs.",
  },
  {
    q: "Is BBA a good course after Class 12?",
    a: "Yes. BBA provides a strong foundation in business management and prepares students for corporate careers or higher education like MBA.",
  },
  {
    q: "Does SRMCEM provide internships for Management students?",
    a: "Yes. Students participate in internships, industrial visits, guest lectures, live projects, and corporate interactions.",
  },
  {
    q: "Can MBA students get campus placements?",
    a: "Yes. Eligible students receive placement opportunities across banking, finance, FMCG, consulting, retail, and IT sectors.",
  },
  {
    q: "What skills are developed in the Management department?",
    a: "Leadership, communication, decision-making, analytical thinking, teamwork, business strategy, and entrepreneurship.",
  },
  {
    q: "Is MBA from an AKTU-affiliated college valuable?",
    a: "Yes. An MBA from an AKTU-affiliated institution provides recognized academic credentials along with industry-oriented learning.",
  },
  {
    q: "Why choose SRMCEM for Management studies?",
    a: "SRMCEM offers an AKTU-approved curriculum, experienced faculty, industry exposure, personality development, and placement support to prepare students for successful management careers.",
  },
];
const ManagementDepartment: React.FC = () => {
  const [open, setOpen] = useState<number | null>(0);
  const [showFaq, setShowFaq] = useState(false);
  const displayedFaqs = showFaq ? faqs : faqs.slice(0, 2);
  return (
    <div>
      <div className={`${Classes.container}`}>
        <CustomOverviewSection data={DepartmentManagementOverviewData} />
      </div>
      <div className={`${Classes.container} py-7 md:py-10 lg:py-14`}>
        <CustomTab isMode="department-computer-application" customTabData={DepartmentManagementData} />
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

export default ManagementDepartment;
