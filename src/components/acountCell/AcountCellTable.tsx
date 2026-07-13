import { AcountCellTableData } from "../../data/AcountCellData";

const AcountCellTable: React.FC = () => {
  return (
    <div className="container mx-auto px-4 pb-14">
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-gray-300 shadow-md">
          <thead>
            <tr className="bg-[#233E6F] text-white">
              <th className="px-6 py-3 text-left">Name</th>
              <th className="px-6 py-3 text-left">Designation</th>
              <th className="px-6 py-3 text-left">Area of Work</th>
            </tr>
          </thead>
          <tbody>
            {AcountCellTableData.map((employee, index) => (
              <tr key={index} className={`border-b   ${index % 2 !== 0 ? "bg-gray-100" : ""}`}>
                <td className="px-6 py-3">{employee.name}</td>
                <td className="px-6 py-3">{employee.designation}</td>
                <td className="px-6 py-3">{employee.areaOfWork}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AcountCellTable;
