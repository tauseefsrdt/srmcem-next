import React from "react";
import Classes from "../../utils/styles/Global.module.css";
import { RecruitersData } from "../../data/homeData";

const Recruiters: React.FC = () => {
  return (
    <section className="py-14">
      <div className={`${Classes["container"]}`}>
        <div className="recruiter rounded-[10px] py-14 md:py-20 lg:py-24">
          <div className="z-50 relative">
            <div>
              <h2 className={` text-center text-3xl lg:text-4xl font-bold text-white`}>Our Placement Partner</h2>
            </div>
            <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-6 mt-8 md:mt-10 lg:mt-16 px-5">
              {RecruitersData.map((data, index) => (
                <li key={index} className="flex justify-center items-center  ">
                  <div className=" cursor-pointer py-2  overflow-hidden flex justify-center items-center bg-white">
                    <img src={data.img} alt={`Recruiter ${index + 1}`} className="  object-cover" />
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Recruiters;
