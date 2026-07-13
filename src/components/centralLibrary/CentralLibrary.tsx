import React from "react";
import CustomOverviewSection from "../../utils/custom/CustomOverviewSection";
import { centralLibraryData } from "../../data/customOverViewData";
import { CustomTopFooterData3 } from "../../data/customTopFooterData";
import CustomTopFooter from "../../utils/custom/CustomTopFooter";
import Classes from "../../utils/styles/Global.module.css";
import CustomLibraryContent from "../../utils/custom/CustomLibraryContent";
import { customTimingsSectionData, libraryContentData, libraryTabData, linksData, sectionsAndServicesCardsData } from "../../data/libraryData";
import IqacCard from "../iqac/iqacCard";
import { ArrowButton } from "../../utils/custom/CustomCarousel";
import CustomTab from "../../utils/custom/CustomTab";
import ImportantLinks from "../../utils/custom/ImportantLinks";
import CustomTimingsSection from "../../utils/custom/CustomTimingsSection";
import Slider from "react-slick";

const CentralLibrary: React.FC = () => {
  const sliderRef = React.useRef<any>(null);
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4, // Adjust as needed
    slidesToScroll: 1,
    arrows: false, // You are using custom arrows
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  const handlePrev = () => {
    if (sliderRef.current) {
      sliderRef.current.slickPrev();
    }
  };

  const handleNext = () => {
    if (sliderRef.current) {
      sliderRef.current.slickNext();
    }
  };

  return (
    <div>
      <div className={`${Classes.container}`}>
        <CustomOverviewSection data={centralLibraryData} />
      </div>
      <div className={`${Classes.container}`}>
        <div className="w-full flex gap-x-5 justify-center">
          <a
            target="_blank"
            href="http://192.200.12.3:8080/jopacv11/html/SearchForm "
            className=" px-4 py-2 rounded-full text-gray-500 border border-[#0e2f46] cursor-pointer hover:bg-[#0e2f46] hover:text-white"
          >

            WebOpac
          </a>
          <a
            href="http://192.200.12.5/cgi-bin/koha/opac-suggestions.pl"
            target="_blank"
            className="px-4 py-2 rounded-full text-gray-500 border border-[#0e2f46] hover:bg-[#0e2f46] hover:text-white"
          >

            Book Recommendation
          </a>
          <a href="http://resources.srmcem.ac.in:8181/?_gl=1*1ysqeog*_gcl_au*MTk3NTIwODQ4Ny4xNzM3MDI3Mzcx*_ga*MTAzMDI4NDA5MC4xNzM3MDI3Mzcy*_ga_JEQ9F4ZXD8*MTc0MjU1NzI1Ni4xMS4xLjE3NDI1NTcyNTkuMC4wLjA.
 " target="_blank" className="px-4 py-2 rounded-full text-gray-500 border border-[#0e2f46] hover:bg-[#0e2f46] hover:text-white"> E-Repository</a>
        </div>
      </div>                              
      <div className={`${Classes.container} py-7 md:py-10 lg:py-14`}>
        <h2 className="text-3xl lg:text-4xl text-center  font-semibold leading-8 pr-4 mb-3">Overview</h2>
        <CustomLibraryContent data={libraryContentData?.data} />
        <div className={`${Classes.container} py-7 md:py-10 lg:py-14`}>
          <h2 className="text-3xl lg:text-4xl text-center font-semibold leading-8 pr-4">Sections and Services</h2>
        </div>
        <div className="grid-iqac-card hide-arrow">
          <Slider ref={sliderRef} {...settings}>
            {sectionsAndServicesCardsData?.map((card, index) => {
              const length = sectionsAndServicesCardsData.length;
              return (
                <div className={`p-1 justify-center items-center`} key={index}>
                  <IqacCard
                    mode={card?.isMode}
                    length={length}
                    index={index}
                    key={index}
                    title={card?.title}
                    icon={card?.icon}
                    description={card?.description}
                    colorCode={"bg-[#233E6F]"}
                    content={card?.content}
                  />
                </div>
              );
            })}
          </Slider>
        </div>
        <div className=" flex justify-center items-center space-x-2  mt-5">
          <ArrowButton onClick={handlePrev} direction="prev" colorCode={"[#233E6F]"} />
          <ArrowButton onClick={handleNext} direction="next" colorCode={"[#233E6F]"} />
        </div>
        <div className={`${Classes.container} py-7 md:py-10 lg:py-14`}>
          <h2 className="text-3xl lg:text-4xl text-center  font-semibold leading-8 pr-4 mb-3 mt-3">Library at a Glance</h2>
        </div>
        <CustomTab isMode="library" customTabData={libraryTabData} />
      </div>
      <CustomTimingsSection data={customTimingsSectionData} />
      <ImportantLinks links={linksData} />
      <CustomTopFooter data={CustomTopFooterData3} />
    </div>
  );
};

export default CentralLibrary;
