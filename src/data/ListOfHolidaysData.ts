import { pdfDownloadType } from "../types/administration-data-type";
const holiday_2025 = "/pdf/List of Holidays - 2025.pdf";
const holiday_2026 = "/pdf/ION-26(a) for College Holidays (2).pdf";
export const listOfHolidaysData: pdfDownloadType[] = [
  {
    id: 1,
    title: "List Of Holidays",
    downloadText: "View",
    childData: [
      {
        id: 0,
        heading: "List of College Holidays Year - 2026",
        buttonLink: holiday_2026,
      },
      {
        id: 0,
        heading: "List of College Holidays Year - 2025",
        buttonLink: holiday_2025,
      },
      {
        id: 15,
        heading: "List of College Holidays Year - 2024",
        buttonLink: "pdf/List of Holidays -2024.pdf",
      },
      {
        id: 1,
        heading: "List of College Holidays Year - 2023",
        buttonLink: "pdf/LIST OF HOLIDAYS - PUBLIC AND RH - 2023.pdf",
      },
      {
        id: 2,
        heading: "List of College Holidays Year - 2022",
        buttonLink: "pdf/ION - List of College Holidays (Year 2022).pdf",
      },
      {
        id: 3,
        heading: "List of holidays for the year 2021",
        buttonLink: "pdf/listofHolidays2021.pdf",
      },
      {
        id: 4,
        heading: "List of holidays for the ODD semester 2020-21",
        buttonLink: "pdf/HOLIDAYODDSEMESTER2020_21.pdf",
      },
      {
        id: 5,
        heading: "List of holidays for the EVEN semester 2019-20",
        buttonLink: "pdf/HOLIDAYEVENSEMESTER2019_20.pdf",
      },
      {
        id: 6,
        heading: "List of holidays for the ODD semester 2019-20",
        buttonLink: "pdf/HOLIDAYODDSEMESTER2019_20.pdf",
      },
      {
        id: 7,
        heading: "List of holidays for the EVEN semester 2018-19",
        buttonLink: "pdf/HOLIDAYEVENSEMESTER2018_19.pdf",
      },
      {
        id: 8,
        heading: "List of holidays for the ODD semester 2018-19",
        buttonLink: "pdf/HOLIDAYODDSEMESTER2018_19.pdf",
      },
      {
        id: 9,
        heading: "List of holidays for the EVEN semester 2017-18",
        buttonLink: "pdf/HOLIDAYEVENSEMESTER2017_18.pdf",
      },
      {
        id: 10,
        heading: "List of holidays for the ODD semester 2017-18",
        buttonLink: "pdf/HOLIDAYODDSEMESTER2017_18.pdf",
      },
      {
        id: 11,
        heading: "List of holidays for the EVEN semester 2016-17",
        buttonLink: "pdf/HOLIDAYEVENSEMESTER2016_17.pdf",
      },
      {
        id: 12,
        heading: "List of holidays for the ODD semester 2016-17",
        buttonLink: "pdf/HOLIDAYODDSEMESTER2016_17.pdf",
      },
      {
        id: 13,
        heading: "List of holidays for the EVEN semester 2015-16",
        buttonLink: "pdf/HOLIDAYEVENSEMESTER2015_16.pdf",
      },
      {
        id: 14,
        heading: "List of holidays for the ODD semester 2015-16",
        buttonLink: "pdf/HOLIDAYODDSEMESTER2015_16.pdf",
      },
    ],
  },
];
