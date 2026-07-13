// data for cards section

import { cardsType } from "../types/administration-data-type";
const img1 = "/images/administration/Rectangle 306.png";
const img2 = "/images/administration/Rectangle 307.png";
const img3 = "/images/administration/Media.jpg";//
const img4 = "/images/administration/Rectangle 309.png";
// const DSC = "/images/administration/DSC.png";
const img6 = "/images/administration/Rectangle 315.png";
const img7 = "/images/administration/Rectangle 316.png";
const img8 = "/images/administration/Rectangle 317.png";
// const boby = "/images/administration/boddy.jpg";
// const dpk = "/images/administration/Dr. Pankaj Kumar.jpg";
// const gm = "/images/administration/_Prof. Gaurav Mishra.jpg";
// const aw = "/images/administration/_Dr. Ashish Awasthi.jpg";
// const sa = "/images/administration/Shadab_ali.jpg";
const laju = "/images/administration/laju.jpg";
// const at = "/images/administration/Er. Ashish Tiwari__.jpg";
// const aparna = "/images/administration/aparna.jpg";
// const anoop = "/images/administration/anoop.jpg";
const secretry = "/images/nagendra.png";//

const meimg2 = "/images/departMent/mechanical-engineering/mach2.jpg";


export const administrativeCardData: cardsType[] = [
  {
    id: 1,
    heading: "Important Functionaries",
    buttonText: "VIEW MORE",
    cardsContent: [
      {
        id: 1,
        img: img1,
        name: "Er. Pankaj Agarwal",
        designation: "Executive Director",
      },
      {
        id: 2,
        img: img2,
        name: "Er. Pooja Agarwal",
        designation: "Additional Executive Director",
      },
      {
        id: 3,
        img: img3,
        name: "Prof. (Dr.) B. K. Chauhan",
        designation: "Group Director",
      },
      {
        id: 4,
        img: img4,
        name: "Prof. (Dr.) Anubhav Anand",
        designation: "Director(Pharmacy)",
      },

      {
        id: 6,
        img: img6,
        name: "Er. Ranjan Tripathi",
        designation: "Dean (Academics)",
      },
      {
        id: 7,
        img: img7,
        name: "Er. Parmod Kumar",
        designation: "Associate Dean (AQAC)",
      },
      {
        id: 8,
        img: img8,
        name: "Dr. Satish Chand",
        designation: "Registrar & Head IQAC",
      },
    ],
  },
];

export const administrativeAllCardData: cardsType[] = [
  {
    id: 1,
    heading: "Important Functionaries",
    buttonText: "VIEW MORE",
    cardsContent: [
      {
        id: 1,
        img: img1,
        name: "Er. Pankaj Agarwal",
        designation: "Executive Director",
      },
      {
        id: 2,
        img: img2,
        name: "Er. Pooja Agarwal",
        designation: "Additional Executive Director",
      },
      {
        id: 3,
        img: secretry,
        name: "Mr.Nagendra Kumar Agarwal",
        designation: "Secretary",
      },
      {
        id: 4,
        img: img3,
        name: "Prof. (Dr.) B. K. Chauhan",
        designation: "Group Director",
      },
      {
        id: 5,
        img: img4,
        name: "Prof. (Dr.) Anubhav Anand",
        designation: "Director(Pharmacy)",
      },
      {
        id: 6,
        img: meimg2,
        name: "Prof. (Dr.) Parul Gupta",
        designation: "Director Academics",
      },

      {
        id: 7,
        img: img8,
        name: "Prof. (Dr.) Satish Chand",
        designation: "Registrar",
      },
      {
        id: 8,
        img: laju,
        name: "Prof. (Dr.) Laju Chandiramani ",
        designation: "Controller of Examinations",
      },
    ],
  },
];

// data for budget
import { pdfDownloadType } from "../types/administration-data-type";

export const budgetData: pdfDownloadType[] = [
  {
    id: 1,
    title: "Budgets",
    downloadText: "Downloads",
    childData: [
      {
        id: 0,
        heading: "2019-2020",
        buttonLink: "/",
      },
      {
        id: 1,
        heading: "2018-2019",
        buttonLink: "/",
      },
      {
        id: 2,
        heading: "2017-2018",
        buttonLink: "/",
      },
      {
        id: 3,
        heading: "2016-2017",
        buttonLink: "/",
      },
    ],
  },
];
