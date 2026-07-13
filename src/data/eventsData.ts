const img1 = "/images/events/Abhivyakti-2024.png";
const img2 = "/images/events/Abhivyakti-2023.png";
const anvarat1 = "/images/events/anvrat1.jpg";
const anvarat2 = "/images/events/anvrat2.jpg";
const anvarat3 = "/images/events/anvrat3.jpg";
const anvarat4 = "/images/events/anvrat4.jpg";
const gantavya = "/images/Gantavya/gantavya.png";
const autonomus = "/images/Gantavya/autonomus.png";
const slider1 = "/images/events/slider1.png";
const slider2 = "/images/events/slider2.png";
const slider3 = "/images/events/slider3.png";
const spardha1 = "/images/spardha/spardha1.jpg";
const spardha2 = "/images/spardha/spardha2.jpg";
import { annualFestDataTypes, internationalConferencesdataTypes } from "../types/event-data-types";
import { customTabDataTypes } from "../types/customDataTypes";
const abhivyakti2026 = "/images/abhivyakti/abhivyakti2026.jpg";

export const customTabData: customTabDataTypes[] = [
  {
    id: 0,
    isAnualFast: true,
    tabData: [
      {
        id: 0,
        tab: "Anvarat",
        content: [
          {
            id: 0,
            title: "Anvarat",
            paraContentChild: [
              {
                id: 0,
                value:
                  "Every year the college celebrates its annual cultural extravaganza Abhivyakti in the month of February. The three day extravaganza attracts participants not only from various colleges of Uttar Pradesh but from other states as well. The unique feature of this fest is its management involving participations of each and every student of the college in some way or the other. The cultural extravaganza which showcases an envious talent pool of various hobby clubs of the college culminates with a massive rock fest Xero and thereafter with a Bollywood Starnight.",
              },
            ],
            cardContentChild: [
              {
                id: 0,
                imgSrc: anvarat1,
                title: "Dandiya Night",
                date: "October 16, 2024",
                btnTitle: "More Info",
                path: "/abhivyakti",
              },
              {
                id: 2,
                imgSrc: anvarat2,
                title: "Cultural Extravaganza",
                date: "October 17, 2024",
                btnTitle: "More Info",
                path: "/abhivyakti",
              },
              {
                id: 2,
                imgSrc: anvarat3,
                title: "Felicitation Ceremony & Celebrations",
                date: "October 18, 2024",
                btnTitle: "More Info",
                path: "/abhivyakti",
              },
              {
                id: 2,
                imgSrc: anvarat4,
                title: "Shilpa Rao Live in Concert",
                date: "October 19, 2024",
                btnTitle: "More Info",
                path: "/abhivyakti",
              },
            ],
          },
        ],
      },
      {
        id: 0,
        tab: "Abhivyakti",
        content: [
          {
            id: 0,
            title: "Abhivyakti",
            paraContentChild: [
              {
                id: 0,
                value:
                  "Every year the college celebrates its annual cultural extravaganza Abhivyakti in the month of February. The three day extravaganza attracts participants not only from various colleges of Uttar Pradesh but from other states as well. The unique feature of this fest is its management involving participations of each and every student of the college in some way or the other. The cultural extravaganza which showcases an envious talent pool of various hobby clubs of the college culminates with a massive rock fest Xero and thereafter with a Bollywood Starnight.",
              },
            ],
            cardContentChild: [

                {
                id: 0,
                imgSrc: abhivyakti2026,
                title: "Abhivyakti 2026",
                date: "February 18, 2026",
                btnTitle: "More Info",
                path: "/abhivyakti2026",
              },
              {
                id: 1,
                imgSrc: img1,
                title: "Abhivyakti 2024",
                date: "March 14, 2024",
                btnTitle: "More Info",
                path: "/abhivyakti",
              },
              {
                id: 2,
                imgSrc: img2,
                title: "Abhivyakti 2023",
                date: "March 15, 2023",
                btnTitle: "More Info",
                path: "/abhivyakti",
              },
            
            ],
          },
        ],
      },
      {
        id: 1,
        tab: "Gantavya",
        content: [
          {
            id: 0,
            title: "Gantavya",
            paraContentChild: [
              {
                id: 0,
                value: "A Technical Fest Shri Ramswaroop Memorial College of Engineering and Management",
              },
              {
                id: 1,
                value:
                  "Gantavya is a festival for the tech buffs. It is an opportunity for the students to showcase their interest and knowledge in the field of technology. It is a two-three days juncture in which, students from not only the college itself but also from outside, participate in the various events organized by GROBOTS: the technical club of the college. It is a function for the emerging researchers to put forward their research papers as the college organizes international conferences. The electromagnetism of the fest are the robotics events organized by the GROBOTS.",
              },
            ],
            cardContentChild: [
              {
                id: 0,
                imgSrc: gantavya,
                title: "Grobots",
                date: "March 14, 2022",
                btnTitle: "More Info",
                path: "/gantavya",
              },
              {
                id: 2,
                imgSrc: autonomus,
                title: "Autonomus",
                date: "March 15, 2023",
                btnTitle: "More Info",
                path: "/gantavya",
              },
            ],
          },
        ],
      },
      {
        id: 2,
        tab: "Spardha",
        content: [
          {
            id: 0,
            title: "Spardha",
            paraContentChild: [
              {
                id: 0,
                value:
                  "The sports fest, Spardha is organized in the college every year during the odd semester. This inter-collegiate sports fest includes sports like cricket, football, volleyball, basketball, table tennis, chess, and carom. The fest aims to develop a sense of team building and sportsman spirit among the students.",
              },
            ],
            cardContentChild: [
              {
                id: 0,
                imgSrc: spardha1,
                title: "Spardha",
                date: "March 14, 2024",
                btnTitle: "More Info",
                path: "/spardha",
              },
              {
                id: 2,
                imgSrc: spardha2,
                title: "Spardha",
                date: "March 15, 2023",
                btnTitle: "More Info",
                path: "/spardha",
              },
            ],
          },
        ],
      },
    ],
  },
];

export const annualFestData: annualFestDataTypes = {
  title: "Annual Fest",
  content:
    "SRMCEM proudly hosts its annual celebrations, providing students with a vibrant platform to exchange ideas, showcase innovation, and express their creativity. These events serve as a dynamic space for cultural engagement, fostering collaboration, intellectual growth, and personal development. By bringing together diverse talents and perspectives, our annual celebrations cultivate a spirit of camaraderie and excellence, empowering students to explore new horizons and embrace holistic learning experiences.",
};

export const internationalConferencesdata: internationalConferencesdataTypes[] = [
  {
    id: 0,
    title: "Annual International Conferences",
    content:
      "The annual International Conference on Engineering and Management at SRMCEM aims to provide an interactive platform for the academicians, industry, entrepreneurs, innovators & policy makers from both India & abroad. Herein ideas are exchanged on various emerging domains of Computing, Communication, Control Technology and e-Business. The conference is organized in association with ASSOCHAM (U.P.) ,Asian Institute of Technology, Thailand and Shri Ramswaroop Memorial University. The conference includes invited keynote talks, panel discussions & paper presentations from both academia & industry. The annual conference acquaints young minds with various upcoming technologies and management practices",
    sliderImg: [
      {
        id: 0,
        imgSrc: slider1,
      },
      {
        id: 1,
        imgSrc: slider2,
      },
      {
        id: 2,
        imgSrc: slider3,
      },
      {
        id: 3,
        imgSrc: slider2,
      },
      {
        id: 4,
        imgSrc: slider1,
      },
      {
        id: 5,
        imgSrc: slider3,
      },
    ],
  },
];
