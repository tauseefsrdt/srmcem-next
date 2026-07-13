import CustomOverviewSection from "../../utils/custom/CustomOverviewSection";
import { Event } from "../../data/customOverViewData";
import Classes from "../../utils/styles/Global.module.css";
import { annualFestData, customTabData, internationalConferencesdata } from "../../data/eventsData";
import Slider from "react-slick";
import CustomTopFooter from "../../utils/custom/CustomTopFooter";
import { CustomClubsTopFooterData } from "../../data/customTopFooterData";
import CustomTab from "../../utils/custom/CustomTab";
const Events: React.FC = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 592,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div>
      <div className={`${Classes.container}`}>
        <CustomOverviewSection data={Event} />
      </div>
      <div className="anual-fast text-white ">
        <div className={`${Classes.container} py-7 md:py-10 lg:py-14`}>
          <div className="flex flex-col md:flex-row gap-x-10 md:items-center   py-5 md:py-7 lg:py-10">
            <h3 className="text-3xl lg:text-4xl text-white font-bold text-nowrap lg:min-w-[450px] mb-5 md:mb-0 ">{annualFestData.title}</h3>
            <p className="text-justify">{annualFestData.content}</p>
          </div>
          <div className="mt-10">
            <CustomTab isMode="events" customTabData={customTabData} />
          </div>
        </div>
      </div>
      <div className={`${Classes.container} pb-10 pt-7 md:py-10 lg:py-14`}>
        {internationalConferencesdata.map((ele) => (
          <div key={ele.id}>
            <h3 className="text-3xl lg:text-4xl font-bold text-center">{ele.title}</h3>
            <p className="mt-5">{ele.content}</p>
            <Slider {...settings} className="photo_gallery mt-5 sm:mt-10">
              {ele.sliderImg.map((item) => (
                <img className="w-full" src={item.imgSrc} alt="" />
              ))}
            </Slider>
          </div>
        ))}
      </div>
      <CustomTopFooter data={CustomClubsTopFooterData} />
    </div>
  );
};

export default Events;
