import React from "react";
import { CustomCounselingSectionTypes } from "../../types/customDataTypes";
import { FaArrowRightLong } from "react-icons/fa6";
import Classes from "../../utils/styles/Global.module.css";
import Slider from "react-slick";

interface CounselingSectionProps {
  data: CustomCounselingSectionTypes;
}

const CustomCounselingSection: React.FC<CounselingSectionProps> = ({ data }) => {
  const sliderRef = React.useRef<Slider>(null);

  // Slick slider settings
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <div className="relative bg-cover bg-center py-8 md:py-16 sm:px-4 CustomTimingsSection">
      <div className={`${Classes["container"]} py-7 md:py-10 lg:py-14`}>
        <div className="w-full flex flex-col lg:flex-row items-center gap-8">
          {/* Left Section */}
          <div className="w-full text-white lg:w-2/3">
            <h2 className="text-4xl font-bold mb-6 text-white">{data.title}</h2>
            <p className="text-lg text-justify leading-relaxed mb-8">{data.description}</p>
            <a href={data.linkUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-[#FFFF] transition-colors font-medium">
              {data.linkText} {data?.linkText && <FaArrowRightLong />}
            </a>
          </div>

          {/* Right Section - Image Slider */}
          {data?.imageUrl && data?.imageUrl.length > 0 && (
            <div className="w-full lg:w-1/3 flex justify-center">
              <Slider {...settings} ref={sliderRef} className="w-full max-w-sm slider-btn-none slider-btn-active">
                {data.imageUrl.map((image, index) => (
                  <div key={index} className="p-2 border border-gray-200 hover:border-[#FFB703] rounded-lg">
                    <img src={image.src} alt={image.alt || `Slide ${index + 1}`} className="rounded-lg shadow-lg w-full aspect-[183/158] " />
                  </div>
                ))}
              </Slider>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CustomCounselingSection;
