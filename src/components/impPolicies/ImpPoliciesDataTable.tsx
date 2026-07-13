import { ImFilePdf } from "react-icons/im";
import { policiesData } from "../../data/impPoliciesData";

const ImpPoliciesTable: React.FC = () => {
  return (
    <div className="container mx-auto px-4 pb-14">
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-gray-300 shadow-md">
          <thead>
            <tr className="bg-[#233E6F] text-white">
              <th className="px-6 py-3 text-left">Policy Name</th>
              <th className="px-6 py-3 text-left">View Policy</th>
            </tr>
          </thead>
          <tbody>
            {policiesData.map((policy, index) => (
              <tr key={index} className={`border-b   ${index % 2 !== 0 ? "bg-gray-100" : ""}`}>
                <td className="px-6 py-3">{policy.name}</td>
                <td className="px-6 py-3">
                  <a href={policy.viewLink || '#'}  target="_blank">
                    <ImFilePdf size={30} color="red" />
                  </a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ImpPoliciesTable;
