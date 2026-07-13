import React/*,{ useRef }*/ from "react";
import Classes from "../../utils/styles/Global.module.css";
import { aboutUsData } from "../../data/aboutData";
import Counter from "../../utils/custom/Counter";
import { counterDataForAboutPage } from "../../data/counterData";
import CustomTopFooter from "../../utils/custom/CustomTopFooter";
import { CustomTopFooterData1 } from "../../data/customTopFooterData";
import { centerOfExcellenceData } from "../../data/placementData";
import { newsImgData } from "../../data/newsImgData";
import Slider from "react-slick";
// import { yearsAboutData } from "../../data/driveData";
const Brochure = "/pdf/broucher/final CB (1).pdf";
// import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import CustomCardGrid from "../../utils/custom/CustomCardGrid";
import CustomCampusTourAccordian from "../../utils/custom/CustomCampusTourAccordian";
import { campusTourCards } from "../../data/campusTourData";
import { CustomCampusTourAccordianData } from "../../data/campusTour";
const About: React.FC = () => {
  const { aboutData, cardData, ramswaroopInfo } = aboutUsData[0];
  // const sliderRef = useRef<any>(null);

  // const yearSliderSettings = {
  //   infinite: true,
  //   dots: true,
  //   slidesToShow: 2,
  //   slidesToScroll: 1,
  //   focusOnSelect: true,
  //   arrows: true,
  // };
  var settings = {
    dots: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 500,
    autoplaySpeed: 5000,
  };
  const renderParagraph = (para: string) => {
    return para.split("\n").map((line, index) => (
      <React.Fragment key={index}>
        {line}
        <br />
        <br />
      </React.Fragment>
    ));
  };

  return (
    <section>
      <div className={`${Classes["container"]}`}>
        {/* about start */}
        {aboutData.map((data: any, index: any) => {
          return (
            <div className={` flex flex-col lg:flex-row gap-x-10 lg:mb-5 lg:my-[6.5rem] mt-10 w-full`} key={index}>
              <div className="w-full">
                <h3 className="text-3xl font-bold leading-[14px]">{data.heading}</h3>
                <div className="h-[4px] w-[70px] bg-[#ffb703] mt-[22px] mb-[12px]"></div>
                <p className="text-justify text-[16px] mt-6">{renderParagraph(data.para)}</p>
              </div>
              <div className="w-full lg:mt-[27px] mt-5">
                <img className="w-full lg:min-w-[400px]" src={data.img} alt="img" />
              </div>
            </div>
          );
        })}
        {/* about end */}
        {/* cards start */}
        <div className="about-card mt-6 lg:mt-10  mb-7 lg:mb-[4.5rem] lg:px-12">
          {cardData.map((data: any) => {
            return (
              <div className=" w-full px-3" key={data.id}>
                <img className="mb-2 w-14" src={data.head1} alt="" />
                {/* <h1 className="text-[50px] text-gray-300 tracking-wide ">{data.head1}</h1> */}
                <h2 className="font-bold text-xl mb-3">{data.head2}</h2>
                <p className="text-[14px] text-gray-700 text-justify">{data.paragraph}</p>
              </div>
            );
          })}
        </div>
        {/* cards end */}
      </div>
      {/* student info start */}
      <div className="pb-7 md:pb-10 lg:pb-[4.5rem]">
        <div className="student-part flex items-center">
          <div className={`${Classes["container"]}`}>
            {/* <div className="student_responsive py-7 md:py-10 lg:py-14">
              {studentData.map((item: any) => (
                <div className="flex flex-col items-center" key={item.id}>
                  <h1 className="text-4xl lg:text-6xl font-bold text-yellow-500 ">{item.value}</h1>
                  <p className="text-xl lg:text-2xl text-white font-semibold r mt-3">{item.label}</p>
                </div>
              ))}
            </div> */}
            <Counter counterData={counterDataForAboutPage} />
          </div>
        </div>
      </div>
      {/* student info end */}

      {/* ram swaroop info section start */}
      {ramswaroopInfo.map((data: any, index) => {
        return (
          <div className={`${Classes["container"]} half-border  cursor-pointer transition-all duration-200`} key={index}>
            <div className="mx-auto">
              <h1 className="text-center text-3xl font-bold">{data.ramswaroopHead1}</h1>
              <h2 className="text-center text-3xl font-bold mt-3">{data.age}</h2>
            </div>
            <div className="flex flex-col lg:flex-row gap-x-10 w-full lg:mb-[3.5rem] ">
              <div className="w-full flex justify-center lg:max-w-[300px] my-5">
                <img className="w-full max-w-[300px]  " src={data.img} alt="img" />
              </div>
              <div className="w-full text-justify lg:flex lg:items-center leading-8">
                <p className=" mb-7">{data.para}</p>
              </div>
            </div>
          </div>
        );
      })}

      {/* =========================================================================================== */}
      <div className="py-10 px-5">
        <div className="bg-[#DFE4F2] rounded-xl py-7">
          <div className={`${Classes["container"]}`}>
            <div>
              <div className="flex justify-between items-center">
                <h1 className="text-center text-3xl lg:text-4xl font-bold">Center of Excellence</h1>
              </div>
              <div className="mb-10">
                {/* Slider Component */}

                <ul className="center-excellence-grid  mt-8 md:mt-10 lg:mt-16">
                  {centerOfExcellenceData.slides.map((slide, slideIndex) => (
                    <li key={slideIndex} className="flex justify-center items-center">
                      <img src={slide.img} alt={`Recruiter ${slideIndex + 1}`} className="object-cover w-full transition-all duration-200  " />
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* =========================================================================================== */}



      <CustomCardGrid heading="Infrastructure Audits" cards={campusTourCards} />
      <CustomCampusTourAccordian items={CustomCampusTourAccordianData} contentType={"Extension of Approvals"} />

      <div className="w-full py-10  broucher-part broucher px-2">
        <div className={`${Classes["container"]} border-2 border-white py-10`}>
          <div className="w-full  px-4 md:flex md:justify-between items-center gap-x-[60px]  ">
            <div className="mb-10">
              <h2 className="text-4xl text-white font-bold">Brochure</h2>
              <p className="text-[#ffb703] mt-2 font-medium">Discover Excellence at SRMCEM:</p>
              <p className="text-white text-sm">Where Innovation Meets Opportunity!</p>
            </div>
            <div className="w-full  max-w-[280px] sm:max-w-[350px] sm:pr-5 relative mx-auto sm:mx-0">
              <a href={Brochure || '#'}  target="_blank" className={`px-6 py-2  text-lg font-semibold text-[#ffb703] border-2 border-[#ffb703]`}>
                2025-26
              </a>

              {/* <PrevArrow onClick={() => sliderRef.current?.slickPrev()} />
              <NextArrow onClick={() => sliderRef.current?.slickNext()} /> */}

              {/* <Slider ref={sliderRef} {...yearSliderSettings} className="w-full flex brouchere-slider">
                {yearsAboutData.map((yearData) => (
                  <a href={yearData.pdfSrc || '#'}  target="_blank" key={yearData.id} className={`px-6 py-2  text-lg font-semibold  `}>
                    {yearData.year}
                  </a>
                  // bg - white text - black
                ))}
              </Slider> */}
            </div>
          </div>
        </div>
      </div>

      <div className={`${Classes["container"]} py-10`}>
        <h1 className="text-center text-3xl font-bold">News</h1>
        <p className="text-xl font-semibold text-center">Stay Informed, Stay Inspired: SRMCEM in Focus !</p>
        <div className="news-grid-part mt-14 manage-grid-hidden">
          {newsImgData.map((ele) => (
            <div className="border border-gray-200 hover:border-[#ffb703] rounded-md p-3 cursor-pointer transition-all duration-200 ">
              <img className="w-full" src={ele.imgSrc} alt="" />
            </div>
          ))}
        </div>
        <div className="sm:hidden slider-about mt-5">
          <Slider {...settings}>
            {newsImgData.map((ele) => (
              <div className="border border-gray-200 hover:border-[#ffb703] rounded-md p-3 cursor-pointer transition-all duration-200 ">
                <img className="w-full" src={ele.imgSrc} alt="" />
              </div>
            ))}
          </Slider>
        </div>
      </div>

      {/* ram swaroop info section end */}
      <CustomTopFooter data={CustomTopFooterData1} />
    </section>
  );
};

// const NextArrow = ({ onClick }: { onClick: () => void }) => (
//   <button
//     className="border-2   border-[#ffb703] text-[#ffb703] w-6 h-6 flex items-center justify-center rounded-full shadow-md hover:bg-[#ffb703] hover:text-white absolute top-[11px] -right-[35px] sm:-right-[15px] "
//     onClick={onClick}
//   >
//     <FaChevronRight />
//   </button>
// );

// const PrevArrow = ({ onClick }: { onClick: () => void }) => (
//   <button
//     className="border-2  border-[#ffb703] text-[#ffb703] w-6 h-6 flex items-center justify-center rounded-full shadow-md hover:bg-[#ffb703] hover:text-white absolute top-[11px] -left-[35px]"
//     onClick={onClick}
//   >
//     <FaChevronLeft />
//   </button>
// );
export default About;
