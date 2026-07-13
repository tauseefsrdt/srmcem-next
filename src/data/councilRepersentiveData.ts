import { pdfDownloadType } from "../types/administration-data-type";
const pdf1 = "/pdf/studentCounsilRepresentative/Students Bearers and Representatives 2023-24.pdf";
const pdf2 = "/pdf/studentCounsilRepresentative/Students Bearers and Representatives 2022-23.pdf";
const pdf3 = "/pdf/studentCounsilRepresentative/Students Bearers and Representatives 2021-22.pdf";
const pdf4 = "/pdf/studentCounsilRepresentative/student senate representative 2020-21.pdf";
const pdf5 = "/pdf/studentCounsilRepresentative/student senate representative 2019-20.pdf";
const pdf6 = "/pdf/studentCounsilRepresentative/Student Council Representatives Session 2024-25.pdf";
const pdf7 = "/pdf/studentCounsilRepresentative/Student Council Representatives Session 2025-26.pdf";

export const CouncilRepresentativesData: pdfDownloadType[] = [
  {
    id: 1,
    title: "Student Council Representatives",
    downloadText: "Downloads",
    childData: [
         {
        id: 5,
        heading: "Student Council Representatives - 2025-2026",
        buttonLink: pdf7,
      },   {
        id: 6,
        heading: "Student Council Representatives - 2024-2025",
        buttonLink: pdf6,
      },
      {
        id: 0,
        heading: "Student Council Representatives - 2023-2024",
        buttonLink: pdf1,
      },
      {
        id: 1,
        heading: "Student Council Representatives - 2022-2023",
        buttonLink: pdf2,
      },
      {
        id: 2,
        heading: "Student Council Representatives - 2021-2022",
        buttonLink: pdf3,
      },
      {
        id: 3,
        heading: "Student Council Representatives - 2020-2021",
        buttonLink: pdf4,
      },
      {
        id: 4,
        heading: "Student Council Representatives - 2019-2020",
        buttonLink: pdf5,
      },
    ],
  },
];

export const NationalCadetData = {
  heading: "NCC - National Cadet Corps",
  content: [
    {
      id: 0,
      para: "The National Cadet Corps (NCC) is the youth wing of the Indian Armed Forces, with its headquarters in New Delhi. Open to students on a voluntary basis, the NCC is a Tri-Services Organization comprising the Army, Navy, and Air Force Wings. It plays a pivotal role in grooming the youth of India into disciplined, patriotic, and responsible citizens."
    },
    {
      id: 1,
      para: "At SRMCEM, we are proud to host the UP 67 Battalion and the UP 19 Girls Battalion, providing both male and female cadets with a platform to develop their leadership skills, teamwork, and sense of duty."
    },
    {
      id: 2,
      para: "The NCC offers students a unique opportunity to receive basic military training in small arms and participate in regular parades. This not only instills a sense of discipline but also fosters physical and mental robustness. Upon completing the program, cadets and officers bear no obligation for active military service, though many choose to pursue distinguished careers in the defense services."
    },
    {
      id: 3,
      para: `With its motto, "Unity and Discipline," the NCC serves as one of the greatest unifying forces in the country. It brings together youth from diverse backgrounds, fostering secularism, teamwork, and national integration. At SRMCEM, our NCC cadets carry forward this legacy, contributing to the nation and embodying the spirit of service and excellence.`
    },
    {
      id: 4,
      para: "Join us and be part of this transformative journey!"
    },


  ]

};

export const missionData = [
  {
    id: 0,
    count: "01",
    subHeading: "Purpose",
    content: "To cultivate character, camaraderie, discipline, leadership, and selfless service among the youth.",
  },
  {
    id: 1,
    count: "02",
    subHeading: "Perspective",
    content: "To cultivate organized, trained, and motivated youth who are prepared to lead and serve the nation.",
  },
  {
    id: 2,
    count: "03",
    subHeading: "Mission",
    content: "To create an environment that motivates youth to pursue a career in the Armed Forces.",
  },
];
