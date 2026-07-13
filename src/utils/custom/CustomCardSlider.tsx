import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const arpan = "/images/outreach/arpan1.jpg";
const blod_donation = "/images/outreach/blod-donation.jpg";
const village = "/images/outreach/village-adaption.jpg";
const plant = "/images/outreach/plantation.jpg";
import Classes from "../../utils/styles/Global.module.css";
import { HoverCardTypes } from "../../types/customDataTypes";

const CustomCardSlider: React.FC = () => {
  // Slider settings
  const settings = {
    dots: true,

    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 3000,
    arrows: false,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const cards: HoverCardTypes[] = [
    {
      frontImage: arpan,
      title: "ARPAN",
      backContent:
        "Arpan is a voluntary donation based activity run by the faculty and staff members of SRMCEM for the welfare of meritorious students in need of financial assistance. Our staff members contribute generously and the same amount is contributed by the college management as well for the welfare of the students.",
    },
    {
      frontImage: blod_donation,
      title: "Blood Donation Camp",
      backContent:
        "SRMCEM organizes Blood Donation Camps every third month. Students, staff and faculty voluntarily participate in blood donation camp. The college has been awarded by His Excellency, Governor and the Health Minister of Uttar Pradesh for proactive participation in blood donation. So far eighteen Blood Donation Camps are successfully organized at SRMCEM. The college volunteers for the blood requirements at the blood banks of King George Medical University (KGMU) Lucknow and Dr. Ram Manohar Lohia Hospital (RMLH) Lucknow.",
    },
    {
      frontImage: village,
      title: "Village Adoption",
      backContent:
        "SRMCEM has adopted vilage Uttardhauana to create awareness with regard to Swacch Bharat Mission of the goverement. The students and the faculty members of the college organize cultural events like Nukkad Natak in the village to generate awareness about Swacch Bharat.",
    },
    {
      frontImage: plant,
      title: "Plantation",
      backContent:
        "Environment Club of the college is a group of concerned students, teachers and volunteers to raise awareness and sensitivity about the conservation and preservation of the environment. They offer programs and activities to encourage others to reduce pollution, plant trees, and more.",
    },
  ];

  return (
    <div className={`${Classes["container"]} pb-20 lg:pb-28`}>
      <Slider {...settings} className="flip-slider placement-drive-slider1">
        {cards.map((card, index) => (
          <HoverCard key={index} frontImage={card.frontImage} backContent={card.backContent} title={card.title} />
        ))}
      </Slider>
    </div>
  );
};

const HoverCard: React.FC<HoverCardTypes> = ({ frontImage, backContent, title }) => {
  const [isHovered, setIsHovered] = useState<boolean>(false);

  return (
    <div
      className=" h-80 md:h-[407px] flex flex-col justify-center items-center cursor-pointer mx-4 my-2"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Card Wrapper with Perspective */}
      <div
        className="relative w-full h-full flex flex-col justify-center items-center"
        style={{
          perspective: "1000px",
        }}
      >
        <div
          className="absolute w-full h-full transition-transform duration-700"
          style={{
            transformStyle: "preserve-3d",
            transform: isHovered ? "rotateY(0deg)" : "rotateY(180deg)",
          }}
        >
          {/* Front Side */}
          <div className="absolute w-full h-full bg-gray-100 rounded-lg shadow-md backface-hidden">
            <img src={frontImage} alt="Front" className="w-full h-full object-cover rounded-lg" />
          </div>
          {/* Back Side */}
          <div
            className="absolute w-full h-full  bg-white rounded-lg shadow-md p-3 sm:p-8 transform rotate-y-180 border border-[#ffb703] text-center flex flex-col justify-center"
            style={{ backfaceVisibility: "hidden" }}
          >
            <div className="max-h-[407px] overflow-y-auto faculty-card-scrollbar">
              <b className="text-gray-800 text-sm md:text-base">{title}</b>
              <p className="text-gray-800 text-sm md:text-base text-center mt-7">{backContent}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomCardSlider;
