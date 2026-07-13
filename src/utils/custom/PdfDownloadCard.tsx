import React from "react";
import Classes from "../../utils/styles/Global.module.css";
import { pdfDownloadType } from "../../types/administration-data-type";
import { ImFilePdf } from "react-icons/im";
import { CiSquareMore } from "react-icons/ci";

interface propsType {
  data: pdfDownloadType[];
  style?: boolean;
  viewPopup?: boolean;
  isHover?: boolean;
  handleView?: (ele: any) => void; // Add as a prop for dynamic handling
}
const PdfDownloadCard: React.FC<propsType> = ({ data, style, viewPopup, handleView, isHover = true }) => {
  return (
    <div className={`${style ? "mt-6" : Classes["container"]} ${style ? "" : "pb-6 sm:py-10 lg:py-14"}`}>
      {data.map((item: any) => {
        return (
          <div key={item.id} className={`border-2 border-gray-200 ${isHover ? "hover:border-[#ffb703]" : ""}  rounded-md`}>
            <div className="flex justify-between bg-[#233E6F] rounded-t-md py-6 text-white px-3 md:px-10">
              <div className="font-medium md:text-lg">{item.title}</div>
              <div className="font-medium md:text-lg">{item.downloadText}</div>
            </div>
            {item.childData.map((ele: any) => (
              <div key={ele.id} className="flex justify-between items-center px-3 md:px-10 h-[60px] border-t border-s-neutral-300 hover:bg-neutral-100 ">
                <div className="text-sm">{ele.heading}</div>
                {viewPopup ? (
                  <>
                    <CiSquareMore size={32} className="inline-block py-1 rounded-sm hover:text-[#ffb703] mr-6 md:mr-9 cursor-pointer" onClick={() => handleView?.(ele)} />
                  </>
                ) : (
                  <>
                    <a
                      target="_blank"
                      href={ele.pdfView || ele.buttonLink}
                      className="text-red-600 inline-block p-1 rounded-sm border border-transparent hover:border-[#ffb703] hover:text-[#ffb703] mr-6 md:mr-9"
                    >
                      <ImFilePdf size={24} />
                    </a>
                  </>
                )}
              </div>
            ))}
          </div>
        );
      })}
    </div>
  );
};

export default PdfDownloadCard;
