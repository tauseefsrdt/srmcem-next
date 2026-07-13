import React from "react";
import CustomOverviewSection from "../../utils/custom/CustomOverviewSection";
import { AdmissionDashboardData } from "../../data/customOverViewData";

import Classes from "../../utils/styles/Global.module.css";

import { BsFillTelephoneFill } from "react-icons/bs";

import CustomTopFooter from "../../utils/custom/CustomTopFooter";
import { CustomTopFooterData1 } from "../../data/customTopFooterData";
import { IoIosCall, IoMdContact } from "react-icons/io";

import { ImFilePdf } from "react-icons/im";


const btech = "/pdf/admission-dashboard/Check List B.Tech.pdf";
const mtech = "/pdf/admission-dashboard/Check List M.Tech.pdf";
const mba = "/pdf/admission-dashboard/Check List MBA.pdf";
const mca = "/pdf/admission-dashboard/Check List MCA.pdf";
const instructionFeesPay = "/pdf/admission-dashboard/Instruction for Fee Payment.pdf";
const feeStructure = "/pdf/admission-dashboard/Fee Structure - First year 2025-26.pdf";
const reportingInstruction = "/pdf/admission-dashboard/Instructions to UPTAC counselling allotted students.pdf";


const afidavitGap = "/pdf/admission-dashboard/Affidavit format for GAP.pdf";
const afidavitAntiraging = "/pdf/admission-dashboard/affidavit-Antiragging.pdf";
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

interface conteTypes {
    id: number,
    para: string,
    buttonLink: string
}
interface pdfDataTypes {
    id: number,
    heading?: string,
    content: conteTypes[]
}
const pdfData = [
    {

        id: 0,
        heading: "Instructions",
        content: [
            {
                id: 0,
                para: "Reporting Instructions including date for reporting at college",
                buttonLink: reportingInstruction,
            },
            {
                id: 1,
                para: "Instructions to Pay College Course Fee",
                buttonLink: instructionFeesPay,
            },
            {
                id: 2,
                para: "Course Fee structure for First Year",
                buttonLink: feeStructure,
            },
        ]

    },
    {

        id: 1,
        heading: "Checklist Documents",
        content: [
            {
                id: 0,
                para: "B.Tech",
                buttonLink: btech,
            },
            {
                id: 0,
                para: "M.Tech",
                buttonLink: mtech,
            },
            {
                id: 1,
                para: "MBA",
                buttonLink: mba,
            },
            {
                id: 2,
                para: "MCA",
                buttonLink: mca,
            },
        ]

    },
    {

        id: 2,
        heading: "Affidavit ",
        content: [
            {
                id: 0,
                para: "Affidavit for Anti Ragging ",
                buttonLink: afidavitAntiraging,
            },
            {
                id: 1,
                para: "Affidavit for GAP",
                buttonLink: afidavitGap,
            },


        ]

    },



]

interface PropsType {
    data: pdfDataTypes[];
    isHover?: boolean;
}

const PdfCard: React.FC<PropsType> = ({ data, isHover = true }) => {
    return (
        <div className={` ${Classes["container"]} psm:pt-10 lg:pt-14 `}>
            {data && data.map((item: any) => {
                return (
                    <div key={item.id} className={`border-2 mt-3 border-gray-200 ${isHover ? "hover:border-[#ffb703]" : ""}  rounded-md overflow-hidden`}>
                        {item.heading && <h3 className="h-[60px] pl-10 text-base font-semibold  flex items-center bg-[#233E6F] text-white ">{item.heading}</h3>}
                        {item.content.map((ele: any) => (
                            <div key={ele.id} className="flex justify-between items-center px-3 md:px-10 h-[60px] border-t border-s-neutral-300 hover:bg-neutral-100 ">
                                <div className="text-sm">{ele.para}</div>
                                <a
                                    target="_blank"
                                    href={ele.pdfView || ele.buttonLink}
                                    className="text-red-600 inline-block p-1 rounded-sm border border-transparent hover:border-[#ffb703] hover:text-[#ffb703] mr-6 md:mr-9"
                                >
                                    <ImFilePdf size={24} />
                                </a>
                            </div>
                        ))}
                    </div>
                );
            })}
        </div>
    )
}
const AdmissionDashboard: React.FC = () => {
    return (
        <div>
            {/* Placement Overview Section */}
            <div className={`${Classes["container"]} `}>
                <CustomOverviewSection data={AdmissionDashboardData} />
            </div>
            {/* Council Representatives Section */}
            {/* <PdfCard data={CouncilRepresentativesData} /> */}
            <PdfCard data={pdfData} />
            {/* NCC Image Section */}
            <div className={`${Classes["container"]} !mt-0 mb-3 sm:mb-6 px-3 md:px-10`}>
                <div className={`border-2 mt-3 border-gray-200 hover:border-[#ffb703] rounded-md overflow-hidden`}>
                    <div className="flex justify-between items-center px-3 md:px-10 h-[60px] bg-[#233E6F] text-white ">
                        <h3 className="py-2 text-base font-semibold text-white ">Contact For Query </h3>
                    </div>
                    <div className="flex justify-between items-center px-3 md:px-10 h-[60px] border-t border-s-neutral-300 hover:bg-neutral-100 text-sm">
                        <div className="flex items-center gap-x-2">
                            <span className="inline-block"><IoIosCall size={24} /></span>  Mob : 8303019866
                        </div>
                    </div>
                    <div className="flex justify-between items-center px-3 md:px-10 h-[60px] border-t border-s-neutral-300 hover:bg-neutral-100 text-sm">

                        <div className="flex items-center gap-x-2">
                            <span className="inline-block"><IoIosCall size={24} /></span>  Reception : 9839010407/9839210067
                        </div>
                    </div>
                </div>

            </div>




            <CustomTopFooter data={CustomTopFooterData1} />
        </div>
    );
};



export default AdmissionDashboard
