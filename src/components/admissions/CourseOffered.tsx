import React, { useState } from "react";
import Classes from "../../utils/styles/Global.module.css";
import { FaArrowRightLong } from "react-icons/fa6";
import { CoursesData } from "../../data/admissionsData";
import Link from "next/link";

const CourseOffered: React.FC = () => {
  const [programType, setProgramType] = useState("");
  const [discipline, setDiscipline] = useState("");
  const [searchTerm, setSearchTerm] = useState("");

  // Extract unique program types and disciplines
  const programTypes = Array.from(new Set(CoursesData.map((course) => course.programType)));
  const disciplines = Array.from(new Set(CoursesData.map((course) => course.discipline)));

  // Filter logic
  const filteredCourses = CoursesData.filter((course) => {
    const isUGorCS = programType === "UG"
      ? course.programType === "UG" || course.programType === "Computer Science & Engineering"
      : programType === "" || course.programType === programType;

    return (
      isUGorCS &&
      (discipline === "" || course.discipline === discipline) &&
      (searchTerm === "" || course.name.toLowerCase().includes(searchTerm.toLowerCase()))
    );
  });


  return (
    <div className={`${Classes["container"]} pb-6 sm:py-10`}>
      <h2 className="text-3xl lg:text-4xltext-center font-bold mb-5 sm:mb-10">Courses Offered</h2>

      {/* Filters */}
      <div className="py-4 px-2 md:p-6 bg-[#244271]">
        <div className="flex flex-col md:flex-row gap-4">
          <select className="border p-2 rounded w-full md:w-1/3" onChange={(e) => setProgramType(e.target.value)} value={programType}>
            <option value="">Select Program Type</option>
            {programTypes.map((type) => (
              <option key={type} value={type}>
                {type}
              </option>
            ))}
          </select>
          <select className="border p-2 rounded w-full md:w-1/3" onChange={(e) => setDiscipline(e.target.value)} value={discipline}>
            <option value="">Select Discipline</option>
            {disciplines.map((discipline) => (
              <option key={discipline} value={discipline}>
                {discipline}
              </option>
            ))}
          </select>
          <input type="text" placeholder="Search Course" className="border p-2 rounded w-full md:w-1/3" value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} />
        </div>
      </div>

      {/* Course List */}
      <div className="mt-8">
        {filteredCourses.map((course) => (
          <div key={course.id} className="border p-4 mb-4 rounded-md flex flex-col lg:flex-row gap-4 lg:justify-between items-center">
            {/* Course Details */}
            <div className="flex flex-col md:flex-row gap-2 w-full justify-between lg:w-[70%]">
              <h3 className="text-sm lg:text-base font-bold lg:w-[60%]">{course.name}</h3>
              <p className="text-sm lg:text-base lg:w-[20%]">{course.duration}</p>
              <p className="text-sm text-gray-600 lg:w-[20%]">{course.fee}</p>
            </div>

            {/* Buttons */}
            <div className="flex flex-row gap-2 w-full lg:w-[30%] justify-between  lg:justify-end">
              {
                course.isMode === "link" ? <a target="_blank" href={course.path || '#'}  className="bg-[#233E6F] hover:bg-[#ffb703] text-white px-4 py-2 text-sm rounded flex items-center gap-2">
                  View Details <FaArrowRightLong />
                </a> : <Link href={course.path || '#'}  className="bg-[#233E6F] hover:bg-[#ffb703] text-white px-4 py-2 text-sm rounded flex items-center gap-2">
                  View Details <FaArrowRightLong />
                </Link>
              }

              <Link href="/enquiry-form" className="bg-[#ffb703] hover:bg-[#233E6F] text-white px-4 py-2 text-sm rounded inline-flex items-center gap-2">
                Apply Now <FaArrowRightLong />
              </Link>
            </div>
          </div>
        ))}
      </div>


    </div>
  );
};

export default CourseOffered;
