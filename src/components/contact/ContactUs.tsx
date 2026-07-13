import React from "react";
import Classes from "../../utils/styles/Global.module.css";
import { FaBlenderPhone, FaEnvelope, FaFax, FaHeadphones, FaPhone, FaWhatsapp } from "react-icons/fa6";
import { LuMailOpen } from "react-icons/lu";
import CustomOverviewSection from "../../utils/custom/CustomOverviewSection";
import { addressData, contactCardData, contactOverviewData } from "../../data/ContactUsData";

const ContactUs: React.FC = () => {
    const iconMap: any = {
        headphone: <FaHeadphones />,
        whatsapp: <FaWhatsapp />,
        fax: <FaFax />,
        telephone: <FaBlenderPhone />,
        phone: <FaPhone />,
        mailOpen: <LuMailOpen />,
        envelope: <FaEnvelope />,
    };
    return (
        <div>
            <div className={`${Classes["container"]}`}>
                <CustomOverviewSection data={contactOverviewData} />
            </div>
            <div className="relative w-full mt-16 mb-8">
                {/* Blue Background Section */}
                <div className="bg-[#0f4a85] h-[550px] md:h-[1000px]">
                    <div className={Classes["container"]}>
                        <div className="py-20">
                            <div className="flex overflow-scroll md:overflow-hidden pb-2 md:mb-0 md:grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 ">
                                {contactCardData.map((item) => (
                                    <div key={item.id} className="rounded-lg bg-white px-8 py-10 text-center border-b-[5px] border-b-[#ffb703] hover:shadow-xl w-full max-w-[300px]">
                                        <div className="flex justify-center items-center mb-4">
                                            <div className="bg-[#ffb703] rounded-full w-14 h-14 flex justify-center items-center text-white text-xl">{iconMap[item.icon]}</div>
                                        </div>

                                        <h2 className="text-[20px] font-semibold mb-2">{item.title}</h2>

                                        {Array.isArray(item.value) ? item.value.map((val, i) => <p key={i}>{val}</p>) : <p>{item.value}</p>}
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                {/* Floating Cards OUTSIDE Blue Section */}
                <div className={`${Classes["container"]} mt-[50px] md:mt-[250px] lg:[mt-100px] xl:mt-[-200px] p-4 md:px-6 bg-[#f3f6fc] rounded-xl shadow-xl`}>
                    {/* <div className="bg-[#f1f1f1] py-20"></div> */}
                    <div className="w-full  px-6 py-8 rounded-2xl">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                            {addressData.map((item) => (
                                <div key={item.id}>
                                    <h2 className="text-[#244b8f] font-bold text-xl mb-4">{item.title}</h2>

                                    {item.lines.map((line, index) => (
                                        <p key={index} className="text-gray-900 mb-1">
                                            {line}
                                        </p>
                                    ))}

                                    <div className="mt-5 w-full h-[320px] rounded-xl overflow-hidden">
                                        <iframe src={item.mapUrl} width="100%" height="100%" allowFullScreen loading="lazy" className="border-0"></iframe>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
         
        </div>
    );
};

export default ContactUs;