import React, { useEffect, useRef, useState } from "react";
import Slider from "react-slick";
const bgImg = "/images/trainingPlacement/drives/bg-drives.png"; // Replace with your image path
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Classes from "../../utils/styles/Global.module.css";
import { Drivedata, yearsData } from "../../data/driveData";
import { DriveHeadingData } from "../../data/placementData";
import { IoIosArrowBack } from "react-icons/io";

const PlacementDrives: React.FC = () => {
  const [selectedYear, setSelectedYear] = useState("2021-22"); // State for selected year
  const sliderRef = useRef<any>(null);
  const cardSliderRef = useRef<any>(null); // Ref for card slider

  // Filter drives based on selected year
  const filteredDrives = Drivedata.find((d) => d.year === selectedYear)?.drives || [];

  // Slider settings

  const calculateSliderSettings = () => {
    const numberOfCards = filteredDrives.length;
    return {
      dots: numberOfCards > 3, // Show dots only if there are more than 3 cards
      slidesToShow: 3,
      slidesToScroll: 1, // Scroll the same number of slides as shown
      infinite: false,
      speed: 500,
      arrows: false,
      responsive: [
        {
          breakpoint: 1200,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
            infinite: true,
            dots: true,
          },
        },
        {
          breakpoint: 1000,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2,
          },
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],
    };
  };

  const yearSliderSettings = {
    infinite: true,
    dots: true,
    slidesToShow: 2,
    slidesToScroll: 1,
    focusOnSelect: true,
    arrows: true,
    // @ts-ignore
    beforeChange: (current: number, next: number) => {
      const nextYear = yearsData[next].year;
      setSelectedYear(nextYear); // Set the selected year based on the next slide
    },
  };

  // Reset the card slider when the year changes
  useEffect(() => {
    if (cardSliderRef.current) {
      cardSliderRef.current.slickGoTo(0); // Reset card slider to the first slide
    }
  }, [selectedYear]); // Trigger when selectedYear changes

  return (
    <div className="relative bg-cover bg-center py-7  md:py-10 lg:py-14" style={{ backgroundImage: `url(${bgImg})` }}>
      <div className="absolute inset-0 bg-black bg-opacity-60"></div>
      <div className="relative py-5 sm:py-10 px-3 sm:px-7 text-white">
        <div className="border-white border-2 px-7 py-7  md:py-10 lg:py-14">
          <div className={`${Classes["container"]}`}>
            <div className="w-full sm:max-w-7xl mx-auto px-4 md:flex md:justify-between items-center gap-x-[60px]  ">
              <div className="mb-10">
                <h2 className="text-4xl text-white font-bold">{DriveHeadingData.heading}</h2>
                <p className="text-white mt-2">{DriveHeadingData.content}</p>
              </div>

              {/* Year Selector Slider */}
              <div className="w-full  max-w-[350px] mx-auto broucher-part relative ">
                <PrevArrow onClick={() => sliderRef.current?.slickPrev()} />
                <NextArrow onClick={() => sliderRef.current?.slickNext()} />
                <Slider {...yearSliderSettings} className="w-full flex placement-drive-slider" ref={sliderRef}>
                  {yearsData.map((yearData) => (
                    <button
                      key={yearData.id}
                      className={`px-2 md:px-6 py-2 border     text-lg font-semibold   ${selectedYear === yearData.year ? "bg-[#ffb703] text-white border-[#ffb703]" : "bg-white text-black border-white"
                        }`}
                      onClick={() => setSelectedYear(yearData.year)}
                    >
                      {yearData.year}
                    </button>
                  ))}
                </Slider>
              </div>
            </div>

            {/* Card Slider */}
            <div className="mt-10">
              <Slider {...calculateSliderSettings()} ref={cardSliderRef} className="placement-drive-slider1">
                {filteredDrives.map((drive, index) => (
                  <div key={index} className="min-h-[400px] sm:min-h-[300px]">
                    <div className="md:p-6 rounded-lg text-center text-white mx-5 ">
                      <div className="px-4 py-2 bg-white rounded-md">
                        <img src={drive.logo} alt={drive.company} className="h-16 mx-auto " />
                      </div>

                      <div className="mt-10 text-justify">
                        <p className="mt-2 text-center">Date of Visit: {drive.visitDate}</p>
                        <div className="h-[200px] overflow-auto pr-2 faculty-card-scrollbar">
                          <p className="text-sm  mt-4">{drive.description}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </Slider>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const NextArrow = ({ onClick }: { onClick: () => void }) => (
  <button
    className="border-2  hover:bg-transparent w-8 sm:w-12 h-8 sm:h-12  border-[#fff]  text-[#fff] hover:border-[#ffb703] hover:text-[#ffb703] flex items-center justify-center rounded-full shadow-md   absolute top-[0px] -right-[55px] "
    onClick={onClick}
  >
    <IoIosArrowBack className="w-9 h-9 transform rotate-180" />
  </button>
);

const PrevArrow = ({ onClick }: { onClick: () => void }) => (
  <button
    className="border-2  hover:bg-transparent   border-[#fff]  text-[#fff] hover:border-[#ffb703] hover:text-[#ffb703] w-8 sm:w-12 h-8 sm:h-12 flex items-center justify-center rounded-full shadow-md   absolute top-[0px] -left-[55px]"
    onClick={onClick}
  >
    <IoIosArrowBack className="w-9 h-9 " />
  </button>
);
export default PlacementDrives;
