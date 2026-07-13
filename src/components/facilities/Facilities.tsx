import React, { useState } from "react";
import CustomTopFooter from "../../utils/custom/CustomTopFooter";
import { CustomTopFooterData3 } from "../../data/customTopFooterData";
import CustomOverviewSection from "../../utils/custom/CustomOverviewSection";
import { facilitiesData } from "../../data/customOverViewData";
import CustomFacilities from "../../utils/custom/CustomFacilities";
import { facilitiesCardData, facilitiesCardLayoutData } from "../../data/FacilitiesData";
import CustomCounselingSection from "../../utils/custom/CustomCounselingSection";
import { counselingData, FacilitiesContentData, outreachImages1, WoodImages } from "../../data/CustomFacilitiesData";
import CustomImageGrid from "../../utils/custom/CustomImageGrid";
const square = "/images/square-icon.png";
import Fancybox from "../abhivyakti/Fancybox";
import Classes from "../../utils/styles/Global.module.css";

import { useRouter } from "next/router";
import Slider from "react-slick";

const Facilities: React.FC = () => {
  const [more, setMore] = useState(true);
  const location = useRouter();
  const length = WoodImages.length;
  var settings = {
    infinite: true,
    autoplay: true,
    speed: 2500,
    autoplaySpeed: 5000,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  console.log("length", length);
  return (
    <>
        <div>
          <div className={`${Classes["container"]}`}>
            <CustomOverviewSection data={facilitiesData} />
          </div>
          <CustomFacilities layoutData={facilitiesCardLayoutData} facilities={facilitiesCardData} />
          <CustomCounselingSection data={counselingData} />
          <div className={`${Classes["container"]} py-7 md:py-10 lg:py-14`}>
            <h2 className="text-3xl lg:text-4xl text-center leading-8 pr-4 p-5 sm:pb-12 font-bold">Sports & Games</h2>
            <p className="text-gray-700 mb-4 leading-relaxed">{FacilitiesContentData?.content}</p>
            {FacilitiesContentData.listItems && (
              <ul className="list-[square] ml-4">
                {FacilitiesContentData.listItems.map((item, itemIndex) => (
                  <li key={itemIndex} className="yellow mt-3">
                    {item.list}
                  </li>
                ))}
              </ul>
            )}
          </div>
          <CustomImageGrid outreachImages={outreachImages1} />
          <div className={`${Classes["container"]} pb-7 md:pb-10 lg:pb-14`}>
            <h2 className="text-3xl lg:text-4xl text-center  leading-8 pr-4 p-5 sm:py-12 font-bold">Wooded Campus</h2>
            <div className="hidden md:block">
              <Fancybox
                options={{
                  Carousel: {
                    infinite: false,
                  },
                }}
              >
                <div className="abhivyakti_grid">
                  {WoodImages.slice(0, more ? 6 : length).map((item) => (
                    <a data-fancybox="gallery" href={item.imgSrc || '#'}  key={item.id} className="border border-[#ffb703]rounded-md p-4 relative group">
                      <img className="w-full h-full object-cover rounded-md" src={item.imgSrc} alt="Gallery" />
                      <span
                        className={`absolute top-0 left-0 w-full h-full transition-all duration-500 bg-[#ffb703] bg-opacity-0 group-hover:bg-opacity-50 
      transform origin-left scale-x-0  flex items-center justify-center
    `}
                      >
                        <img src={square} alt="" />
                      </span>
                    </a>
                  ))}
                </div>
              </Fancybox>
            </div>
            <div className="md:hidden wood-slider">
              <Slider {...settings}>
                {WoodImages.map((item) => (
                  <img className="w-full h-full object-cover rounded-md" src={item.imgSrc} alt="Gallery" />
                ))}
              </Slider>
            </div>
            <div className=" justify-center mt-5 hidden md:flex">
              <button
                onClick={() => setMore((ele) => !ele)}
                className="w-[132px] h-[46px] border-2 uppercase flex justify-center items-center font-semibold border-[#ffb703] bg-[#ffb703] hover:bg-transparent hover:text-[#ffb703] rounded-[5px] cursor-pointer"
              >
                {more ? "View More" : "View Less"}
              </button>
            </div>
          </div>
          <CustomTopFooter data={CustomTopFooterData3} />
        </div>
    </>
  );
};

export default Facilities;
