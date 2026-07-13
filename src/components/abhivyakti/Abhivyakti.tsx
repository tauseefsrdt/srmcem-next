import React from "react";
import Classes from "../../utils/styles/Global.module.css";
import CustomOverviewSection from "../../utils/custom/CustomOverviewSection";
import { abhivyaktiData } from "../../data/customOverViewData";
import Fancybox from "./Fancybox";
import { listAndCardData } from "../../data/AbhivyaktiData";
const square = "/images/square-icon.png";
import CustomTopFooter from "../../utils/custom/CustomTopFooter";
import { CustomClubsTopFooterData } from "../../data/customTopFooterData";
const Abhivyakti: React.FC = () => {
  return (
    <div>
      <div className={`${Classes["container"]}`}>
        <CustomOverviewSection data={abhivyaktiData} />
      </div>
      <div className={`${Classes["container"]} py-7 md:py-10 lg:py-14`}>
        {listAndCardData.map((ele) => (
          <div key={ele.id}>
            <ul className="list-[square] abhivyakti-list ml-4 ">
              {ele.list &&
                ele.list.map((item) => (
                  <li className="mb-2" key={item.id}>
                    {item.listContent}
                  </li>
                ))}
            </ul>
            <Fancybox
              options={{
                Carousel: {
                  infinite: false,
                },
              }}
            >
              <div className="abhivyakti_grid mt-10">
                {ele.card.map((item) => (
                  <a data-fancybox="gallery" href={item.bigImgSrc || '#'}  key={item.id} className="border border-[#ffb703] rounded-md p-4 relative group">
                    <img className="w-full h-full object-cover rounded-md" src={item.imgSrc} alt="Gallery" />
                    <span
                      className={`absolute top-0 left-0 w-full h-full transition-all duration-500 bg-[#ffb703] bg-opacity-0 group-hover:bg-opacity-50 
      transform origin-left scale-x-0  flex items-center justify-center
    `}
                    >
                      <img src={square} alt="" />
                    </span>
                  </a>
                ))}
              </div>
            </Fancybox>
          </div>
        ))}
      </div>
      <CustomTopFooter data={CustomClubsTopFooterData} />
    </div>
  );
};

export default Abhivyakti;
