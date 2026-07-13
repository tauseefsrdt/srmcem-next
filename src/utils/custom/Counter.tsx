import React from "react";
import { counterDataType } from "../../data/counterData";
import CountUp from "react-countup";

interface counterDataPropsType {
  counterData: counterDataType[];
  classes?: any;
}
const Counter: React.FC<counterDataPropsType> = ({ counterData, classes }) => {
  return (
    <div className={`parent-box ${classes ? classes : ""}   py-7 md:py-10 lg:py-14`}>
      {counterData.map((item: any) => (
        <div key={item.id}>
          <h1 className={`text-xl sm:text-3xl lg:text-4xl font-semibold ${item.icon ? "text-white" : "text-[#ffb703]"}   text-center flex items-center justify-center`}>
            {item.icon && (
              <span className="pt-2 pr-1">
                <img src={item.icon} alt="" />
              </span>
            )}{" "}
            <CountUp start={0} end={Number(item.value)} duration={3} separator="" suffix={item.suffix} enableScrollSpy={true}>
              {({ countUpRef }) => <span ref={countUpRef} />}
            </CountUp>
            {/* {item.value} */}
          </h1>
          <p className={`text-sm sm:text-base md:text-xl text-manulay-center text-white  mt-3`}>{item.label}</p>
        </div>
      ))}
    </div>
  );
};

export default Counter;
