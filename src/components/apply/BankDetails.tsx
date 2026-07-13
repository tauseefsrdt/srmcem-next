// import React from "react";
// import { HowToApplyBankDetailsData } from "../../data/howToApplyData";

// const BankDetails: React.FC = () => {
//   const { mainheading, subHeading, para, TableHeading, bankDetailsTableData } = HowToApplyBankDetailsData;
//   return (
//     <div className="sm:mt-5">
     
//       <div className="mb-5">
//         <h1 className="text-3xl lg:text-4xl font-bold text-center mb-3">{mainheading}</h1>
//         <h2 className="text-2xl font-bold text-center mt-2 text-gray-600">{subHeading}</h2>
//       </div>
//       <p className="md:text-center sm:mt-4 text-gray-600 pt-[2rem] text-justify">{para}</p>

     
//       <div className="mt-6">
//         <h3 className="text-center font-bold py-2">{TableHeading}</h3>
      
//         <table className="w-full text-left border-collapse border  border-gray-200 hover:border-[#FFB703] group cursor-pointer">
//           <tbody>
//             {bankDetailsTableData.map((detail, index) => (
//               <tr key={index} className={`${index !== bankDetailsTableData.length - 1 ? "border-b" : ""} border-gray-200 group-hover:border-[#FFB703]`}>
//                 <td className="px-5 py-2 font-semibold border-r border-gray-200 group-hover:border-[#FFB703]">{detail.label}</td>
//                 <td className="px-4 py-2">{detail.value}</td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// };

// export default BankDetails;
