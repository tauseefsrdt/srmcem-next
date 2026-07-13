import React from "react";

interface TableProps {
  data: {
    sNo: number;
    rollNo: string;
    name: string;
    session: string;
    semYear: string;
    rank: string;
    courses: string;
    marks: number | string;
  }[],
  header: {
    sNo: string;
    rollNo: string;
    name: string;
    session: string;
    semYear: string;
    rank: string;
    courses: string;
    marks: string;
  }[]
}

const CustomTable: React.FC<TableProps> = ({ data, header }) => {

  console.log("data= ", data)
  return (
    <div className="overflow-x-auto mt-5">
      <table className="table-auto w-full border border-gray-300">
        <thead className="bg-[#233E6F] text-white">
          {
            header?.map((item, index) => (
              <tr key={index}>
                {item.sNo && <th className="p-3 text-left">{item.sNo}</th>}
                {item.rollNo && <th className="p-3 text-left">{item.rollNo}</th>}
                {item.name && <th className="p-3 text-left">{item.name}</th>}
                {item.session && <th className="p-3 text-left">{item.session}</th>}
                {item.semYear && <th className="p-3 text-left">{item.semYear}</th>}
                {item.rank && <th className="p-3 text-left">{item.rank}</th>}
                {item.courses && <th className="p-3 text-left">{item.courses}</th>}
                {item.marks && <th className="p-3 text-left">{item.marks}</th>}
              </tr>
            ))
          }
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr
              key={index}
              className={`border-b ${index % 2 === 0 ? "bg-gray-100" : "bg-white"
                }`}
            >
              {item.sNo && <td className="p-3">{item.sNo}</td>}
              {item.rollNo && <td className="p-3">{item.rollNo}</td>}
              {item.name && <td className="p-3">{item.name}</td>}
              {item.session && <td className="p-3">{item.session}</td>}
              {item.semYear && <td className="p-3">{item.semYear}</td>}
              {item.rank && <td className="p-3">{item.rank}</td>}
              {item.courses && <td className="p-3">{item.courses}</td>}
              {item.marks && <td className="p-3">{item.marks}</td>}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CustomTable;