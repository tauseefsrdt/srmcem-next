import { customeOverViewType } from "../types/home-data-type";

 
export const contactOverviewData: customeOverViewType = {
    heading: "Contact Us",
    content:
        "Prospective students, current enrollees, and other stakeholders can leverage this platform to connect directly with the university's knowledgeable and responsive staff, fostering effective communication and support.",
};
 
 
interface ContactCardType {
    id: number;
    title: string;
    value: string | string[];
    icon: string;
}
export const contactCardData: ContactCardType[] = [
    {
        id: 1,
        title: "Admission Tollfree",
        value: "18001035298",
        icon: "headphone",
    },
   
    
    {
        id: 4,
        title: "Reception",
        value: "7570003074 , 9839010407",
        icon: "telephone",
    },
   
    {
        id: 7,
        title: "Email Us",
        value: ["admissions@srmcem.ac.in", "registrar@srmcem.ac.in"],
        icon: "envelope",
    },
    {
        id: 8,
        title: "Women Helpline",
        value: "9415115062",
        icon: "phone",
    },
];
 
// contactAddress.data.ts
 
export const addressData = [
    {
        id: 1,
        title: "City Office Address",
        lines: [
            "C-2/42, Vishesh Khand,",
            "Opposite Chote Lal Nursery,",
            "Gomtinagar, Lucknow",
            "Admission Tollfree : 18001026004",
        ],
        mapUrl:
            "https://www.google.com/maps?q=C-2/42,+Vishesh+Khand,+Gomtinagar,+Lucknow&output=embed",
    },
    {
        id: 2,
        title: "Main Campus Address",
        lines: [
            "Shri Ramswaroop College Of Engineering and Management",
            "Tiwari Ganj, Faizabad Rd, ",
            "Lucknow, Uattardhona,",
            "Uttar Pradesh 226028",
        ],
        mapUrl:
            "https://www.google.com/maps?q=26.891913,81.0728825&z=17&output=embed",
    },
];