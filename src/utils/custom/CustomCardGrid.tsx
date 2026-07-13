import React from "react";
import Classes from "../../utils/styles/Global.module.css";

interface CardProps {
  icon: string;
  title: string;
  pdf: string;
  backgroundImage: string;
}

interface CustomCardGridProps {
  heading: string;
  cards: CardProps[];
}

const CustomCardGrid: React.FC<CustomCardGridProps> = ({ heading, cards }) => {
  return (
    <div className="py-10 px-3 sm:px-5">
      <div className={`${heading !== "" && "bg-blue-50 rounded-xl sm:py-7"}`}>
        <div className={`${Classes["container"]}`}>
          <div className={`${heading !== "" && "bg-blue-50 py-10 px-5 rounded-lg"}`}>
            {/* Heading */}
            {heading && <h2 className="text-4xl font-bold text-center mb-12">{heading}</h2>}

            {/* Cards Section */}
            <div className={`grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-${cards?.length} gap-6 justify-center`}>
              {cards.map((card, index) => (
                <a
                  key={index}
                  href={card.pdf}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative CustomTimingsSection bg-cover bg-center rounded-xl shadow-lg text-white p-8 flex flex-col items-center text-center transform transition-all w-full h-[300px] justify-center duration-200 cursor-pointer"

                >
                  {/* Icon */}
                  <div className="relative z-10 mb-4">
                    <img src={card.icon} alt="icon" className="h-16 w-16 object-contain" />
                  </div>

                  {/* Title */}
                  <h3 className="relative z-10 text-2xl text-white font-semibold">{card.title}</h3>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomCardGrid;
