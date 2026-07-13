import { pdfDownloadType } from "../types/administration-data-type";
const btech = "/pdf/document-checklist/BTech_2023.pdf";
const mtech = "/pdf/document-checklist/MTech_2023.pdf";
const mba = "/pdf/document-checklist/MBA_23.pdf";
const mca = "/pdf/document-checklist/MCA_2023.pdf";
export const HowToApplyBankDetailsData = {
  mainheading: "Online Admission Process",
  subHeading: "Management Quota",
  para: `Admission process under management quota in certain courses of Shri Ramswaroop Memorial Group of Professional College is open now. For details contact our representative on Helpline no. 757-000-3074 on Monday to Saturday between 09:00 AM to 05:00 PM.`,
  TableHeading: " Shri Ramswaroop Memorial College Account Details",
  bankDetailsTableData: [
    { label: "Account Name", value: "SRMCEM" },
    { label: "Bank Name", value: "PUNJAB NATIONAL BANK" },
    { label: "Branch Name & Address", value: "SRMU Campus, Barabanki" },
    { label: "Account No.", value: "9425002100005056" },
    { label: "Account Type", value: "CURRENT" },
    { label: "IFSC Code", value: "PUNB0942500" },
  ],
};
export const HowToApplyPdfData: pdfDownloadType[] = [
  {
    id: 1,
    title: "Document Checklist",
    downloadText: "Downloads",
    childData: [
      {
        id: 0,
        heading: "M.Tech",
        buttonLink: mtech,
      },
      {
        id: 1,
        heading: "B.Tech",
        buttonLink: btech,
      },
      {
        id: 2,
        heading: "MCA",
        buttonLink: mca,
      },
      {
        id: 3,
        heading: "MBA",
        buttonLink: mba,
      },
    ],
  },
];
