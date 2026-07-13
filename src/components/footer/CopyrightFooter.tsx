import React from "react";
import Classes from "../../utils/styles/Global.module.css";
import Link from "next/link";
const CopyrightFooter: React.FC = () => {
  return (
    <div className="w-full bg-[#102a43] py-[15px]">
      <div className={`${Classes["container"]}`}>
        <div className="flex justify-between gap-x-3 gap-y-3 flex-wrap">
          <p className="text-sm text-white">Copyright © SRMCEM 2022. All right reserved.</p>
          <ul className="text-white text-sm flex gap-x-5">
            <li>
              <Link href={"/privacy-policy"}>Privacy Policy</Link>
              <span className="ml-4">|</span>
            </li>
            <li>
              <Link href={"/disclaimer"}>Disclaimer</Link>
              <span className="ml-4">|</span>
            </li>
            <li>
              <Link href={"/T&C"}> Terms and Conditions</Link>
            </li>
          </ul>
          <p className="text-sm text-white">
            Design By : <a target="_blank" href="https://srdt.co.in">srdt.co.in</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default CopyrightFooter;
