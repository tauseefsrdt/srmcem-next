import Recruiters from "@/components/trainingAndPlacement/Recruiters";
import { DepartmentMechanicalEngineeringOverviewData } from "../../../data/customOverViewData";
import { CustomTopFooterData3 } from "../../../data/customTopFooterData";
import { DepartmentMechanicalEngineeringTabData } from "../../../data/departments";
import { feeStructureData } from "../../../data/FeeStructureData";
import { whySRMCEMCards, whySRMCEMHeading } from "../../../data/whySrmcem";
import CustomOverviewSection from "../../../utils/custom/CustomOverviewSection";
import CustomTab from "../../../utils/custom/CustomTab";
import CustomTopFooter from "../../../utils/custom/CustomTopFooter";
import CustomWhySRMCEM from "../../../utils/custom/CustomWhySRMCEM";
import PdfDownloadCard from "../../../utils/custom/PdfDownloadCard";
import Classes from "../../../utils/styles/Global.module.css";
import { useState } from "react";

const faqs = [
  {
    q: "Which is the best AKTU College in Lucknow for Mechanical Engineering?",
    a: "SRMCEM provides a comprehensive Mechanical Engineering program affiliated with AKTU, emphasizing practical learning and industry readiness.",
  },
  {
    q: "Does Mechanical Engineering follow the AKTU syllabus?",
    a: "Yes. The department follows the latest AKTU curriculum with laboratory sessions, workshops, and industrial training.",
  },
  {
    q: "What career opportunities are available after Mechanical Engineering?",
    a: "Graduates can work in automobile, aerospace, manufacturing, energy, robotics, thermal engineering, and production industries.",
  },
  {
    q: "Is Mechanical Engineering still a good career?",
    a: "Yes. Mechanical Engineers remain in demand due to growth in manufacturing, automation, electric vehicles, and industrial development.",
  },
  {
    q: "What practical facilities are available in the department?",
    a: "Students use CAD/CAM labs, workshops, thermal engineering labs, fluid mechanics labs, and manufacturing laboratories.",
  },
  {
    q: "Can Mechanical Engineering students get placements?",
    a: "Yes. Students receive placement support for careers in manufacturing companies, automotive industries, and engineering firms.",
  },
  {
    q: "Does SRMCEM offer industrial visits?",
    a: "Yes. Students participate in industrial visits, internships, and practical training programs to gain industry exposure.",
  },
  {
    q: "Can Mechanical Engineers prepare for government jobs?",
    a: "Yes. Graduates can prepare for PSU recruitment, UPSC Engineering Services, Railways, SSC JE, and State Engineering Services.",
  },
  {
    q: "What skills are important for Mechanical Engineering students?",
    a: "CAD, problem-solving, manufacturing knowledge, automation, teamwork, and communication skills are highly valuable.",
  },
  {
    q: "Why choose SRMCEM for Mechanical Engineering?",
    a: "The department provides AKTU-based education with experienced faculty, practical learning, modern labs, and placement assistance.",
  },
];
const DepartmentMechanicalEngineering = () => {
  const [open, setOpen] = useState<number | null>(0);
  const [showFaq, setShowFaq] = useState(false);
  const displayedFaqs = showFaq ? faqs : faqs.slice(0, 2);
  return (
    <div>
      <div className={`${Classes.container}`}>
        <CustomOverviewSection data={DepartmentMechanicalEngineeringOverviewData} />
      </div>
      <div className={`${Classes.container} py-7 md:py-10 lg:py-14`}>
        <CustomTab isMode="department-civil-engeneering" customTabData={DepartmentMechanicalEngineeringTabData} />
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

export default DepartmentMechanicalEngineering;
