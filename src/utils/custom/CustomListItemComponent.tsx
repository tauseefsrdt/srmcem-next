// CustomComponent.tsx
import React from "react";
import { nestedItemsTypes } from "../../types/accordian-items-type";

interface SubItemProps {
  content: string;
}

interface SectionProps {
  title?: string;
  items?: (string | SubItemProps)[];
  nestedItems?: nestedItemsTypes[]
}

interface CustomListItemComponentProps {
  sections: SectionProps[] | undefined;
}

const CustomListItemComponent: React.FC<CustomListItemComponentProps> = ({ sections }) => {
  return (
    <div className="px-6  w-full mx-auto">
      {sections?.map((section, sectionIndex) => {
        console.log("============", section)
        return (
          <div key={sectionIndex} className="mb-8">
            <h2 className="text-xl font-bold  mb-4">{section.title}</h2>
            <ul className="list-[square]  space-y-2 ml-4">
              {
                section?.nestedItems && section?.nestedItems?.map((value) => (
                  <>
                    {value?.itemsData?.map((item) => <li className="yellow font-semibold">{item}</li>)}
                    <ul className="list-disc ml-4">
                      {value?.subItemsData?.map((item) => <li className="yellow">{item}</li>)}
                    </ul>
                  </>
                ))
              }


              {/* {section?.items?.map((item, itemIndex) => (
                typeof item === "string" ? (
                  <li key={itemIndex} className="flex items-start space-x-2">
                    <span className="text-yellow-500 mt-1">●</span>
                    <span className="text-gray-700">{item}111</span>
                  </li>
                 
                ) : (
                  <li key={itemIndex} className="ml-6">
                    <p className="text-gray-700">{item.content}</p>
                  </li>
                )
              )
              )} */}
            </ul>
          </div>
        )
      })
      }
    </div>
  );
};

export default CustomListItemComponent;