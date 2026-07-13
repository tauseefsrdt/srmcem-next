import React, { useEffect, useState } from "react";
import CustomOverviewSection from "../../utils/custom/CustomOverviewSection";
import { EntrepreneurshipDate } from "../../data/customOverViewData";
import Accordian from "../../utils/custom/Accordian";
import Classes from "../../utils/styles/Global.module.css";
import { EntrepreneurshipItems } from "../../data/accordianItemsData";
import { innovationsAndActivitiesData } from "../../data/entrepreneurshipData";
const pdf1 = "/pdf/enterprenurship/Composition of  IIC.pdf";
import CustomTopFooter from "../../utils/custom/CustomTopFooter";
import { CustomClubsTopFooterData } from "../../data/customTopFooterData";
import { ImFilePdf } from "react-icons/im";

import { FaTimes } from "react-icons/fa";

const Entrepreneurship: React.FC = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState<any>(null);

  const openModal = (item: any) => {
    setSelectedItem(item);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setSelectedItem(null);
  };

  useEffect(() => {
    if (modalOpen) {
      document.body.style.height = "100vh";
      document.body.style.overflow = "hidden"
    }
    else {
      document.body.style.height = "auto";
      document.body.style.overflow = "auto"
    }
  }, [modalOpen])

  return (
    <div>
      <div className={`${Classes.container}`}>
        <CustomOverviewSection data={EntrepreneurshipDate} />
      </div>

      <div className={`${Classes.container} pt-b md:pb-10 lg:pb-14`}>
        <Accordian isMode="entrepreneurship" items={EntrepreneurshipItems} />
      </div>

      <div className={`${Classes.container}`}>
        <div className="mt-4 sm:mt-2 lg:-mt-12 md:-mt-8 flex items-center justify-between pl-[1.1rem] pr-0 border-b-2 mb-[3.75rem] border-[#ffb703] pb-[15px]">
          <h1 className="text-16px font-semibold flex">Team Composition</h1>
          <div className="mr-14">
            <a
              target="_blank"
              href={pdf1 || '#'} 
              className="text-red-600 inline-block p-1 rounded-sm border border-transparent hover:border-[#ffb703] hover:text-[#ffb703] mr-6 md:mr-9"
            >
              <ImFilePdf size={24} />
            </a>
          </div>
        </div>
      </div>

      {/* Innovations & Activities Section */}
      <div className={`${Classes.container} pb-7 md:pb-10 lg:pb-14`}>
        <h1 className="text-center text-3xl lg:text-4xl text-[#172F64] font-bold">
          {innovationsAndActivitiesData.title}
        </h1>

        <div className="mt-5 innovations-activities grid gap-4">
          {innovationsAndActivitiesData.data.map((item) => {
            const words = item.content.split(" ");
            const isLong = words.length > 60;
            const shortContent = isLong ? words.slice(0, 60).join(" ") + "..." : item.content;

            return (
              <div
                className="w-full border border-gray-200 hover:border-[#ffb703] rounded-md p-4 transition cursor-pointer"
                key={item.id}
              >
                <img
                  className="w-full object-cover aspect-[3/2] rounded-xl"
                  src={item.imgSrc}
                  alt=""
                />
                {item.heading && <h3 className="mt-3 text-lg font-semibold">{item.heading}</h3>}
                <p className={`${item.heading ? "mt-0" : "mt-3"}`} dangerouslySetInnerHTML={{ __html: shortContent }}></p>

                {isLong && (
                  <div className="flex mt-4">
                    <button
                      className=" bg-[#1B3A6F] text-white px-3 py-1 rounded-full"
                      onClick={() => openModal(item)}
                    >
                      Read More
                    </button>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>

      <CustomTopFooter data={CustomClubsTopFooterData} />

      {/* MODAL INSIDE SAME FILE */}
      {modalOpen && selectedItem && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/50 p-4 z-[9999]">
          <div className="relative bg-white px-8 py-8 rounded-md shadow-lg max-w-2xl w-full">

            {/* Close Button */}
            <button
              className="absolute top-2 right-2"
              onClick={closeModal}
            >
              <FaTimes size={20} />
            </button>

            {/* Image */}
            <div className="w-full max-h-[500px] lg:max-h-[600px] overflow-y-auto">
              <img
                src={selectedItem.imgSrc}
                alt="modal-img"
                className="w-full aspect-[4/2] rounded-lg mb-4 object-cover"
              />

              {/* Full content */}
              <div dangerouslySetInnerHTML={{ __html: selectedItem.content }} ></div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Entrepreneurship;
