import React from "react";
const curve_btn = "/images/curve-btn.png";
import Classes from "../../utils/styles/Global.module.css";
import Counter from "../../utils/custom/Counter";
import { counterDataForHomePage } from "../../data/counterData";
const MemorialCollege: React.FC = () => {
  const handleScroll = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <div id="first" className="w-full -mt-[55px]">
      <div className="circle-part flex justify-center z-[99] relative">
        <img className="cursor-pointer " onClick={() => handleScroll("first")} src={curve_btn} alt="curve" />
      </div>
      <div className={`${Classes["container"]}  `}>
        <div className="memorial rounded-[10px] my-6 lg:my-10">
          <div className="content px-5 xl:px-10 2xl:w-[90%] mx-auto py-4 md:py-8 lg:py-10 z-50 relative">
            {/* <h3 className="text-3xl lg:text-4xl text-white font-bold text-center lg:leading-[50px] mt-5 lg:mt-10">Shri Ramswaroop Memorial College of Engineering & Management</h3> */}
            <p className="leading-7 text-white  text-center mt-5 lg:mt-20">
              SRMCEM has achieved distinction for its value-based institutional culture. Focus on in-depth knowledge and employability enhancement goes hand in hand at SRMCEM.
              SRMCEM is affiliated to Dr. A.P.J. Abdul Kalam Technical University, Lucknow.
            </p>
            <Counter counterData={counterDataForHomePage} classes="counter" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MemorialCollege;
