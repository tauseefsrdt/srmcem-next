import React from "react";
import Classes from "../../utils/styles/Global.module.css";
const banner4 = "/images/banners/mainbanner.jpg";
import { bannerData } from "../../data/homeData";
// import { MdArrowRightAlt } from "react-icons/md";
// import Link from "next/link";

const Banner: React.FC = () => {
  return (
    <div className="banner-slider overflow-hidden relative ">
      <div className="relative">
        {/* <span className="w-full h-full block absolute top-0 left-0 bg-black bg-opacity-10"></span> */}
        <img className="w-full min-h-[530px] sm:min-h-[600px] md:min-h-[800px] max-h-[calc(100vh-120px)] object-cover   " src={banner4} alt="Banner" />

        <div className="overlay absolute top-0 left-0 w-full h-full flex pt-10 sm:pt-0 items-center ">
          <div className={Classes["container"]}>
            <div className="content-part max-w-[700px] bg-black bg-opacity-50 px-5 py-5 md:py-10 rounded-tl-[50px] transition-all ease-in-out duration-300 rounded-br-[50px] hover:rounded-tl-[0px] hover:rounded-br-[0px]  hover:rounded-tr-[50px] hover:rounded-bl-[50px]">
              <h3 className="lg:text-[21px] text-white font-medium">{bannerData.title}</h3>
              {bannerData.subtitle.map((line, index) => (
                <h2 key={index} className="text-4xl  text-white font-bold  mt-4">
                  {line}
                </h2>
              ))}
              <p className="text-xl text-white  mt-3">{bannerData.description}</p>
            </div>
          
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
