import React from "react";
import { cardItemType } from "../../types/customDataTypes";

const InfoCard: React.FC<cardItemType> = ({ title, content, imageUrl, index }) => {
  console.log(index, "index=====================")
  return (
    <div className={`flex flex-col items-start mt-5 mb-5 p-5`}>
      <div className={`flex flex-col  w-full gap-10 ${index !== undefined && index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"}`}>
        <div className="w-full lg:w-[60%]">
          <>
            <h2 className="text-4xl lg:text-2xl leading-8 pr-4 mb-3 mt-3 font-extrabold">{title}</h2>
            {content?.map((item, i) => (
              <p key={i} className={`mt-4`}>
                {item?.contentItem}
              </p>
            ))}
          </>
        </div>
        <div className="w-full lg:w-[40%]">
          <img className="w-full" src={imageUrl} alt="" />
        </div>
      </div>
    </div>
  );
};

interface Props {
  cards: cardItemType[];
}

const ContentDisplay: React.FC<Props> = ({ cards }) => {
  return (
    <div className="">
      {cards.map((card, index) => (
        <InfoCard key={index} index={index} title={card.title} content={card.content} imageUrl={card.imageUrl} />
      ))}
    </div>
  );
};

export default ContentDisplay;
