import React from "react";
import { otherDataTypes } from "../../types/home-data-type";

interface CustomOverviewSectionProps {
  data: {
    heading: string;
    content: string;
    otherData?: otherDataTypes[];
  };
}

const CustomOverviewSection: React.FC<CustomOverviewSectionProps> = ({ data }) => {
  const { heading, content, otherData } = data;

  // 🔹 Split content into lines (for handling bullets)
  const lines = content.split("\n").filter((line) => line.trim() !== "");

  return (
    <div className="py-7 md:py-10 lg:py-14">
      <div className="flex flex-col gap-4 items-stretch justify-between md:flex-row">

        {/* LEFT HEADING */}
        <div
          className={`w-auto ${otherData && otherData.length > 0
              ? "md:border-r-4"
              : "border-l-4 pl-2 md:pl-0 md:border-l-0 md:border-r-4"
            } border-[#ffb703] flex flex-col justify-center`}
        >
          <h2 className="text-3xl lg:text-4xl font-semibold leading-8 pr-4 sm:min-w-[350px]">
            {heading}
          </h2>
        </div>

        {/* RIGHT CONTENT (NOW SUPPORTS BULLETS) */}
        <div className={`${otherData && otherData.length > 0 ? "" : "md:pl-8 md:py-4"}`}>

          {lines.map((line, index) => {
            // 🔸 Bullet detection
            if (line.trim().startsWith("-")) {
              return (
                <ul key={index} className="list-disc ml-5 mt-2">
                  <li>{line.replace("- ", "")}</li>
                </ul>
              );
            }

            // 🔸 Normal paragraph
            return (
              <p key={index} className="text-justify mt-2">
                {line}
              </p>
            );
          })}

        </div>
      </div>

      {/* OTHER DATA SECTION */}
      {otherData && (
        <div className="pt-7 md:pt-10 lg:pt-14">
          {otherData.map((ele, index) => (
            <React.Fragment key={index}>

              {/* PARAGRAPHS */}
              <div>
                {ele.paraContent.map((para, i) => {
                  const isBold = para.startsWith("**") && para.endsWith("**");

                  return (
                    <p
                      key={i}
                      className={`text-justify ${i === 0 ? "mt-1.5" : "mt-6"} ${isBold ? "font-semibold" : ""
                        }`}
                    >
                      {isBold ? para.slice(2, -2) : para}
                    </p>
                  );
                })}
              </div>

              {/* LIST */}
              {ele.listContent && (
                <ul className="list-[square] ml-4 mt-4 space-y-1">
                  {ele.listContent.map((item) => (
                    <li key={item.id}>
                      <span className="font-semibold">{item.boldItem}</span>
                      {item.item}
                    </li>
                  ))}
                </ul>
              )}

              {/* ELIGIBILITY */}
              {ele.eligibility && (
                <div className="mt-4">
                  <p className="font-semibold">Eligibility:</p>

                  {(() => {
                    const lines = ele.eligibility.split("\n").filter(Boolean);
                    let listBuffer: string[] = [];

                    return lines.map((line, index) => {
                      const isBullet = line.trim().startsWith("-");

                      if (isBullet) {
                        listBuffer.push(line.replace("- ", ""));

                        const nextLine = lines[index + 1];
                        const isLastBullet =
                          !nextLine || !nextLine.trim().startsWith("-");

                        if (isLastBullet) {
                          const list = (
                            <ul key={index} className="list-disc ml-5 mt-2 space-y-1">
                              {listBuffer.map((item, i) => (
                                <li key={i}>{item}</li>
                              ))}
                            </ul>
                          );
                          listBuffer = [];
                          return list;
                        }

                        return null;
                      }

                      return (
                        <p key={index} className="text-justify mt-2">
                          {line}
                        </p>
                      );
                    });
                  })()}
                </div>
              )}

            </React.Fragment>
          ))}
        </div>
      )}
    </div>
  );
};

export default CustomOverviewSection;