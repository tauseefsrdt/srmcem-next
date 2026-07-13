import { pdfDownloadType } from "../types/administration-data-type";
const pdf1 = "/pdf/tutorial/User Manual-Student Quick Payment.pdf";
// const pdf2 = "/pdf/studentCounsilRepresentative/Students Bearers and Representatives 2022-23.pdf";


export const TutorialData: pdfDownloadType[] = [
    {
        id: 1,
        title: "Tutorials",
        downloadText: "Downloads",
        childData: [
            {
                id: 0,
                heading: "Quick Fee Payment(Online Payment): User Manual",
                buttonLink: pdf1,
            },
            // {
            //     id: 1,
            //     heading: "Online Fee Payment for 2nd Year & Above(Tutorial)",
            //     buttonLink: pdf2,
            // },

        ],
    },
];