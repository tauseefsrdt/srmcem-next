import React from "react";
import { otherDataTypes } from "../../types/home-data-type";

interface CustomOverviewSectionProps {
  data: {
    heading: string;
    content: string;
    otherData?: otherDataTypes[];
  };
}

const CustomOverviewSectionForCSE: React.FC<CustomOverviewSectionProps> = ({ data }) => {
  const { heading, content, otherData } = data;

  // 🔹 Function to render content (paragraphs + bullets)
  const renderContent = () => {
    const lines = content.split("\n").filter((line) => line.trim() !== "");
    let listBuffer: string[] = [];

    return lines.map((line, index) => {
      const isBullet = line.trim().startsWith("-");

      if (isBullet) {
        listBuffer.push(line.replace("- ", ""));

        const nextLine = lines[index + 1];
        const isLastBullet = !nextLine || !nextLine.trim().startsWith("-");

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
  };

  return (
    <div className="py-7 md:py-10 lg:py-14">
      <div className="flex flex-col gap-4 items-stretch justify-between md:flex-row">
        
        {/* LEFT HEADING */}
        <div
          className={`w-auto ${
            otherData && otherData?.length > 0
              ? "md:border-r-4"
              : "border-l-4 pl-2 md:pl-0 md:border-l-0 md:border-r-4"
          } border-[#ffb703] flex flex-col justify-center`}
        >
          <h2 className="text-3xl lg:text-4xl font-semibold leading-8 pr-4 sm:min-w-[350px]">
            {heading}
          </h2>
        </div>

        {/* RIGHT CONTENT */}
        <div className={`${otherData && otherData?.length > 0 ? "" : "md:pl-8 md:py-4"}`}>
          {renderContent()}
        </div>
      </div>

      {/* OTHER DATA SECTION */}
      {otherData && (
        <div className="pt-7 md:pt-10 lg:pt-14">
          {otherData.map((ele, index) => (
            <React.Fragment key={index}>
              
              {/* PARAGRAPHS */}
              <div>
                {ele.paraContent.map((item, i) => (
                  <p key={i} className="mt-1.5 text-justify">
                    {item}
                  </p>
                ))}
              </div>

              {/* 🔥 TABLE (UNCHANGED) */}
              <div className="mt-6 overflow-x-auto">
                <table className="w-full border border-black border-collapse">
                  <thead>
                    <tr>
                      <th className="w-1/2 border border-black px-4 py-3 text-center font-semibold">
                        B.Tech
                      </th>
                      <th className="w-1/2 border border-black px-4 py-3 text-center font-semibold">
                        M.Tech
                      </th>
                    </tr>
                  </thead>

                  <tbody>
                    <tr>
                      <td className="border border-black px-4 py-3 align-top">
                        <p className="font-semibold text-lg mb-2">Program Details</p>
                        <ul className="list-disc ml-5 space-y-1">
                          <li><span className="font-semibold">Program:</span> Engineering & Technology</li>
                          <li><span className="font-semibold">Course:</span> B.Tech.</li>
                          <li><span className="font-semibold">Level:</span> Undergraduate (UG)</li>
                          <li><span className="font-semibold">Branch:</span> Computer Science & Engineering</li>
                          <li><span className="font-semibold">Duration:</span> 4 Years</li>
                          <li><span className="font-semibold">Nature:</span> Degree Course</li>
                          <li><span className="font-semibold">Intake:</span> 240</li>
                        </ul>
                      </td>

                      <td className="border border-black px-4 py-3 align-top">
                        <p className="font-semibold text-lg mb-2">Program Details</p>
                        <ul className="list-disc ml-5 space-y-1">
                          <li><span className="font-semibold">Program:</span> Engineering & Technology</li>
                          <li><span className="font-semibold">Course:</span> M.Tech.</li>
                          <li><span className="font-semibold">Level:</span> Postgraduate (PG)</li>
                          <li><span className="font-semibold">Branch:</span> Computer Science & Engineering</li>
                          <li><span className="font-semibold">Duration:</span> 2 Years</li>
                          <li><span className="font-semibold">Nature:</span> Degree Course</li>
                          <li><span className="font-semibold">Intake:</span> 09</li>
                        </ul>
                      </td>
                    </tr>

                    <tr>
                      <td className="border border-black px-4 py-3 align-top">
                        <p className="font-semibold text-lg mb-2">Eligibility Criteria</p>
                        <p className="text-justify">
                          For admission to the first year of B.Tech., candidates must have passed
                          the Intermediate Examination with{" "}
                          <span className="font-semibold">
                            Physics, Mathematics, and Chemistry/Computer Science
                          </span>.
                        </p>
                        <ul className="list-disc ml-5 mt-2 space-y-1">
                          <li>Minimum <span className="font-semibold">45%</span> marks</li>
                          <li><span className="font-semibold">40%</span> for reserved categories</li>
                        </ul>
                      </td>

                      <td className="border border-black px-4 py-3 align-top">
                        <p className="font-semibold text-lg mb-2">Eligibility Criteria</p>
                        <p className="text-justify">
                          For admission to M.Tech., candidates must have passed B.Tech/B.E.
                          with <span className="font-semibold">55% marks</span>.
                        </p>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>

            </React.Fragment>
          ))}
        </div>
      )}
    </div>
  );
};

export default CustomOverviewSectionForCSE;