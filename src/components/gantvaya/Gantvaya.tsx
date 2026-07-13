import React from "react";
import Classes from "../../utils/styles/Global.module.css";
import CustomOverviewSection from "../../utils/custom/CustomOverviewSection";
import { gantavyaData } from "../../data/customOverViewData";
import CustomTopFooter from "../../utils/custom/CustomTopFooter";
import { CustomClubsTopFooterData } from "../../data/customTopFooterData";
import { gantavyaPageData } from "../../data/gantavyaPageData";
const Gantvaya: React.FC = () => {
  return (
    <div>
      <div className={`${Classes["container"]}`}>
        <CustomOverviewSection data={gantavyaData} />
      </div>
      <div className={`${Classes["container"]} py-7 md:py-10 lg:py-14`}>
        {gantavyaPageData.map((item) => (
          <>
            <h2 className="text-center text-3xl font-semibold">{item.mainCard.heading}</h2>
            <div className="flex justify-center mt-6">
              <img src={item.mainCard.imgSrc} className="w-full max-w-[700px]" alt="" />
            </div>
            <p className="text-justify mt-6">{item.mainCard.content}</p>
            <div className="py-7 md:py-10 lg:py-14 flex manage_gantvya_card">
              {item.childCard.map((ele) => (
                <div key={ele.id} className="w-full group hover:border-[#ffb703]  bg-white shadow-md rounded-lg border border-gray-200 overflow-hidden">
                  <img className=" aspect-[1/0.65] object-cover" src={ele.imgSrc} alt="" />
                  <h2 className="text-center  font-semibold py-2">{ele.heading}</h2>
                  <div className="h-[200px] overflow-auto px-3">
                    <p>{ele.content}</p>
                  </div>
                </div>
              ))}
            </div>
          </>
        ))}
        {/* <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur iste quos officia, tempore, consectetur sapiente, corporis a earum error corrupti vero? Voluptatem neque adipisci maiores tempore quae, inventore deleniti quasi quis consectetur, iusto sequi illum animi provident eaque ipsa nam fugit at quod rerum atque! Earum nostrum ullam est mollitia error assumenda repudiandae ipsam officia numquam eveniet dolores, officiis fugit velit deleniti expedita iste iusto nihil eius beatae. Tempora cumque eos corrupti facilis, accusantium in sapiente quos libero reiciendis. Earum similique incidunt iure veritatis, ut porro libero rem sint. Itaque quasi alias voluptatum officia nulla, reiciendis voluptates qui praesentium pariatur quam iusto quibusdam perferendis architecto ex aspernatur quis maiores eius. Non est ipsam autem deserunt magnam dolores ratione asperiores repellendus.</p> */}
        {/* {listAndCardData.map((ele) => (
                    <div key={ele.id}>
                        <ul className="list-[square] abhivyakti-list ml-4 ">
                            {ele.list.map((item) => (
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
      transform origin-left scale-x-0 group-hover:scale-x-100 flex items-center justify-center
    `}
                                        ><img src={square} alt="" /></span>
                                    </a>
                                ))}
                            </div>
                        </Fancybox>
                    </div>
                ))} */}
      </div>
      <CustomTopFooter data={CustomClubsTopFooterData} />
    </div>
  );
};

export default Gantvaya;
