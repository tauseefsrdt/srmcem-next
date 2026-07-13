const leftslider1 = "/images/btech/placement/leftslider1.png";
const leftslider2 = "/images/btech/placement/leftslider2.png";
const leftslider3 = "/images/btech/placement/leftslider3.png";
const leftslider4 = "/images/btech/placement/leftslider4.png";
const leftslider5 = "/images/btech/placement/leftslider5.png";
const rightslider1 = "/images/btech/placement/rightslider1.png";
const rightslider2 = "/images/btech/placement/rightslider2.png";
const rightslider3 = "/images/btech/placement/rightslider3.png";
// const rightslider4 = "/images/btech/placement/rightslider4.png";

const MobilePlacementData = [
  {
    heading: "Placement",
    description:
      "SRMCEM transforms aspirations into careers. Our placement cell empowers students with the skills, opportunities, knowledge, and confidence needed to thrive in today's competitive job market.",
    leftDivstoBeFlex: [
      {
        id: 1,
        title: 95,
        symbol: "%",
        description: "Placement in Computer Science Engineering",
        isSlider: false,
      },
      {
        id: 2,
        isSlider: true,
        leftSlider: [
          {
            id: 1,
            title: 2000,
            symbol: "+",
            description: "Job Offers Given by 250+ Top Corporates who visited campus",
            img: leftslider2,
          },
          {
            id: 2,
            title: 60,
            symbol: "+",
            description: "Multi-Million $ Companies are visiting Campus",
            img: leftslider1,
          },
          {
            id: 3,
            title: 30,
            symbol: "LPA",
            description: "Highest Package of 30LPA grabbed in Morgan Stanley",
            img: leftslider4,
          },
          {
            id: 4,
            title: 30,
            symbol: "%",
            description: "Students got more than 2 job offers ",
            img: leftslider5,
          },
          {
            id: 5,
            title: 90,
            symbol: "%",
            description: "90% placement achieved in Biotechnology",
            img: leftslider3,
          },
        ],
      },
    ],

    middleDivsToBeFlex: [
      {
        id: 1,
        title: 90,
        symbol: "%",
        description: "Students placed in CMM Level 5 companies",
      },
      {
        id: 2,
        title: 1000,
        symbol: "+",
        description: "Students selected in Fortune 500 companies",
      },
    ],

    secondLeftDivstoBeFlex: [
      {
        id: 1,
        title: 100,
        symbol: "%*",
        description: "Placement achieved in Engineering, Management, Computer Application and Polytechnic",
        isSlider: false,
      },
      {
        id: 2,
        isSlider: true,
        leftSlider: [
          {
            id: 1,
            title: 40,
            symbol: "+",
            description: "Recruiters Exclusively for Core Engineering",
            img: rightslider1,
          },
          {
            id: 2,
            title: 4,
            symbol: ".5 LPA",
            description: "Average package of 4.5 LPA offered in this session",
            img: rightslider2,
          },
          {
            id: 3,
            title: 50,
            symbol: "+",
            description: "Recruiters Exclusively for Management",
            img: rightslider3,
          },
          // {
          //   id: 4,
          //   title: 20,
          //   symbol: "+",
          //   description: "Recruiters Exclusively for Biotechnology ",
          //   img: rightslider4,
          // },
        ],
      },
    ],

    finleDivsToBeFlex: [
      {
        id: 1,
        title: 175,
        symbol: "+",
        description: "Students got a package of more than 5 LPA",
      },
    ],

    // rightSlider: [
    //     {
    //         id: 1,
    //         title: 40,
    //         symbol: "+",
    //         description: "Recruiters Exclusively for Core Engineering",
    //         img: rightslider1,
    //     },
    //     {
    //         id: 2,
    //         title: 4,
    //         symbol: ".5 LPA",
    //         description: "Average package of 4.5 LPA offered in this session",
    //         img: rightslider2,
    //     },
    //     {
    //         id: 3,
    //         title: 50,
    //         symbol: "+",
    //         description: "Recruiters Exclusively for Management",
    //         img: rightslider3,
    //     },
    //     {
    //         id: 4,
    //         title: 20,
    //         symbol: "+",
    //         description: "Recruiters Exclusively for Biotechnology ",
    //         img: rightslider4,
    //     },
    // ],
  },
];

export default MobilePlacementData;
