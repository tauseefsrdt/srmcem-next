import React from "react";
import { FaAngleDown, FaAngleRight } from "react-icons/fa";
import { RootState, store } from "../../store";
import { toggleAccordion } from "../../store/ui/ui-slice";
import { useSelector } from "react-redux";
import { accordionItemsTypes } from "../../types/accordian-items-type";
import CustomListItemComponent from "./CustomListItemComponent";
import CustomAccordianListComponent from "./CustomAccordianListComponent";
import { ImFilePdf } from "react-icons/im";

interface propsTypes {
  items: accordionItemsTypes[] | undefined;
  isMode: string;
}
const Accordian: React.FC<propsTypes> = ({ isMode, items }) => {
  const { activeIndex } = useSelector((state: RootState) => state.ui);
  return (
    <div className="accordian">
      {items?.map((item, index) => (
        <div key={index} className={`mb-4 border-2 overflow-hidden transition-all duration-300  ${activeIndex === index ? "border-[#ffb703] " : "border-gray-100"} rounded-t-lg`}>
          <div onClick={() => store.dispatch(toggleAccordion(index))} className="flex justify-between items-center px-4 py-3 bg-gray-100 cursor-pointer ">
            <span className="font-semibold">{item.contentTitle}</span>
            {activeIndex !== index ? <FaAngleRight /> : <FaAngleDown color="#ffb703" />}
          </div>
          <div className={`transition-all duration-300   ${activeIndex === index ? "max-h-[10000px] " : "max-h-0"}`}>
            {
              <div>
                {item?.content?.map((ele) => (
                  <div key={ele.id}>
                    {isMode === "wiwa-club" ? (
                      <div className="px-4 pt-3 pb-2">
                        <p className="mb-1" key={ele.id}>
                          {ele.childContent}
                        </p>
                        <div className="grid grid-cols-2">
                          {item?.content?.map((ele) => (
                            <>
                              {ele.subContentChild &&
                                ele.subContentChild.map((item) => (
                                  <p className="mb-1" key={item.id}>
                                    {item.subContentChildContent}
                                  </p>
                                ))}
                            </>
                          ))}
                        </div>
                      </div>
                    ) : isMode === "entrepreneurship" ? (
                      <div className="px-4 pt-3 pb-2">
                        {ele.paraChildBold &&
                          ele.paraChildBold.map((ele) => (
                            <p className="mb-1 font-semibold" key={ele.id}>
                              {ele.textBod}
                            </p>
                          ))}

                        <ul className="list-[square] ml-8  space-y-3">
                          {ele.childContentList &&
                            ele.childContentList.map((ele) => (
                              <li className="yellow" key={ele.id}>
                                <div className="flex justify-between items-center ">
                                  <span> {ele.list}</span>
                                  <span className="pr-10">
                                    {ele.pdfurl && (
                                      <a
                                        target="_blank"
                                        href={ele.pdfurl}
                                        className="text-red-600 inline-block p-1 rounded-sm border border-transparent hover:border-[#ffb703] hover:text-[#ffb703] mr-6 md:mr-9"
                                      >
                                        <ImFilePdf size={24} />
                                      </a>
                                    )}
                                  </span>
                                </div>
                              </li>
                            ))}
                        </ul>
                      </div>
                    ) : isMode === "department" ? (
                      <div className="px-4 pt-3 pb-2">
                        <div className="flex items-center">
                          <div className="w-full">
                            {ele?.paraWithImg?.slice(0, 2).map((item) => (
                              <p className={`${item.id == 1 ? "mt-3" : ""}`}>{item.paraContent}</p>
                            ))}
                          </div>
                          <div className="w-full">
                            {ele?.paraWithImg?.slice(2, 3).map((item) => (
                              <img className="w-full" src={item.paraContent} alt="" />
                            ))}
                          </div>
                        </div>
                        <div className="w-full overflow-x-auto">
                          <table className="w-full border">
                            <thead>
                              <tr className="border">
                                {ele.contentChildTable?.map((item) =>
                                  item?.heading.map((value) => (
                                    <th
                                      className={` border bg-[#0f4a85] p-2 text-white text-left ${value.id === 0 ? "w-[150px] max-w-[150px]" : ""} ${value.id === 1 ? "min-w-[400px]" : ""
                                        } ${value.id === 2 ? "w-[300px] min-w-[250px]" : ""} `}
                                      key={value.id}
                                    >
                                      {value.headingContent}
                                    </th>
                                  ))
                                )}
                              </tr>
                            </thead>
                            <tbody>
                              {ele.contentChildTable?.map((item) =>
                                item?.row.map((value) => (
                                  <tr className="border">
                                    {value.rowData.map((data) => (
                                      <td className={` border p-2`} key={value.id}>
                                        {data.rowContent}
                                      </td>
                                    ))}
                                  </tr>
                                ))
                              )}
                            </tbody>
                          </table>
                        </div>
                      </div>
                    ) : (
                      ""
                    )}
                  </div>
                ))}
              </div>
            }
            {isMode === "academics" ? (
              <>
                {item?.contentType === 1 ? (
                  <CustomListItemComponent sections={item?.content} />
                ) : item?.contentType === 2 ? (
                  <CustomAccordianListComponent sections={item?.content} />
                ) : null}
              </>
            ) : isMode === "library" && item?.contentType === 3 ? (
              <>
                {item.subParaContent && (
                  <p className="pt-4 pb-4 pl-2 pr-2" key={index}>
                    {item?.subParaContent}
                  </p>
                )}
                {item?.listItem && (
                  <ul className=" list-[square] ml-8 py-2">
                    {item?.listItem?.map((subItem: any) => (
                      <li key={subItem.id} className="yellow">
                        {subItem.list}
                      </li>
                    ))}
                  </ul>
                )}
                {item?.tableData && (
                  <div>
                    <table className="w-full">
                      <thead>
                        <tr>
                          <th className="bg-[#0e2f46] text-white text-left px-4 py-2">Sl. No.</th>
                          <th className="bg-[#0e2f46] text-white text-left px-4 py-2">Name of Bodies</th>
                          <th className="bg-[#0e2f46] text-white text-left px-4 py-2">Membership Mode</th>
                          <th className="bg-[#0e2f46] text-white text-left px-4 py-2">Period</th>
                          <th className="bg-[#0e2f46] text-white text-left px-4 py-2">Start From</th>
                          <th className="bg-[#0e2f46] text-white text-left px-4 py-2">Membership No.</th>
                        </tr>
                      </thead>
                      <tbody>
                        {item.tableData.map((ele) => (
                          <tr>
                            <td className="px-4 py-2">{ele.slNo}</td>
                            <td className="px-4 py-2">{ele.nameOfBody}</td>
                            <td className="px-4 py-2">{ele.membershipMode}</td>
                            <td className="px-4 py-2">{ele.period}</td>
                            <td className="px-4 py-2">{ele.startFrom}</td>
                            <td className="px-4 py-2">{ele.membershipNo}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                )}
              </>
            ) : (
              ""
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Accordian;
