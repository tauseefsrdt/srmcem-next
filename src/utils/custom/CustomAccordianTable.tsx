import React from "react";
import { FaAngleDown, FaAngleRight } from "react-icons/fa";
import { RootState, store } from "../../store";
import { toggleAccordion } from "../../store/ui/ui-slice";
import { useSelector } from "react-redux";
import CustomTable from "./CustomTable";
import NewslettersTable from "../../components/newsletters/NewslettersTable";

const CustomAccordianTable: React.FC<any> = ({ data, isMode }) => {
  console.log(data, "ooooooooooooooooooooooo");
  const { activeIndex } = useSelector((state: RootState) => state.ui);
  return (
    <div className="accordian">
      {data.map((item: any, index: any) => (
        <div className={`mb-4 border-2 overflow-hidden transition-all duration-300  ${activeIndex === index ? "border-[#ffb703] " : "border-gray-100"} rounded-t-lg`}>
          <div onClick={() => store.dispatch(toggleAccordion(index))} className="flex justify-between items-center px-4 py-3 bg-gray-100 cursor-pointer ">
            <span className="font-semibold">{item?.title}</span>
            {activeIndex !== index ? <FaAngleRight /> : <FaAngleDown color="#ffb703" />}
          </div>
          <div className={`transition-all duration-300 overflow-hidden  ${activeIndex === index ? "max-h-[10000px] " : "max-h-0"}`}>
            {isMode === "achievementData" ? (
              <CustomTable data={item?.achievementsTableContent} header={item?.achievementsTableHeader} />
            ) : isMode === "newsletterData" ? (
              <NewslettersTable data={item?.achievementsTableContent} />
            ) : null}
          </div>
        </div>
      ))}
    </div>
  );
};

export default CustomAccordianTable;
