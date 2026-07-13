import { CampusTourAccordianitemType } from "../types/accordian-items-type";
// AICTE
const approval25_26 = "/pdf/aicte/AICTE-EOA Report 2025-26.pdf";
const approval24_25 = "/pdf/aicte/EOA Corrigendum Report 2024-25.pdf";
const approval23_24 = "/pdf/aicte/EOA-Report--2023-24.pdf";
const approval22_23 = "/pdf/aicte/EOA Report 2022-23.pdf";
const approval21_22 = "/pdf/aicte/EOA_Report_2021_2022.pdf";
const approval20_21 = "/pdf/aicte/AICTE2020_21.pdf";
const approval19_20 = "/pdf/aicte/AICTE2019_20.pdf";
const approval18_19 = "/pdf/aicte/AICTE2018_19.pdf";
const approval17_18 = "/pdf/aicte/AICTE2018_19.pdf";
const approval16_17 = "/pdf/aicte/AICTE2018_19.pdf";
// AKTU
const aktuEOA25_28 = "/pdf/aktu/AKTU Affiliation EOA 2025-26 to 2027-28.pdf";
//NBA
const nba2025CSE = "/pdf/nba/NBA-2025--CSE.pdf";
const nba2025ECE = "/pdf/nba/NBA-2025--ECE.pdf";
const nba2022 = "/pdf/nba/NBA-2022-CSE-EC.pdf";
const nba2009 = "/pdf/nba/NBA-2009-ME.pdf";
const nba2007 = "/pdf/nba/NBA-2007-CSE-ECE-EN-IN.pdf";

export const CustomCampusTourAccordianData: CampusTourAccordianitemType[] = [
  {
    contentTitle: "AICTE",
    content: `Extension of Approval (EOA) for the current academic year 2025-26 for Engineering & Technology, Computer Application, and Management programs granted vide AICTE letter no. F.No. Northern/1-44638634121/2025/EOA dated 12-Apr-2025 addressed to the Principal Secretary, Technical Education, Government of Uttar Pradesh. AICTE Approval 2025-26.`,
    aicteSesion: "AICTE Approval 2025-26",
    file: approval25_26,
    tableData: [
      {
        id: 1,
        title: "EOA ARCHIVE",
        downloadText: "Downloads",
        childData: [
          {
            id: 0,
            heading: "AICTE Approval 2024-25",
            buttonLink: approval24_25,
          },

          {
            id: 1,
            heading: "AICTE Approval 2023-24 ",
            buttonLink: approval23_24,
          },
          {
            id: 2,
            heading: "AICTE Approval 2022-23",
            buttonLink: approval22_23,
          },
          {
            id: 3,
            heading: "AICTE Approval 2021-22",
            buttonLink: approval21_22,
          },
          {
            id: 4,
            heading: "AICTE Approval 2020-21",
            buttonLink: approval20_21,
          },
          {
            id: 5,
            heading: "AICTE Approval 2019-20",
            buttonLink: approval19_20,
          },
          {
            id: 6,
            heading: "AICTE Approval 2018-19",
            buttonLink: approval18_19,
          },
          {
            id: 7,
            heading: "AICTE Approval 2017-18",
            buttonLink: approval17_18,
          },
          {
            id: 8,
            heading: "AICTE Approval 2016-17",
            buttonLink: approval16_17,
          },
        ],
      },
    ],
  },
  {
    contentTitle: "AKTU",
    content: `Extension of Affiliation (EOA) for the current academic year 2025-26 to 2027-28 for Engineering & Technology, Computer Application, and Management programs granted vide AICTE letter no. 2225/7445 dated 26-July-2025 addressed to the Principal Secretary, Technical Education, Government of Uttar Pradesh. AICTE Approval 2025-26.`,
    aicteSesion: "Extension of Affiliation for the academic year 2025-26 to 2027-28 by Dr. A.P.J. Abdul Kalam Technical University, Lucknow",
    file: aktuEOA25_28,
    tableData: [
      {
        id: 1,
        title: "EOA ARCHIVE",
        downloadText: "Downloads",
        childData: [
          {
            id: 0,
            heading: "Extension of Affiliation for the academic year 2024-25 by Dr. A.P.J. Abdul Kalam Technical University, Lucknow",
            buttonLink: "/",
          },
          {
            id: 1,
            heading: "Extension of Affiliation for the academic year 2023-24 by Dr. A.P.J. Abdul Kalam Technical University, Lucknow",
            buttonLink: "/",
          },
          {
            id: 2,
            heading: "Extension of Affiliation for the academic year 2022-23 by Dr. A.P.J. Abdul Kalam Technical University, Lucknow",
            buttonLink: "/",
          },
          {
            id: 3,
            heading: "Extension of Affiliation for the academic year 2021-22 by Dr. A.P.J. Abdul Kalam Technical University, Lucknow",
            buttonLink: "/",
          },
          {
            id: 4,
            heading: "Extension of Affiliation for the academic year 2020-21 by Dr. A.P.J. Abdul Kalam Technical University, Lucknow",
            buttonLink: "/",
          },
          {
            id: 5,
            heading: "Extension of Affiliation for the academic year 2019-20 by Dr. A.P.J. Abdul Kalam Technical University, Lucknow",
            buttonLink: "/",
          },
          {
            id: 6,
            heading: "Extension of Affiliation for the academic year 2018-19 by Dr. A.P.J. Abdul Kalam Technical University, Lucknow",
            buttonLink: "/",
          },
          {
            id: 7,
            heading: "Extension of Affiliation for the academic year 2017-18 by Dr. A.P.J. Abdul Kalam Technical University, Lucknow",
            buttonLink: "/",
          },
          {
            id: 8,
            heading: "Extension of Affiliation for the academic year 2016-17 by Dr. A.P.J. Abdul Kalam Technical University, Lucknow",
            buttonLink: "/",
          },
        ],
      },
    ],
  },
  {
    contentTitle: "NBA",
    content: `Shri Ramswaroop Memorial College of Engineering & Management, Lucknow has been granted NBA accreditation for its Undergraduate Programmes in Electronics & Communication Engineering (ECE) and Computer Science & Engineering (CSE) under Tier-II. The ECE programme is accredited for the period 1st July 2025 to 31st December 2028, while the CSE programme is accredited for the Academic Years 2025–26 to 2027–28 (up to 30th June 2028), as approved by the competent authority of the National Board of Accreditation.`,
    aicteSesion: "NBA-2025--CSE",
    aicteSesion2: "NBA-2025--ECE",
    file: nba2025CSE,
    file2: nba2025ECE,
    tableData: [
      {
        id: 1,
        title: "EOA ARCHIVE",
        downloadText: "Downloads",
        childData: [

        
          {
            id: 0,
            heading: "NBA-2022-CSE-EC",
            buttonLink: nba2022,
          },
         
          {
            id: 1,
            heading: "NBA-2009-ME",
            buttonLink: nba2009,
          }, {
            id: 2,
            heading: "NBA-2007-CSE-ECE-EN-IN",
            buttonLink: nba2007,
          },
        ],
      },
    ],
  },
];
