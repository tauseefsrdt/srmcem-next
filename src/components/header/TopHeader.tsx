import Classes from "../../utils/styles/Global.module.css";
import { GrSearch } from "react-icons/gr";
import { IoCallSharp } from "react-icons/io5";
import React from "react";
import Link from "next/link";
const nirf = "/pdf/nirf/NIRF-2026.pdf";
import { BsArrowUpRightCircle } from "react-icons/bs";
const TopHeader: React.FC = () => {
  return (
    <div className={`${Classes["top_header"]}  text-white bg-white lg:bg-[#0f4a85]  text-[0.89rem]`}>
      <div className={`${Classes["container"]}`}>
        <div className="hidden lg:flex justify-between ">
          <div className="left-part flex items-center">
            <div>
              <ul className="flex items-center text-[13px] flex-row gap-2 ">
                <Link href="/notice">NOTICE |</Link>
                <a target="_blank" href="https://erp.aktu.ac.in/WebPages/OneView/OneView.aspx">
                  RESULTS |
                </a>
                <Link href="/career">CAREER |</Link>
                {/* <Link href="/uptac-2025" className="uppercase blink_uptac text-black font-semibold px-4 pt-1.5 pb-1 rounded-full flex items-center justify-center">UPTAC-2025</Link> */}
                <a
                  href={nirf || '#'} 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="uppercase blink_uptac text-black font-semibold px-4 pt-1.5 pb-1 rounded-full flex items-center justify-center"
                >
                  NIRF-2026
                </a>             
                 </ul>
            </div>
          </div>

          <div className="right-part flex gap-3 items-center">
            <div className="flex gap-2 items-center">
              <ul className="flex text-black">
                <button className="bg-white flex items-center px-2 py-1 gap-2 ">
                  <a href="tel:18001035298" className="text-[#FFB703]  ">
                    <IoCallSharp className="text-[1.5rem]" />
                  </a>
                  <div className="flex flex-col  text-start px-auto">
                    <p>Admission Helpline</p>
                    <p className="font-medium ">18001035298</p>
                  </div>
                </button>
                <Link href="enquiry-form" className="bg-[#FFB703] px-2 font-bold border-2 border-[#ffb703]   flex gapx-x-1 items-center">
                  Apply Now 2026
                </Link>
              </ul>
            </div>
          </div>
        </div>

        <div className="flex lg:hidden justify-between">
          {/* <div className="left-part flex items-center text-black ">
            <a
              target="_blank"
              href="https://campus.srmcem.ac.in/psp/ps/?cmd=login
              An error has occurred.
               "className="text-xl font-bold ">
              Login
            </a>
            <FaCaretDown />
          </div> */}
          <div className="left-part flex items-center">
            <div>
              <ul className="flex items-center text-[11px] sm:text-[13px] flex-row gap-1 text-black">
                <Link href="/notice">NOTICE |</Link>
                <a target="_blank" href="https://erp.aktu.ac.in/WebPages/OneView/OneView.aspx">
                  RESULTS |
                </a>
                <Link href="/career">CAREER |</Link>
                <Link href="/uptac-2025" className="uppercase blink_uptac text-black font-semibold px-2 pt-1.5 pb-1 rounded-full flex items-center justify-center">UPTAC-2025</Link>
              </ul>
            </div>
          </div>
          <div className="right-part flex items-center">
            <div className="flex gap-1">
              <div className="py-3 border-l border-black px-2 hidden">
                <GrSearch className="text-[1.5rem] text-black" />
              </div>
              <a href="tel:18001035298" className="py-3  border-l border-black pl-2 pr-1 ">
                <IoCallSharp className="text-[1rem] text-[#FFB703]" />
              </a>

              <Link href="enquiry-form" className="bg-[#FFB703] px-1 group relative text-white lg:text-black font-semibold border-2 border-[#ffb703] text-[12px]  sm:text-sm flex gapx-x-1 items-center">
                <BsArrowUpRightCircle size={24} />
                <span className="text-black absolute bottom-[-20px] left-[-50px] whitespace-nowrap hidden group-hover:block   ">Apply Now 2024</span>
              </Link>


            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopHeader;
