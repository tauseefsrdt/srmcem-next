import React, { useState } from "react";
import CustomOverviewSection from "../../../utils/custom/CustomOverviewSection";
import Recruiters from "../../trainingAndPlacement/Recruiters";
import CustomTab from "../../../utils/custom/CustomTab";
import Classes from "../../../utils/styles/Global.module.css";
import CustomWhySRMCEM from "../../../utils/custom/CustomWhySRMCEM";
import { whySRMCEMCards, whySRMCEMHeading } from "../../../data/whySrmcem";
import CustomTopFooter from "../../../utils/custom/CustomTopFooter";
import { CustomTopFooterData3 } from "../../../data/customTopFooterData";
import { DepartmenHumanitiesOverviewData } from "../../../data/customOverViewData";
import { departmentHumanitiesTabData } from "../../../data/departments";
import PdfDownloadCard from "../../../utils/custom/PdfDownloadCard";
import { feeStructureData } from "../../../data/FeeStructureData";
const faqs = [
  {
    q: "Why should students choose the Humanities Department at the Best AKTU College in Lucknow?",
    a: "The Department of Applied Science & Humanities at SRMCEM builds a strong foundation in Mathematics, Physics, Chemistry, English, and Communication Skills, helping first-year engineering students excel academically and professionally.",
  },
  {
    q: "Is the Humanities Department part of the AKTU curriculum?",
    a: "Yes. The department teaches first-year courses prescribed by Dr. A.P.J. Abdul Kalam Technical University (AKTU) and helps students build the fundamentals required for engineering education.",
  },
  {
    q: "What subjects are taught in the Applied Science & Humanities Department?",
    a: "Students study Engineering Mathematics, Physics, Chemistry, English Communication, Environmental Studies, and other foundation subjects as per the AKTU syllabus.",
  },
  {
    q: "How does the Humanities Department improve communication skills for engineering students?",
    a: "The department focuses on technical communication, presentation skills, personality development, and professional ethics to prepare students for placements and higher education.",
  },
  {
    q: "Does SRMCEM follow the latest AKTU syllabus for first-year engineering students?",
    a: "Yes. As an AKTU-affiliated engineering college, SRMCEM follows the latest AKTU curriculum along with practical learning and continuous evaluation.",
  },
  {
    q: "Why are Applied Sciences important in engineering education?",
    a: "Applied Sciences provide the theoretical and analytical foundation required to understand core engineering subjects and solve real-world engineering problems.",
  },
  {
    q: "Does the Humanities Department have experienced faculty members?",
    a: "Yes. The department has qualified faculty specializing in Physics, Chemistry, Mathematics, English, and Social Sciences, supporting students through classroom teaching, laboratories, and research activities.",
  },
  {
    q: "Which is the best AKTU College in Lucknow for strong engineering fundamentals?",
    a: "SRMCEM is considered among the leading AKTU-affiliated colleges in Lucknow because of its experienced faculty, modern laboratories, and industry-oriented teaching approach.",
  },
  {
    q: "Are laboratory facilities available for first-year engineering students?",
    a: "Yes. Students receive practical exposure through Physics and Chemistry laboratories equipped according to AKTU academic requirements.",
  },
  {
    q: "How does the Humanities Department support placement preparation?",
    a: "The department enhances communication, aptitude, analytical thinking, and soft skills that play a significant role during campus placements and interviews.",
  },
];
const DepartmentHumanities: React.FC = () => {
  const [open, setOpen] = useState<number | null>(0);
  const [showFaq, setShowFaq] = useState(false);
  const displayedFaqs = showFaq ? faqs : faqs.slice(0, 2);
  return (
    <div>
      <div className={`${Classes.container}`}>
        <CustomOverviewSection data={DepartmenHumanitiesOverviewData} />
      </div>
      <div className={`${Classes.container} py-7 md:py-10 lg:py-14`}>
        <CustomTab isMode="humanities" customTabData={departmentHumanitiesTabData} />
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

export default DepartmentHumanities;
