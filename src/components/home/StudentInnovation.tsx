import React from "react";
import Classes from "../../utils/styles/Global.module.css";

const innovation1 = "/images/innovations/innovation1.png";
const innovation2 = "/images/innovations/innovation2.jpg";
const innovation3 = "/images/innovations/innovation3.jpg";
import Slider from "react-slick";

export const InnovationData = [
  {
    id: 0,
    title: "Smokeless Stove",
    icon: innovation3,
    content:
      "The Invention provides a modern, comfortable & all weather air conditioned atmosphere to the passenger on motorbikes. This project is developed by students of Mechanical Engineering.",
    listHeading: "Project Group Members:",
    listData: [
      {
        id: 0,
        item: "Kuldeep Verma - B.Tech (ME)",
      },
      {
        id: 1,
        item: "Kumar Samarth - B.Tech (ME)",
      },
    ],
  },
  {
    id: 1,
    title: "Air Conditioning System for bikers",
    icon: innovation1,
    content: "The project aimed to design and develop a low cost kart with high power to weight ratio and powered by a four stroke I.C Engine.",
    listHeading: "Project Group Members:",
    listData: [
      {
        id: 0,
        item: "Vinamra Shivhare",
      },
      {
        id: 1,
        item: "Ajendra Gahlot",
      },
      {
        id: 2,
        item: "Anas Khan",
      },
      {
        id: 3,
        item: "Anirudh Khare",
      },
      {
        id: 4,
        item: "Anshul Shrivastava",
      },
    ],
  },
  {
    id: 2,
    title: "Go-Kart Using IC Engine",
    icon: innovation2,
    content:
      "The Invention provides a modern, comfortable & all weather air conditioned atmosphere to the passenger on motorbikes. This project is developed by students of Mechanical Engineering.",
    listHeading: "Project Group Members:",
    listData: [
      {
        id: 0,
        item: "Kuldeep Verma - B.Tech (ME)",
      },
      {
        id: 1,
        item: "Kumar Samarth - B.Tech (ME)",
      },
    ],
  },
];
const StudentInnovation: React.FC = () => {
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true, // Enable autoplay
    autoplaySpeed: 3000,
  };
  return (
    <div className={`${Classes["container"]} py-7 md:py-10 lg:py-14`}>
      <h2 className="text-center text-3xl lg:text-4xl font-bold ">Student Innovations</h2>
      <div className="hidden lg:flex gap-8 mt-6 md:mt-8 lg:mt-10">
        <div className="w-full lg:w-[60%] flex flex-col gap-y-8 ">
          {InnovationData.slice(0, 2).map((item) => (
            <div
              key={item.id}
              className="flex  flex-col sm:flex-row gap-5 gap-x-10 sm:items-start border rounded-md  border-[#ffb703]  transition-all duration-200 px-5 py-8"
            >
              <img className="w-full aspect-[27/22] sm:max-w-[270px] h-[220px] object-cover rounded-md" src={item.icon} alt="" />
              <div>
                <p className="font-semibold text-xl  ">{item.title}</p>
                <p className="text-sm">{item.content}</p>
                <p className="font-semibold text-sm mt-2">{item.listHeading}</p>
                <ul className="mt-2 list-[square] ml-4">
                  {item.listData.map((ele) => (
                    <li key={ele.id} className="text-sm yellow">
                      {ele.item}
                    </li>
                  ))}
                </ul>
                {/* <button className=" border-2 border-[#ffb703]  bg-[#ffb703] hover:bg-transparent hover:text-[#ffb703] px-3 py-1 rounded-md mt-14 flex gap-x-2 items-center font-medium">Read More <span><HiArrowNarrowRight /></span> </button> */}
              </div>
            </div>
          ))}
        </div>
        <div className="mt-5 lg:mt-0 w-full lg:w-[40%] flex flex-col gap-y-4 ">
          {InnovationData.slice(2, 3).map((item) => (
            <div
              key={item.id}
              className="flex flex-col gap-5  gap-x-10 sm:flex-row sm:items-start lg:items-start  lg:flex-col  border rounded-md border-[#ffb703] px-5 py-8 h-full"
            >
              <img className="w-full sm:max-w-[270px] lg:max-w-full h-[220px] sm:max-h-[250px] object-cover rounded-md" src={item.icon} alt="" />
              <div>
                <p className="font-semibold text-xl   ">{item.title}</p>
                <p className="text-sm">{item.content}</p>
                <p className="font-semibold text-sm mt-2">{item.listHeading}</p>
                <ul className="mt-2 list-[square] ml-4">
                  {item.listData.map((ele) => (
                    <li key={ele.id} className="text-sm yellow">
                      {ele.item}
                    </li>
                  ))}
                </ul>
                {/* <button className="border-2 border-[#ffb703]  bg-[#ffb703] hover:bg-transparent hover:text-[#ffb703] px-3 py-1 rounded-md mt-14 flex gap-x-2 items-center font-medium">Read More <span><HiArrowNarrowRight /></span> </button> */}
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="lg:hidden mt-8 lg:mt-10">
        <Slider {...settings}>
          {InnovationData.map((item) => (
            <div
              key={item.id}
              className="flex flex-col gap-5  gap-x-10 sm:flex-row sm:items-start lg:items-start  lg:flex-col  border rounded-md border-gray-300 hover:border-[#ffb703] px-5 py-8 h-full"
            >
              <img className="w-full sm:max-w-[270px] lg:max-w-full h-[220px] sm:max-h-[250px] object-cover rounded-md" src={item.icon} alt="" />
              <div>
                <p className="font-semibold text-xl   mt-5">{item.title}</p>
                <p className="text-sm">{item.content}</p>
                <p className="font-semibold text-sm mt-2">{item.listHeading}</p>
                <ul className="mt-2 list-[square] ml-4">
                  {item.listData.map((ele) => (
                    <li key={ele.id} className="text-sm yellow">
                      {ele.item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default StudentInnovation;
