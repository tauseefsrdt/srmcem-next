import React, { useState } from "react";
import CustomOverviewSection from "../../../utils/custom/CustomOverviewSection";
import { DepartmentPharmacyOverviewData } from "../../../data/customOverViewData";
import Classes from "../../../utils/styles/Global.module.css";
import CustomTab from "../../../utils/custom/CustomTab";
import { DepartmentPharmacyTabData } from "../../../data/departments";
import CustomWhySRMCEM from "../../../utils/custom/CustomWhySRMCEM";
import { whySRMCEMCards, whySRMCEMHeading } from "../../../data/whySrmcem";
import Recruiters from "../../trainingAndPlacement/Recruiters";
import CustomTopFooter from "../../../utils/custom/CustomTopFooter";
import { CustomTopFooterData3 } from "../../../data/customTopFooterData";
import PdfDownloadCard from "../../../utils/custom/PdfDownloadCard";
import { feeStructureData } from "../../../data/FeeStructureData";
const faqs = [
  {
    q: "Which is the best Pharmacy college affiliated with AKTU in Lucknow?",
    a: "SRMCEM offers Pharmacy programs with experienced faculty, modern laboratories, industry exposure, and a curriculum aligned with university and regulatory requirements.",
  },
  {
    q: "Is Pharmacy a good career option after Class 12?",
    a: "Yes. Pharmacy graduates can work in hospitals, pharmaceutical companies, research organizations, healthcare industries, and government sectors.",
  },
  {
    q: "What are the career opportunities after B.Pharm?",
    a: "Graduates can become Pharmacists, Drug Inspectors, Medical Representatives, Clinical Researchers, Quality Analysts, and Regulatory Affairs Executives.",
  },
  {
    q: "Does SRMCEM provide practical laboratory training?",
    a: "Yes. Students receive practical training in pharmaceutics, pharmacology, pharmaceutical chemistry, and pharmaceutical analysis laboratories.",
  },
  {
    q: "Can Pharmacy students pursue higher education?",
    a: "Yes. Students can pursue M.Pharm, Pharm.D, MBA in Healthcare, clinical research, and other specialized programs.",
  },
  {
    q: "Is Pharmacy approved by PCI?",
    a: "The Pharmacy program is offered in accordance with the applicable regulatory approvals and academic guidelines.",
  },
  {
    q: "Are internships available for Pharmacy students?",
    a: "Yes. Students gain practical experience through hospital training, industrial visits, and internships.",
  },
  {
    q: "What skills are required for Pharmacy students?",
    a: "Attention to detail, scientific knowledge, communication skills, ethics, and analytical thinking are important.",
  },
  {
    q: "Can Pharmacy graduates get government jobs?",
    a: "Yes. Graduates can appear for government recruitment in healthcare departments, drug control organizations, and public sector companies.",
  },
  {
    q: "Why choose SRMCEM for Pharmacy?",
    a: "Students benefit from quality education, experienced faculty, laboratory facilities, industry exposure, and career guidance.",
  },
];
const DepartmentPharmacy: React.FC = () => {
  const [open, setOpen] = useState<number | null>(0);
  const [showFaq, setShowFaq] = useState(false);
  const displayedFaqs = showFaq ? faqs : faqs.slice(0, 2);
  return (
    <div>
      <div className={`${Classes.container}`}>
        <CustomOverviewSection data={DepartmentPharmacyOverviewData} />
      </div>
      <div className={`${Classes.container} py-7 md:py-10 lg:py-14`}>
        <CustomTab isMode="department-electronics-engineering" customTabData={DepartmentPharmacyTabData} />
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

export default DepartmentPharmacy;
