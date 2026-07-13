import React from "react";
import { customLibraryDataType } from "../../types/customDataTypes";

interface CustomLibraryTableProps {
  data?: customLibraryDataType[];
}

const CustomLibraryTable: React.FC<CustomLibraryTableProps> = ({ data }) => {
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full border border-gray-400 text-sm text-black">
        {/* Table Header */}
        <thead className="bg-[#e6f9ff] text-center font-semibold">
          <tr>
            <th className="px-6 py-3 border border-gray-400"><b>Sl. No.</b></th>
            <th className="px-6 py-3 border border-gray-400"><b>Category</b></th>
            <th className="px-6 py-3 border border-gray-400"><b>No. of Books</b></th>
            <th className="px-6 py-3 border border-gray-400"><b>Retention Period</b></th>
            <th className="px-6 py-3 border border-gray-400"><b>Renewal Period</b></th>
            <th className="px-6 py-3 border border-gray-400"><b>Fine for the first 7 days</b></th>
            <th className="px-6 py-3 border border-gray-400"><b>Fine after 7 days</b></th>
          </tr>
        </thead>

        {/* Table Body */}
        <tbody>
          {data?.map((item, index) => (
            <tr
              key={index}
              className={`text-center ${
                index % 2 === 0 ? "bg-[#e6f9ff]" : "bg-[#e6f9ff]"
              }`}
            >
              <td className="px-6 py-3 border border-gray-400">{index + 1}</td>
              <td className="px-6 py-3 border border-gray-400">
                {item.category}
              </td>
              <td className="px-6 py-3 border border-gray-400">
                {item.noOfBooks}
              </td>
              <td className="px-6 py-3 border border-gray-400">
                {item.retentionPeriod}
              </td>
              <td className="px-6 py-3 border border-gray-400">
                {item.renewalPeriod}
              </td>
              <td className="px-6 py-3 border border-gray-400">
                {item.fineFirst7Days}
              </td>
              <td className="px-6 py-3 border border-gray-400">
                {item.fineAfter7Days}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CustomLibraryTable
