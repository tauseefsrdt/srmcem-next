import React, { useState } from "react";
import Classes from "../../../utils/styles/Global.module.css";
import { FaAngleRight, FaLongArrowAltRight } from "react-icons/fa";
import { MdArrowRightAlt } from "react-icons/md";
const admission_procedure = "/pdf/admission/AdmissionProcedure.pdf";
const img1 = "/images/online-admission/img.jpg";
import Link from "next/link";

const accordianData = [
  {
    id: 0,
    title: "Action at Accounts Office:",
    content: (
      <>
        <div className="flex items-center mt-2 gap-x-2 text-[#219ebc]">
          <FaLongArrowAltRight />
          <strong>Step 1:</strong>
        </div>
        <ul className="list-disc till ml-5 mt-2">
          <li> Deposit Counselling letter and purchase college prospectus.</li>
        </ul>

        <div className="flex items-center mt-2 gap-x-2 text-[#219ebc]">
          <FaLongArrowAltRight />
          <strong>Step 2:</strong>
        </div>
        <ul className="list-disc till ml-5 mt-2">
          <li className="mt-2">Deposit the complete Fee as applicable. Fee will include Tuition Fee, University Fee.</li>
          <li className="mt-2">Exam Fee college registration and caution money and then report to registrar office.</li>
        </ul>

        <div className="flex items-center mt-2 gap-x-2 text-[#219ebc]">
          <FaLongArrowAltRight />
          <strong>Step 3:</strong>
        </div>
        <ul className="list-disc till ml-5 mt-2">
          <li> Deposit Counselling letter and purchase college prospectus.</li>
        </ul>

        <div className="flex items-center mt-2 gap-x-2 text-[#219ebc]">
          <FaLongArrowAltRight />
          <strong>Step 4:</strong>
        </div>
        <ul className="list-disc till ml-5 mt-2">
          <li> If bus facility is required, deposit bus charges and report to Administrative Officer for bus pass.</li>
        </ul>
      </>
    ),
    imgSrc: img1,
  },
  {
    id: 1,
    title: "Action at Registrar Office:",
    content: (
      <>
        <div className="flex items-center mt-2 gap-x-2 text-[#219ebc]">
          <FaLongArrowAltRight />
          <strong>Step 5:</strong>
        </div>
        <ul className="list-disc till ml-5">
          <li className="mt-2">Submit the duty filled admission form. (refer SRMCEM/PO/F07)</li>
          <li className="mt-2">All documents as per checklist of the Registrar Office (refer SRMCEM/PO/F08 (1) to (6) )</li>
          <li className="mt-2">Photocopy of counselling letter.</li>
        </ul>
      </>
    ),
    imgSrc: img1,
  },
  {
    id: 2,
    title: "Action at Admin Office:",
    content: (
      <>
        <div className="flex items-center mt-2 gap-x-2 text-[#219ebc]">
          <FaLongArrowAltRight />
          <strong>Step 6:</strong>
        </div>
        <ul className="list-disc till ml-5 mt-2">
          <li className="mt-2">Obtain bus passes after showing bus pass receipt</li>
        </ul>
      </>
    ),
    imgSrc: img1,
  },
  {
    id: 3,
    title: "Action of Hostel Warden Office:",
    content: (
      <>
        <div className="flex items-center mt-2 gap-x-2 text-[#219ebc]">
          <FaLongArrowAltRight />
          <strong>Step 7:</strong>
        </div>
        <ul className="list-disc till ml-5 mt-2">
          <li className="mt-2">
            Fill up the Application Form of Hostel (refer SRMCEM/PO/F/37) submit with the photocopy of Hostel Fee receipt and obtain hostel I Card and get accommodation.{" "}
          </li>
        </ul>
      </>
    ),
    imgSrc: img1,
  },
  {
    id: 4,
    title: "Action at Library:",
    content: (
      <>
        <div className="flex items-center mt-2 gap-x-2 text-[#219ebc]">
          <FaLongArrowAltRight />
          <strong>Step 8:</strong>
        </div>
        <ul className="list-disc till ml-5 mt-2">
          <li className="mt-2">Obtain Library Cards after completing the formalities.</li>
        </ul>
      </>
    ),
    imgSrc: img1,
  },
];

const Apply: React.FC = () => {
  const [active, setActive] = useState<number | null>(null);
  return (
    <div className={`${Classes.container} pb-7 md:pb-10 lg:pb-14`}>
      <div className="flex gap-x-10">
        {/* Left Part - Accordion */}
        <div className="left-part max-w-[500px] sm:min-w-[500px]">
          <h2 className="text-3xl lg:text-4xl  font-semibold">Admission Procedure</h2>
          <p className="mt-4 sm:mt-8 ">
            All students who have opted to take admission after having cleared SEE UPTU exams / direct admission (Management Quota) are required to complete the following
            activities, strictly in chronological order.
          </p>

          <Link
            target="_blank"
            href={admission_procedure || '#'} 
            className="bg-[#ffb703] border-2 border-[#ffb703] hover:bg-transparent hover:text-[#ffb703] inline-flex gapx-x-1 items-center  font-semibold px-3 py-1 rounded-md text-nowrap mt-5 group "
          >
            View PDF{" "}
            <span className="mt-1 transition-all duration-200  group-hover:rotate-[360deg]">
              <MdArrowRightAlt size={26} />
            </span>{" "}
          </Link>
          <div className="mt-4 sm:mt-8">
            {accordianData.map((item) => (
              <div key={item.id} className={`sm:w-[125%] relative px-6 py-4 ${item.id === active ? "bg-[#eefcff] border border-[#219ebc] rounded-lg" : ""}`}>
                <div
                  onClick={() => setActive((ele) => (ele !== item.id ? item.id : null))}
                  className={`cursor-pointer font-medium text-xl flex items-center gap-x-2 ${item.id === active ? "text-[#219ebc]" : ""}`}
                >
                  <span className={`transform ${item.id === active ? "rotate-90" : ""}`}>
                    <FaAngleRight color="#219ebc" />
                  </span>
                  {item.title}
                </div>
                <div className={`mt-2 overflow-hidden transition-[max-height] duration-500 ease-in-out ${item.id === active ? "max-h-[500px]" : "max-h-0"}`}>{item.content}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Part - Image */}
        <div className="right-part">
          <img className="w-full h-auto rounded-lg max-w-[720px] max-h-[500px]" src={accordianData[0].imgSrc} alt="Accordion Visual" />
        </div>
      </div>
    </div>
  );
};

export default Apply;
