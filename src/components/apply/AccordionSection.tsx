import React, { useState } from "react";
import {
  MdOutlineKeyboardArrowDown,
  MdOutlineKeyboardArrowUp,
} from "react-icons/md";
const admission_elibility = "/pdf/admission/Admission__Eligibility.pdf";

const antiRaggingPolicyParent = "/pdf/admission/AffidavitAntiraggingParents.pdf";
const antiRaggingPolicyChild = "/pdf/admission/AffidavitAntiraggingStudent.pdf";
const antiRaggingCommitee = "/pdf/Anti-Ragging Committee 2025-26.pdf";
const antiRaggingAffidavit = "/pdf/Aicte Notification - Anti-Ragging.pdf";
import { ImFilePdf } from "react-icons/im";

const AccordionSection: React.FC = () => {
  const [openSection, setOpenSection] = useState(null);

  // Function to toggle accordion sections
  const toggleSection = (title: any) => {
    setOpenSection(openSection === title ? null : title);
  };

  // Accordion data
  const sections = [
    { title: "Admission Eligibility", file: admission_elibility },
    // { title: "Admission Procedure", file: admission_procedure },
    { title: "Anti Ragging Policy", file: antiRaggingAffidavit },
    { title: "Anti Ragging Committee", file: antiRaggingCommitee },
    {
      title: "Anti Ragging Affidavit",
      subSections: [
        { title: "For Parents", file: antiRaggingPolicyParent },
        { title: "For Students", file: antiRaggingPolicyChild },
      ],
    },
  ];

  return (
    <div className="mt-8">
      {sections.map((section, index) => (
        <div key={index} className={`border-b border-gray-200 hover:border-[#FFE380]`}>
          {/* Accordion Header */}
          <button
            onClick={() => {
              if (sections.length - 1 === index) {
                toggleSection(section.title)
              }
            }}
            className="w-full text-left flex justify-between items-center py-4 px-2 text-lg font-medium text-gray-700"
          >
            {section.title}
            {section.subSections ? (
              <span>
                {openSection === section.title ? (
                  <MdOutlineKeyboardArrowUp className="text-[#ffb703] w-10 h-10" />
                ) : (
                  <MdOutlineKeyboardArrowDown className="text-[#ffb703] w-10 h-10" />
                )}
              </span>
            ) : (
              <div className="mr-10">
                <a
                  href={`${section.file}`}
                  target="_blank"
                  className="text-red-600 inline-block p-1 rounded-sm border border-transparent hover:border-[#ffb703] hover:text-[#ffb703] mr-6 md:mr-9"
                >
                  <ImFilePdf size={24} />
                </a>
              </div>
            )}
          </button>

          {/* Accordion Content */}
          {openSection === section.title && (
            <div className="pl-4 pb-4">
              {section.subSections ? (
                // Render sub-sections for titles with subSections
                section.subSections.map((subSection, subIndex) => (
                  <div
                    className="w-full flex justify-between mb-4 px-4"
                    key={subIndex}
                  >
                    <div> {subSection.title}</div>{" "}
                    <div className="mr-8">
                      <a
                        target="_blank"
                        href={subSection.file || '#'} 
                        className="text-red-600 inline-block p-1 rounded-sm border border-transparent hover:border-[#ffb703] hover:text-[#ffb703] mr-6 md:mr-9"
                      >
                        <ImFilePdf size={24} />
                      </a>
                    </div>
                  </div>
                ))
              ) : (
                // Render direct PDF link for regular titles
                <a
                  href={`${section.file}`}
                  className="text-blue-600 hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View PDF
                </a>
              )}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default AccordionSection;
