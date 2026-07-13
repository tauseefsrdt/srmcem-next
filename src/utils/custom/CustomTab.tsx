import React, { useState } from "react";
import { useSelector } from "react-redux";
import { RootState, store } from "../../store";
import { onTabChange, toggleAccordion } from "../../store/ui/ui-slice";

import { customTabDataTypes } from "../../types/customDataTypes";
import Accordian from "./Accordian";
import { LaboratoriesItems } from "../../data/accordianItemsData";
import { IoIosArrowForward } from "react-icons/io";
import CustomLibraryTable from "./CustomLibraryTable";
import ContentDisplay from "./CustomContentDisplay";
import { ImFilePdf } from "react-icons/im";
import Link from "next/link";
import Slider from "react-slick";
import Fancybox from "../../components/abhivyakti/Fancybox";
import { FaAngleDown, FaAngleRight, FaLongArrowAltRight } from "react-icons/fa";
interface propsTypes {
  customTabData: customTabDataTypes[];
  isMode: string;

}
const CustomTab: React.FC<propsTypes> = ({ customTabData, isMode }) => {
  const { activeTab } = useSelector((state: RootState) => state.ui);
  const { activeIndex } = useSelector((state: RootState) => state.ui);
  const [show, setShow] = useState<number | null>(null);
  const { tabData } = customTabData[0];
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true, // Enable autoplay
    autoplaySpeed: 3000,

    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 575,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  function truncateString(str: string, maxLength: number) {
    if (str.length > maxLength) {
      return str.slice(0, maxLength) + "...";
    }
    return str;
  }
  const showMore = (id: number) => {
    setShow(id);
  };
  return (
    <div>
      <ul
        className={`flex ${tabData && tabData.length > 6 ? "justify-between" : ""}  gap-x-2 pb-2 border-b-2 border-[#ffebb8] w-full overflow-x-auto overflow-y-hidden vertical-scrollbar`}
      >
        {customTabData.map((ele, outerIndex) => {
          return ele.tabData.map((item, index) => (
            <li
              key={`${outerIndex}-${item.id}`}
              onClick={() => store.dispatch(onTabChange(index))}
              className={`cursor-pointer relative font-semibold uppercase text-nowrap ${activeTab === index ? "after:content-[''] after:w-full after:h-[4px] after:rounded-full after:bg-[#ffb703] after:absolute after:-bottom-[10px] after:left-0" : ""
                }`}
            >
              {item.tab}
            </li>
          ));
        })}
      </ul>
      <div className="mt-5 sm:mt-10">
        {customTabData.map((ele) =>
          isMode === "events" ? (
            <>
              <ul className=" list-[square] ml-4 mb-4">
                {ele.tabData[activeTab].contentObject?.listItem?.map((item) => (
                  <li className="yellow text-justify" key={item.id}>
                    <strong>{item?.listBold}</strong> {item.list}
                  </li>
                ))}
              </ul>
              {ele.tabData[activeTab].content?.map((item) => (
                <div key={item.id} className="w-full flex flex-col lg:flex-row lg:justify-between lg:items-start gap-10 pt-10">
                  <div className="w-full lg:max-w-[500px]">
                    <h3 className="text-3xl lg:text-4xl font-bold text-white" key={item.id}>
                      {item.title}
                    </h3>
                    <div className="mt-4">
                      {item.paraContentChild.map((item) => (
                        <p key={item.id} className="text-justify">
                          {item.value}
                        </p>
                      ))}
                    </div>
                  </div>
                  <div className="w-full lg:max-w-[calc(100%-500px)]  px-5">
                    <Slider {...settings} className="event-slider-card">
                      {item.cardContentChild?.map((item) => (
                        <div className="px-2">
                          <div className="w-full   group bg-red-200 lg:min-w-[200px] cursor-pointer rounded-2xl  hover:border hover:border-[#ffb703] overflow-hidden" key={item.id}>
                            <img className="w-full aspect-[1/0.8] object-cover" src={item.imgSrc} alt="" />
                            <div className="bg-white text-black px-4 pt-5 pb-7 card-bottom-part ">
                              <h3 className="font-bold  text-[#023047]">{item.title}</h3>
                              <p className="mt-1 text-[#ffb703]">{item.date}</p>

                              {item?.path && (
                                <Link href={item?.path}
                                  className="border-2 border-[#ffb703] group-hover:bg-[#ffb703]  text-[#023047] font-semibold px-4 py-2 rounded-md inline-flex items-center gap-x-2 mt-4 "
                                >
                                  {item.btnTitle}
                                  <span className="transition-all duration-200  group-hover:rotate-[360deg]">
                                    <FaLongArrowAltRight />
                                  </span>
                                </Link>
                              )}
                            </div>
                          </div>
                        </div>
                      ))}
                    </Slider>
                  </div>
                </div>
              ))}
            </>
          ) : isMode === "department-chemistry" ? (
            <>
              <ul className=" list-[square] ml-4 mb-4">
                {ele.tabData[activeTab].contentObject?.listItem &&
                  ele.tabData[activeTab].contentObject?.listItem?.map((item) => (
                    <li className="yellow text-justify" key={item.id}>
                      <strong>{item?.listBold}</strong> {item.list}
                    </li>
                  ))}
              </ul>
              <div className="fm_card">
                {ele.tabData[activeTab].contentObject &&
                  ele.tabData[activeTab].contentObject?.cardData?.map((item) => (
                    <div key={item.id} className="w-full border border-gray-200   hover:border-[#ffb703] rounded-md p-4">
                      <div className="w-full flex gap-x-4 items-start h-full">
                        <img className="w-[124px] min-w-[124px] h-[127px]  object-cover object-top  " src={item.imgSrc} alt="" />
                        <div className="h-full">
                          <div>
                            <div className="text-sm font-semibold">{item.education}</div>
                            <div className="text-sm font-semibold">{item.designation}</div>
                            <div className="text-sm font-semibold">{item.email}</div>
                            <div className="text-sm font-semibold">{item.orcid}</div>
                          </div>
                          <div className="text-sm mt-4 h-[150px] overflow-y-auto faculty-card-scrollbar pr-3 text-justify">
                            {show === item.id ? item.aboutData : item.aboutData && truncateString(item.aboutData, 250)}
                            <div className="mt-4 flex justify-end">
                              {item.aboutData && item.aboutData?.length > 250 && show !== item.id && (
                                <button onClick={() => showMore(item.id)} className="bg-[#1B3A6F] text-white px-3 py-1 rounded-full">
                                  Read More
                                </button>
                              )}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
              </div>
              <div>{ele.tabData[activeTab] && ele.tabData[activeTab].contentObject?.accordianShow && <Accordian isMode="department" items={LaboratoriesItems} />}</div>
            </>
          ) : isMode === "department-civil-engeneering" ? (
            <>
              <ul className=" list-[square] ml-4 mb-4">
                {ele.tabData[activeTab].tab !== "Magazine" &&
                  ele.tabData[activeTab].contentObject?.listItem?.map((item) => (
                    <li className="yellow text-justify" key={item.id}>
                      <strong>{item?.listBold}</strong> {item.list}
                    </li>
                  ))}
              </ul>

              <div className="fm_card">
                {ele.tabData[activeTab].contentObject?.cardData &&
                  ele.tabData[activeTab].contentObject?.cardData?.map((item) => (
                    <div key={item.id} className="w-full border border-gray-200   hover:border-[#ffb703] rounded-md p-4">
                      <div className="w-full flex gap-x-4 items-start h-full">
                        <img className="w-[124px] min-w-[124px] h-[127px]  object-cover object-top  " src={item.imgSrc} alt="" />
                        <div className="h-full">
                          <div>
                            <div className="text-sm font-semibold">{item.designation}</div>
                            <div className="text-sm font-semibold">{item.education}</div>

                            <div className="text-sm font-semibold">{item.email}</div>
                            <div className="text-sm font-semibold">{item.orcid}</div>
                          </div>
                          <div className="text-sm mt-4 h-[150px] overflow-y-auto faculty-card-scrollbar pr-3 text-justify">
                            {show === item.id ? item.aboutData : item.aboutData && truncateString(item.aboutData, 250)}
                            <div className="mt-4 flex justify-end">
                              {item.aboutData && item.aboutData?.length > 250 && show !== item.id && (
                                <button onClick={() => showMore(item.id)} className="bg-[#1B3A6F] text-white px-3 py-1 rounded-full">
                                  Read More
                                </button>
                              )}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
              </div>
              <div>
                {ele.tabData[activeTab].contentCard &&
                  ele.tabData[activeTab].contentCard?.map((item, index) => {
                    return (
                      <div key={item.id} className="w-full flex flex-col md:flex-row justify-between  gap-6 mb-10 items-start">
                        <div className={`${index % 2 !== 0 ? "md:order-2" : ""}`}>
                          <h2 className="text-3xl font-semibold mb-3">{item.title}</h2>
                          {item.paraContent?.map((item) => {
                            return <p className="text-justify">{item.content}</p>;
                          })}
                        </div>
                        {/* replace here */}
                        <div>
                          <img className="w-full max-w-[500px] md:min-w-[500px] aspect-[3/1.65] mb-20 object-cover" src={item.imgSrc} alt="" />
                        </div>
                      </div>
                    );
                  })}
              </div>
              <div>
                {ele.tabData[activeTab].content &&
                  ele.tabData[activeTab].content?.map((item) => {
                    return (
                      <div key={item.id} className={`${item.id === 1 ? "mt-6" : ""}`}>
                        <h2 className="text-3xl font-semibold mb-3">{item.title}</h2>
                        {item.paraContentChild.map((ele) => (
                          <p className="mb-2 text-justify">
                            {" "}
                            <strong>{ele?.bold}</strong> {ele.value}
                          </p>
                        ))}
                      </div>
                    );
                  })}
              </div>
              <div>
                {ele.tabData[activeTab] &&
                  ele.tabData[activeTab].contentWithPdf?.map((ele) => (
                    <div key={ele.id}>
                      {ele.title && <h2 className="mb-10 text-3xl font-semibold ">{ele.title}</h2>}
                      <div className={`${ele.id == 1 ? "mt-5" : ""}`}>
                        <h3 className="text-xl text-gray-800 font-semibold mb-1">{ele.contentPdfObject.subtitle}</h3>
                        {ele.contentPdfObject.contentPdfData?.map((item) => (
                          <div key={item.id} className="flex justify-between items-center mb-2">
                            {item.value && <p>{item.value}</p>}
                            {item.boldValue && <p className="text-2xl font-semibold ">{item.boldValue}</p>}
                            <a
                              href={item.path}
                              target="_blank"
                              className="text-red-600 inline-block p-1 rounded-sm border border-transparent hover:border-[#ffb703] hover:text-[#ffb703] md:mr-[67px]"
                            >
                              <ImFilePdf size={24} />
                            </a>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
              </div>


              {ele.tabData[activeTab].contentObject?.vissionData &&
                ele.tabData[activeTab].contentObject?.vissionData?.map((item) => (
                  <div key={item.id} className="mb-2">
                    <h3 className="text-3xl font-semibold mb-3">{item.title}</h3>
                    {/* <p>{item.content}</p> */}
                    {item.vissionContent &&
                      item.vissionContent.map((ele) => (
                        <div key={ele.id}>
                          <p>{ele.para}</p>
                        </div>
                      ))}

                    {item.missionContent &&
                      item.missionContent.map((ele) => (
                        <div key={ele.id} className="mb-2">
                          <p className="text-justify">
                            <strong>{ele.bold}</strong> {ele.para}
                          </p>
                        </div>
                      ))}
                  </div>
                ))}
              {/* ===============Awards and achivement first design=============================== */}
              {ele.tabData[activeTab].isMode &&
                ele.tabData[activeTab].contentObject?.vissionData?.map((item) => (
                  <div key={item.id} className="mb-2">
                    <h3 className="text-3xl font-semibold mb-3">{item.title}</h3>
                    {/* <p>{item.content}</p> */}
                    {item.vissionContent &&
                      item.vissionContent.map((ele) => (
                        <div key={ele.id}>
                          <p>{ele.para}</p>
                        </div>
                      ))}

                    {item.missionContent &&
                      item.missionContent.map((ele) => (
                        <div key={ele.id} className="mb-2">
                          <p className="text-justify">
                            <strong>{ele.bold}</strong> {ele.para}
                          </p>
                        </div>
                      ))}
                  </div>
                ))}
              {/* ===============Awards and achivement second design=============================== */}
              {!ele.tabData[activeTab].isMode && (
                <div>
                  {/* {ele.tabData[activeTab].contentObject && ele.tabData[activeTab].contentObject.contentData?.map((item, index) => <h3 key={index}>{item.contentMainTitle}</h3>)} */}
                  <div className="accordian">
                    {ele.tabData[activeTab].contentObject?.contentData &&
                      ele.tabData[activeTab].contentObject.contentData?.map((item, index) => (
                        <div
                          key={index}
                          className={`mb-4 border-2 overflow-hidden transition-all duration-300  ${activeIndex === index ? "border-[#ffb703] " : "border-gray-100"} rounded-t-lg`}
                        >
                          <div onClick={() => store.dispatch(toggleAccordion(index))} className="flex justify-between items-center px-4 py-3 bg-gray-100 cursor-pointer ">
                            <span className="font-semibold">{item?.contentTitle}</span>
                            {activeIndex !== index ? <FaAngleRight /> : <FaAngleDown color="#ffb703" />}
                          </div>
                          <div className={`transition-all duration-300   ${activeIndex === index ? "max-h-[10000px] " : "max-h-0"}`}>
                            <div className="overflow-x-auto p-2">
                              <table className="min-w-full bg-white border border-gray-300 shadow-md">
                                <thead>
                                  {item.contentInnerData.headerData.map((ele) => (
                                    <tr className="bg-[#233E6F] text-white uppercase">
                                      <th className="px-6 py-3 text-left text-nowrap">{ele.sNo}</th>
                                      <th className="px-6 py-3 text-left text-nowrap">{ele.name}</th>
                                      <th className="px-6 py-3 text-left text-nowrap">{ele.achievement}</th>
                                      <th className="px-6 py-3 text-left text-nowrap">{ele.yearOfAchievement}</th>
                                      <th className="px-6 py-3 text-left text-nowrap">{ele.titleOfCertification}</th>
                                      <th className="px-6 py-3 text-left text-nowrap">{ele.typeOfCertification}</th>
                                      <th className="px-6 py-3 text-left text-nowrap">{ele.dateOfConduction}</th>
                                      <th className="px-6 py-3 text-left text-nowrap">{ele.organisedBy}</th>
                                    </tr>
                                  ))}
                                </thead>
                                <tbody>
                                  {item.contentInnerData.rowData.map((employee, index) => (
                                    <tr key={index} className={`border-b   ${index % 2 !== 0 ? "bg-gray-100" : ""}`}>
                                      <td className="px-6 py-3">{employee.sNo}</td>
                                      <td className="px-6 py-3">{employee.name}</td>
                                      <td className="px-6 py-3">{employee.achievement}</td>
                                      <td className="px-6 py-3">{employee.yearOfAchievement}</td>
                                      <td className="px-6 py-3">{employee.titleOfCertification}</td>
                                      <td className="px-6 py-3">{employee.typeOfCertification}</td>
                                      <td className="px-6 py-3">{employee.dateOfConduction}</td>
                                      <td className="px-6 py-3">{employee.organisedBy}</td>
                                    </tr>
                                  ))}
                                </tbody>
                              </table>
                            </div>
                          </div>
                        </div>
                      ))}
                  </div>
                </div>
              )}
              {/* for award section */}
              <div>
                {ele.tabData[activeTab].contentObject &&
                  ele.tabData[activeTab].contentObject?.awardsData?.map((ele, index) => (
                    <div className={`w-full flex flex-col ${index % 2 == 0 ? "md:flex-row" : "md:flex-row-reverse"}  justify-between  gap-6 mb-10 `}>
                      <div className={`mb-4  ${index % 2 == 0 ? "mr-6" : "ml-6"}`}>
                        <h2 className="text-3xl font-semibold mb-3">{ele.mainTitle}</h2>

                        <h2 className="text-2xl font-semibold mb-3">{ele.awardChildFirst.subTitle}</h2>
                        {ele.awardChildFirst.paraContentChild?.map((item) => (
                          <p className="mb-2 text-justify">{item.value}</p>
                        ))}
                        <h2 className="text-2xl font-semibold mb-3">{ele.awardChildSecond && ele.awardChildSecond.subTitle}</h2>
                        <ul className="list-decimal grid sm:grid-cols-2 lg:grid-cols-3 ml-4">
                          {ele.awardChildSecond && ele.awardChildSecond.paraContentChild?.map((item) => (
                            <li className="mb-1">{item.value}</li>
                          ))}
                        </ul>
                      </div>
                      <div className="flex items-center">
                        <img className="min-w-[350px] w-[350px] aspect-[1/0.7] object-cover" src={ele.imgSrc} alt="" />
                      </div>
                    </div>
                  ))}
              </div>
              <div className="department_gallery_grid">
                <Fancybox
                  options={{
                    Carousel: {
                      infinite: false,
                    },
                  }}
                >
                  <div className="abhivyakti_grid">
                    {/* Show only first 6 images visibly */}
                    {ele.tabData[activeTab]?.contentObject?.galleryData
                      ?.slice(0, 6)
                      .map((item) => (
                        <a
                          data-fancybox="gallery"
                          href={item.imgSrc}
                          key={item.id}
                          className="border border-[#ffb703] rounded-md p-4 relative group"
                        >
                          <img
                            className="aspect-[2/1.5] object-cover"
                            src={item.imgSrc}
                            alt="gallery"
                          />
                        </a>
                      ))}

                    {/* Hidden images for Fancybox group, not shown on screen */}
                    {ele.tabData[activeTab]?.contentObject?.galleryData
                      ?.slice(6)
                      .map((item) => (
                        <a
                          data-fancybox="gallery"
                          href={item.imgSrc}
                          key={`hidden-${item.id}`}
                          className="hidden"
                        >
                          <img src={item.imgSrc} alt="gallery hidden" />
                        </a>
                      ))}
                  </div>
                  <div className="flex justify-center items-center">
                    {(ele.tabData[activeTab].contentObject?.galleryData?.length ?? 0) > 6 && (
                          <a
                            href="#"
                            onClick={(e) => {
                              e.preventDefault();

                              (
                                document.querySelector(
                                  '.abhivyakti_grid [data-fancybox="gallery"]'
                                ) as HTMLAnchorElement | null
                              )?.click();
                            }}
                            className="mt-4 px-6 py-2 bg-[#ffb703] text-white rounded hover:bg-[#e0a300] transition"
                          >
                            View More
                          </a>
                    )}
                  </div>
                </Fancybox>
              </div>


              <ul className=" ml-4 mb-4">
                {ele.tabData[activeTab].tab === "Magazine" &&
                  ele.tabData[activeTab].contentObject?.listItem?.map((item) => (
                    <li className=" text-justify border p-3 rounded-md mb-2" key={item.id}>
                      <div className="flex justify-between items-center ">


                        <span className="text-sm">{item?.listBold}</span>
                        <a
                          target="_blank"
                          href={item?.path}
                          className="text-red-600 inline-block p-1 rounded-sm border border-transparent hover:border-[#ffb703] hover:text-[#ffb703] mr-6 md:mr-9"
                        >
                          <ImFilePdf size={24} />
                        </a>
                      </div>
                    </li>
                  ))}
              </ul>

            </>
          ) :
            isMode === "department-computer-application" ? (
              <>
                <ul className=" list-[square] ml-4 mb-4">
                  {ele.tabData[activeTab].tab !== "Magazine" &&
                    ele.tabData[activeTab].contentObject?.listItem?.map((item) => (
                      <li className="yellow text-justify" key={item.id}>
                        <strong>{item?.listBold}</strong> {item.list}
                      </li>
                    ))}
                </ul>
                <div className="fm_card">
                  {ele.tabData[activeTab].contentObject &&
                    ele.tabData[activeTab].contentObject?.cardData?.map((item) => (
                      <div key={item.id} className="w-full border border-gray-200   hover:border-[#ffb703] rounded-md p-4">
                        <div className="w-full flex gap-x-4 items-start h-full">
                          <div className="flex flex-col gap-y-3">
                            <img className="w-[124px] min-w-[124px] h-[127px]  object-cover object-top  " src={item.imgSrc} alt="" />
                            {/* {item.name && <h1 className="font-semibold">{item.name}</h1>} */}
                          </div>
                          <div className="h-full">
                            <div>
                              <div className="text-sm font-semibold">{item.designation}</div>
                              <div className="text-sm font-semibold">{item.education}</div>

                              <div className="text-sm font-semibold">{item.email}</div>
                              <div className="text-sm font-semibold">{item.orcid}</div>
                            </div>
                            <div className="text-sm mt-4 h-[150px] overflow-y-auto faculty-card-scrollbar pr-3 text-justify">
                              {show === item.id ? item.aboutData : item.aboutData && truncateString(item.aboutData, 250)}
                              <div className="mt-4 flex justify-end">
                                {item.aboutData && item.aboutData?.length > 250 && show !== item.id && (
                                  <button onClick={() => showMore(item.id)} className="bg-[#1B3A6F] text-white px-3 py-1 rounded-full">
                                    Read More
                                  </button>
                                )}
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                </div>
                <div>
                  {ele.tabData[activeTab] &&
                    ele.tabData[activeTab].contentCard?.map((item, index) => {
                      return (
                        <div key={item.id}>
                          {ele.tabData[activeTab].isLesscontent === true && (
                            <div className="w-full flex flex-col md:flex-row justify-between gap-6 md:gap-12 mb-10">
                              <div>
                                <h2 className="font-semibold text-3xl py-2">{item.title}</h2>
                                <p className="text-justify">{item.laboratory_desc}</p>
                              </div>
                              <img src={item.imgSrc} alt={`eelab${item.id}`} className="max-w-[500px]" />
                            </div>
                          )}
                          {ele.tabData[activeTab].isLesscontent === false && (
                            <div className={`w-full flex flex-col ${index % 2 === 0 ? " md:flex-row" : " md:flex-row-reverse "} justify-between  gap-6 mb-10 items-start`}>
                              <div>
                                <h2 className="text-3xl font-semibold">{item.title}</h2>
                                {item.LaboratoriesContent?.map((item) => (
                                  <div key={item.id} className="mt-4">
                                    <h2 className=" mb-2" key={item.id}>
                                      {item.subtitle}
                                    </h2>
                                    {item.paraContentChild?.map((ele) => (
                                      <p className="my-1 text-justify">{ele.value}</p>
                                    ))}
                                  </div>
                                ))}
                              </div>
                              {/* replace with */}
                              <div>
                                <img className="w-full max-w-[500px] md:min-w-[500px] aspect-[3/1.65] mb-20 object-cover" src={item.imgSrc} alt="" />
                              </div>
                            </div>
                          )}
                        </div>
                      );
                    })}
                </div>
                <div>
                  {ele.tabData[activeTab] &&
                    ele.tabData[activeTab].content?.map((item) => {
                      return (
                        <div key={item.id} className={`${item.id === 1 ? "mt-6" : ""}`}>
                          <h2 className="text-3xl font-semibold mb-3">{item.title}</h2>
                          {item.paraContentChild.map((ele) => (
                            <p className="mb-2 text-justify">
                              <strong>{ele.bold}</strong>
                              {ele.value}
                            </p>
                          ))}
                        </div>
                      );
                    })}
                </div>
                <div>
                  {ele.tabData[activeTab] &&
                    ele.tabData[activeTab].contentWithPdf?.map((ele) => (
                      <div key={ele.id}>
                        {ele.title && <h2 className="mb-6 text-3xl font-semibold ">{ele.title}</h2>}
                        <div className={`${ele.id == 1 ? "mt-5" : ""}`}>
                          <h3 className="text-xl text-gray-800 font-semibold mb-2">{ele.contentPdfObject.subtitle}</h3>
                          {ele.contentPdfObject.contentPdfData &&
                            ele.contentPdfObject.contentPdfData?.map((item) => (
                              <div key={item.id}>
                                <div className="flex gap-4">
                                  <img src={item.imgsrc1} alt="" />
                                  <img src={item.imgsrc2} alt="" />
                                </div>
                                {item.contetWithBold && (
                                  <div className="mt-10">
                                    {item.contetWithBold?.map((ele) => (
                                      <div key={ele.id} className="mb-1">
                                        <strong className="pr-2">{ele.boldValue}:</strong>
                                        {ele.value}
                                      </div>
                                    ))}
                                  </div>
                                )}
                              </div>
                            ))}
                          {ele.contentPdfObject.contentPdfData?.map((item) => {
                            return (
                              <div key={item.id} className="flex justify-between items-center mb-2">
                                {<p>{item.value}</p>}
                                {item.path && (
                                  <a
                                    href={item.path}
                                    target="_blank"
                                    className="text-red-600 inline-block p-1 rounded-sm border border-transparent hover:border-[#ffb703] hover:text-[#ffb703] md:mr-[67px]"
                                  >
                                    <ImFilePdf size={24} />
                                  </a>
                                )}
                              </div>
                            );
                          })}
                        </div>
                      </div>
                    ))}
                </div>
                <div className="department_gallery_grid">
                  <Fancybox
                    options={{
                      Carousel: {
                        infinite: false,
                      },
                    }}
                  >
                    <div className="abhivyakti_grid">
                      {/* Show only first 6 images visibly bhggf */}
                      {ele.tabData[activeTab]?.contentObject?.galleryData
                        ?.slice(0, 6)
                        .map((item) => (
                          <a
                            data-fancybox="gallery"
                            href={item.imgSrc}
                            key={item.id}
                            className="border border-[#ffb703] rounded-md p-4 relative group"
                          >
                            <img
                              className="aspect-[2/1.5] object-cover"
                              src={item.imgSrc}
                              alt="gallery"
                            />
                          </a>
                        ))}

                      {/* Hidden images for Fancybox group, not shown on screen */}
                      {ele.tabData[activeTab]?.contentObject?.galleryData
                        ?.slice(6)
                        .map((item) => (
                          <a
                            data-fancybox="gallery"
                            href={item.imgSrc}
                            key={`hidden-${item.id}`}
                            className="hidden"
                          >
                            <img src={item.imgSrc} alt="gallery hidden" />
                          </a>
                        ))}
                    </div>
                    <div className="flex justify-center items-center">
                      {(ele.tabData[activeTab].contentObject?.galleryData?.length ?? 0) > 6 && (
                            <a
                              href="#"
                              onClick={(e) => {
                                e.preventDefault();

                                const firstImage = document.querySelector(
                                  '.abhivyakti_grid [data-fancybox="gallery"]'
                                ) as HTMLAnchorElement | null;

                                firstImage?.click();
                              }}
                              className="mt-4 px-6 py-2 bg-[#ffb703] text-white rounded hover:bg-[#e0a300] transition"
                            >
                              View More
                            </a>
                      )}
                    </div>
                  </Fancybox>
                </div>
                {ele.tabData[activeTab].contentObject?.vissionData &&
                  ele.tabData[activeTab].contentObject?.vissionData?.map((item) => (
                    <div key={item.id} className="mb-2">
                      <h3 className="text-3xl font-semibold mb-3">{item.title}</h3>
                      {/* <p>{item.content}</p> */}
                      {item.vissionContent &&
                        item.vissionContent.map((ele) => (
                          <div key={ele.id}>
                            <p>{ele.para}</p>
                          </div>
                        ))}

                      {item.missionContent &&
                        item.missionContent.map((ele) => (
                          <div key={ele.id} className="mb-2">
                            <p className="text-justify">
                              <strong>{ele.bold}</strong> {ele.para}
                            </p>
                          </div>
                        ))}
                    </div>
                  ))}
                <div>
                  {ele.tabData[activeTab].contentObject?.awardsData &&
                    ele.tabData[activeTab].contentObject?.awardsData?.map((ele, index) => (
                      <div className={`w-full flex flex-col ${index % 2 == 0 ? "md:flex-row" : "md:flex-row-reverse"}  justify-between  gap-6 mb-10`}>
                        <div>
                          <h2 className="text-3xl font-semibold mb-3">{ele.mainTitle}</h2>

                          <h2 className="text-2xl font-semibold mb-3">{ele.awardChildFirst.subTitle}</h2>
                          {ele.awardChildFirst.paraContentChild?.map((item) => (
                            <p className="mb-2">{item.value}</p>
                          ))}
                          <h2 className="text-2xl font-semibold mb-3">{ele.awardChildSecond && ele.awardChildSecond.subTitle}</h2>
                          <ul className="list-decimal grid sm:grid-cols-2 lg:grid-cols-3 ml-4">
                            {ele.awardChildSecond && ele.awardChildSecond.paraContentChild?.map((item) => (
                              <li className="mb-1">{item.value}</li>
                            ))}
                          </ul>
                        </div>
                        <div>
                          <img className="min-w-[350px] w-[350px] aspect-[1/0.7] object-cover" src={ele.imgSrc} alt="" />
                        </div>
                      </div>
                    ))}
                </div>
                <ul className=" ml-4 mb-4">
                  {ele.tabData[activeTab].tab === "Magazine" &&
                    ele.tabData[activeTab].contentObject?.listItem?.map((item) => (
                      <li className=" text-justify border p-3 rounded-md mb-2" key={item.id}>
                        <div className="flex justify-between items-center ">


                          <span className="text-sm">{item?.listBold}</span>
                          <a
                            target="_blank"
                            href={item?.path}
                            className="text-red-600 inline-block p-1 rounded-sm border border-transparent hover:border-[#ffb703] hover:text-[#ffb703] mr-6 md:mr-9"
                          >
                            <ImFilePdf size={24} />
                          </a>
                        </div>
                      </li>
                    ))}
                </ul>
                {/* ===============Awards and achivement second design=============================== */}
                {!ele.tabData[activeTab].isMode && (
                  <div>
                    {/* {ele.tabData[activeTab].contentObject && ele.tabData[activeTab].contentObject.contentData?.map((item, index) => <h3 key={index}>{item.contentMainTitle}</h3>)} */}
                    <div className="accordian">
                      {ele.tabData[activeTab].contentObject?.contentData &&
                        ele.tabData[activeTab].contentObject.contentData?.map((item, index) => (
                          <div
                            key={index}
                            className={`mb-4 border-2 overflow-hidden transition-all duration-300  ${activeIndex === index ? "border-[#ffb703] " : "border-gray-100"} rounded-t-lg`}
                          >
                            <div onClick={() => store.dispatch(toggleAccordion(index))} className="flex justify-between items-center px-4 py-3 bg-gray-100 cursor-pointer ">
                              <span className="font-semibold">{item.contentTitle}</span>
                              {activeIndex !== index ? <FaAngleRight /> : <FaAngleDown color="#ffb703" />}
                            </div>
                            <div className={`transition-all duration-300   ${activeIndex === index ? "max-h-[10000px] " : "max-h-0"}`}>
                              <div className="overflow-x-auto p-2">
                                <table className="min-w-full bg-white border border-gray-300 shadow-md">
                                  <thead>
                                    {item.contentInnerData.headerData.map((ele) => (
                                      <tr className="bg-[#233E6F] text-white uppercase">
                                        <th className="px-6 py-3 text-left text-nowrap">{ele.sNo}</th>
                                        <th className="px-6 py-3 text-left text-nowrap">{ele.name}</th>
                                        <th className="px-6 py-3 text-left text-nowrap">{ele.titleOfCertification}</th>
                                        <th className="px-6 py-3 text-left text-nowrap">{ele.typeOfCertification}</th>
                                        <th className="px-6 py-3 text-left text-nowrap">{ele.achievement}</th>
                                        <th className="px-6 py-3 text-left text-nowrap">{ele.yearOfAchievement}</th>
                                      
                                        {ele.dateOfConduction && (
                                          <th className="px-6 py-3 text-left text-nowrap">
                                            {ele.dateOfConduction}
                                          </th>

                                        )}
                                        {ele.organisedBy && (
                                          <th className="px-6 py-3 text-left text-nowrap">
                                            {ele.organisedBy}
                                          </th>
                                        )}
                                      </tr>
                                    ))}
                                  </thead>
                                  <tbody>
                                    {item.contentInnerData.rowData.map((employee, index) => (
                                      <tr key={index} className={`border-b   ${index % 2 !== 0 ? "bg-gray-100" : ""}`}>
                                        <td className="px-6 py-3">{employee.sNo}</td>
                                        <td className="px-6 py-3">{employee.name}</td>
                                        <td className="px-6 py-3 ">{employee.titleOfCertification}</td>
                                        <td className="px-6 py-3 ">{employee.typeOfCertification}</td>
                                        <td className="px-6 py-3">{employee.achievement}</td>
                                        <td className="px-6 py-3">{employee.yearOfAchievement}</td>
                                       
                                        
                                        {employee.dateOfConduction && (
                                          <td className="px-6 py-3  ">
                                            {employee.dateOfConduction}
                                          </td>

                                        )}

                                        {employee.organisedBy && (
                                          <td className="px-6 py-3 ">
                                            {employee.organisedBy}
                                          </td>
                                        )}
                                      </tr>
                                    ))}
                                  </tbody>
                                </table>
                              </div>
                            </div>
                          </div>
                        ))}
                    </div>
                  </div>
                )}


              </>
            ) :
              isMode === "humanities" ? (
                <>
                  <ul className=" list-[square] ml-4 mb-4">
                    {ele.tabData[activeTab].tab !== "Magazine" &&
                      ele.tabData[activeTab].contentObject?.listItem?.map((item) => (
                        <li className="yellow text-justify" key={item.id}>
                          <strong>{item?.listBold}</strong> {item.list}
                        </li>
                      ))}
                  </ul>
                  <div className="fm_card">
                    {ele.tabData[activeTab].contentObject &&
                      ele.tabData[activeTab].contentObject?.cardData?.map((item) => (
                        <div key={item.id} className="w-full border border-gray-200   hover:border-[#ffb703] rounded-md p-4">
                          <div className="w-full flex gap-x-4 items-start h-full">
                            <div className="flex flex-col gap-y-3">
                              <img className="w-[124px] min-w-[124px] h-[127px]  object-cover object-top  " src={item.imgSrc} alt="" />
                              {/* {item.name && <h1 className="font-semibold">{item.name}</h1>} */}
                            </div>
                            <div className="h-full">
                              <div>
                                <div className="text-sm font-semibold">{item.designation}</div>
                                <div className="text-sm font-semibold">{item.education}</div>

                                <div className="text-sm font-semibold">{item.email}</div>
                                <div className="text-sm font-semibold">{item.orcid}</div>
                              </div>
                              <div className="text-sm mt-4 h-[150px] overflow-y-auto faculty-card-scrollbar pr-3 text-justify">
                                {show === item.id ? item.aboutData : item.aboutData && truncateString(item.aboutData, 250)}
                                <div className="mt-4 flex justify-end">
                                  {item.aboutData && item.aboutData?.length > 250 && show !== item.id && (
                                    <button onClick={() => showMore(item.id)} className="bg-[#1B3A6F] text-white px-3 py-1 rounded-full">
                                      Read More
                                    </button>
                                  )}
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      ))}
                  </div>
                  <div>
                    {ele.tabData[activeTab] &&
                      ele.tabData[activeTab].contentCard?.map((item, index) => {
                        return (
                          <div key={item.id}>
                            {ele.tabData[activeTab].isLesscontent === true && (
                              <div className="w-full flex flex-col  md:flex-row justify-between  gap-6 md:gap-12 mb-10">
                                <div>
                                  <h2 className="font-semibold text-3xl py-2">{item.title}</h2>
                                  <p className="text-justify">{item.laboratory_desc}</p>
                                </div>
                                <img src={item.imgSrc} alt={`eelab${item.id}`} className="max-w-[500px]" />
                              </div>
                            )}
                            {ele.tabData[activeTab].isLesscontent === false && (
                              <div className={`w-full flex flex-col ${index % 2 === 0 ? " md:flex-row" : " md:flex-row-reverse "} justify-between  gap-6 mb-10 items-start`}>
                                <div>
                                  <h2 className="text-3xl font-semibold">{item.title}</h2>
                                  {item.LaboratoriesContent?.map((item) => (
                                    <div key={item.id} className="mt-4">
                                      <h2 className="text-xl font-semibold mb-2" key={item.id}>
                                        {item.subtitle}
                                      </h2>
                                      {item.paraContentChild?.map((ele) => (
                                        <p className="my-1 text-justify">{ele.value}</p>
                                      ))}
                                    </div>
                                  ))}
                                </div>
                                {/* replace with */}
                                <div>
                                  <img className="w-full max-w-[500px] md:min-w-[500px] aspect-[3/1.65] mb-20 object-cover" src={item.imgSrc} alt="" />
                                </div>
                              </div>
                            )}
                          </div>
                        );
                      })}
                  </div>
                  <div>
                    {ele.tabData[activeTab] &&
                      ele.tabData[activeTab].content?.map((item) => {
                        return (
                          <div key={item.id} className={`${item.id === 1 ? "mt-6" : ""}`}>
                            <h2 className="text-3xl font-semibold mb-3">{item.title}</h2>
                            {item.paraContentChild.map((ele) => (
                              <p className="mb-2 text-justify">{ele.value}</p>))}
                          </div>
                        );
                      })}
                  </div>
                  <div>
                    {ele.tabData[activeTab] &&
                      ele.tabData[activeTab].contentWithPdf?.map((ele) => (
                        <div key={ele.id}>
                          {ele.title && <h2 className="mb-6 text-3xl font-semibold ">{ele.title}</h2>}
                          <div className={`${ele.id == 1 ? "mt-5" : ""}`}>
                            <h3 className="text-xl text-gray-800 font-semibold mb-2">{ele.contentPdfObject.subtitle}</h3>
                            {ele.contentPdfObject.contentPdfData &&
                              ele.contentPdfObject.contentPdfData?.map((item) => (
                                <div key={item.id}>
                                  <div className="flex gap-4">
                                    <img src={item.imgsrc1} alt="" />
                                    <img src={item.imgsrc2} alt="" />
                                  </div>
                                  {item.contetWithBold && (
                                    <div className="mt-10">
                                      {item.contetWithBold?.map((ele) => (
                                        <div key={ele.id} className="mb-1">
                                          <strong className="pr-2">{ele.boldValue}:</strong>
                                          {ele.value}
                                        </div>
                                      ))}
                                    </div>
                                  )}
                                </div>
                              ))}
                            {ele.contentPdfObject.contentPdfData?.map((item) => {
                              return (
                                <div key={item.id} className="flex justify-between items-center mb-2">
                                  {<p>{item.value}</p>}
                                  {item.path && (
                                    <a
                                      href={item.path}
                                      target="_blank"
                                      className="text-red-600 inline-block p-1 rounded-sm border border-transparent hover:border-[#ffb703] hover:text-[#ffb703] md:mr-[67px]"
                                    >
                                      <ImFilePdf size={24} />
                                    </a>
                                  )}
                                </div>
                              );
                            })}
                          </div>
                        </div>
                      ))}
                  </div>
                  <div className="department_gallery_grid">
                    <Fancybox
                      options={{
                        Carousel: {
                          infinite: false,
                        },
                      }}
                    >
                      <div className="abhivyakti_grid">
                        {/* Show only first 6 images visibly */}
                        {ele.tabData[activeTab]?.contentObject?.galleryData
                          ?.slice(0, 6)
                          .map((item) => (
                            <a
                              data-fancybox="gallery"
                              href={item.imgSrc}
                              key={item.id}
                              className="border border-[#ffb703] rounded-md p-4 relative group"
                            >
                              <img
                                className="aspect-[2/1.5] object-cover"
                                src={item.imgSrc}
                                alt="gallery"
                              />
                            </a>
                          ))}

                        {/* Hidden images for Fancybox group, not shown on screen */}
                        {ele.tabData[activeTab]?.contentObject?.galleryData
                          ?.slice(6)
                          .map((item) => (
                            <a
                              data-fancybox="gallery"
                              href={item.imgSrc}
                              key={`hidden-${item.id}`}
                              className="hidden"
                            >
                              <img src={item.imgSrc} alt="gallery hidden" />
                            </a>
                          ))}
                      </div>
                      <div className="flex justify-center items-center">
                        {(ele.tabData[activeTab].contentObject?.galleryData?.length ?? 0) > 6 && (
                              <a
                                href="#"
                                onClick={(e) => {
                                  e.preventDefault();

                                  const firstImage = document.querySelector(
                                    '.abhivyakti_grid [data-fancybox="gallery"]'
                                  ) as HTMLAnchorElement | null;

                                  firstImage?.click();
                                }}
                                className="mt-4 px-6 py-2 bg-[#ffb703] text-white rounded hover:bg-[#e0a300] transition"
                              >
                                View More
                              </a>
                        )}
                      </div>
                    </Fancybox>
                  </div>
                  {ele.tabData[activeTab].contentObject?.vissionData &&
                    ele.tabData[activeTab].contentObject?.vissionData?.map((item) => (
                      <div key={item.id} className="mb-2">
                        <h3 className="text-3xl font-semibold mb-3">{item.title}</h3>
                        {/* <p>{item.content}</p> */}
                        {item.vissionContent &&
                          item.vissionContent.map((ele) => (
                            <div key={ele.id}>
                              <p>{ele.para}</p>
                            </div>
                          ))}

                        {item.missionContent &&
                          item.missionContent.map((ele) => (
                            <div key={ele.id} className="mb-2">
                              <p className="text-justify">
                                <strong>{ele.bold}</strong> {ele.para}
                              </p>
                            </div>
                          ))}
                      </div>
                    ))}
                  <div>
                    {ele.tabData[activeTab].contentObject?.awardsData?.map &&
                      ele.tabData[activeTab].contentObject?.awardsData?.map((ele, index) => (
                        <div className={`w-full flex flex-col ${index % 2 == 0 ? "md:flex-row" : "md:flex-row-reverse"}  justify-between  gap-6 mb-10 `}>
                          <div>
                            <h2 className="text-3xl font-semibold mb-3">{ele.mainTitle}</h2>

                            <h2 className="text-2xl font-semibold mb-3">{ele.awardChildFirst.subTitle}</h2>
                            {ele.awardChildFirst.paraContentChild?.map((item) => (
                              <p className="mb-2">{item.value}</p>
                            ))}
                            <h2 className="text-2xl font-semibold mb-3">{ele.awardChildSecond && ele.awardChildSecond.subTitle}</h2>
                            <ul className="list-decimal grid sm:grid-cols-2 lg:grid-cols-3 ml-4">
                              {ele.awardChildSecond && ele.awardChildSecond.paraContentChild?.map((item) => (
                                <li className="mb-1">{item.value}</li>
                              ))}
                            </ul>
                          </div>
                          <div>
                            <img className="min-w-[350px] w-[350px] aspect-[1/0.7] object-cover" src={ele.imgSrc} alt="" />
                          </div>
                        </div>
                      ))}
                  </div>

                  {/* ===============Awards and achivement second design=============================== */}
                  {!ele.tabData[activeTab].isMode && (
                    <div>
                      {/* {ele.tabData[activeTab].contentObject && ele.tabData[activeTab].contentObject.contentData?.map((item, index) => <h3 key={index}>{item.contentMainTitle}</h3>)} */}
                      <div className="accordian">
                        {ele.tabData[activeTab].contentObject &&
                          ele.tabData[activeTab].contentObject.contentData?.map((item, index) => (
                            <div
                              key={index}
                              className={`mb-4 border-2 overflow-hidden transition-all duration-300  ${activeIndex === index ? "border-[#ffb703] " : "border-gray-100"} rounded-t-lg`}
                            >
                              <div onClick={() => store.dispatch(toggleAccordion(index))} className="flex justify-between items-center px-4 py-3 bg-gray-100 cursor-pointer ">
                                <span className="font-semibold">{item.contentTitle}</span>
                                {activeIndex !== index ? <FaAngleRight /> : <FaAngleDown color="#ffb703" />}
                              </div>
                              <div className={`transition-all duration-300   ${activeIndex === index ? "max-h-[10000px] " : "max-h-0"}`}>
                                <div className="overflow-x-auto p-2">
                                  <table className="min-w-full bg-white border border-gray-300 shadow-md">
                                    <thead>
                                      {item.contentInnerData.headerData.map((ele) => (
                                        <tr className="bg-[#233E6F] text-white uppercase">
                                          <th className="px-6 py-3 text-left text-nowrap">{ele.sNo}</th>
                                          <th className="px-6 py-3 text-left text-nowrap">{ele.name}</th>
                                          <th className="px-6 py-3 text-left text-nowrap">{ele.detailsOfEvent}</th>
                                          <th className="px-6 py-3 text-left text-nowrap">{ele.rank}</th>
                                          <th className="px-6 py-3 text-left text-nowrap">{ele.organizer}</th>
                                          <th className="px-6 py-3 text-left text-nowrap">{ele.level}</th>
                                        </tr>
                                      ))}
                                    </thead>
                                    <tbody>
                                      {item.contentInnerData.rowData.map((employee, index) => (
                                        <tr key={index} className={`border-b   ${index % 2 !== 0 ? "bg-gray-100" : ""}`}>
                                          <td className="px-6 py-3">{employee.sNo}</td>
                                          <td className="px-6 py-3">{employee.name}</td>
                                          <td className="px-6 py-3">{employee.detailsOfEvent}</td>
                                          <td className="px-6 py-3">{employee.rank}</td>
                                          <td className="px-6 py-3">{employee.organizer}</td>
                                          <td className="px-6 py-3">{employee.level}</td>

                                        </tr>
                                      ))}
                                    </tbody>
                                  </table>
                                </div>
                              </div>
                            </div>
                          ))}
                      </div>
                    </div>
                  )}

                  <ul className=" ml-4 mb-4">
                    {ele.tabData[activeTab].tab === "Magazine" &&
                      ele.tabData[activeTab].contentObject?.listItem?.map((item) => (
                        <li className=" text-justify border p-3 rounded-md mb-2" key={item.id}>
                          <div className="flex justify-between items-center ">

                            {/* no */}
                            <span className="text-sm">{item?.listBold}</span>
                            <a
                              target="_blank"
                              href={item?.path}
                              className="text-red-600 inline-block p-1 rounded-sm border border-transparent hover:border-[#ffb703] hover:text-[#ffb703] mr-6 md:mr-9"
                            >
                              <ImFilePdf size={24} />
                            </a>
                          </div>
                        </li>
                      ))}
                  </ul>
                </>
              )



                : isMode === "department-electronics-engineering" ? (
                  <>
                    <ul className=" list-[square] ml-4 mb-4">
                      {ele.tabData[activeTab].tab !== "Magazine" &&
                        ele.tabData[activeTab].contentObject?.listItem?.map((item) => (
                          <li className="yellow text-justify" key={item.id}>
                            <strong>{item?.listBold}</strong> {item.list}
                          </li>
                        ))}
                    </ul>
                    <div className="fm_card">
                      {ele.tabData[activeTab].contentObject &&
                        ele.tabData[activeTab].contentObject?.cardData?.map((item) => (
                          <div key={item.id} className="w-full border border-gray-200  hover:border-[#ffb703] rounded-md p-4">
                            <div className="w-full flex gap-x-4 items-start h-full">
                              <img className="w-[124px] min-w-[124px] h-[127px]  object-cover object-top  " src={item.imgSrc} alt="" />
                              <div className="h-full">
                                <div>
                                  <div className="text-sm font-semibold">{item.name}</div>
                                  <div className="text-sm font-semibold">{item.designation}</div>
                                  {/* <div className="text-sm font-semibold">{item.education}</div> */}
                                  {/* <div className="text-sm font-semibold">{item.email}</div> */}
                                  {/* <div className="text-sm font-semibold">{item.orcid}</div> */}
                                </div>
                                <div className="text-sm mt-4 h-[150px] overflow-y-auto faculty-card-scrollbar pr-3 text-justify">
                                  <p>
                                    {show === item.id
                                      ? item.aboutData
                                      : item.aboutData && truncateString(item.aboutData, 250)}
                                  </p>

                                  {/* Show additional details only after Read More */}
                                  {show === item.id && (
                                    <div className="mt-4 space-y-1 text-left">
                                      {item.education && (
                                        <p>
                                          <span className="font-semibold">Qualification:</span>{" "}
                                          <span className="font-semibold">{item.education}</span>
                                        </p>
                                      )}

                                      {item.email && (
                                        <p>
                                          <span className="font-semibold"></span>{" "}
                                          <a
                                            href={`mailto:${item.email}`}
                                            className="text-black font-semibold hover:underline"
                                          >
                                            {item.email}
                                          </a>
                                        </p>
                                      )}

                                      {item.orcid && (
                                        <p>
                                          <span className="font-semibold"></span>{" "}
                                          <a
                                            href={`https://orcid.org/${item.orcid}`}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-black font-semibold hover:underline"
                                          >
                                            {item.orcid}
                                          </a>
                                        </p>
                                      )}
                                    </div>
                                  )}

                                  <div className="mt-4 flex justify-end">
                                    {item.aboutData &&
                                      item.aboutData.length > 250 &&
                                      show !== item.id && (
                                        <button
                                          onClick={() => showMore(item.id)}
                                          className="bg-[#1B3A6F] text-white px-3 py-1 rounded-full"
                                        >
                                          Read More
                                        </button>
                                      )}
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        ))}
                    </div>
                    <div>
                      {ele.tabData[activeTab] &&
                        ele.tabData[activeTab].contentCard?.map((item, index) => {
                          return (
                            <div key={item.id}>
                              {ele.tabData[activeTab].isLesscontent === true && (
                                <div className="w-full flex flex-col  md:flex-row justify-between  gap-6 md:gap-12 mb-10">
                                  <div className={`${index % 2 !== 0 ? "md:order-2" : "md:order-1"}`}>
                                    <h2 className="font-semibold text-3xl py-2">{item.title}</h2>
                                    <p className="text-justify">{item.laboratory_desc}</p>
                                  </div>
                                  <div className={`${index % 2 !== 0 ? "md:order-1" : "md:order-2"}`}>
                                    <img src={item.imgSrc} alt={`eelab${item.id}`} className="max-w-[500px]" />
                                  </div>
                                </div>
                              )}
                              {ele.tabData[activeTab].isLesscontent === false && (
                                <div className={`w-full flex flex-col  ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse "} justify-between  gap-6 md:gap-12 mb-10`}>
                                  <div>
                                    <h2 className="text-3xl font-semibold">{item.title}</h2>
                                    {item.LaboratoriesContent?.map((item) => (
                                      <div key={item.id} className="mt-4">
                                        <h2 className="text-xl font-semibold mb-2" key={item.id}>
                                          {item.subtitle}
                                        </h2>
                                        {item.paraContentChild?.map((ele) => (
                                          <p className="my-1 text-justify">{ele.value}</p>
                                        ))}
                                      </div>
                                    ))}
                                  </div>

                                  <div>
                                    <img className="w-full max-w-[500px] md:min-w-[500px] aspect-[3/1.65] mb-20 object-cover" src={item.imgSrc} alt="" />
                                  </div>
                                </div>
                              )}
                            </div>
                          );
                        })}
                    </div>
                    <div>
                      {ele.tabData[activeTab] &&
                        ele.tabData[activeTab].content?.map((item) => {
                          return (
                            <div key={item.id} className={`${item.id === 1 ? "mt-6" : "mt-6"}`}>
                              <h2 className="text-3xl font-semibold mb-3 uppercase">{item.title}</h2>
                              {item.paraContentChild.map((ele) => (
                                <p className="mb-2 text-justify">
                                  <strong>{ele?.bold}</strong> {ele.value}
                                </p>
                              ))}
                            </div>
                          );
                        })}
                    </div>
                    <div>
                      {ele.tabData[activeTab] &&
                        ele.tabData[activeTab]?.contentWithPdf?.map((ele) => (
                          <div key={ele.id}>
                            {ele.title && <h2 className="mb-6 text-3xl font-semibold ">{ele.title}</h2>}
                            <div className={`${ele.id == 1 ? "mt-5" : ""}`}>
                              <h3 className="text-xl text-gray-800 font-semibold mb-2">{ele.contentPdfObject.subtitle}</h3>
                              {ele.contentPdfObject.contentPdfData &&
                                ele.contentPdfObject.contentPdfData?.map((item) => (
                                  <div key={item.id}>
                                    <div className="flex gap-4">
                                      <img src={item.imgsrc1} alt="" />
                                      <img src={item.imgsrc2} alt="" />
                                    </div>
                                    {item.contetWithBold && (
                                      <div className="mt-10">
                                        {item.contetWithBold?.map((ele) => (
                                          <div key={ele.id} className="mb-1">
                                            <strong className="pr-2">{ele.boldValue}:</strong>
                                            {ele.value}
                                          </div>
                                        ))}
                                      </div>
                                    )}
                                  </div>
                                ))}
                              {ele.contentPdfObject.contentPdfData?.map((item) => {
                                return (
                                  <div key={item.id} className="flex justify-between items-center mb-2">
                                    {<p>{item.value}</p>}
                                    {item.path && (
                                      <a
                                        href={item.path}
                                        target="_blank"
                                        className="text-red-600 inline-block p-1 rounded-sm border border-transparent hover:border-[#ffb703] hover:text-[#ffb703] md:mr-[67px]"
                                      >
                                        <ImFilePdf size={24} />
                                      </a>
                                    )}
                                  </div>
                                );
                              })}
                            </div>
                          </div>
                        ))}
                    </div>
                    {ele.tabData[activeTab] &&
                      ele.tabData[activeTab].contentObject?.vissionData?.map((item) => (
                        <div key={item.id} className="mb-2">
                          <h3 className="text-3xl font-semibold mb-3">{item.title}</h3>
                          {/* <p>{item.content}</p> */}
                          {item.vissionContent &&
                            item.vissionContent.map((ele) => (
                              <div key={ele.id}>
                                <p>{ele.para}</p>
                              </div>
                            ))}

                          {item.missionContent &&
                            item.missionContent.map((ele) => (
                              <div key={ele.id} className="mb-2">
                                <p className="text-justify">
                                  <strong>{ele.bold}</strong> {ele.para}
                                </p>
                              </div>
                            ))}
                        </div>
                      ))}
                    {/* Awards and Achievement  */}

                    {ele.tabData[activeTab].isMode &&
                      ele.tabData[activeTab].contentObject?.vissionData?.map((item) => (
                        <div key={item.id} className="mb-2">
                          <h3 className="text-3xl font-semibold mb-3">{item.title}</h3>
                          {/* <p>{item.content}</p> */}
                          {item.vissionContent &&
                            item.vissionContent.map((ele) => (
                              <div key={ele.id}>
                                <p>{ele.para}</p>
                              </div>
                            ))}

                          {item.missionContent &&
                            item.missionContent.map((ele) => (
                              <div key={ele.id} className="mb-2">
                                <p className="text-justify">
                                  <strong>{ele.bold}</strong> {ele.para}
                                </p>
                              </div>
                            ))}
                        </div>
                      ))}
                    {/* ===============Awards and achivement second design=============================== */}
                    {!ele.tabData[activeTab].isMode && (
                      <div>
                        {/* {ele.tabData[activeTab].contentObject && ele.tabData[activeTab].contentObject.contentData?.map((item, index) => <h3 key={index}>{item.contentMainTitle}</h3>)} */}
                        <div className="accordian">
                          {ele.tabData[activeTab].contentObject?.contentData &&
                            ele.tabData[activeTab].contentObject.contentData?.map((item, index) => (
                              <div
                                key={index}
                                className={`mb-4 border-2 overflow-hidden transition-all duration-300  ${activeIndex === index ? "border-[#ffb703] " : "border-gray-100"} rounded-t-lg`}
                              >
                                <div onClick={() => store.dispatch(toggleAccordion(index))} className="flex justify-between items-center px-4 py-3 bg-gray-100 cursor-pointer ">
                                  <span className="font-semibold">{item?.contentTitle}</span>
                                  {activeIndex !== index ? <FaAngleRight /> : <FaAngleDown color="#ffb703" />}
                                </div>
                                <div className={`transition-all duration-300   ${activeIndex === index ? "max-h-[10000px] " : "max-h-0"}`}>
                                  <div className="overflow-x-auto p-2">
                                    <table className="min-w-full bg-white border border-gray-300 shadow-md">
                                      <thead>
                                        {item.contentInnerData.headerData.map((ele) => (
                                          <tr className="bg-[#233E6F] text-white uppercase">
                                            <th className="px-6 py-3 text-left text-nowrap">{ele.sNo}</th>
                                            <th className="px-6 py-3 text-left text-nowrap">{ele.name}</th>
                                            <th className="px-6 py-3 text-left text-nowrap">{ele.achievement}</th>
                                            <th className="px-6 py-3 text-left text-nowrap">{ele.titleOfCertification}</th>
                                            <th className="px-6 py-3 text-left text-nowrap">{ele.typeOfCertification}</th>
                                            <th className="px-6 py-3 text-left text-nowrap">{ele.dateOfConduction}</th>
                                            <th className="px-6 py-3 text-left text-nowrap">{ele.organisedBy}</th>
                                          </tr>
                                        ))}
                                      </thead>
                                      <tbody>
                                        {item.contentInnerData.rowData.map((employee, index) => (
                                          <tr key={index} className={`border-b   ${index % 2 !== 0 ? "bg-gray-100" : ""}`}>
                                            <td className="px-6 py-3">{employee.sNo}</td>
                                            <td className="px-6 py-3">{employee.name}</td>
                                            <td className="px-6 py-3">{employee.achievement}</td>
                                            <td className="px-6 py-3">{employee.titleOfCertification}</td>
                                            <td className="px-6 py-3">{employee.typeOfCertification}</td>
                                            <td className="px-6 py-3">{employee.dateOfConduction}</td>
                                            <td className="px-6 py-3">{employee.organisedBy}</td>
                                          </tr>
                                        ))}
                                      </tbody>
                                    </table>
                                  </div>
                                </div>
                              </div>
                            ))}
                        </div>
                      </div>
                    )}
                    {/* for award and achievement section */}
                    <div>
                      {ele.tabData[activeTab].contentObject &&
                        ele.tabData[activeTab].contentObject?.awardsData?.map((ele, index) => (
                          <div className={`w-full flex flex-col ${index % 2 == 0 ? "md:flex-row" : "md:flex-row-reverse"}  justify-between  gap-6 mb-10`}>
                            <div className={`mb-4  ${index % 2 == 0 ? "mr-6" : "ml-6"}`}>
                              <h2 className="text-3xl font-semibold mb-3">{ele.mainTitle}</h2>

                              <h2 className="text-2xl font-semibold mb-3">{ele.awardChildFirst.subTitle}</h2>
                              {ele.awardChildFirst.paraContentChild?.map((item) => (
                                <p className="mb-2 text-justify">{item.value}</p>
                              ))}
                              <h2 className="text-2xl font-semibold mb-3">{ele.awardChildSecond && ele.awardChildSecond.subTitle}</h2>
                              <ul className="list-decimal grid sm:grid-cols-2 lg:grid-cols-3 ml-4">
                                {ele.awardChildSecond && ele.awardChildSecond.paraContentChild?.map((item) => (
                                  <li className="mb-1">{item.value}</li>
                                ))}
                              </ul>
                            </div>
                            <div className="flex items-center">
                              <img className="min-w-[350px] w-[350px] aspect-[1/0.7] object-cover" src={ele.imgSrc} alt="" />
                            </div>
                          </div>
                        ))}
                    </div>
                    <div className="department_gallery_grid">
                      <Fancybox
                        options={{
                          Carousel: {
                            infinite: false,
                          },
                        }}
                      >
                        <div className="abhivyakti_grid">
                          {/* Show only first 6 images visibly */}
                          {ele.tabData[activeTab]?.contentObject?.galleryData
                            ?.slice(0, 6)
                            .map((item) => (
                              <a
                                data-fancybox="gallery"
                                href={item.imgSrc}
                                key={item.id}
                                className="border border-[#ffb703] rounded-md p-4 relative group"
                              >
                                <img
                                  className="aspect-[2/1.5] object-cover object-center"
                                  src={item.imgSrc}
                                  alt="gallery"
                                />
                              </a>
                            ))}

                          {/* Hidden images for Fancybox group, not shown on screen */}
                          {ele.tabData[activeTab]?.contentObject?.galleryData
                            ?.slice(6)
                            .map((item) => (
                              <a
                                data-fancybox="gallery"
                                href={item.imgSrc}
                                key={`hidden-${item.id}`}
                                className="hidden"
                              >
                                <img src={item.imgSrc} alt="gallery hidden" />
                              </a>
                            ))}
                        </div>
                        <div className="flex justify-center items-center">
                          {(ele.tabData[activeTab].contentObject?.galleryData?.length ?? 0) > 6 && (
                                <a
                                  href="#"
                                  onClick={(e) => {
                                    e.preventDefault();

                                    const firstImage = document.querySelector(
                                      '.abhivyakti_grid [data-fancybox="gallery"]'
                                    ) as HTMLAnchorElement | null;

                                    firstImage?.click();
                                  }}
                                  className="mt-4 px-6 py-2 bg-[#ffb703] text-white rounded hover:bg-[#e0a300] transition"
                                >
                                  View More
                                </a>
                          )}
                        </div>
                      </Fancybox>
                    </div>

                    <div>
                      {ele.tabData[activeTab].contentObject &&
                        ele.tabData[activeTab].contentObject?.awardsData?.map((ele, index) => (
                          <div className={`w-full flex flex-col ${index % 2 == 0 ? "md:flex-row" : "md:flex-row-reverse"}  justify-between  gap-6 mb-10`}>
                            <div className={`mb-4  ${index % 2 == 0 ? "mr-6" : "ml-6"}`}>
                              <h2 className="text-3xl font-semibold mb-3">{ele.mainTitle}</h2>

                              <h2 className="text-2xl font-semibold mb-3">{ele.awardChildFirst.subTitle}</h2>
                              {ele.awardChildFirst.paraContentChild?.map((item) => (
                                <p className="mb-2 text-justify">{item.value}</p>
                              ))}
                              <h2 className="text-2xl font-semibold mb-3">{ele.awardChildSecond && ele.awardChildSecond.subTitle}</h2>
                              <ul className="list-decimal grid sm:grid-cols-2 lg:grid-cols-3 ml-4">
                                {ele.awardChildSecond && ele.awardChildSecond.paraContentChild?.map((item) => (
                                  <li className="mb-1">{item.value}</li>
                                ))}
                              </ul>
                            </div>
                            <div className="flex items-center">
                              <img className="min-w-[350px] w-[350px] aspect-[1/0.7] object-cover" src={ele.imgSrc} alt="" />
                            </div>
                          </div>
                        ))}
                    </div>

                    <ul className=" ml-4 mb-4">
                      {ele.tabData[activeTab].tab === "Magazine" &&
                        ele.tabData[activeTab].contentObject?.listItem?.map((item) => (
                          <li className=" text-justify border mb-2 p-3 rounded-md" key={item.id}>
                            <div className="flex justify-between items-center ">


                              <span className="text-sm">{item?.listBold}</span>
                              <a
                                target="_blank"
                                href={item?.path}
                                className="text-red-600 inline-block p-1 rounded-sm border border-transparent hover:border-[#ffb703] hover:text-[#ffb703] mr-6 md:mr-9"
                              >
                                <ImFilePdf size={24} />
                              </a>
                            </div>
                          </li>
                        ))}
                    </ul>


                  </>
                ) : isMode === "library" ? (
                  <>
                    <div>
                      {ele.tabData[activeTab].contentObject?.content && <p className="mb-6">{ele.tabData[activeTab].contentObject?.content}</p>}
                      {ele.tabData[activeTab].contentObject?.tableShow && <CustomLibraryTable data={ele.tabData[activeTab].contentObject?.tableContent} />}
                    </div>
                    <div>
                      {ele.tabData[activeTab].contentObject?.cardItem && <ContentDisplay cards={ele.tabData[activeTab].contentObject?.cardItem} />}
                      {/* @ts-ignore */}
                      {ele.tabData[activeTab].contentObject?.accordianShow && <Accordian isMode="library" items={ele.tabData[activeTab].contentObject?.accordianData} />}
                    </div>
                    <ul className=" list-[square] ml-4 mb-4">
                      {ele.tabData[activeTab].contentObject &&
                        ele.tabData[activeTab].contentObject?.listItem?.map((item) => (
                          <>
                            {item.list && (
                              <li className="yellow text-justify" key={item.id}>
                                <strong>{item?.listBold}</strong> {item.list}
                              </li>
                            )}
                            {item?.boldList && (
                              <li className="yellow text-justify" key={item.id}>
                                <strong>{item?.boldList}</strong>
                              </li>
                            )}
                          </>
                        ))}
                    </ul>
                    <ul className="space-y-2 ml-1 mt-3">
                      {ele.tabData[activeTab].contentObject?.subListItem &&
                        ele.tabData[activeTab].contentObject?.subListItem?.map((item) => (
                          <div key={item.id} className="flex items-center">
                            <IoIosArrowForward className="text-[#ffb703]" />
                            <li className="yellow ml-2" key={item.id}>
                              {item.val}
                            </li>
                          </div>
                        ))}
                    </ul>
                    <div>
                      {ele.tabData[activeTab].contentObject?.listItemWithTitle &&
                        ele.tabData[activeTab].contentObject?.listItemWithTitle?.map((item) => {
                          return (
                            <div key={item.id} className="mt-10 mb-8">
                              <h1 className="font-bold text-2xl text-start lg:text-3xl leading-8 pr-4 mb-3 mt-3" key={item.id}>
                                {item.title}
                              </h1>
                              <div className="w-full border mt-5 mb-5 border-[#ffb703]"></div>
                              <ul className=" list-[square] ml-4 mb-4">
                                {item?.listItem?.map((subItem) => (
                                  <li className="yellow" key={subItem.id}>
                                    <strong>{subItem?.listBold}</strong> {subItem.list}
                                  </li>
                                ))}
                              </ul>
                            </div>
                          );
                        })}
                    </div>
                  </>
                ) : isMode === "academic" ? (
                  <>
                    <div className="sm:flex items-center justify-between py-6 md:py-3 lg:py-0 sm:mb-5">
                      <h3 className="text-3xl lg:text-4xl font-bold text-nowrap text-white ">{ele.tabData[activeTab] && ele.tabData[activeTab].contentObject?.title}</h3>
                      {ele.tabData[activeTab] && ele.tabData[activeTab]?.contentObject?.btnText && (
                        <a
                          target="_blank"
                          href={ele.tabData[activeTab].contentObject?.path}
                          className="bg-[#ffb703] text-[#5B5B5B] pt-2 pb-2 text-xl font-semibold px-6 py-2 rounded-md text-nowrap mt-5 sm:mt-0 border-2 border-[#ffb703] hover:bg-transparent hover:text-[#ffb703] inline-flex gapx-x-1 items-center"
                        >
                          {ele.tabData[activeTab].contentObject?.btnText}
                        </a>
                      )}
                    </div>
                    <div className="min-h-[336px]">
                      {ele.tabData[activeTab].contentObject &&
                        ele.tabData[activeTab]?.contentObject?.paraContent?.map((item) => {
                          return (
                            <p className="sm:mb-5 text-justify" key={item.id}>
                              {item.content}
                            </p>
                          );
                        })}
                      <ul className=" list-[square] ml-4 mb-4">
                        {ele.tabData[activeTab] &&
                          ele.tabData[activeTab]?.contentObject?.listItem?.map((item) => (
                            <li className="yellow text-justify" key={item.id}>
                              {item.list}
                            </li>
                          ))}
                      </ul>
                      <div className="flex justify-between py-6 md:py-3 lg:py-0">
                        <div>
                          {ele.tabData[activeTab].contentObject?.boldItem?.boldText &&
                            ele.tabData[activeTab].contentObject?.boldItem?.boldText?.map((item) => {
                              return (
                                <div className="py-2 cursor-pointer" key={item.id}>
                                  {item.path ? (
                                    <a href={item.path} target="_blank" className="mb-5 font-semibold">
                                      {item.boldContent}
                                    </a>
                                  ) : (
                                    <b className="mb-5">{item.boldContent}</b>
                                  )}
                                </div>
                              );
                            })}
                        </div>
                      </div>
                    </div>
                  </>
                ) : isMode === "department-mechanical-engineering" ? (
                  <>
                    <ul className=" list-[square] ml-4 mb-4">
                      {ele.tabData[activeTab].contentObject &&
                        ele.tabData[activeTab].contentObject?.listItem?.map((item) => (
                          <li className="yellow text-justify" key={item.id}>
                            {item.list}
                          </li>
                        ))}
                    </ul>
                    <div className="fm_card">
                      {ele.tabData[activeTab].contentObject?.cardData &&
                        ele.tabData[activeTab].contentObject?.cardData?.map((item) => (
                          <div key={item.id} className="w-full border border-gray-200  hover:border-[#ffb703] rounded-md p-4">
                            <div className="w-full flex gap-x-4 items-start h-full">
                              <img className="w-[124px] min-w-[124px] h-[127px]  object-cover object-top  " src={item.imgSrc} alt="" />
                              <div className="h-full">
                                <div>
                                  <div className="text-sm font-semibold">{item.education}</div>
                                  <div className="text-sm font-semibold">{item.designation}</div>
                                  <div className="text-sm font-semibold">{item.email}</div>
                                  <div className="text-sm font-semibold">{item.orcid}</div>
                                </div>
                                <div className="text-sm mt-4 h-[150px] overflow-y-auto faculty-card-scrollbar pr-3 text-justify">
                                  {show === item.id ? item.aboutData : item.aboutData && truncateString(item.aboutData, 250)}
                                  <div className="mt-4 flex justify-end">
                                    {item.aboutData && item.aboutData?.length > 250 && show !== item.id && (
                                      <button onClick={() => showMore(item.id)} className="bg-[#1B3A6F] text-white px-3 py-1 rounded-full">
                                        Read More
                                      </button>
                                    )}
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        ))}
                    </div>
                    <div>
                      {ele.tabData[activeTab].contentCard &&
                        ele.tabData[activeTab].contentCard?.map((item) => {
                          return (
                            <div key={item.id} className="w-full flex flex-col  md:flex-row justify-between  gap-6 md:gap-12 mb-10">
                              <div className={`w-[65%] ${item.id % 2 === 0 ? "order-1" : "order-2"}`}>
                                <h2 className="text-3xl font-semibold">{item.title}</h2>
                                {item.LaboratoriesContent?.map((item) => (
                                  <div key={item.id} className="mt-4">
                                    <h2 className=" mb-2" key={item.id}>
                                      {item.subtitle}
                                    </h2>
                                    {item.paraContentChild?.map((ele) => (
                                      <p className="my-1 text-justify">{ele.value}</p>
                                    ))}
                                  </div>
                                ))}
                              </div>

                              <div className={`min-w-[350px]   w-[35%] ${item.id % 2 === 0 ? "order-2" : "order-1"}`}>
                                <img src={item.imgSrc} alt="" className="w-full h-[300px] object-cover relative top-2" />
                              </div>
                            </div>
                          );
                        })}
                    </div>
                    <div>
                      {ele.tabData[activeTab].content &&
                        ele.tabData[activeTab].content?.map((item) => {
                          return (
                            <div key={item.id} className={`${item.id === 1 ? "mt-6" : ""}`}>
                              <h2 className="text-3xl font-semibold mb-3">{item.title}</h2>
                              {item.paraContentChild.map((ele) => (
                                <p className="mb-2 text-justify" key={ele.id}>
                                  <strong>{ele.bold}</strong>
                                  {ele.value}
                                </p>
                              ))}
                            </div>
                          );
                        })}
                    </div>
                    <div>
                      {ele.tabData[activeTab].contentWithPdf &&
                        ele.tabData[activeTab].contentWithPdf?.map((ele) => (
                          <div key={ele.id}>
                            {ele.title && <h2 className="mb-6 text-3xl font-semibold ">{ele.title}</h2>}
                            <div className={`${ele.id == 1 ? "mt-5" : ""}`}>
                              <h3 className="text-xl text-gray-800 font-semibold mb-2">{ele.contentPdfObject.subtitle}</h3>
                              {ele.contentPdfObject.contentPdfData?.map((item) => (
                                <div key={item.id}>
                                  <div className="flex gap-4">
                                    <img src={item.imgsrc1} alt="" />
                                    <img src={item.imgsrc2} alt="" />
                                  </div>
                                  {item.contetWithBold && (
                                    <div className="mt-10">
                                      {item.contetWithBold?.map((ele) => (
                                        <div className="mb-1">
                                          <strong className="pr-2">{ele.boldValue}:</strong>
                                          {ele.value}
                                        </div>
                                      ))}
                                    </div>
                                  )}
                                </div>
                              ))}
                              {ele.contentPdfObject?.contentPdfData?.map((item) => (
                                <div key={item.id} className="flex justify-between items-center mb-2">
                                  {item.value && <p className=" ">{item.value}</p>}
                                  {item.path && (
                                    <a
                                      href={item.path}
                                      target="_blank"
                                      className="text-red-600 inline-block p-1 rounded-sm border border-transparent hover:border-[#ffb703] hover:text-[#ffb703] md:mr-[67px]"
                                    >
                                      <ImFilePdf size={24} />
                                    </a>
                                  )}
                                </div>
                              ))}
                            </div>
                          </div>
                        ))}
                    </div>
                    {ele.tabData[activeTab].contentObject?.vissionData &&
                      ele.tabData[activeTab].contentObject?.vissionData?.map((item) => (
                        <div key={item.id} className="mb-2">
                          <h3 className="text-3xl font-semibold mb-3">{item.title}</h3>
                          {/* <p>{item.content}</p> */}
                          {item.vissionContent &&
                            item.vissionContent.map((ele) => (
                              <div key={ele.id}>
                                <p className="text-justify">{ele.para}</p>
                              </div>
                            ))}

                          {item.missionContent &&
                            item.missionContent.map((ele) => (
                              <div key={ele.id} className="mb-2">
                                <p className="text-justify">
                                  <strong>{ele.bold}</strong> {ele.para}
                                </p>
                              </div>
                            ))}
                        </div>
                      ))}
                  </>
                ) : (
                  <></>
                )
        )}
      </div>
    </div>
  );
};

export default CustomTab;
