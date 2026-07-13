import { pdfDownloadType } from "../types/administration-data-type";
const pdf1 = "/pdf/membership/ICI Life Member Certificate.pdf";
const pdf2 = "/pdf/membership/MOU.pdf";
const pdf3 = "/pdf/membership/AIMA.pdf";
const pdf4 = "/pdf/membership/chambers.pdf";
const pdf5 = "/pdf/membership/LMA.pdf";
const pdf6 = "/pdf/membership/TIME.pdf";
const pdf7 = "/pdf/membership/TCSCertificate.pdf";
const pdf8 = "/pdf/membership/computerSocietyOFIndia.pdf";

export const MembershipData: pdfDownloadType[] = [
  {
    id: 1,
    title: "Membership",
    downloadText: "View Certificate",
    childData: [
      {
        id: 0,
        heading: "Computer Society of India (CSI)",
        pdfView: pdf1,
      },
      {
        id: 1,
        heading: "All India Management Association (AIMA)",
        pdfView: pdf2,
      },
      {
        id: 2,
        heading: "Lucknow Management Association (LMA)",
        pdfView: pdf3,
      },
      {
        id: 3,
        heading: "Institution’s Innovation Council (IIC)",
        pdfView: pdf4,
      },
      {
        id: 4,
        heading: "Institute of Electrical and Electronics Engineers (IEEE)",
        pdfView: pdf5,
      },
      {
        id: 5,
        heading: "IEEE Women in Engineering",
        pdfView: pdf6,
      },
      {
        id: 6,
        heading: "IEEE Robotics and Automation Society",
        pdfView: pdf7,
      },
      {
        id: 7,
        heading: "IEEE Signal Processing Society",
        pdfView: pdf8,
      },
      {
        id: 7,
        heading: "IEEE Advance Technology for Humanity",
        pdfView: pdf8,
      },
      {
        id: 7,
        heading: "IEEE Advance Technology for Humanity",
        pdfView: pdf8,
      },
      {
        id: 7,
        heading: "Geeks for Geeks",
        pdfView: pdf8,
      },
      {
        id: 7,
        heading: "Association for Computing Machinery (ACM)",
        pdfView: pdf8,
      },
      {
        id: 7,
        heading: "Confederation of Indian Industry (CII)",
        pdfView: pdf8,
      },
    ],
  },
];
