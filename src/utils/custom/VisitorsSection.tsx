import React from "react";
import Classes from "../styles/Global.module.css";
interface VisitorsSectionProps {
  data: {
    heading: string;
    content: string;
  };
}
const VisitorsTestimonials: React.FC<VisitorsSectionProps> = ({ data }) => {
  const { heading, content } = data;
  return (
    <div className={`${Classes["container"]} py-7 md:py-10 lg:py-14`}>
      <div className="flex flex-col md:flex-row  gap-4 items-stretch  justify-between">
        <div className=" md:border-r-4 border-[#ffb703] flex flex-col justify-center">
          <h2 className="text-3xl lg:text-4xl font-semibold leading-8 pr-4">{heading}</h2>
        </div>
        <div className="md:py-4 leading-8 md:px-4">
          <p>{content}</p>
        </div>
      </div>
    </div>
  );
};
export default VisitorsTestimonials;
