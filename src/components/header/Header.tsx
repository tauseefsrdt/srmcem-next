import { useEffect, useState } from "react";
import Classes from "../../utils/styles/Global.module.css";
// import TopHeader from "./TopHeader";
import { HeaderData } from "./HeaderData";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdClose, MdOutlineKeyboardArrowDown } from "react-icons/md";
import Link from "next/link";
import { useRouter } from "next/router";
import { FaAngleDown } from "react-icons/fa";
import TopBar from "../new-home/TopBar";
const Header = () => {
  const location = useRouter();
  const { bottomHeaderData } = HeaderData[0];
  const [sideMenu, setSideMenu] = useState(false);
  const [nestedMenu, setNestedMenu] = useState<string | undefined | null>(null);
  const [subMenu, setSubMenu] = useState<number | undefined | null>(null);
  const [isActive, setIsActive] = useState(false);
  useEffect(() => {
    const handleScroll = () => {

      if (window.scrollY > 35) {
        setIsActive(true);
      } else {
        setIsActive(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  useEffect(() => {
    if (sideMenu) {
      document.body.style.height = "100vh";
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.height = "auto";
      document.body.style.overflow = "auto";
    }
    setNestedMenu(null);
    setSubMenu(null);
  }, [sideMenu]);
  // const openHandler = (path: any) => {
  //   const win: any = window.open(path, "_blank");
  //   win.focus();
  // };
  const handleClick = (value: any) => {
    setNestedMenu((prev) => (prev === value.isMode ? null : value.isMode));
  };

  // useEffect(() => {
  //   setNestedMenu(null);
  // }, [sideMenu]);

  return (
    <div>
      <header className={`fixed top-0  left-0 w-full transition-all duration-500 z-[999] `}>
        <TopBar />
        <div className={`py-2   items-stretch header ${isActive ? "bg-[#0e2f46] active" : ""}`}>
          <div className={`${Classes["container"]} `}>
            <div className="flex flex-row justify-between">
              <Link href="/" className="logo_div flex items-center   lg:gap-1 xl:gap-3 cursor-pointer">
                <div>
                  <img src={bottomHeaderData[0].logo} alt="" className=" h-[35px] lg:h-[57px] max-w-[100%] " />
                </div>
                <div>
                  <h2 className={` font-bold text-white lg:text-[1rem] xl:text-[1.4rem] ${isActive ? "text-white" : location.pathname !== "/" ? "text-white" : ""} `}>
                    SHRI RAMSWAROOP
                    <div className="text-[0.5rem] font-semibold">MEMORIAL COLLEGE OF ENGINEERING & MANAGEMENT</div>
                  </h2>
                </div>
              </Link>
              <div className="hidden lg:block  ">
                <div className="flex items-center justify-center h-full ">
                  <nav className="flex lg:gap-2 xl:gap-3  2xl:gap-4 ">
                    {bottomHeaderData[0].navitems.map((data, index) => {
                      return (
                        <div key={index} className="relative group text-white py-6 text-sm uppercase cursor-pointer">
                          {data.href ? (
                            <a
                              target="_blank"
                              className={`relative block ${location.pathname === data.path ? "active" : ""} [&.active]:text-white`}
                              onClick={() => window.open(data.path, "_blank")}
                            >
                              <span className={`flex items-center text-white ${isActive ? "text-white" : location.pathname !== "/" ? "text-white" : ""} hover:text-white`}>
                                {data.item}
                              </span>
                            </a>
                          ) : (
                            <Link
                              href={data.path || '#'}
                              className={`relative block ${location.pathname === data.path ? "active" : ""}`}
                            >
                              <span className={`flex items-center ${isActive ? "text-white" : location.pathname !== "/" ? "text-white" : ""} hover:text-white`}>
                                {data.item}
                              </span>
                            </Link>
                          )}

                          {data?.subItem && (
                            <div className="absolute top-[59px] xl:top-[60px] right-0 bg-white rounded-md manage-shadow-drop-down">
                              <span className="hidden group-hover:block manage-top-arrow"></span>
                              <ul className="transition-all w-full min-w-[250px] duration-300 text-[#212529] h-full overflow-hidden max-h-0 group-hover:max-h-[500px] group-hover:border rounded-md border-[#ffb703] group-hover:overflow-y-auto hide-scrollbar">
                                {data.subItem.map((value, ind) => {
                                  return (
                                    <li key={ind} className={`text-nowrap relative block parentclass font-normal ${ind == 0 ? "" : "border-t"}`}>
                                      {value.item !== "SC/ST Committee" && value.item !== "WebOPAC" ? (
                                        <>
                                          {value.nestedSubItem ? (
                                            <>
                                              <div
                                                onClick={() => handleClick(value)}
                                                className="flex justify-between cursor-pointer hover:text-[#ffb703] px-3 py-3"
                                              >
                                                {value.item} <span className="mt-0.5"><FaAngleDown /></span>
                                              </div>
                                              <ul className={`subclass ${nestedMenu == value.isMode ? "show" : ""} bg-white ${value.nestedSubItem ? "mt-2" : ""}`}>
                                                {value.nestedSubItem.map((ele, subInd) => (
                                                  <li key={subInd} className="block">
                                                    {ele.href ? (
                                                      <a
                                                        target="_blank"
                                                        className={`text-sm hover:text-[#ffb703] pl-5 border-t block pt-2 ${subInd == value.nestedSubItem.length - 1 ? "pb-0" : "pb-2"}`}
                                                        onClick={() => window.open(ele.path, "_blank")}
                                                      >
                                                        {ele.item}
                                                      </a>
                                                    ) : (
                                                      <Link
                                                        href={ele.path || '#'}
                                                        className={`text-sm hover:text-[#ffb703] pl-5 border-t block pt-2 ${subInd == value.nestedSubItem.length - 1 ? "pb-0" : "pb-2"}`}
                                                      >
                                                        {ele.item}
                                                      </Link>
                                                    )}
                                                  </li>
                                                ))}
                                              </ul>
                                            </>
                                          ) : (
                                            <Link
                                              href={value.path || '#'}
                                              className="block hover:text-[#ffb703] px-3 py-3"
                                            >
                                              {value.item}
                                            </Link>
                                          )}
                                        </>
                                      ) : (
                                        <a
                                          href={value.path || '#'}
                                          target="_blank"
                                          rel="noopener noreferrer"
                                          className="block hover:text-[#ffb703] px-3 py-3"
                                          onClick={(e) => {
                                            e.preventDefault();
                                            window.open(value.path, "_blank");
                                          }}
                                        >
                                          {value.item}
                                        </a>
                                      )}
                                    </li>
                                  );
                                })}
                              </ul>
                            </div>
                          )}
                        </div>
                      );
                    })}
                  </nav>
                </div>
              </div>

              <div className="lg:hidden my-auto">
                <GiHamburgerMenu
                  size={20}
                  className={`cursor-pointer  ${isActive ? "text-white" : location.pathname !== "/" ? "text-white" : ""}  `}
                  onClick={() => setSideMenu(!sideMenu)}
                />
              </div>

            </div>
          </div>
        </div>
        {/* Mobile menu */}
        <div className={`lg:hidden ${sideMenu ? "block " : " hidden "} w-full h-[calc(100vh-103px)]  bg-opacity-50 fixed top-[100px] right-0`}></div>
        <div
          className={`fixed top-[100px] pt-4  h-[calc(100vh-92px)] right-0 sm:h-[calc(100vh-103px)] bg-white  border-t-2 border-blue-900 transition-all duration-300 overflow-auto mobile-scroll w-full lg:hidden ${sideMenu ? "max-w-[250px]" : "max-w-0"
            }`}
        >
          <ul className="w-full flex flex-col list-none   mt-10 border-y  ">
            {bottomHeaderData[0].navitems.map((data, index) => {
              return (
                <li key={index} className={`relative w-full  ${data.item === "Login" && "hidden"} text-sm  uppercase cursor-pointer py-2 ${data.id !== 0 && "border-t"}  `}>
                  {data.href ? (
                    <a
                      target="_blank"
                      className={` ${location.pathname === data.path ? "active" : ""} w-full block [&.active]:text-[#ffb703] `}
                      onClick={() => {
                        window.open(data.path, "_blank");
                        setSideMenu(false);
                      }}
                    >
                      <span className="flex gap-x-0.5 xl:gap-x-1 items-center pl-2 pr-5 justify-between hover:text-[#ffb703]">{data.item}</span>
                    </a>
                  ) : (
                    <Link
                      href={data.path || '#'}
                      onClick={() => {
                        if (!data.subItem) {
                          setSideMenu(false);
                        }
                      }}
                      className={` ${location.pathname === data.path ? "active" : ""} w-full block [&.active]:text-[#ffb703] `}
                    >
                      <span className="flex gap-x-0.5 xl:gap-x-1 items-center pl-2 pr-5 justify-between hover:text-[#ffb703]">{data.item}</span>
                    </Link>
                  )}

                  {data?.subItem && (
                    <ul className={`transition-all w-full duration-700 h-full overflow-hidden ${subMenu == data.id ? "max-h-[1000px]" : "max-h-0"}`}>
                      <span className="w-full block h-0.5 mt-2 bg-[#ffb703]"></span>
                      {data.subItem.map((value, ind) => {
                        return (
                          <li key={ind} className="block w-full">
                            {value.item !== "SC/ST Committee" ? (
                              <>
                                {value.nestedSubItem ? (
                                  <>
                                    <div
                                      onClick={() => handleClick(value)}
                                      className="flex justify-between px-5 py-2 hover:text-[#ffb703]"
                                    >
                                      {value.item} <span className="mt-0.5"><FaAngleDown /></span>
                                    </div>
                                    <ul className={`subclass ${nestedMenu == value.isMode ? "show" : ""} subclass-mobile-nested`}>
                                      {value.nestedSubItem.map((ele, subInd) => (
                                        <li key={subInd} className="block pl-5">
                                          {ele.href ? (
                                            <a
                                              target="_blank"
                                              className={`text-sm hover:text-[#ffb703] pl-5 border-t block pt-2 ${subInd == value.nestedSubItem.length - 1 ? "pb-0" : "pb-2"}`}
                                              onClick={() => {
                                                window.open(ele.path, "_blank");
                                                setSideMenu(false);
                                              }}
                                            >
                                              {ele.item}
                                            </a>
                                          ) : (
                                            <Link
                                              href={ele.path || '#'}
                                              onClick={() => {
                                                setSideMenu(false);
                                              }}
                                              className={`text-sm hover:text-[#ffb703] pl-5 border-t block pt-2 ${subInd == value.nestedSubItem.length - 1 ? "pb-0" : "pb-2"}`}
                                            >
                                              {ele.item}
                                            </Link>
                                          )}
                                        </li>
                                      ))}
                                    </ul>
                                  </>
                                ) : (
                                  <Link
                                    href={value.path || '#'}
                                    onClick={() => {
                                      setSideMenu(false);
                                    }}
                                    className={`block font-normal parentclass px-5 py-2 ${ind == 0 ? "" : "border-t"}`}
                                  >
                                    {value.item}
                                  </Link>
                                )}
                              </>
                            ) : (
                              <a
                                href={value.path || '#'}
                                target="_blank"
                                rel="noopener noreferrer"
                                className={`text-nowrap relative block parentclass font-normal hover:text-[#ffb703] px-5 pt-3 pb-1 ${ind == 0 ? "" : "border-t"}`}
                                onClick={(e) => {
                                  e.preventDefault();
                                  window.open(value.path, "_blank");
                                  setSideMenu(false);
                                }}
                              >
                                {value.item}
                              </a>
                            )}
                          </li>
                        );
                      })}
                    </ul>
                  )}

                  <span className="absolute top-2 right-2 ">
                    {data?.subItem && (
                      <span onClick={() => setSubMenu((ele) => (ele == data.id ? null : data.id))} className={`rotate-180}`}>
                        <MdOutlineKeyboardArrowDown size={22} />
                      </span>
                    )}
                  </span>
                </li>
              );
            })}
          </ul>
          <span className="absolute w-full max-w-[40px] left-2 top-2 py-2 bg-[#0e2f46] text-white px-2">
            <MdClose onClick={() => setSideMenu(false)} size={24} className="   cursor-pointer " />
          </span>
        </div>
      </header>
    </div>
  );
};

export default Header;
