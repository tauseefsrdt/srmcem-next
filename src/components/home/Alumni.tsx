import React from "react";
import Slider from "react-slick";

import Classes from "../../utils/styles/Global.module.css";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { alumniData } from "../../data/homeData";

// Custom arrow components
interface ArrowProps {
  onClick?: React.MouseEventHandler<HTMLDivElement>;
}

const NextArrow: React.FC<ArrowProps> = ({ onClick }) => (
  <div
    className="absolute top-[80px] p-1 sm:top-[calc(50%-24px)] lg:text-[25px] 2xl:text-[30px] xl:p-2  -right-2 xl:-right-8 2xl:-right-10 transform sm:-translate-y-1/2 hover:border-[#ffb703] hover:text-[#ffb703] hover:bg-white  text-white b border-2 border-white  rounded-full 2xl:p-3 cursor-pointer z-10"
    onClick={onClick}
  >
    <FaChevronRight />
  </div>
);

const PrevArrow: React.FC<ArrowProps> = ({ onClick }) => (
  <div
    className="absolute top-[80px] p-1 sm:top-[calc(50%-24px)] lg:text-[25px] 2xl:text-[30px] xl:p-2  transform sm:-translate-y-1/2 -left-2 xl:-left-8 2xl:-left-10   hover:border-[#ffb703] hover:text-[#ffb703] hover:bg-white  text-white b border-2 border-white rounded-full 2xl:p-3 cursor-pointer z-10"
    onClick={onClick}
  >
    <FaChevronLeft />
  </div>
);

// Slider component
const AlumniSlider: React.FC = () => {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    adaptiveHeight: true,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className={`${Classes.container} py-10 md:py-18 lg:py-24`}>
      <div className=" testimonial-part relative w-full rounded-[10px]">
        <div className="max-w-6xl mx-auto px-4 py-14 lg:py-20">
          <h2 className="text-center text-3xl lg:text-4xl font-bold  text-white mb-6">Testimonials</h2>
          <div className="py-6 testimonial">
            <Slider {...settings}>
              {alumniData.map((alumnus, index) => (
                <div key={index} className="px-2">
                  <div className="md:flex items-center gap-x-6 justify-between py-4">
                    <div className="min-w-[300px] md:border-r-4 border-[#ffb703] py-5  self-stretch flex items-center">
                      <div className="min-w-[180px] w-[300px] flex flex-col items-center mx-auto">
                        <img
                          src={alumnus.image}
                          alt={alumnus.name}
                          className="w-full max-w-[200px] h-[200px] md:max-w-[170px] md:h-[170px] rounded-lg object-top object-cover"
                        />
                        <p className="text-center text-white font-semibold mt-2">{alumnus.name}</p>
                        <p className="text-center text-white text-sm">{alumnus.degree}</p>
                        <p className="text-center text-white">{alumnus.company}</p>
                      </div>
                    </div>
                    <div className="md:mx-10 py-5 flex-1 flex items-center">
                      <p className="text-white mt-4 md:mt-0 text-justify sm:pr-3">{alumnus.content}</p>
                    </div>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AlumniSlider;
