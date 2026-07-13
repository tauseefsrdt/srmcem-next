import React from "react";
const img1 = "/images/course/image12.png";
const img2 = "/images/course/image13.png";
import Link from "next/link";
const courses = [
  {
    id: 0,
    name: "B. Pharm.",
    icon: img1,
    path: "/department/pharmacy",
  },
  {
    id: 1,
    name: "D. Pharm.",
    icon: img2,
    path: "/department/pharmacy",
  },
];
const Pharmacy: React.FC = () => {
  return (
    <div className="flex flex-wrap justify-center gap-3 sm:gap-x-8 sm:gap-y-6 mt-5">
      {courses.map((item) => (
        <Link href={item.path || '#'} 
          key={item.id}
          style={{ backgroundImage: `url(${item.icon})` }}
          className={`w-[160px] sm:w-[200px] h-[160px] sm:h-[180px] flex items-center justify-center bg-white border-2 border-[#244271] text-[#244271] transition-all duration-200 "
                }  relative overflow-hidden group cursor-pointer  rounded-[20px]`}
        >
          <div className="z-50 relative flex w-full  justify-center  items-end h-full">
            <div className="text-sm text-center font-medium mb-5 border-gradient border-gradient-green only-top w-full max-w-[150px] text-white py-3">{item.name}</div>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default Pharmacy;
