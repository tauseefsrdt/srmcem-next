import React from "react";
const img1 = "/images/course/image1.png";
const img2 = "/images/course/image2.png";
const img3 = "/images/course/image3.png";
const img4 = "/images/course/image4.png";
const img5 = "/images/course/image5.png";
const img6 = "/images/course/image6.png";
const img7 = "/images/course/image7.png";
const img8 = "/images/course/image8.png";
const img9 = "/images/course/image9.png";
const img10 = "/images/course/image10.png";
import Link from "next/link";
const courses = [
  {
    id: 1,
    name: " Computer Science & Engineering",
    icon: img1,
    path: "/department/computer-science",
  },
  {
    id: 2,
    name: "Computer Science & Engg (AI & ML)",
    icon: img2,
    path: "/department/cse-ai-ml",
  },
  {
    id: 3,
    name: "Computer Science & Engg (Data Science)",
    icon: img3,
    path: "/department/data-science",
  },
  {
    id: 4,
    name: "Computer Science & Engg (IOT)",
    icon: img4,
    path: "/department/iot",
  },
  {
    id: 5,
    name: "Computer Science & Engg (Cyber Security)",
    icon: img5,
    path: "/department/cyber-cecurity",
  },
  {
    id: 6,
    name: "Electronic & Communication Engineering",
    icon: img10,
    path: "/department/electronics&communication-engineering",
  },
  {
    id: 7,
    name: "Information Technology",
    icon: img6,
    path: "/department/it",
  },
  {
    id: 8,
    name: "Mechanical Engineering",
    icon: img7,
    path: "/department/mechanical-engineering",
  },
  {
    id: 9,
    name: "Civil Engineering",
    icon: img8,
    path: "/department/civil-engineering",
  },
  {
    id: 10,
    name: "Electrical Engineering",
    icon: img9,
    path: "/department/electrical-engineering",
  },

];
const Engeenring: React.FC = () => {
  return (
    <div className="flex flex-wrap justify-center gap-4 sm:gap-x-8 sm:gap-y-6 mt-5">
      {courses.map((item) => (
        <Link href={item.path || '#'} 
          key={item.id}
          style={{ backgroundImage: `url(${item.icon})` }}
          className={`w-[160px] sm:w-[200px] h-[160px] sm:h-[180px] flex items-center justify-center bg-white border-2 border-[#244271] text-[#244271] transition-all duration-200 "
            }  relative overflow-hidden group cursor-pointer  rounded-[20px]`}
        >
          <div className="z-50 relative flex w-full  justify-center  items-end h-full">
            <div className="text-sm text-center font-medium mb-5 border-gradient border-gradient-green only-top w-full  text-white py-3">{item.name}</div>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default Engeenring;
