import React from "react";
import { ImFilePdf } from "react-icons/im";

interface TableProps {
  data: {
    name: string;
    viewLink: string;
  }[];
}

const NewslettersTable: React.FC<TableProps> = ({ data }) => {
  return (
    <div className="overflow-x-auto mt-5">
      <table className="table-auto w-full border border-gray-300">
        <thead className="bg-[#233E6F] text-white">
          <tr>
            <th className="p-3 text-left">Happenings</th>
            <th className="p-3 text-left">View</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={index} className={`border-b ${index % 2 === 0 ? "bg-gray-100" : "bg-white"}`}>
              <td className="p-3">{item.name}</td>
              <td className="p-3">
                <a href={item.viewLink || '#'}  target="_blank">
                  <ImFilePdf size={30} color="red" />
                </a>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default NewslettersTable;
