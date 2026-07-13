import { CustomCardGridDataTypes, FacilityTypes, otherFacilitiesCardLayoutDataTypes, transportationDataTypes } from "../types/customDataTypes";
// const fac1 = "/images/facilitiesImg/img1.png";
// const fac2 = "/images/facilitiesImg/fac2.jpg";
// const fac3 = "/images/facilitiesImg/fac3.jpg";
// const fac4 = "/images/facilitiesImg/fac4.jpg";
const PdfImg = "/images/facilitiesImg/pdf_img.png";
const RectangleBG = "/images/facilitiesImg/RectangleBG.png";
const bus_img = "/images/facilitiesImg/bus_img.png";
// const img6 = "/images/facilitiesImg/img6.png";
// const img7 = "/images/facilitiesImg/img7.png";
// const img8 = "/images/facilitiesImg/img8.png";
const pdf1 = "/pdf/facilitiesOther/20260206223231.pdf";
const pdf2 = "/pdf/facilitiesOther/BusPolicy2023.pdf";
const pdf3 = "/pdf/facilitiesOther/20260206223150.pdf";
// const fac5 = "/images/facilitiesImg/fac5.jpg";
const fac6 = "/images/facilitiesImg/fac6.jpg";
// const fac7 = "/images/facilitiesImg/fac7.jpg";
// const fac8 = "/images/facilitiesImg/fac8.jpg";
// const fac9 = "/images/facilitiesImg/fac9.jpg";
const medical = "/images/facilitiesImg/medical.jpg";
const fac10 = "/images/facilitiesImg/fac10.jpg";
// const tFacility1 = "/images/facilitiesImg/1.BusPolicy2023.pdf";
// const tFacility2 = "/images/facilitiesImg/2.BusNotice2023.pdf";
// const tFacility3 = "/images/facilitiesImg/3.SRMCEM Bus Route_23.pdf";

const newComp = "/images/facilitiesImg/new/Copy of DSC_5511.jpg";
const newHos = "/images/facilitiesImg/new/DSC_5983.jpg";
const newSmar = "/images/facilitiesImg/new/DSC_5985.jpg";



const newMess = "/images/facilitiesImg/othernew/DSC_5931.jpg";
const newGym = "/images/facilitiesImg/othernew/DSC_4924.jpg";


export const facilitiesCardData: FacilityTypes[] = [
  {
    title: "Computer Labs",
    description:
      "SRMCEM has well equipped computer centre. The entire campus is connected through Local Area Network, including the library and the hostels. There is 24-hour internet connectivity with data transfer speed of 200 Mbps. Online UPSs are installed for uninterrupted power supply in each lab.Open Learning Area(OLA) managed by computer certre is WiFi designated space for students' interactions & collaboration. It showcases innovations in educational technology, interactions using digital media, 2D/3D visual experiments, open lectures and more. BYOD (Bring Your Own Device) is adopted to work in the OLA.The computer centre is divided into 23 laboratories with about 32 systems in each lab.It has Microsoft Campus agreement.",
    imageUrl: newComp,
  },
  // {
  //   title: 'Mess & Canteen Facilities',
  //   description:
  //     'Girls and boys hostels at SRMCEM have separate dining facility. Each mess is spacious with apposite dining furniture. All hostels have their own independent mess committee comprising students. The mess committee decides the menu and revises it from time to time in accordance to seasons and taste. The quality of food is also checked by the mess committee. That is to say it’s the students who decide the menu according to which meals are prepared and served. Mess staff is cleanliness-conscious and it ensures that the food is prepared and served in a hygienic manner.The college also has a good canteen.Fresh food and beverages are served till late hours.',
  //   imageUrl: fac2,
  // },
  {
    title: "College Hostels",
    description: `
             <div>
                <h5>Separate Hostels For Girls And Boys</h5>
                <p>
                    <b>1. Boys Hostel</b><br>
                    (I) Dr. C.V. Raman Hostel<br>
                    (II) Dr. Radha Krishnan Hostel<br>
                    <b>Chief Hostel Warden (Boys Hostel): </b>Mr. Sunil Parker<br>
                    <b>Mobile No. : </b> 9389879279<br>
                    <b>Hostel Warden (Boys Hostel): </b> Mr. S. Muthu Kumar<br>
                    <b>Mobile No. : </b> 7317002230
                </p>

                <p>
                    <b>2. Girls Hostel</b><br>
                    (I) Saraswati Girls Hostel<br>
                    <b>Chief Hostel Warden (Girls Hostel): </b> Dr. Laju Chandiramani<br>
                    <b>Mobile No. : </b> 9415115062<br>
                    <b>Hostel Warden (Girls Hostel): </b> Mrs. Shikha Tiwari<br>
                    <b>Mobile No. : </b> 9076900927
                </p>

                <p class="mt-2">
                    The hostel facility at SRMCEM makes its students experience home like living and learning even though they are away from their homes. Separate and well furnished hostels for boys and girls alike are independently equipped with all amenities such as water purifiers, water coolers, hot water supply etc. The college hostels have indoor game facilities to make its inmates physically fit. Facilities such as well equipped gymnasium, library, and Wi-Fi is available for the hostel inmates separately.
                </p>
            </div>
  `,
    imageUrl: newHos,
  },
  // {
  //   title: 'GYM',
  //   description:
  //     'College has a well equipped Gym comprising of treadmill, stretching machines, suspension trainer, stationary bike, abdominal bench, cross trainer and various weight training equipment. The gym has full time Weight & Fitness Trainer along with Yoga and Aerobics Trainers as well.',
  //   imageUrl: fac4,
  // },
  {
    title: "Smart Classes",
    description: "College has ample number of lecture theatres and smart classes. They are IT enabled and equipped with smart boards, LCD projectors, OHPs and sound systems.",
    imageUrl: newSmar,
  },
  {
    title: "Conference Room",
    description: `
    <div class="course-text" style="text-align: justify;">

                <p>
                    The Conference Room at SRMCEM provides for meetings, presentations, and corporate recruitment proceedings. It is IT enabled with state of the art infrastructure.  It includes:
                </p>

                <p>
                    •	 Contemporary interiors<br>
                    •	 Ergonomic Conference chairs<br>

                    •	 LCD Projection system
                    <br>

                    •	Air Conditioning<br>
                    •	 Electrical & LAN connections for laptops.<br>
                    •	 Individual microphones
                    <br>


                </p>

            </div>`,

    imageUrl: fac6,
  },
  // {
  //   title: 'SEMINAR HALLS',
  //   description:
  //     'College has Seminar Hall –A Block for major events with total seating capacity of four hundred. It is in linear-style setting. It is fully air-conditioned and is suitable for international conferences, symposium, meetings, seminars, concerts, presentations and performances. The hall is fully equipped with state-of-the-art audio-visual devices with screen projections spread across the seminar hall. College has another seminar hall called Seminar Hall- F block with same audio-visual facilities. It caters to the cultural events, tech fest events, student presentations and guest lectures.',
  //   imageUrl: fac7,
  // },

  // {
  //   title: 'Transport Facility',
  //   description: `
  //   <div class="course-text" style="text-align: justify;">

  //               <p>
  //                   The college bus service is well in place for all major routes of Lucknow. The maximum travel time on each route is between 35 to 50 minutes. Besides bus service for students, faculty, and staff, vehicles are also provided to the students participating in various college activities within the city. Bus service is provided for excursions and industrial visits as well.
  //               </p>

  //               <p>
  //                   <b>Bus Manager : </b>Mr. Shesh Kumar<br>
  //                   <b>Mobile No. :</b> 7706005984<br>
  //                   <b>Bus Coordinator : </b>Mr. Vidya Sagar<br>
  //                   <b>Mobile No. :</b> 7570003074
  //               </p>

  //               <p>
  //                   BUS Policy 2023: <a href="${tFacility1}" target="_blank" style="color:blue;">(Click to View)</a>
  //                   <br>
  //                   BUS Notice 2023: <a href="${tFacility2}" target="_blank" style="color:blue;">(Click to View)</a>
  //                   <br>
  //                   BUS Route Information: <a href="${tFacility3}" target="_blank" style="color:blue;">(Click to View)</a>
  //                   <br>

  //               </p>

  //           </div>
  //   `

  //   ,
  //   imageUrl: fac8,
  // },
  //   {
  //     title: 'Medical Facility',
  //     description:
  //       `
  //       <div class="course-text" style="text-align: justify;">

  //                 <p>
  //                     SRMCEM has its own dispensary with a doctor in residence. The dispensary is equipped with round-the-clock ambulance facility. The college also has standing arrangements with reputed hospitals in the vicinity for emergency medical aid. A free medical check-up is conducted fortnightly. Students are insured as per AKTU policy.
  //                 </p>
  //                 <br>
  //                 <hr>
  //                   <br>
  //                 <h6>The collge dispensary provides following services: </h6>
  //                 <br>
  //                 <b>1)</b> Health care counselling<br>
  //                 <br>
  //                 <b>2)</b> Wellness checkup<br>
  //                 <br>
  //                 <b>3)</b> Dental care<br>
  //                 <br>
  //                 <b>4)</b> First aid treatment<br>
  //                 <br>
  //                 <b>5)</b> Eye checkup<br>
  //                 <br>
  //                 <b>6)</b> Nursing care management<br>
  //                 <br>
  //                 <b>7)</b> Referral<br>
  //                 <br>

  //                 <hr>
  // <br>
  //                 <h6>Medical Staff: </h6>
  //                 <br>
  //                 <b>1)	Dr.Kiran Mishra- MBBS  </b>
  //                 <br>
  //                 <br>
  //                 <b>2)</b>	Devesh Mishra- Nursing Assistant/Pharmacist<br>
  //                 <br>
  //                 <b>3)</b>	 Deepak Rana- Pharmacist
  //                 <br>
  //                 <br>
  //                 <b>4)</b>	Anjali Verma- Staff Nurse
  //                 <br>
  //                 <br>

  //             </div>
  //       `,
  //     imageUrl: fac9,
  //   },
  {
    title: "Meditation Centre",
    description: "College has a meditation centre for faculty members and students. It appositely serves as a place for recharging and cleansing soul and mind.",
    imageUrl: fac10,
  },
];

export const otherfacilitiesCardData: FacilityTypes[] = [
  // {
  //   title: "Girls Hostel",
  //   description: `
  //     <strong>Saraswati Girls Hostel</strong><br/>
  //     Chief Hostel Warden (Girls Hostel): Dr. Laju Chandiramani<br/>
  //     <strong>Mobile No.</strong> : 9415115062<br/>
  //     <strong>Hostel Warden (Girls Hostel):</strong> Mrs. Shikha Tiwari<br/>
  //     <strong>Mobile No.</strong> : 9076900927
  //   `,
  //   imageUrl: img6,
  // },
  // {
  //   title: "Boys Hostel",
  //   description: `
  //     (I) Dr. C.V. Raman Hostel<br/>
  //     (II) Dr. Radha Krishnan Hostel<br/>
  //     Chief Hostel Warden (Boys Hostel): Mr. Sunil Parker<br/>
  //     <strong>Mobile No.</strong> : 9389879279<br/>
  //     <strong>Hostel Warden (Boys Hostel):</strong> Mr. S. Muthu Kumar<br/>
  //     <strong>Mobile No.</strong> : 7317002230
  //   `,
  //   imageUrl: img7,
  // },
  {
    title: "Mess & Canteen Facilities",
    description:
      "Girls and boys hostels at SRMCEM have separate dining facility. Each mess is spacious with apposite dining furniture. All hostels have their own independent mess committee comprising students. The mess committee decides the menu and revises it from time to time in accordance to seasons and taste. The quality of food is also checked by the mess committee. That is to say it’s the students who decide the menu according to which meals are prepared and served. Mess staff is cleanliness-conscious and it ensures that the food is prepared and served in a hygienic manner.The college also has a good canteen.Fresh food and beverages are served till late hours.",
    imageUrl: newMess,
  },
  {
    title: "Gym",
    description: `
      College has a well-equipped Gym comprising of treadmill, stretching machines, suspension trainer, stationary bike, abdominal bench, cross trainer and various weight training equipment. The gym has a full-time Weight & Fitness Trainer along with Yoga and Aerobics Trainers as well.
    `,
    imageUrl: newGym,
  },
  {
    title: "Medical Facility",
    description: `
          <div class="course-text" style="text-align: justify;">

                    <p>
                        SRMCEM has its own dispensary with a doctor in residence. The dispensary is equipped with round-the-clock ambulance facility. The college also has standing arrangements with reputed hospitals in the vicinity for emergency medical aid. A free medical check-up is conducted fortnightly. Students are insured as per AKTU policy.
                    </p>
                    <br>
                    <hr>
                      <br>
                    <h6>The collge dispensary provides following services: </h6>
                    <br>
                    <b>1)</b> Health care counselling<br>
                    <br>
                    <b>2)</b> Wellness checkup<br>
                    <br>
                    <b>3)</b> Dental care<br>
                    <br>
                    <b>4)</b> First aid treatment<br>
                    <br>
                    <b>5)</b> Eye checkup<br>
                    <br>
                    <b>6)</b> Nursing care management<br>
                    <br>
                    <b>7)</b> Referral<br>
                    <br>

                    <hr>
    <br>
                    <h6>Medical Staff: </h6>
                    <br>
                    <b>1)	Dr.Kiran Mishra- MBBS  </b>
                    <br>
                    <br>
                    <b>2)</b>	Devesh Mishra- Nursing Assistant/Pharmacist<br>
                    <br>
                    <b>3)</b>	 Deepak Rana- Pharmacist
                    <br>
                    <br>
                    <b>4)</b>	Anjali Verma- Staff Nurse
                    <br>
                    <br>



            </div>
                    `,
    imageUrl: medical,
  },
];

export const otherFacilitiesCardLayoutData: otherFacilitiesCardLayoutDataTypes = {
  title: "Other Facilities",
  content: "From innovative research spaces to interactive learning environments, SRMCEM offers a range of facilities.",
};

export const facilitiesCardLayoutData: otherFacilitiesCardLayoutDataTypes = {
  title: "Academic Facilities",
  content: "From innovative research spaces to interactive learning environments, SRMCEM offers a range of academic facilities.",
};

export const facilitiesOtherCardsData: CustomCardGridDataTypes[] = [
  {
    icon: PdfImg,
    title: "Bus Policy",
    pdf: pdf2,
    backgroundImage: RectangleBG,
  },
  {
    icon: PdfImg,
    title: "Bus Notice",
    pdf: pdf1,
    backgroundImage: RectangleBG,
  },
  {
    icon: PdfImg,
    title: "Bus Route Info",
    pdf: pdf3,
    backgroundImage: RectangleBG,
  },
];

export const transportationData: transportationDataTypes = {
  content:
    "SRMCEM offers top-notch sports and recreational facilities, covering a range of indoor and outdoor activities such as chess, carrom, badminton, tennis, basketball, volleyball, football, and cricket. The campus boasts extensive sports facilities, including a gymnasium, aligning with the belief that a healthy mind thrives in a healthy body.",
  src: bus_img,
  alt: "Campus Sports Facilities",
  contentItem: [
    {
      M_name: "Bus Manager: Mr. Shesh Kumar",
      M_mobNo: "Mobile No : 7706005984",
      C_name: "Bus Coordinator : Mr. Vidya Sagar",
      C_mobNo: "Mobile No : 7570003074",
    },
  ],
};
