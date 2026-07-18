import React, { useState } from 'react'
import CustomOverviewSection from '../../utils/custom/CustomOverviewSection'
import Recruiters from '../trainingAndPlacement/Recruiters'
import CustomTab from '../../utils/custom/CustomTab'
import Classes from "../../utils/styles/Global.module.css";
import CustomWhySRMCEM from '../../utils/custom/CustomWhySRMCEM'
import { whySRMCEMCards, whySRMCEMHeading } from '../../data/whySrmcem'
import CustomTopFooter from '../../utils/custom/CustomTopFooter'
import { CustomTopFooterData3 } from '../../data/customTopFooterData'
import { CseCyberSecurityOverviewData } from '../../data/customOverViewData'
import { DepartmentCyberScurityTabData } from '../../data/departments';
import PdfDownloadCard from '../../utils/custom/PdfDownloadCard';
import { feeStructureData } from '../../data/FeeStructureData';

const faqs = [
  {
    q: "Which is the best AKTU College in Lucknow for Cyber Security?",
    a: "SRMCEM offers B.Tech CSE (Cyber Security) under the AKTU curriculum with specialized training in ethical hacking, network security, digital forensics, cryptography, and cyber defense.",
  },
  {
    q: "What is Cyber Security in B.Tech?",
    a: "Cyber Security is a Computer Science specialization that focuses on protecting computer systems, networks, applications, and digital information from cyber threats and attacks.",
  },
  {
    q: "Does SRMCEM follow the latest AKTU syllabus for Cyber Security?",
    a: "Yes. The Cyber Security program follows the latest AKTU curriculum while integrating practical labs, cybersecurity tools, simulations, and project-based learning.",
  },
  {
    q: "What are the career opportunities after B.Tech Cyber Security?",
    a: "Graduates can work as Cyber Security Analysts, Ethical Hackers, Security Engineers, Digital Forensics Experts, Information Security Consultants, SOC Analysts, and Cloud Security Engineers.",
  },
  {
    q: "Is Cyber Security a good career in India?",
    a: "Yes. The increasing number of cyber threats has created high demand for cybersecurity professionals across IT companies, banks, government organizations, healthcare, and multinational corporations.",
  },
  {
    q: "What subjects are covered in the Cyber Security program?",
    a: "Students study Ethical Hacking, Cryptography, Network Security, Cloud Security, Digital Forensics, Malware Analysis, Risk Management, and Secure Software Development.",
  },
  {
    q: "Does SRMCEM provide practical Cyber Security training?",
    a: "Yes. Students gain hands-on experience through cybersecurity laboratories, penetration testing exercises, workshops, technical events, internships, and real-world security projects.",
  },
  {
    q: "Can Cyber Security students get campus placements?",
    a: "Yes. Students are prepared for placement opportunities in cybersecurity firms, software companies, financial institutions, consulting firms, and government organizations.",
  },
  {
    q: "Is Cyber Security better than CSE?",
    a: "Cyber Security is a specialized branch of Computer Science designed for students interested in information security, ethical hacking, digital investigations, and cyber defense.",
  },
  {
    q: "Why choose SRMCEM for Cyber Security in Lucknow?",
    a: "SRMCEM combines an AKTU-approved curriculum with experienced faculty, practical cybersecurity training, industry interaction, and placement support to prepare students for one of the fastest-growing technology careers.",
  },
];
const CyberSecurity: React.FC = () => {
  const [open, setOpen] = useState<number | null>(0);
  const [showFaq, setShowFaq] = useState(false);
  const displayedFaqs = showFaq ? faqs : faqs.slice(0, 2);
  return (
    <div>
      <div className={`${Classes.container} `}>
        <CustomOverviewSection data={CseCyberSecurityOverviewData} />
      </div>
      <div className={`${Classes.container} py-7 md:py-10 lg:py-14`}>
        <CustomTab isMode="department-electronics-engineering" customTabData={DepartmentCyberScurityTabData} />
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
}

export default CyberSecurity
