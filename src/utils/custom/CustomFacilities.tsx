import React from "react";
import { CustomFacilitiesTypes } from "../../types/customDataTypes";
import Classes from "../../utils/styles/Global.module.css";
import { ArrowButton } from "./CustomCarousel";
import Slider from "react-slick";

const CustomFacilities: React.FC<CustomFacilitiesTypes> = ({ facilities, layoutData }) => {
  const sliderRef = React.useRef<Slider>(null);

  // Slick slider settings
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024, // Tablet screens
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768, // Mobile screens
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className={`${Classes.container} py-7 md:py-10 lg:py-14`}>
      <div className="sm:p-6">
        {/* Heading Section */}
        <div className="flex flex-col text-start mb-4 sm:mb-8">
          <div className="flex justify-between items-center">
            <h2 className="text-4xl font-bold">{layoutData?.title}</h2>
            <div className="flex space-x-2">
              <ArrowButton onClick={() => sliderRef.current?.slickPrev()} direction="prev" colorCode={"[#ffb703]"} />
              <ArrowButton onClick={() => sliderRef.current?.slickNext()} direction="next" colorCode={"[#ffb703]"} />
            </div>
          </div>
          <p className="text-[#000000] mt-4 font-medium">{layoutData?.content}</p>
        </div>

        {/* Facilities Slider */}
        <Slider ref={sliderRef} {...settings} className="manage-academis">
          {facilities.map((facility, index) => {
            return (
              <div key={index} className="p-2  my-4">
                <div className="border border-gray-200 transition-all duration-200  hover:border-[#ffb703] rounded-lg p-4 flex flex-col h-full shadow-md hover:shadow-lg">
                  {/* Image */}
                  <img src={facility.imageUrl} alt={facility.title} className="w-full h-[200px] object-cover rounded-md mb-4" />
                  <div className="h-[300px] overflow-y-auto faculty-card-scrollbar">
                    {/* Title */}
                    <h3 className="text-[#5B5B5B] text-xl font-semibold mb-2">{facility.title}</h3>
                    {/* Description */}
                    <p className="text-[#878484] flex-grow text-justify pr-3">
                      {/* {facility.description} */}
                      <div dangerouslySetInnerHTML={{ __html: facility?.description }} />
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </Slider>
      </div>
    </div>
  );
};

export default CustomFacilities;
