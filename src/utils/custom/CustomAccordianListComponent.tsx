import React from "react";

interface ListItemProps {
  content: string;
}

interface SectionProps {
  sectionTitle?: string;
  sectionSubtitle?: string;
  description?: string;
  listItems?: ListItemProps[];
}

interface CustomAccordianListComponentProps {
  sections: SectionProps[] | undefined;
}

const CustomAccordianListComponent: React.FC<CustomAccordianListComponentProps> = ({ sections }) => {
  return (
    <div className="space-y-2 mb-4">
      {sections?.map((section, sectionIndex) => (
        <div
          key={sectionIndex}
          className="bg-white rounded-lg px-6 w-full mx-auto"
        >
          <b className="text-[#5B5B5B] my-5">{section.sectionTitle}</b>
          {/* Title Section */}
          <h2 className="text-xl font-bold bg-[#244271] text-white px-4 py-2 rounded-md mb-4">
            {/* {section.sectionTitle} */}
            {section.sectionSubtitle}
          </h2>
          {/* {section.sectionSubtitle && (
            <h3 className="text-lg font-semibold text-blue-700 mb-2">
              {section.sectionSubtitle}
            </h3>
          )} */}
          {/* Description */}
          {section.description && (
            <p className="text-gray-700 mb-4 leading-relaxed">
              {section.description}
            </p>
          )}
          {/* List Items */}
          {section.listItems && (
            <ul className="list-[square] ml-8">
              {section.listItems.map((item, itemIndex) => (
                <li key={itemIndex} className="yellow">

                  {item.content}
                </li>
              ))}
            </ul>
          )}
        </div>
      ))}
    </div>
  );
};

export default CustomAccordianListComponent;