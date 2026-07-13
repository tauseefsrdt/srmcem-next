import React, { useState } from "react";
// import { createPortal } from "react-dom";
const bgImg1 = "/images/trainingPlacement/PlacementRecords/bg-placementTraining1.jpg";
import Classes from "../../utils/styles/Global.module.css";
import { FullPlacementTableData, PlacementData } from "../../data/placementData";
import { FiUser, FiEye } from "react-icons/fi";
import { CustomModal } from "../iqac/iqacCard";

type PlacementData = typeof PlacementData;



// ✅ Modal IDs
const STUDENT_MODAL_ID = 1;
const TABLE_MODAL_ID = 2;

const PlacementRecords: React.FC = () => {
  const [selectedYear, setSelectedYear] = useState<string>("2025-26");
  const [selectedStudent, setSelectedStudent] = useState<any>(null);
  const [tableYear, setTableYear] = useState<string | null>(null);
  const [isExpanded, setIsExpanded] = useState<number | null>(null);

  const selectedYearData = PlacementData.find((item) => item.year === selectedYear);
  const records = selectedYearData ? selectedYearData.students : [];
  const tableData = tableYear ? FullPlacementTableData[tableYear] ?? [] : [];

  // ✅ Build student modal HTML content
  const studentModalContent = selectedStudent
    ? `<div style="text-align:center">
        ${selectedStudent.img
      ? `<img src="${selectedStudent.img}" style="width:120px;height:120px;border-radius:50%;object-fit:cover;margin:auto;margin-bottom:20px;border:2px solid #ffb703;" />`
      : `<div style="width:120px;height:120px;border-radius:50%;background:#f3f4f6;display:flex;align-items:center;justify-content:center;margin:auto;margin-bottom:20px;border:2px solid #ffb703;font-size:40px;">👤</div>`
    }
        <h2 style="font-size:24px;font-weight:bold;color:#233E6F;margin-bottom:16px;text-transform:uppercase">${selectedStudent.name}</h2>
        <p style="margin-bottom:8px;color:#374151"><strong>Degree:</strong> ${selectedStudent.degree}</p>
        <p style="margin-bottom:8px;color:#374151"><strong>Company:</strong> ${selectedStudent.company}</p>
        <p style="margin-bottom:8px;color:#374151"><strong>Package:</strong> <span style="font-weight:bold;color:#233E6F">${selectedStudent.package}</span></p>
      </div>`
    : "";

  // ✅ Build table modal HTML content
  const tableModalContent = tableYear
    ? `<div>
        <h2 style="font-size:22px;font-weight:bold;color:#233E6F;margin-bottom:20px;text-align:center">
          Placement Records - ${tableYear}
        </h2>
        ${tableData.length === 0
      ? `<p style="text-align:center;color:#6b7280;padding:40px 0">Data coming soon for ${tableYear}</p>`
      : `<div style="overflow-x:auto">
              <table style="width:100%;border-collapse:collapse;font-size:14px">
                <thead>
                  <tr style="background-color:#233E6F;color:white">
                    <th style="padding:10px 8px;text-align:left;white-space:nowrap">S.No</th>
                    <th style="padding:10px 8px;text-align:left;white-space:nowrap">Roll No</th>
                    <th style="padding:10px 8px;text-align:left">Name</th>
                    <th style="padding:10px 8px;text-align:left">Branch</th>
                    <th style="padding:10px 8px;text-align:left">Company</th>
                    <th style="padding:10px 8px;text-align:left;white-space:nowrap">CTC (LPA)</th>
                  </tr>
                </thead>
                <tbody>
                  ${tableData.map((row, i) => `
                    <tr style="background-color:${i % 2 === 0 ? "#f9fafb" : "white"};border-bottom:1px solid #e5e7eb">
                      <td style="padding:8px;color:#374151">${row.sno}</td>
                      <td style="padding:8px;color:#374151;white-space:nowrap">${row.rollNo}</td>
                      <td style="padding:8px;color:#233E6F;font-weight:500">${row.name}</td>
                      <td style="padding:8px;color:#374151">${row.branch}</td>
                      <td style="padding:8px;color:#374151">${row.company}</td>
                      <td style="padding:8px;color:#16a34a;font-weight:bold">${row.ctc}</td>
                    </tr>
                  `).join("")}
                </tbody>
              </table>
            </div>`
    }
      </div>`
    : "";

  return (
    <>
      <div
        className="relative bg-cover bg-center py-[50px] md:py-[80px] lg:py-[120px] min-h-[780px]"
        style={{ backgroundImage: `url(${bgImg1})` }}
      >
        <div className={`${Classes["container"]}`}>
          <div className="flex flex-col md:flex-row gap-10">
            {/* Left Section */}
            <div className="left md:w-1/3">
              <h2 className="text-3xl lg:text-4xl text-white font-bold text-center mb-6 sm:mb-10">
                Placement Records
              </h2>
              <ul className="w-full flex sm:flex-col text-center sm:max-w-[220px] mx-auto sm:space-y-4">
                {PlacementData.map((data) => (
                  <li
                    key={data.year}
                    className={`flex items-center justify-between py-2 sm:py-4 w-full cursor-pointer border-2 hover:border-[#ffb703] ${data.year === selectedYear
                        ? "bg-[#ffb703] border-[#ffb703] text-[#233E6F]"
                        : "border-[#fff] text-white"
                      } font-bold sm:text-[1.5rem]`}
                    onClick={() => setSelectedYear(data.year)}
                  >
                    <span className="flex-1 text-center pl-8">{data.year}</span>

                    {/* ✅ Eye icon on year tab — uses inline style so clicks are never blocked */}
                    <button
                      style={{
                        background: "none",
                        border: "none",
                        cursor: "pointer",
                        padding: "0 10px",
                        color: data.year === selectedYear ? "#233E6F" : "#ffb703",
                        display: "flex",
                        alignItems: "center",
                        flexShrink: 0,
                        fontSize: "20px",
                      }}
                      onClick={(e) => {
                        e.stopPropagation();
                        setTableYear(data.year);
                        setIsExpanded(TABLE_MODAL_ID);
                      }}
                      title={`View all placements for ${data.year}`}
                    >
                      <FiEye size={20} />
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Right Section */}
            <div className="right md:w-2/3">
              <div className="flex flex-wrap gap-6 justify-between">
                {records.map((record, index) => (
                  <div
                    key={index}
                    className="relative px-6 py-10 w-full md:w-[48%] border-2 border-white group hover:border-[#ffb703] bg-[#131C30] inset-0 bg-opacity-50 text-white rounded-lg text-center shadow-lg"
                  >
                    {/* @ts-ignore */}
                    {record.img ? (
                      <div className="w-20 h-20 mx-auto mb-4 overflow-hidden bg-white rounded-full border-2 group-hover:bg-transparent border-[#ffb703]">
                        {/* @ts-ignore */}
                        <img src={record.img} className="w-20 h-20 object-cover" alt="" />
                      </div>
                    ) : (
                      <div className="flex justify-center pb-4 font-normal">
                        <span className="bg-white w-20 h-20 min-w-20 min-h-20 flex justify-center items-center text-[#ffb703] rounded-full border-2 group-hover:bg-transparent border-[#ffb703]">
                          <FiUser size={24} />
                        </span>
                      </div>
                    )}

                    <h4 className="font-bold text-lg text-white uppercase">{record.name}</h4>
                    <p className="text-sm text-white text-center">{record.degree}</p>
                    <p className="text-sm text-white text-center">{record.company}</p>
                    <p className="font-bold text-white text-center">{record.package}</p>

                    {/* ✅ View button on card */}
                
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ✅ Student detail modal using CustomModal */}
      {selectedStudent && (
        <CustomModal
          id={STUDENT_MODAL_ID}
          isExpanded={isExpanded}
          setIsExpanded={(val: number | null) => {
            setIsExpanded(val);
            if (val === null) setSelectedStudent(null);
          }}
          title=""
          description=""
          content={studentModalContent}
        />
      )}

      {/* ✅ Full table modal using CustomModal */}
      {tableYear && (
        <CustomModal
          id={TABLE_MODAL_ID}
          isExpanded={isExpanded}
          setIsExpanded={(val: number | null) => {
            setIsExpanded(val);
            if (val === null) setTableYear(null);
          }}
          title=""
          description=""
          content={tableModalContent}
        />
      )}
    </>
  );
};

export default PlacementRecords;