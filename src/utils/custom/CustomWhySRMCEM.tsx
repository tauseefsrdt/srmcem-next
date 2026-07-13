import React from "react";
import Classes from "../styles/Global.module.css";

interface CardProps {
  icon: string;
  title?: string;
  description: string;
  backgroundImage: string;
}

interface CustomWhySRMCEMProps {
  heading: string;
  cards: CardProps[];
}

const CustomWhySRMCEM: React.FC<CustomWhySRMCEMProps> = ({ heading, cards }) => {
  const gridColsClass =
    cards.length === 1 ? "sm:grid-cols-1" :
      cards.length === 2 ? "sm:grid-cols-2" :
        cards.length === 3 ? "sm:grid-cols-2 md:grid-cols-3" :
          "sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4";

  return (
    <div className={`${Classes["container"]} p-7 md:p-10 lg:p-14 `}>
      <div className="bg-[#E9F4FFB8] rounded-lg py-10 md:py-16 lg:py-24 px-7 md:px-10 lg:px-14">
        {/* Heading */}
        <h1 className="text-center md:text-start text-3xl lg:text-4xl text-[#000000] font-bold mb-12">{heading}</h1>
        {/* Cards Section */}
        <div className={`grid ${gridColsClass} gap-6 justify-center`}>
          {cards.map((card, index) => (
            <div
              key={index}
              className="CustomTimingsSection relative bg-cover bg-center rounded-lg shadow-md text-white px-6 py-10 md:py-18 lg:py-24 flex flex-col items-center text-center transition-all duration-200"

            >
              <div className="absolute inset-0 bg-opacity-60 rounded-lg"></div>
              {/* Icon */}
              <div className="relative z-10 text-[#ffb703] mb-8">
                <img className="w-[70px]" src={card.icon} alt="icon" />
              </div>
              {/* Title */}
              {card.title &&
                <h3 className="relative z-10 text-xl font-semibold mb-2">
                  {card.title}
                </h3>
              }
              {/* Description */}
              <p className="relative z-10 text-sm font-semibold text-center">{card.description}</p>
            </div>
          ))}
        </div>

      </div>

    </div>
  );
};

export default CustomWhySRMCEM;