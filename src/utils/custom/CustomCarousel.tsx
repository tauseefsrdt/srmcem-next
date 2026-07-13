import React, { useRef, useState } from "react";
import Slider from "react-slick";
import Classes from "../../utils/styles/Global.module.css";
import { IoIosArrowBack } from "react-icons/io";

interface CustomCarouselProps {
  images: { src: string; alt: string }[];
}

const CustomCarousel: React.FC<CustomCarouselProps> = ({ images }) => {
  const sliderRef = useRef<Slider>(null);
  const [activeSlide, setActiveSlide] = useState(0);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    beforeChange: (_current: number, next: number) => setActiveSlide(next),
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 598,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className={`${Classes["container"]} py-7 md:py-10 lg:py-14 relative campus-crousel`}>
      <Slider {...settings} ref={sliderRef}>
        {images.map((image, index) => {
          const isSecondImage = (activeSlide + 1) % images.length === index;
          return (
            <div key={index}>
              <img
                src={image.src}
                alt={image.alt}
                className={`object-cover rounded-lg transition-all durationpmn-500  h-[250px]${isSecondImage ? " w-full lg:h-[350px]" : " w-full "
                  }`}
              />
            </div>
          );
        })}
      </Slider>

      {/* Custom Arrow Buttons */}
      <div className=" flex justify-center items-center space-x-2  mt-5">
        <ArrowButton onClick={() => sliderRef.current?.slickPrev()} direction="prev" colorCode={"[#ffb703]"} />
        <ArrowButton onClick={() => sliderRef.current?.slickNext()} direction="next" colorCode={"[#ffb703]"} />
      </div>
    </div>
  );
};

export default CustomCarousel;

export const ArrowButton = ({
  onClick,
  direction,
  colorCode,
}: {
  onClick: () => void;
  direction: "prev" | "next";
  colorCode: string;
}) => (
  <>{colorCode === "[#ffb703]" ?
    <>
      <button
        onClick={onClick}
        className={`rounded-full border-2 border-${colorCode} w-8 h-8 sm:w-12 sm:h-12 flex items-center justify-center hover:border-[#233E6F]`}
      >
        <IoIosArrowBack
          className={`text-${colorCode} w-9 h-9 ${direction === "next" ? "transform rotate-180" : ""} hover:text-[#233E6F]`}
        />
      </button>
    </>
    :
    <>
      <button
        onClick={onClick}
        className={`rounded-full border-2 border-${colorCode} w-12 h-12 flex items-center justify-center hover:border-[#ffb703]`}
      >
        <IoIosArrowBack
          className={`text-${colorCode} w-9 h-9 ${direction === "next" ? "transform rotate-180" : ""} hover:text-[#ffb703]`}
        />
      </button>
    </>
  }
  </>
);