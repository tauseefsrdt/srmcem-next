import React from "react";
import Classes from "../../utils/styles/Global.module.css";
import { ImFilePdf } from "react-icons/im";

interface Policy {
  id: number;
  name: string;
  link: string;
}

interface CustomAcademicPoliciesProps {
  title: string;
  policies: Policy[];
  style?: boolean;
}

const CustomAcademicPolicies: React.FC<CustomAcademicPoliciesProps> = ({ title, policies, style }) => {
  return (
    <div
      className={`${style ? "mt-6" : Classes["container"]} ${style ? "" : "py-7 md:py-10 lg:py-14"
        }`}
    >
      <div className="mx-auto mt-8 border-2 border-gray-200 hover:border-[#ffb703]  rounded-md">
        {/* Header */}
        <div className="bg-[#233E6F] rounded-t-md py-5 text-white px-3 md:px-10">
          <div className="flex justify-between items-center">
            <span className="p-1 font-medium md:text-lg">{title}</span>
            <span className="p-1 font-medium md:text-lg text-right">Downloads</span>
          </div>
        </div>

        {/* Table */}
        <table className="w-full  rounded-b-lg">
          <tbody>
            {policies.map((policy, index) => (
              <tr
                key={index}
                className={`border-b border-s-neutral-300 hover:bg-neutral-100`}
              >
                {/* Policy Name */}
                <td className="px-3 md:px-10 py-5 text-sm ">{policy.name}</td>

                {/* View Button Section */}
                <td className="px-3 md:px-10 py-5 text-sm text-center min-w-[150px] w-[150px]">
                  <a
                    target="_blank"
                    href={policy.link}
                    className="text-red-600 inline-block p-1 rounded-sm border border-transparent hover:border-[#ffb703] hover:text-[#ffb703] mr-6 md:mr-9"
                  >
                    <ImFilePdf size={24} />
                  </a>
                  {/* <a
                    href={policy.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline"
                  >
                    View
                  </a> */}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default CustomAcademicPolicies;