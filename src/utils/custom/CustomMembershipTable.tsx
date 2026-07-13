import React from "react";
import { TableRow } from "../../types/customDataTypes";

interface CustomMembershipTableProps {
  data: TableRow[];
}

const CustomMembershipTable: React.FC<CustomMembershipTableProps> = ({ data }) => {
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full border-collapse border border-gray-200">
        <thead>
          <tr className="bg-[#244271] text-white">
            <th className="border p-2">Sl. No.</th>
            <th className="border p-2">Name of Bodies</th>
            <th className="border p-2">Membership Mode</th>
            <th className="border p-2">Period</th>
            <th className="border p-2">Start From</th>
            <th className="border p-2">Membership No.</th>
          </tr>
        </thead>
        <tbody>
          {data.map((row, index) => (
            <tr
              key={index}
              className={`${
                index % 2 === 0 ? "bg-gray-100" : "bg-white"
              } hover:bg-gray-200`}
            >
              <td className="border p-2 text-center">{row.slNo}</td>
              <td className="border p-2">{row.nameOfBody}</td>
              <td className="border p-2">{row.membershipMode}</td>
              <td className="border p-2">{row.period}</td>
              <td className="border p-2">{row.startFrom}</td>
              <td className="border p-2">{row.membershipNo}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CustomMembershipTable;