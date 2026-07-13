import React from "react";
import { LinkItem } from "../../types/customDataTypes";
import Classes from "../../utils/styles/Global.module.css";
// import { ArrowButton } from "./CustomCarousel";
// import Slider from "react-slick";

interface ImportantLinksProps {
  links: LinkItem[];
}

const ImportantLinks: React.FC<ImportantLinksProps> = ({ links }) => {
  // const sliderRef = React.useRef<Slider>(null);

  // const settings = {
  //   dots: false,
  //   infinite: true,
  //   speed: 500,
  //   slidesToShow: 1, // Show one set of cards at a time
  //   slidesToScroll: 1,
  //   arrows: false, // Disable default arrows inside the slider
  // };

  return (
    <div className={`${Classes["container"]} py-10 px-5`}>
      <div className="bg-blue-50 rounded-xl py-7">
        <div className="flex justify-between items-center mb-4 flex-col md:flex-row px-5">
          <h2 className="text-3xl lg:text-4xl font-bold text-[#172F64] mt-5 mb-4 md:mb-0 text-center">Important Links</h2>
          {/* <div className="flex gap-2 items-center">
            <ArrowButton onClick={() => sliderRef.current?.slickPrev()} direction="prev" colorCode={"[#233E6F]"} />
            <ArrowButton onClick={() => sliderRef.current?.slickNext()} direction="next" colorCode={"[#233E6F]"} />
          </div> */}
        </div>

        <div className={` py-7 md:py-10 lg:py-14 `}>
          {/* <Slider ref={sliderRef} {...settings}>
            {links.map((link, index) => (
              <React.Fragment key={index}>
                <div className="grid grid-cols-2 md:grid-cols-5 gap-4 sm:gap-8 px-5">
                  {link.slides.map((slide, slideIndex) => (
                    <a
                      key={slideIndex}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex flex-col items-center p-4 bg-white border rounded-lg shadow hover:shadow-md w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg transform transition duration-200 cursor-pointer"
                    >
                      <img src={slide.logo} alt={slide.name} className="w-28 h-16 object-contain mb-2" />
                    </a>
                  ))}
                </div>
              </React.Fragment>
            ))}
          </Slider> */}
          {links.map((link, index) => (
            <React.Fragment key={index}>
              <div className="grid grid-cols-2 md:grid-cols-5 gap-4 sm:gap-8 px-5">
                {link.slides.map((slide, slideIndex) => (
                  <a
                    key={slideIndex}
                    target="_blank"
                    href={slide.url}
                    rel="noopener noreferrer"
                    className="flex flex-col items-center p-4 bg-white border rounded-lg shadow hover:shadow-md w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg transform transition duration-200 cursor-pointer"
                  >
                    <img src={slide.logo} alt={slide.name} className="w-28 h-16 object-contain mb-2" />
                  </a>
                ))}
              </div>
            </React.Fragment>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ImportantLinks;
