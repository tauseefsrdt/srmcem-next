import React from "react";
import CustomOverviewSection from "../../utils/custom/CustomOverviewSection";
import { StudentCouncileData } from "../../data/customOverViewData";
const ncc = "/images/ncc.png";
const litile_ncc = "/images/title.jpg";
import Classes from "../../utils/styles/Global.module.css";
import { CouncilRepresentativesData, missionData, NationalCadetData } from "../../data/councilRepersentiveData";
import { BsFillTelephoneFill } from "react-icons/bs";
import PdfDownloadCard from "../../utils/custom/PdfDownloadCard";
import CustomTopFooter from "../../utils/custom/CustomTopFooter";
import { CustomTopFooterData1 } from "../../data/customTopFooterData";
import { IoMdContact } from "react-icons/io";
import { TutorialData } from "../../data/tutorialData";

export const studentWelfareData = {
  heading: "Student Welfare",
  content:
    "Student Welfare Cell of SRMCEM is meant to provide assistance to students in various ways which include solving marksheet related issues, providing character certificates, bonafide certificates, transfer certificates, migration certificates, various event related certificates, college merit holder's certificates, senate certificates, assistance in admission related issues, and bus related issues.",
  contact_person: {
    icons: <IoMdContact size={30} />,
    title: "Contact Person",
    name1: "Mrs.Anita Rawat",
    name2: "Mr.Vidya Sagar",
  },
  contact_details: {
    icons: <BsFillTelephoneFill />,
    title: "Contact Details",
    mobile1: "7570003074(All hours)",
    mobile2: "9839210067 ,9839010407",
    ext: "Ext. No.: 200",
  },
};
const CampusLife: React.FC = () => {
  return (
    <div>
      {/* Placement Overview Section */}
      <div className={`${Classes["container"]}`}>
        <CustomOverviewSection data={StudentCouncileData} />
      </div>
      {/* Council Representatives Section */}
      <PdfDownloadCard data={CouncilRepresentativesData} />
      {/* NCC Image Section */}
      <div className="w-full">
        <img className="w-full min-h-[300px] object-cover" src={ncc} alt="National Cadet Corps" />
      </div>
      {/* NCC Details Section */}
      <div className={`${Classes["container"]} pb-7 md:pb-10 lg:pb-14  pt-10 md:pt-18 lg:pt-24`}>
        <div className="flex flex-col lg:flex-row items-start gap-x-10">
          <div>
            <h3 className="text-3xl lg:text-4xl font-bold text-blue-900">{NationalCadetData.heading}</h3>
            {NationalCadetData.content.map((ele) => (
              <p className="mt-3 text-justify leading-relaxed">{ele.para}</p>
            ))}
          </div>
          <img className="lg:mt-12 w-full max-h-[350px] object-cover rounded-md relative top-2" src={litile_ncc} alt="Small NCC Representation" />
        </div>
      </div>
      <div className={`${Classes["container"]} py-7 md:py-10 lg:py-14`}>
        <div className="manage_purpose">
          {missionData.map((item) => (
            <div key={item.id}>
              <div className="text-[#ffb703] text-3xl lg:text-4xl font-medium ">{item.count}</div>
              <div className="text-xl font-medium text-black mt-3">{item.subHeading}</div>
              <div className="mt-2">{item.content}</div>
            </div>
          ))}
        </div>
      </div>
      <div className={`${Classes["container"]} py-7 md:py-10 lg:py-14`}>
        <h3 className="text-3xl lg:text-4xl font-bold text-blue-900 text-center">{studentWelfareData.heading}</h3>
        <p className="mt-3 text-center leading-relaxed">{studentWelfareData.content}</p>
        <div className="flex flex-col sm:flex-row gap-y-5  gap-x-10 mt-10">
          <div className="std_box w-full rounded-md flex flex-col justify-center items-center text-white ">
            <span className="bg-[#ffb703] border-2 hover:bg-transparent  border-[#ffb703] hover:text-[#ffb703] hover:rotate-[360deg] w-14 h-14 rounded-full flex justify-center items-center text-white transition-all duration-200">
              {studentWelfareData.contact_person.icons}
            </span>
            <div className="font-medium mt-1.5">{studentWelfareData.contact_person.title}</div>
            <div className="text-sm mt-1">{studentWelfareData.contact_person.name1}</div>
            <div className="text-sm">{studentWelfareData.contact_person.name2}</div>
          </div>
          <div className="std_box w-full rounded-md flex flex-col justify-center items-center text-white">
            <span className="bg-[#ffb703] border-2 hover:bg-transparent  border-[#ffb703] hover:text-[#ffb703] hover:rotate-[360deg] w-14 h-14 rounded-full flex justify-center items-center text-white transition-all duration-200">
              {studentWelfareData.contact_details.icons}
            </span>
            <div className="font-medium mt-1.5">{studentWelfareData.contact_details.title}</div>
            <div className="text-sm mt-1">{studentWelfareData.contact_details.mobile1}</div>
            <div className="text-sm">{studentWelfareData.contact_details.mobile2}</div>
            <div className="text-sm">{studentWelfareData.contact_details.ext}</div>
          </div>
        </div>
      </div>
      <PdfDownloadCard data={TutorialData} />
      <CustomTopFooter data={CustomTopFooterData1} />
    </div>
  );
};

export default CampusLife;
