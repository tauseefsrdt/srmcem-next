import { useState } from "react";
import { DepartmentComputerScienceOverviewData } from "../../../data/customOverViewData";
import { CustomTopFooterData3 } from "../../../data/customTopFooterData";
import { DepartmentOfComputerScienceTabData } from "../../../data/departments";
import { feeStructureData } from "../../../data/FeeStructureData";
import { whySRMCEMCards, whySRMCEMHeading } from "../../../data/whySrmcem";
// import CustomOverviewSection from "../../../utils/custom/CustomOverviewSection";
import CustomOverviewSectionForCSE from "../../../utils/custom/CustomOverviewSectionForCSE";
import CustomTab from "../../../utils/custom/CustomTab";
import CustomTopFooter from "../../../utils/custom/CustomTopFooter";
import CustomWhySRMCEM from "../../../utils/custom/CustomWhySRMCEM";
import PdfDownloadCard from "../../../utils/custom/PdfDownloadCard";
import Classes from "../../../utils/styles/Global.module.css";
import Recruiters from "../../trainingAndPlacement/Recruiters";

const faqs = [
    {
        q: "What is the Department of Computer Science?",
        a: "The Department of Computer Science focuses on teaching programming, software development, artificial intelligence, cybersecurity, cloud computing, and data science. It prepares students with theoretical knowledge and practical skills for careers in the IT industry, research, and higher education.",
    },
    {
        q: "What subjects are taught in the Computer Science department?",
        a: "The Computer Science curriculum typically includes Programming, Data Structures, Algorithms, Database Management Systems (DBMS), Operating Systems, Computer Networks, Software Engineering, Artificial Intelligence, Machine Learning, Cloud Computing, Cyber Security, and Web Development.",
    },
    {
        q: "What is included in the AKTU Computer Science syllabus?",
        a: "The AKTU Computer Science syllabus covers engineering fundamentals in the first year and advanced subjects such as Data Structures, DBMS, Operating Systems, Computer Networks, Software Engineering, Artificial Intelligence, Machine Learning, and Cloud Computing in later semesters.",
    },
    {
        q: "What are the Computer Science subjects in the first year?",
        a: "First-year Computer Science students generally study Engineering Mathematics, Physics, Chemistry, Programming for Problem Solving, Basic Electrical Engineering, Engineering Graphics, Communication Skills, and introductory computer programming.",
    },
    {
        q: "What subjects are covered in the second and third year of Computer Science?",
        a: "From the second year onwards, students study Data Structures, Object-Oriented Programming, Database Management Systems, Operating Systems, Computer Networks, Software Engineering, Artificial Intelligence, Machine Learning, Cloud Computing, and industry-oriented elective subjects.",
    },
    {
        q: "Is CSE a branch or a department?",
        a: "Computer Science and Engineering (CSE) is an engineering branch, while the Department of Computer Science is the academic department responsible for delivering the curriculum, managing laboratories, conducting research, and supporting student learning.",
    },
    {
        q: "What career opportunities are available after Computer Science Engineering?",
        a: "Graduates can pursue careers as Software Developers, AI Engineers, Data Scientists, Cyber Security Analysts, Cloud Engineers, Full Stack Developers, DevOps Engineers, System Engineers, Database Administrators, and Software Test Engineers.",
    },
    {
        q: "Which jobs offer the highest salary after Computer Science?",
        a: "Some of the highest-paying careers include AI Engineer, Machine Learning Engineer, Cloud Architect, Cyber Security Engineer, Data Scientist, Software Development Engineer (SDE), Blockchain Developer, and DevOps Engineer. Salary depends on skills, experience, and the employer.",
    },
    {
        q: "Why should I choose Computer Science Engineering?",
        a: "Computer Science Engineering offers excellent placement opportunities, high-demand technical skills, global career prospects, opportunities in emerging technologies, entrepreneurship options, and strong growth in the IT and software industries.",
    },
    {
        q: "Why study Computer Science at SRMCEM?",
        a: "SRMCEM's Department of Computer Science offers an AKTU-aligned curriculum, experienced faculty, modern laboratories, coding competitions, industry training, internships, live projects, and placement support to help students build successful careers in technology.",
    },
];

const DepartmentComputerScience = () => {
    const [open, setOpen] = useState<number | null>(0);
    const [showFaq, setShowFaq] = useState(false);

    // Get the FAQs to display based on showFaq state
    const displayedFaqs = showFaq ? faqs : faqs.slice(0, 2);

    return (
        <div>
            <div className={`${Classes.container}`}>
                <CustomOverviewSectionForCSE data={DepartmentComputerScienceOverviewData} />
            </div>
            <div className={`${Classes.container} py-7 md:py-10 lg:py-14`}>
                <CustomTab isMode="department-electronics-engineering" customTabData={DepartmentOfComputerScienceTabData} />
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

export default DepartmentComputerScience;