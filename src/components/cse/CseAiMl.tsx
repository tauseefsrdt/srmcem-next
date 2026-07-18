import React, { useState } from "react";
import CustomOverviewSection from "../../utils/custom/CustomOverviewSection";
import Recruiters from "../trainingAndPlacement/Recruiters";
import CustomTab from "../../utils/custom/CustomTab";
import Classes from "../../utils/styles/Global.module.css";
import CustomWhySRMCEM from "../../utils/custom/CustomWhySRMCEM";
import { whySRMCEMCards, whySRMCEMHeading } from "../../data/whySrmcem";
import CustomTopFooter from "../../utils/custom/CustomTopFooter";
import { CustomTopFooterData3 } from "../../data/customTopFooterData";
import { CseCseAiMlOverviewData } from "../../data/customOverViewData";
import { DepartmentCseAiMLTabData } from "../../data/departments";
import PdfDownloadCard from "../../utils/custom/PdfDownloadCard";
import { feeStructureData } from "../../data/FeeStructureData";
const faqs = [
  {
    q: "Which is the best AKTU College in Lucknow for CSE AI & ML?",
    a: "SRMCEM offers an industry-oriented CSE (Artificial Intelligence & Machine Learning) program with the AKTU curriculum, experienced faculty, coding culture, and placement assistance.",
  },
  {
    q: "What is the scope of AI and Machine Learning after B.Tech?",
    a: "Graduates can become AI Engineers, Machine Learning Engineers, Data Scientists, NLP Engineers, Computer Vision Engineers, and AI Researchers.",
  },
  {
    q: "Does SRMCEM follow the AKTU AI & ML syllabus?",
    a: "Yes. The department follows the latest AKTU curriculum while providing hands-on learning through projects, coding, and emerging technologies.",
  },
  {
    q: "Is AI and Machine Learning better than Computer Science?",
    a: "AI & ML is a specialization within Computer Science that offers excellent career opportunities in automation, intelligent systems, robotics, healthcare, finance, and technology companies.",
  },
  {
    q: "What programming languages are taught in AI & ML?",
    a: "Students learn Python, Java, C++, SQL, R, and AI frameworks such as TensorFlow and Scikit-learn.",
  },
  {
    q: "What are the placement opportunities after B.Tech AI & ML?",
    a: "Students can secure roles in software development, AI engineering, machine learning, data science, business analytics, cloud computing, and intelligent automation.",
  },
  {
    q: "Can students pursue higher studies after AI & ML?",
    a: "Yes. Graduates can pursue M.Tech, MBA, MS, or specialized certifications in Artificial Intelligence, Data Science, Robotics, and Deep Learning.",
  },
  {
    q: "Is AI & ML in demand in India?",
    a: "Yes. AI and Machine Learning professionals are among the fastest-growing technology careers with increasing demand across IT, healthcare, banking, manufacturing, and e-commerce.",
  },
  {
    q: "Does SRMCEM provide coding and industry exposure for AI & ML students?",
    a: "Yes. Students participate in coding competitions, technical workshops, hackathons, industry interactions, internships, and live projects.",
  },
  {
    q: "Why choose AI & ML at an AKTU-affiliated college in Lucknow?",
    a: "Choosing SRMCEM allows students to study an AKTU-approved curriculum while gaining practical exposure, industry-oriented skills, and placement opportunities in emerging technologies.",
  },
];
const CseAiMl: React.FC = () => {
  const [open, setOpen] = useState<number | null>(0);
  const [showFaq, setShowFaq] = useState(false);
  const displayedFaqs = showFaq ? faqs : faqs.slice(0, 2);
  return (
    <div>
      <div className={`${Classes.container} `}>
        <CustomOverviewSection data={CseCseAiMlOverviewData} />
      </div>
      <div className={`${Classes.container} pb-7 md:pb-10 lg:pb-14`}>
        <CustomTab isMode="department-computer-application" customTabData={DepartmentCseAiMLTabData} />
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

export default CseAiMl;
