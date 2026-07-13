import React, { Fragment } from "react";
import { administrativeAllCardData } from "../../data/administrationData";

const Cards: React.FC = () => {
  return (
    <Fragment>
      {administrativeAllCardData.map((item: any) => {
        return (
          <div key={item.id}>
            <h1 className="text-3xl lg:text-4xl font-bold text-center mx-auto">{item.heading}</h1>
            <div className="administration_card my-[2.5rem] sm:my-[3.5rem]">
              {item.cardsContent.map((ele: any) => (
                <div key={ele.id} className="w-full relative">
                  <img
                    className="w-full object-cover object-top   aspect-[1/1] border border-gray-200 hover:border-yellow-500 rounded-2xl transition-all duration-200"
                    src={ele.img}
                    alt="img"
                  />
                  <div className="flex flex-col items-center justify-center rounded-xl bg-[#233e6fa4] text-white absolute bottom-0 left-0 w-full py-1">
                    <h1 className="text-center font-semibold text-white">{ele.name}</h1>
                    <p className="text-center text-sm">{ele.designation}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* <div className="flex items-center justify-center">
              <button
                onClick={() => showHandle(length)}
                className="w-[132px] h-[46px] border-2 uppercase flex justify-center items-center font-semibold border-[#ffb703] bg-[#ffb703] hover:bg-transparent hover:text-[#ffb703] rounded-[5px] cursor-pointer"
              >
                {showBtn ? item.buttonText : "Show Less"}
              </button>
            </div> */}
          </div>
        );
      })}
    </Fragment>
  );
};

export default Cards;
