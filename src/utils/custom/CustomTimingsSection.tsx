import React from "react";
import { customTimingsSectionTypes } from "../../types/customDataTypes";

interface TimingsProps {
  data: customTimingsSectionTypes;
}

const CustomTimingsSection: React.FC<TimingsProps> = ({ data }) => {
  return (
    <div
      className="relative bg-cover bg-center p-4 md:p-8 CustomTimingsSection"

    >
      <div className="bg-opacity-10 p-6 border border-[#FFFFFF]">
        <div className="container mx-auto">
          <div className="flex flex-col lg:flex-row gap-8 items-center justify-around">
            {/* Timings Section */}
            <div className="w-full max-w-[360px] sm:max-w-[440px] lg:w-auto lg:min-w-[440px] flex flex-col justify-center">
              <h2 className="text-white text-2xl font-semibold flex items-center mt-2 ">
                <span className="material-icons text-white mr-6">
                  <img src={data?.clockImage} alt="" />
                </span>
                Timings
              </h2>
              <ul className="mt-4">
                {data.timings.map((item, index) => (
                  <li
                    key={index}
                    className="flex justify-between text-white text-sm  py-2"
                  >
                    <span>{item.label}</span>
                    <span className="min-w-[142px]">{item.time}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="border w-full lg:w-0 lg:h-[320px] bg-[#FFFFFF]"></div>
            {/* Buttons & QR Codes Section */}
            <div className="">
              {/* Buttons */}
              <div className="flex space-x-4 mb-6 ">
                <a
                  href={data.registrationPdfPath}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between gap-2 px-4 py-2 lg:w-56 text-[#FFFFFF] rounded-lg border text-sm font-semibold border-white hover:border-[#ffb703]  hover:text-[#ffb703]"
                >
                  <span className="text-nowrap">NDLI Self Registration</span>
                  <img src={data?.registrationPdf} alt="Self Registration Icon" className="w-8 h-8 bg-[#FFFFFF] rounded-sm" />
                </a>
                <a
                  href={data.userGuidePdf}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center p-10 justify-between gap-2 px-4 py-2 lg:w-40 text-[#FFFFFF] rounded-lg border text-sm font-semibold border-white hover:border-[#ffb703] hover:text-[#ffb703]"
                >
                  <span>User Guide</span>
                  <img src={data?.userGuidePdf} alt="User Guide Icon" className="w-8 h-8 bg-[#FFFFFF] rounded-sm" />
                </a>
              </div>

              <div className="w-full border my-8 bg-[#FFFFFF]"></div>

              {/* QR Codes */}
              <div className="flex justify-between space-x-4 sm:px-5 ">
                {data.qrCodes.map((item, index) => (
                  <div key={index} className="flex flex-col items-center transform transition duration-200  cursor-pointer">
                    <img
                      width={100}
                      src={item.src}
                      alt={`QR Code ${index + 1}`}
                      className="w-28 h-28 mb-2"
                    />
                    <a
                      href={`mailto:${item.email}`}
                      className="text-white text-sm underline"
                    >
                      {item.email}
                    </a>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomTimingsSection
