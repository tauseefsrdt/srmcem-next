import React, { useState } from "react";
import CustomOverviewSection from "../../../utils/custom/CustomOverviewSection";
import { DepartmentITOverviewData } from "../../../data/customOverViewData";
import Classes from "../../../utils/styles/Global.module.css";
import CustomTab from "../../../utils/custom/CustomTab";
import { DepartmentITabData } from "../../../data/departments";
import CustomWhySRMCEM from "../../../utils/custom/CustomWhySRMCEM";
import Recruiters from "../../trainingAndPlacement/Recruiters";
import CustomTopFooter from "../../../utils/custom/CustomTopFooter";
import { whySRMCEMCards, whySRMCEMHeading } from "../../../data/whySrmcem";
import { CustomTopFooterData3 } from "../../../data/customTopFooterData";
import PdfDownloadCard from "../../../utils/custom/PdfDownloadCard";
import { feeStructureData } from "../../../data/FeeStructureData";
const faqs = [
  {
    q: "Which is the best AKTU College in Lucknow for Information Technology?",
    a: "SRMCEM offers a B.Tech in Information Technology with an AKTU-approved curriculum, experienced faculty, modern computer labs, and strong placement support.",
  },
  {
    q: "Does the Information Technology department follow the latest AKTU syllabus?",
    a: "Yes. The IT department follows the latest AKTU curriculum and supplements it with practical training, coding sessions, and industry-oriented projects.",
  },
  {
    q: "What is the difference between Computer Science and Information Technology?",
    a: "Computer Science focuses on software development and algorithms, while Information Technology emphasizes networking, databases, cloud computing, cybersecurity, and IT infrastructure.",
  },
  {
    q: "What career opportunities are available after B.Tech IT?",
    a: "Students can become Software Developers, Cloud Engineers, System Administrators, DevOps Engineers, Network Engineers, IT Consultants, and Database Administrators.",
  },
  {
    q: "Is Information Technology a good career option in 2026?",
    a: "Yes. The demand for IT professionals continues to grow due to digital transformation, cloud computing, artificial intelligence, and cybersecurity.",
  },
  {
    q: "Does SRMCEM provide coding and technical training for IT students?",
    a: "Yes. Students participate in coding competitions, workshops, technical seminars, internships, and live projects.",
  },
  {
    q: "Can IT students get campus placements?",
    a: "Yes. IT students receive placement opportunities in software companies, IT service firms, startups, and multinational organizations.",
  },
  {
    q: "Is admission available through UPTAC counselling?",
    a: "Yes. Eligible students can take admission through UPTAC counselling as per AKTU admission guidelines.",
  },
  {
    q: "What skills should Information Technology students develop?",
    a: "Programming, cloud computing, networking, databases, communication skills, and problem-solving are essential for a successful IT career.",
  },
  {
    q: "Why choose SRMCEM for Information Technology?",
    a: "SRMCEM combines the AKTU curriculum with industry exposure, experienced faculty, practical learning, and placement assistance to prepare students for successful IT careers.",
  },
];
const DepartmentInformationTechnology: React.FC = () => {
  const [open, setOpen] = useState<number | null>(0);
  const [showFaq, setShowFaq] = useState(false);
  const displayedFaqs = showFaq ? faqs : faqs.slice(0, 2);
  return (
    <div>
      <div className={`${Classes.container}`}>
        <CustomOverviewSection data={DepartmentITOverviewData} />
      </div>
      <div className={`${Classes.container} py-7 md:py-10 lg:py-14`}>
        <CustomTab isMode="department-civil-engeneering" customTabData={DepartmentITabData} />
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

export default DepartmentInformationTechnology;
