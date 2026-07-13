import React, { useRef } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import Slider from "react-slick";
import { TPGoalsSliderData, TrainingAndPlacementGoalsData } from "../../data/placementData";
import Classes from "../../utils/styles/Global.module.css";
const GoalsSlider: React.FC = () => {
  const sliderRef = useRef<any>(null);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    arrows: false,
    responsive: [
      {
        breakpoint: 592,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
    ],
  };

  return (
    <div className={`${Classes["container"]}`}>
      <div className="max-w-7xl pb-[60px] sm:py-[60px] md:py-[100px] lg:py-[150px] flex flex-col md:flex-row gap-10 items-center">
        {/* Left Section */}
        <div className="w-full md:w-1/3">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">{TrainingAndPlacementGoalsData.heading}</h2>
          <p className="text-gray-700 text-justify">{TrainingAndPlacementGoalsData.content1}</p>
          <p className="text-gray-700 mt-6 text-justify">{TrainingAndPlacementGoalsData.content2}</p>
          {/* Arrows for Slider */}
          <div className="flex space-x-4 mt-6">
            <PrevArrow onClick={() => sliderRef.current?.slickPrev()} />
            <NextArrow onClick={() => sliderRef.current?.slickNext()} />
          </div>
        </div>

        {/* Right Section: Slider */}
        <div className="w-full md:w-2/3 ">
          <Slider ref={sliderRef} {...settings} className="placement-drive-slider1 our-goals">
            {TPGoalsSliderData.map((goal, index) => (
              <div className="" key={index}>
                <div key={index} className="p-6 bg-white group border-2 border-gray-200 min-h-[390px] hover:border-[#ffb703] rounded-lg  mx-4 px-10">
                  <h3 className="text-4xl font-bold text-black group-hover:text-[#ffb703] text-start">{goal.title}</h3>
                  <h4 className="text-xl font-semibold mt-4">{goal.heading}</h4>
                  <p className="mt-2 text-gray-700 text-justify">{goal.description}</p>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

const NextArrow = ({ onClick }: { onClick: () => void }) => (
  <button className="border-2 border-[#ffb703] w-10 h-10 flex items-center justify-center rounded-full shadow-md hover:bg-[#ffb703] group" onClick={onClick}>
    <FaChevronRight className="text-[#ffb703] group-hover:text-white" />
  </button>
);

const PrevArrow = ({ onClick }: { onClick: () => void }) => (
  <button className="border-2 border-[#ffb703] text-[#ffb703] w-10 h-10 flex items-center justify-center rounded-full shadow-md hover:bg-[#ffb703] group" onClick={onClick}>
    <FaChevronLeft className="text-[#ffb703] group-hover:text-white" />
  </button>
);

export default GoalsSlider;
