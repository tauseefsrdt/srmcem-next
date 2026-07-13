// import React from 'react';
// import { newsData } from "../../data/new-home/homeData";
// import {
//   section,
//   eyebrow,
//   sectionTitle,
//   pill,
//   linkArrow,
//   glassSheen,
// } from '../../utils/new-home/tw';
// import Icon from './Icon';
// import SlickSlider from 'react-slick';
// import 'slick-carousel/slick/slick.css';
// import 'slick-carousel/slick/slick-theme.css';

// const Slider =
//   (SlickSlider as unknown as { default?: typeof SlickSlider }).default ??
//   SlickSlider;

// const sliderSettings = {
//   dots: false,
//   infinite: true,
//   speed: 500,
//   slidesToShow: 1,
//   slidesToScroll: 1,
//   arrows: true,
//   autoplay: true,
//   autoplaySpeed: 4000,
// };

// const News = () => {
//   const featured = newsData[0];
//   const sideItems = newsData.slice(1);

//   return (
//     <section className=" bg-[linear-gradient(180deg,#FFFFFF_0%,#DBC5C5_100%)]">
//       <div className={`${section}`} id="news">
//         <div className="mb-14 reveal">
//           <div className={`${eyebrow} before:!bg-[#C11E24]`}>Latest Events &amp; News</div>
//           <h2 className={`${sectionTitle} text-ink`}>What's Happening at <span className="text-[#C11E24]">SRMCEM</span></h2>
//         </div>

//         <div className="grid grid-cols-1 min-[993px]:grid-cols-[1.2fr_1fr] gap-6 reveal">
//           {/* Featured story with slider */}
//           <article className="group relative overflow-hidden flex flex-col bg-white/70 backdrop-blur-glass border border-[rgba(15,47,87,0.10)] rounded-lg shadow-card transition-all duration-[400ms] ease-out hover:-translate-y-1.5 hover:bg-white hover:border-navy-mid/30 hover:shadow-hover">
//             <span className={glassSheen} aria-hidden />
//             <div className="relative h-[300px] max-[992px]:h-[230px] overflow-hidden bg-navy-mid/10 [&_.slick-slider]:h-full [&_.slick-list]:h-full [&_.slick-track]:h-full [&_.slick-slide>div]:h-full">
//               {featured.image.imagePart.length > 1 ? (
//                 <Slider {...sliderSettings} className="h-full">
//                   {featured.image.imagePart.map((src, idx) => (
//                     <div key={idx} className="relative h-full">
//                       <img
//                         src={src}
//                         alt={`${featured.title} ${idx + 1}`}
//                         loading="lazy"
//                         className="w-full h-[300px] max-[992px]:h-[230px] object-cover transition-transform duration-500 group-hover:scale-105"
//                       />
//                       <span className="absolute inset-0 bg-[linear-gradient(180deg,transparent_45%,rgba(7,22,43,0.55)_100%)]" aria-hidden />
//                     </div>
//                   ))}
//                 </Slider>
//               ) : (
//                 <>
//                   <img
//                     src={featured.image.imagePart[0]}
//                     alt={featured.title}
//                     loading="lazy"
//                     className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
//                   />
//                   <span className="absolute inset-0 bg-[linear-gradient(180deg,transparent_45%,rgba(7,22,43,0.55)_100%)]" aria-hidden />
//                 </>
//               )}
//               <span className={`${pill} bg-[#C11E24]/15 border border-[#C11E24]/40 text-[#8F171C] absolute top-4 left-4 z-[2]`}>Featured</span>
//               <div className="absolute left-5 bottom-4 z-[2] inline-flex items-center gap-2 text-[12px] font-semibold text-white">
//                 <Icon name="calendar" className="w-4 h-4 text-[#DBC5C5]" /> {featured.date}
//               </div>
//             </div>
//             <div className="p-4 sm:p-8 flex flex-col flex-1">
//               <h3 className="font-serif font-bold text-lg sm:text-[24px] leading-[1.3] text-ink mb-3">{featured.title}</h3>
//               <p className="text-[14px] leading-[1.65] text-brand-gray mb-6 line-clamp-3">{featured.description}</p>
//               <a href="#" className={`${linkArrow} mt-auto`}>Read More →</a>
//             </div>
//           </article>

//           {/* Side list with thumbnails */}
//           <div className="flex flex-col gap-3">
//             {sideItems.map((e, i) => (
//               <a
//                 key={i}
//                 href="#"
//                 className="group flex items-center gap-4 p-3.5 bg-white/70 backdrop-blur-glass border border-[rgba(15,47,87,0.10)] rounded-[14px] shadow-card transition-all duration-[400ms] ease-out hover:-translate-y-1 hover:bg-white hover:border-navy-mid/30 hover:shadow-hover"
//               >
//                 <div className="relative w-[88px] h-[72px] shrink-0 overflow-hidden rounded-[11px] bg-navy-mid/10 ring-1 ring-[rgba(15,47,87,0.10)]">
//                   <img
//                     src={e.image.imagePart[0]}
//                     alt={e.title}
//                     loading="lazy"
//                     className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
//                   />
//                 </div>
//                 <div className="min-w-0 flex-1">
//                   <div className="font-bold text-[15px] leading-[1.35] text-navy-dark mb-1 transition-colors duration-300 group-hover:text-[#C11E24] line-clamp-2">{e.title}</div>
//                   {/* <div className="text-[12px] text-brand-gray">{e.date}</div> */}
//                   <div className=" inline-flex items-center gap-2 text-[12px] font-semibol">
//                     <Icon name="calendar" className="w-4 h-4 text-[#C11E24]" /> {e.date}
//                   </div>
//                 </div>
//                 <Icon name="arrow-right" className="w-4 h-4 shrink-0 text-navy-mid/50 transition-all duration-300 group-hover:translate-x-1 group-hover:text-[#C11E24]" />
//               </a>
//             ))}
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default News;


import React, { useEffect, useState } from "react";
// import Classes from "../../utils/styles/Global.module.css";
import { newsData } from "../../data/homeData";
import Slider from "react-slick";
import { FaRegCalendar, FaTimes, FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../store";
import { fetchAllEvents } from "../../store/events/eventsThunk";
import { section } from "../../utils/new-home/tw";
import { FaArrowRightLong } from "react-icons/fa6";

const BigNextArrow = ({ onClick }: any) => {
  return (
    <button
      type="button"
      onClick={onClick}
      className="absolute right-2 top-1/2 -translate-y-1/2 z-10 bg-white shadow-md rounded-full w-10 h-10 flex items-center justify-center border"
    >
      <FaChevronRight size={14} />
    </button>
  );
};

const BigPrevArrow = ({ onClick }: any) => {
  return (
    <button
      type="button"
      onClick={onClick}
      className="absolute left-2 top-1/2 -translate-y-1/2 z-10 bg-white shadow-md rounded-full w-10 h-10 flex items-center justify-center border"
    >
      <FaChevronLeft size={14} />
    </button>
  );
};

const SmallNextArrow = ({ onClick }: any) => {
  return (
    <button
      type="button"
      onClick={onClick}
      className="absolute -right-3 top-1/2 -translate-y-1/2 z-10 bg-white shadow-md rounded-full w-7 h-7 flex items-center justify-center border"
    >
      <FaChevronRight size={10} />
    </button>
  );
};

const SmallPrevArrow = ({ onClick }: any) => {
  return (
    <button
      type="button"
      onClick={onClick}
      className="absolute -left-3 top-1/2 -translate-y-1/2 z-10 bg-white shadow-md rounded-full w-7 h-7 flex items-center justify-center border"
    >
      <FaChevronLeft size={10} />
    </button>
  );
};

/* Base settings */
const baseSliderSettings = {
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: false,
};

/* Small image sliders (right cards) */
const smallImageSliderSettings = {
  ...baseSliderSettings,
  nextArrow: <SmallNextArrow />,
  prevArrow: <SmallPrevArrow />,
};

/* Big image sliders (left card + modal) */
const bigImageSliderSettings = {
  ...baseSliderSettings,
  dots: true,
  nextArrow: <BigNextArrow />,
  prevArrow: <BigPrevArrow />,
};

/* Card slider only */
const cardSliderSettings = {
  ...baseSliderSettings,
  arrows: false,
};

const mobileCardSliderSettings = {
  ...cardSliderSettings,
  dots: true,
  infinite: true,
};

const NewsCard = ({ image, description, date, onReadMore, title }: any) => {
  const [maxLength, setMaxLength] = React.useState(70);

  React.useEffect(() => {
    const updateLength = () => {
      if (window.innerWidth >= 1480) {
        setMaxLength(120);
      } else {
        setMaxLength(40);
      }
    };

    updateLength();
    window.addEventListener("resize", updateLength);

    return () => window.removeEventListener("resize", updateLength);
  }, []);

  const truncatedDesc =
    description.length > maxLength
      ? description.slice(0, maxLength) + "..."
      : description;

  return (
    <div className="lg:flex items-center gap-x-5 border p-3 rounded-md border-[#C11E24] shadow-card bg-white">
      <div className="w-full max-w-[120px] xl:max-w-[160px] shrink-0 relative overflow-visible">
        {image.imagePart?.length > 1 ? (
          <Slider
            {...smallImageSliderSettings}
            arrows={image.imagePart?.length > 1}
            infinite={image.imagePart?.length > 1}
          >
            {image.imagePart.map((img: string, i: number) => (
              <div key={i} className="h-[120px] xl:h-[160px] flex items-center justify-center">
                <img
                  src={img}
                  alt="event"
                  className="w-full h-full object-cover rounded-md"
                />
              </div>
            ))}
          </Slider>
        ) : (
          <img
            src={image.imagePart?.[0]}
            alt="event"
            className="w-full h-[120px] xl:h-[160px] object-cover rounded-md"
          />
        )}
      </div>

      <div className="flex-1">
        <h3 className="font-semibold text-sm mb-2">{title}</h3>

        <div className="flex items-center gap-x-2 text-sm font-medium">
          <FaRegCalendar color="#3f9cbb" />
          {date}
        </div>

        <p className="mt-2 text-sm text-justify">{truncatedDesc}</p>

        {description.length > maxLength && (
          <div className="flex items-center justify-end mt-2">
            <button
              className="flex items-center gap-1 text-[#C11E24] "
              onClick={onReadMore}
            >
              Read More <FaArrowRightLong />
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

const NewsCard1 = ({ image, description, date, onReadMore, title }: any) => {
  const truncatedDesc =
    description.length > 220
      ? description.slice(0, 220) + "..."
      : description;

  return (
    <div className="w-full cursor-pointer relative">
      {image.imagePart.length > 1 ? (
        <Slider
          className="flip-slider placement-drive-slider1 one"
          {...bigImageSliderSettings}
          arrows={image.imagePart?.length > 1}
          infinite={image.imagePart?.length > 1}
        >
          {image.imagePart?.map((img: string, i: number) => (
            <div key={i} className="mb-4 w-full h-[250px] 2xl:h-[400px] flex items-center justify-center">
              <div className="w-full h-full flex items-center justify-center">
                <img
                  src={img}
                  alt="event"
                  className="block max-w-full max-h-full object-contain rounded-md mx-auto"
                />
              </div>
            </div>
          ))}
        </Slider>
      ) : (
        <>
          {image.imagePart?.map((img: string, i: number) => (
            <div
              key={i}
              className="mb-4 w-full h-[250px] 2xl:h-[400px] bg-white rounded-md flex items-center justify-center overflow-hidden"
            >
              <img
                src={img}
                alt="event"
                className="max-w-full max-h-full object-contain rounded-md"
              />
            </div>
          ))}
        </>
      )}

      <div className="w-full">
        <h3 className="font-semibold text-lg mt-6 mb-2">{title}</h3>

        <div className="flex items-center gap-x-2 font-medium">
          <FaRegCalendar color="#3f9cbb" />
          {date}
        </div>

        <p className="mt-2">{truncatedDesc}</p>

        {description.length > 220 && (
          <div className="flex items-center justify-end mt-2">
            <button
              className=" text-[#C11E24] flex items-center gap-1"
              onClick={onReadMore}
            >
              Read More <FaArrowRightLong />
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

const News: React.FC = () => {
  const [selectedNews, setSelectedNews] = useState<any>(null);
  const dispatch = useDispatch<AppDispatch>();
  //@ts-ignore
  const { data } = useSelector((state: RootState) => state.getAllEvents);

  const handleReadMore = (news: any) => setSelectedNews(news);
  const closeModal = () => setSelectedNews(null);

  useEffect(() => {
    if (selectedNews == null) {
      document.body.style.height = "auto";
      document.body.style.overflow = "auto";
    } else {
      document.body.style.height = "100vh";
      document.body.style.overflow = "hidden";
    }

    return () => {
      document.body.style.height = "auto";
      document.body.style.overflow = "auto";
    };
  }, [selectedNews]);

  useEffect(() => {
    dispatch(fetchAllEvents());
  }, [dispatch]);

  return (
    <div className=" bg-[linear-gradient(180deg,#FFFFFF_0%,#DBC5C5_100%)]">
      <div className={`${section}`} id="news">
        <h2 className="text-center text-3xl lg:text-4xl font-bold">
          Latest News and Events
        </h2>

        <p className="text-center mt-3">
          On the college’s dynamic campus, you will be part of a diverse and inclusive academic community.
        </p>

        <div className="hidden lg:flex gap-x-10 mt-10">
          <div className="w-full lg:w-[60%] border p-3 rounded-md border-[#C11E24] shadow-card bg-white">
            {newsData.slice(0, 1).map((news) => (
              <NewsCard1
                key={news.id}
                title={news.title}
                image={news.image}
                date={news.date}
                description={news.description}
                onReadMore={() => handleReadMore(news)}
              />
            ))}
          </div>

          <div className="w-full lg:w-[40%] flex flex-col gap-y-5">
            {newsData.slice(1, 4).map((news) => (
              <NewsCard
                title={news.title}
                key={news.id}
                image={news.image}
                date={news.date}
                description={news.description}
                onReadMore={() => handleReadMore(news)}
              />
            ))}
          </div>
        </div>

        <div className="lg:hidden mt-5">
          <Slider className="flip-slider placement-drive-slider1 one" {...mobileCardSliderSettings}>
            {newsData.map((news) => (
              <div key={news.id} className="border min-h-[450px] p-3 rounded-md border-[#C11E24]">
                <NewsCard1
                  title={news.title}
                  image={news.image}
                  date={news.date}
                  description={news.description}
                  onReadMore={() => handleReadMore(news)}
                />
              </div>
            ))}
          </Slider>
        </div>

        {selectedNews && (
          <div className="fixed inset-0 flex items-center justify-center bg-black/50 p-4 z-[9999]">
            <div className="relative bg-white px-8 py-8 rounded-md shadow-lg max-w-2xl w-full">
              <button className="absolute top-2 right-2" onClick={closeModal}>
                <FaTimes size={20} />
              </button>

              <div className="w-full max-h-[500px] lg:max-h-[600px] overflow-y-auto">
                {selectedNews.image.imagePart.length > 1 ? (
                  <Slider
                    className="flip-slider placement-drive-slider1 two"
                    {...bigImageSliderSettings}
                    arrows={selectedNews.image.imagePart?.length > 1}
                    infinite={selectedNews.image.imagePart?.length > 1}
                  >
                    {selectedNews.image.imagePart.map((img: string, i: number) => (
                      <div key={i}>
                        <img
                          src={img}
                          alt="Event"
                          className="w-full h-[320px] object-contain border rounded-md bg-white"
                        />
                      </div>
                    ))}
                  </Slider>
                ) : (
                  <>
                    {selectedNews.image.imagePart.map((img: string, i: number) => (
                      <img
                        key={i}
                        src={img}
                        alt="Event"
                        className="w-full h-[320px] object-contain border rounded-md bg-white"
                      />
                    ))}
                  </>
                )}

                <h3 className="font-semibold text-lg mt-8 mb-2">{selectedNews.title}</h3>

                <div className="flex items-center gap-x-2 font-medium">
                  <FaRegCalendar color="#3f9cbb" />
                  {selectedNews.date}
                </div>

                <p className="mt-3 text-justify">{selectedNews.description}</p>

                {selectedNews.guest && (
                  <div className="mt-4">
                    <span className="font-bold">Chief Guest: </span>
                    <p>{selectedNews.guest}</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default News;
