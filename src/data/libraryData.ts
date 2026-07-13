import { CustomCardTypes, CustomLibraryContentTypes, customTabDataTypes, customTimingsSectionTypes, LinkItem } from "../types/customDataTypes";
const img1 = "/images/centralLibrary/img1.jpg";
const img2 = "/images/centralLibrary/img2.jpg";
const img3 = "/images/centralLibrary/img3.jpg";
const img4 = "/images/centralLibrary/img4.jpg";
const img5 = "/images/centralLibrary/img5.jpg";
const img6 = "/images/centralLibrary/img6.jpg";
const icon1 = "/images/centralLibrary/icon1.png";
const icon2 = "/images/centralLibrary/icon2.png";
const icon3 = "/images/centralLibrary/icon3.png";
const icon4 = "/images/centralLibrary/icon4.png";
// const logo1 = "/images/centralLibrary/logo1.png";
// const logo2 = "/images/centralLibrary/logo2.png";
const logo3 = "/images/centralLibrary/logo3.png";
const logo4 = "/images/centralLibrary/logo4.png";
// const logo5 = "/images/centralLibrary/logo5.png";
// const logo6 = "/images/centralLibrary/logo6.png";
// const logo7 = "/images/centralLibrary/logo7.png";
// const logo8 = "/images/centralLibrary/logo8.png";
// const logo9 = "/images/centralLibrary/logo9.png";
// const logo10 = "/images/centralLibrary/logo10.png";
const logo11 = "/images/centralLibrary/delnet.jpg";
const logo12 = "/images/centralLibrary/NPTEL.png";
const logo13 = "/images/centralLibrary/e Pathshala.png";
const BG_img = "/images/centralLibrary/BG_img.png";
const clock_img = "/images/centralLibrary/clock_img.png";
const QR_img1 = "/images/centralLibrary/QR_img.jpg";
const QR_img = "/images/centralLibrary/QR_img1.jpg";
const pdf_img = "/images/centralLibrary/pdf_img.png";
const registration_path = "/images/centralLibrary/Steps for self-registration to NDLI club.pdf";
const img11 = "/images/centralLibrary/img11.png";
const img12 = "/images/centralLibrary/img12.png";
const img13 = "/images/centralLibrary/img13.png";

export const libraryContentData: CustomLibraryContentTypes = {
  data: {
    paraContent: [
      {
        id: 0,
        content:
          "SRMCEM has a well-equipped Wi-Fi enabled Central Library, 03 Branch Library; these libraries collectively support the teaching and research programmes of the college. , In addition to this the Institute has 13 departmental Libraries and 02 Hostel Libraries for reference purpose. All students and employees of the institute are members of this library system, and can freely avail all the services and facilities.The library has a collection of more than 78,000 books. Along with books library subscribes 127 print journals and 09 magazines. Library has access to 1249 online national/ international journals and has subscribed to E-resources (e-books, e-journals, articles etc.)",
      },
      // {
      //   id: 1,
      //   content:
      //     "The library has a collection of more than 77,000 books. Along with books library subscribes 119 print journals and 05 magazines. Library has access to 6069 online national/ international journals and has subscribed to E-resources (e-books, e-journals, articles etc.) and through AKTU Nalanda E-consortium (MyLoft App).",
      // },
    ],
    images: [
      {
        id: 0,
        src: img1,
        alt: "img1",
      },
      {
        id: 1,
        src: img2,
        alt: "img2",
      },
      {
        id: 2,
        src: img3,
        alt: "img3",
      },
      {
        id: 3,
        src: img4,
        alt: "img4",
      },
      {
        id: 4,
        src: img5,
        alt: "img5",
      },
      {
        id: 5,
        src: img6,
        alt: "img6",
      },
    ],
  },
};

export const sectionsAndServicesCardsData: CustomCardTypes[] = [
  {
    title: "Circulation",
    icon: icon1,
    description:
      " An automated circulation system has been implemented using LibSys 4; barcoding is done all the books of library. Books are issued through Barcode enabled ID-cum-Library cards. Loan eligibility/number of loans for each member is determined by membership category (by item type and collection).",

    content: `
      <div>
        <h2 class="font-semibold text-2xl mb-3">Circulation</h2>
        <p>
         An automated circulation system has been implemented using LibSys 4; barcoding is done all the books of library. Books are issued through Barcode enabled ID-cum-Library cards. Loan eligibility/number of loans for each member is determined by membership category (by item type and collection).
        </p>
      </div>
    `,
  },
  {
    title: "Book Reservation",
    icon: icon2,

    description:
      " The reservation service can be availed through WebOPAC from anywhere in the college campus. Reading material is kept reserved for 3 days from the date of return.",
    content: `
      <div>
        <h2 class="font-semibold text-2xl mb-3">Book Reservation</h2>
        <p>
         The reservation service can be availed through WebOPAC from anywhere in the college campus. Reading material is kept reserved for 3 days from the date of return.
        </p>
      </div>
    `,
  },
  {
    title: "Book Bank",
    icon: icon3,

    description: " Library has separate facility of Book-Bank under which books are issued to the students for entire semester. Books under book bank scheme are on paid basis.",
    content: `
      <div>
        <h2 class="font-semibold text-2xl mb-3">Book Bank</h2>
        <p>
         Library has separate facility of Book-Bank under which books are issued to the students for entire semester. Books under book bank scheme are on paid basis.
        </p>
      </div>
    `,
  },
  // {
  //   title: "Reference",
  //   icon: icon3,
  //   isMode: "hide",
  //   description: "  The Central Library maintains a separate reference section consisting of:",
  //   content: `
  //     <div>
  //       <h2 class="font-semibold text-2xl mb-3">Reference</h2>
  //       <p>
  //      The Central Library maintains a separate reference section consisting of:
  //       </p>
  //       <ul class="list-decimal ml-4">
  //          <li>Encyclopedias</li>
  //          <li>Handbooks</li>
  //          <li>Dictionaries</li>
  //          <li>Expensive Books</li>
  //          <li>Foreign Publication Books</li>
  //       </ul>
  //     </div>
  //   `,
  // },
  {
    title: "Reprography",
    icon: icon3,

    description:
      " A dedicated section is available to cater all reprographic needs (Printouts and Photocopy). Subject to copyright regulations, library material can be photocopied on payment basis.",
    content: `
      <div>
        <h2 class="font-semibold text-2xl mb-3">Reprography</h2>
        <p>
        A dedicated section is available to cater all reprographic needs (Printouts and Photocopy). Subject to copyright regulations, library material can be photocopied on payment basis.
        </p>
      </div>
    `,
  },
  {
    title: "Audio Visual",
    icon: icon4,

    description:
      "A well quipped section with high speed internet connection and desktops is available to access E- resources, E-repository and other services. It allows the users to take a printout of desired document/ resource directly from the PC they are using.",
    content: `
      <div>
        <h2 class="font-semibold text-2xl mb-3">Audio Visual</h2>
        <p>
        A well quipped section with high speed internet connection and desktops is available to access E- resources, E-repository and other services. It allows the users to take a printout of desired document/ resource directly from the PC they are using.
        </p>
      </div>
    `,
  },
];

export const libraryTabData: customTabDataTypes[] = [
  {
    id: 0,
    isDepartment: true,
    tabData: [
      {
        id: 0,
        tab: "Floor Information",
        contentObject: {
          id: 0,
          listItem: [
            {
              id: 0,
              list: "Carpet area of Central Library (in m2): 1158 sqm ",
            },
            {
              id: 1,
              list: "Reading space (in m2): 400 sqm.",
            },
            {
              id: 2,
              list: "Number of seats in reading space: 304 Students Capacity.",
            },
            {
              id: 3,
              list: "No. of users (issue book) per day: 221 Approx. Students",
            },
            {
              id: 4,
              list: "No of users (reading space) per day: 250 Approx. Students",
            },
            {
              id: 5,
              list: "Library working hours: 09:00am to 08:30pm (Monday- Saturday) (Library is kept open on Sundays as well during Examinations) Library Security system : CCTV",
            },
            {
              id: 6,
              list: "Status of Automation : Partial",
            },
            {
              id: 7,
              list: "Library Management Software : LIBSYS 4",
            },
            {
              id: 8,
              list: "Library Classification System : Yes (DDC 22nd Edition)",
            },
            {
              id: 10,
              list: "Number of Library staff: 18",
            },
            {
              id: 11,
              list: "Number of Library staff with Professional Degree: 10 Staff",
            },
            {
              id: 12,
              list: "Computerization for search, indexing: Yes (Libsys WebOPAC)",
            },
            {
              id: 13,
              list: "Issue / return Records Bar coding used: Yes",
            },
            {
              id: 14,
              list: "Library services on Internet/Intranet or other similar membership achieves: DELNET, National Digital Library of India & NDLI Club.",
            },
            {
              id: 15,
              boldList: "Library Collection ",
            },
            {
              id: 16,
              boldList: "Total Number of Books (Volumes): 78117 ",
            },

            {
              id: 17,
              boldList: "Total Number of Title: 9051",
            },
            {
              id: 18,
              boldList: "Total No. of Book-Bank Books: 7559 ",
            },
            {
              id: 19,
              boldList: "Total Number of Educational CD’s: - 2263",
            },
            {
              id: 20,
              boldList: "E- Databases / Journals Packages: 02",
            },
            {
              id: 21,
              boldList: "Number of Journals: 127  ",
            },
            {
              id: 12,
              boldList: "Number of Magazines: 09 ",
            },
            {
              id: 23,
              boldList: "Number of News Paper: 10 (Hindi & English)",
            },
          ],
          // subListItem: [
          //   {
          //     id: 0,
          //     val: "Total Number of Books (Volumes): 77107",
          //   },
          //   {
          //     id: 1,
          //     val: "Total Number of Title: 8845",
          //   },
          //   {
          //     id: 2,
          //     val: "Total No. of Book-Bank Books: 7559",
          //   },
          //   {
          //     id: 3,
          //     val: "Total Number of Educational CD’s: - 2263",
          //   },
          //   {
          //     id: 4,
          //     val: "E- Databases / Journals Packages: 02",
          //   },
          //   {
          //     id: 5,
          //     val: "Number of Journals: 119",
          //   },
          //   {
          //     id: 6,
          //     val: "Number of Magazines: 05",
          //   },
          //   {
          //     id: 7,
          //     val: "Number of News Paper: 10 (Hindi & English)",
          //   },
          // ],
        },
      },
      {
        id: 1,
        tab: "LIBRARY MEMBERSHIP",
        contentObject: {
          id: 0,
          tableShow: false,
          // content: "Students, Faculty Members, Non-teaching Staff and other members of the staff of the college are entitled to become member of the library",
          tableContent: [
            {
              category: "Students",
              noOfBooks: "03",
              retentionPeriod: "10 days",
              renewalPeriod: "10 days",
              fineFirst7Days: "@Rs. 5",
              fineAfter7Days: "@Rs. 10",
            },
            {
              category: "Faculty Members",
              noOfBooks: "06**",
              retentionPeriod: "15 days",
              renewalPeriod: "15 days",
              fineFirst7Days: "NIL",
              fineAfter7Days: "NIL",
            },
            {
              category: "Visiting Faculty",
              noOfBooks: "02",
              retentionPeriod: "10 days",
              renewalPeriod: "10 days",
              fineFirst7Days: "NIL",
              fineAfter7Days: "NIL",
            },
            {
              category: "Non-Teaching Staff",
              noOfBooks: "02",
              retentionPeriod: "10 days",
              renewalPeriod: "10 days",
              fineFirst7Days: "NIL",
              fineAfter7Days: "NIL",
            },
          ],
          listItemWithTitle: [
            {
              id: 0,
              title: "Circulation Rules",
              listItem: [
                {
                  id: 0,
                  list: "Borrowers must produce their valid ID-cum-Library card when borrowing the books.",
                },
                {
                  id: 1,
                  list: "In case of loss of card (s), the user shall report such loss immediately to the Library In-Charge, failing which he/she will be responsible for any misuse of his/her card or books issued against such lost card.",
                },
                {
                  id: 2,
                  list: "New card (s) will be issued only against a payment of fine.",
                },
                {
                  id: 3,
                  list: "Borrowers must check to see that all library materials in their possession have been properly checked out to them before leaving the library.",
                },
                {
                  id: 4,
                  list: "The borrower is fully responsible for the books issued against the ID-cum-Library issued to him/her. Borrower will be held responsible for any mutilation (including defacement) found in library materials when returned.",
                },
                {
                  id: 5,
                  list: "They must check and report any mutilation found at the time of issuing the book.",
                },
                {
                  id: 6,
                  list: "Any book not returned in response to a final overdue notice would be considered as lost and the member would be asked to pay compensation for the lost book.",
                },
                {
                  id: 7,
                  list: "Dictionaries, Magazines, Reference documents, reserved books, Journals and Print out of books are not permitted to be drawn. However in case of urgency, the reference books can be drawn by faculty members for overnight after taking due permission of the authority. (Form for special permission is available in the reference section of library).",
                },
                {
                  id: 8,
                  list: "In case only one copy of a particular book is available, it will not be issued to any faculty member. They are requested to refer the same in library (Reference Section) only.",
                },
                {
                  id: 10,
                  list: "Each student shall surrender his/her ID-cum-Library card temporarily to the concerned staff before obtaining Reference Books’. Two ‘Reference Books’ may be provided at a time.",
                },
                {
                  id: 11,
                  list: "The Librarian will have the power to refuse the issuance of a book to any member or recall any book without assigning any reason thereof.",
                },
                {
                  id: 12,
                  list: "Students are required to return all the books {including book bank} issued to them within three days after the semester exams are over. However, final year students will return all the books issued to them & obtain a NO DUES certificate before examination.",
                },
              ],
            },
            {
              id: 0,
              title: "General Rules",
              listItem: [
                {
                  id: 0,
                  list: "Every user entering the Library shall sign the Visitor’s Register for the purpose of records for office use.",
                },
                {
                  id: 1,
                  list: "Entry is permitted with ID- cum- Library Card only.",
                },
                {
                  id: 2,
                  list: "The ID-cum-Library Cards are not transferable and must be produced whenever requested by Library staff. The loss of ID card should be immediately reported to the Library, so that a duplicate card may be issued.",
                },
                {
                  id: 3,
                  list: "No personal belonging except wallet and notebook shall be allowed in the library. All other belongings shall be kept in cloak room at the Library entrance.",
                },
                {
                  id: 4,
                  list: "Students are required to be properly dressed while coming to the Library. The library staff has the right to ask users to leave the library if they are inappropriately dressed or are causing a disturbance.",
                },
                {
                  id: 5,
                  list: "Refreshment of any kind shall not be taken anywhere in the library premises.",
                },
                {
                  id: 6,
                  list: "Users should observe strict silence and switch off their Mobile phones in the Library premises.",
                },
                {
                  id: 7,
                  list: "Books and other reading materials must be treated with honor, so that it is prohibited to underline, write notes or pull out pages there from.",
                },
                {
                  id: 8,
                  list: "Reading material taken out of the shelves must be kept on the reading tables. Replacing the documents on the shelves by users is not encouraged as the documents may get misplaced.",
                },
                {
                  id: 10,
                  list: "No reading material from the library should be taken out without proper issuing/ recording.",
                },
                {
                  id: 11,
                  list: "Students are liable for punishment and fine, if they either misbehave or damage Library books or any other property.",
                },
                {
                  id: 12,
                  list: "Strict discipline must be maintained in the library.",
                },
                {
                  id: 13,
                  list: "Smoking, spitting and talking in the library is strictly prohibited.",
                },
                {
                  id: 14,
                  list: "Violation of library rules or misconduct by a member may invite discontinuation of the library privileges.",
                },
              ],
            },
          ],
        },
      },
      {
        id: 2,
        tab: "E-DATABASE & ONLINE JOURNAIS",
        contentObject: {
          id: 0,
          content: "The following e-resources are being subscribed by the college.",
          accordianShow: true,
          accordianData: [
            // {
            //   id: 0,
            //   contentType: 3,
            //   contentTitle: "Nalanda E-Consortium, AKTU (MyLoft App)",
            //   subParaContent:
            //     "This consortium brings together 756 institutions of AKTU affiliated/associated/constituent Institutions located in Uttar Pradesh, India. Nalanda e- Consortium is providing access to variety of e-contents from reputed publishers.",
            // },
            {
              id: 1,
              contentType: 3,
              contentTitle: "DELNET",
              subParaContent:
                "offers access to nearly 1.75 crore records of books, periodicals, articles, thesis dissertations and other databases. Besides this, it also provides Inter library Loan & Document Delivery Services to all its member libraries.",
            },
            {
              id: 2,
              contentType: 3,
              contentTitle: "National Digital Library",
              subParaContent: "As per AICTE, Central Library has registered its 4485 users (students and faculty members) to National Digital Library.",
            },
            {
              id: 3,
              contentType: 3,
              contentTitle: "South Asia Archive (SAA)",
              subParaContent:
                "The College has access to the resources of South Asia Archive (SAA) through E-ShodhSindhu. The South Asia Archive is as a specialist digital platform delivering global electronic access to culturally and historically significant literary material produced from within - and about - the Indian subcontinent.",
            },
            {
              id: 4,
              contentType: 3,
              contentTitle: "IIM Ahmedabad Cases",
              subParaContent:
                "A collection of cases studies and other substantial teaching /study material from IIM, Ahmedabad is available to furnish analytical and practical learning for management students and teaching fraternity.IIM Ahmedabad Cases",
            },
            {
              id: 5,
              contentType: 3,
              contentTitle: "E-Repository",
              subParaContent:
                "Question Papers (Internal/ External), Quizzes, Syllabus, NPTEL Video lectures, Placement Papers and scanned copy of notes provided by the concerned faculty members of every subject can be accessed 24x7 through E-Repository.",
            },
            {
              id: 6,
              contentType: 3,
              contentTitle: "Scholars’ Study Room",
              subParaContent:
                "A separate reading room is available in Central Library that provides a secluded and quiet study and research space reserved only for the use of faculty members of the college.",
            },
            // {
            //   id: 7,
            //   contentType: 3,
            //   contentTitle: "Departmental Libraries",
            //   subParaContent:
            //     "These Libraries act as extension counters of the Central Library. Each of these 13 departmental library houses a library having collection of books, project reports pertinent to the subject of courses being run by the department.",
            // },
            {
              id: 8,
              contentType: 3,
              contentTitle: "Hostel Library",
              subParaContent:
                "There are two hostel libraries for boys and girls hostel respectively. Each of these libraries houses a collection of general books, personality development books, competitive exam books, newspaper and magazines.",
            },
            {
              id: 6,
              contentType: 3,
              contentTitle: "Institutional Membership",
              tableData: [
                {
                  slNo: 1,
                  nameOfBody: "DELNET (Developing Library Network)",
                  membershipMode: "Institutional",
                  period: "Annual",
                  startFrom: "January, 2012",
                  membershipNo: "IM-5520",
                },
                {
                  slNo: 2,
                  nameOfBody: "National Digital Library of India, NDLI",
                  membershipMode: "Institutional",
                  period: "Annual",
                  startFrom: "December, 2017",
                  membershipNo: "",
                },
                {
                  slNo: 3,
                  nameOfBody: "Nalanda Consortium, AKTU",
                  membershipMode: "Institutional",
                  period: "Annual",
                  startFrom: "January, 2020",
                  membershipNo: "eLib1920122",
                },
                {
                  slNo: 4,
                  nameOfBody: "NDLI Club",
                  membershipMode: "Institutional",
                  period: "Annual",
                  startFrom: "14 July, 2021",
                  membershipNo: "INUPNMZLSAJE8",
                },
              ],
            },
          ],
        },
      },
      {
        id: 3,
        tab: "Events",
        contentObject: {
          id: 0,
          accordianShow: true,
          cardItem: [
            {
              title: "Saraswati Puja",
              content: [
                {
                  id: 0,
                  contentItem:
                    "SRMCEM has a well-equipped Wi-Fi enabled Central Library, 01 Branch Library; these libraries collectively support the teaching and research programmes of the college. , In addition to this the Institute has 13 departmental Libraries and 02 Hostel Libraries for reference purpose. All students and employees of the institute are members of this library system, and can freely avail all the services and facilities.",
                },
                // {
                //   id: 1,
                //   contentItem:
                //     "The library has a collection of more than 77,000 books. Along with books library subscribes 119 print journals and 05 magazines. Library has access to 6069 online national/ international journals and has subscribed to E-resources (e-books, e-journals, articles etc.) and through AKTU Nalanda E-consortium (MyLoft App).",
                // },
              ],
              imageUrl: img11,
            },
            {
              title: "Book Exhibition",
              content: [
                {
                  id: 0,
                  contentItem:
                    "Book Exhibition is organized by Central Library during librarian week every year in the month of november wherein students & faculty get an opportunity to browse through the interesting collection on display and to select books of their choice. Books on engineering (curriculum and beyond curriculum), basic science and humanities by renowned publishers were on display and sale. Non-technical books, i.e., inspirational books, self help books and other general books were also on display.",
                },
              ],
              imageUrl: img12,
            },
            {
              title: "Book Exhibition",
              content: [
                {
                  id: 0,
                  contentItem:
                    "Book Exhibition is organized by Central Library during librarian week every year in the month of november wherein students & faculty get an opportunity to browse through the interesting collection on display and to select books of their choice. Books on engineering (curriculum and beyond curriculum), basic science and humanities by renowned publishers were on display and sale. Non-technical books, i.e., inspirational books, self help books and other general books were also on display.",
                },
              ],
              imageUrl: img13,
            },
          ],
          accordianData: [
            {
              id: 0,
              contentType: 3,
              contentTitle: "E-Learning Platform (Govt. Of India)",
              listItem: [
                {
                  id: 0,
                  list: "Swayam",
                },
                {
                  id: 1,
                  list: "VIDYA- MITRA intrigrated E- Content Portal",
                },
                {
                  id: 2,
                  list: "E- Yantra",
                },
                {
                  id: 3,
                  list: "FOSSE(Free/Libre and Open Source Software for Education)",
                },
                {
                  id: 4,
                  list: "Virtual Labs",
                },
                {
                  id: 5,
                  list: "e-Gyankosh",
                },
                {
                  id: 6,
                  list: "e-PG Pathshala (INFLIBNET Gandhinagar)",
                },
                {
                  id: 7,
                  list: "E-Sodhsindhu (INFLIBNET)",
                },
                {
                  id: 8,
                  list: "ShodhGanga (INFLIBNET)",
                },
                {
                  id: 9,
                  list: "Vidwan (INFLIBNET)",
                },
                {
                  id: 10,
                  list: " Spoken -Tutorial",
                },
              ],
            },
            {
              id: 1,
              contentType: 3,
              contentTitle: "Open Access Database",
              listItem: [
                {
                  id: 0,
                  list: "Swayam",
                },
                {
                  id: 1,
                  list: "VIDYA- MITRA intrigrated E- Content Portal",
                },
                {
                  id: 2,
                  list: "E- Yantra",
                },
                {
                  id: 3,
                  list: "FOSSE(Free/Libre and Open Source Software for Education)",
                },
                {
                  id: 4,
                  list: "Virtual Labs",
                },
                {
                  id: 5,
                  list: "e-Gyankosh",
                },
                {
                  id: 6,
                  list: "e-PG Pathshala (INFLIBNET Gandhinagar)",
                },
                {
                  id: 7,
                  list: "E-Sodhsindhu (INFLIBNET)",
                },
                {
                  id: 8,
                  list: "ShodhGanga (INFLIBNET)",
                },
                {
                  id: 9,
                  list: "Vidwan (INFLIBNET)",
                },
                {
                  id: 10,
                  list: " Spoken -Tutorial",
                },
              ],
            },
            {
              id: 2,
              contentType: 3,
              contentTitle: "Standard Sources",
              listItem: [
                {
                  id: 0,
                  list: "Swayam",
                },
                {
                  id: 1,
                  list: "VIDYA- MITRA intrigrated E- Content Portal",
                },
                {
                  id: 2,
                  list: "E- Yantra",
                },
                {
                  id: 3,
                  list: "FOSSE(Free/Libre and Open Source Software for Education)",
                },
                {
                  id: 4,
                  list: "Virtual Labs",
                },
                {
                  id: 5,
                  list: "e-Gyankosh",
                },
                {
                  id: 6,
                  list: "e-PG Pathshala (INFLIBNET Gandhinagar)",
                },
                {
                  id: 7,
                  list: "E-Sodhsindhu (INFLIBNET)",
                },
                {
                  id: 8,
                  list: "ShodhGanga (INFLIBNET)",
                },
                {
                  id: 9,
                  list: "Vidwan (INFLIBNET)",
                },
                {
                  id: 10,
                  list: " Spoken -Tutorial",
                },
              ],
            },
          ],
        },
      },
    ],
  },
];

export const linksData: LinkItem[] = [
  {
    slides: [
      // {
      //   name: "JSTOR",
      //   logo: logo1,
      //   url: "",
      // },
      // {
      //   name: "EBSCOhost",
      //   logo: logo2,
      //   url: "",
      // },
      {
        name: "Statista",
        logo: logo3,
        url: "https://ndl.iitkgp.ac.in/",
      },

      {
        name: "Khan Academy",
        logo: logo4,
        url: "https://www.youtube.com/channel/UC-y-UTxSbPngyGgDzBKpI3A",
      },
      {
        name: "Khan Academy",
        logo: logo11,
        url: "https://discovery1.delnet.in/",
      },
      {
        name: "Khan Academy",
        logo: logo12,
        url: "https://nptel.ac.in/",
      },
      {
        name: "Khan Academy",
        logo: logo13,
        url: "https://www.egyankosh.ac.in/",
      },

      // logo11,
      // {
      //   name: "Wiley Online Library",
      //   logo: logo5,
      //   url: "",
      // },
      // {
      //   name: "Open Access",
      //   logo: logo6,
      //   url: "",
      // },
      // {
      //   name: "eGyanKosh",
      //   logo: logo7,
      //   url: "",
      // },
      // {
      //   name: "VIDWAN",
      //   logo: logo8,
      //   url: "",
      // },
      // {
      //   name: "Digital Education",
      //   logo: logo9,
      //   url: "",
      // },
      // {
      //   name: "Online Library",
      //   logo: logo10,
      //   url: "",
      // },
    ],
  },
  // {
  //   slides: [
  //     {
  //       name: "JSTOR",
  //       logo: logo1,
  //       url: "",
  //     },
  //     {
  //       name: "EBSCOhost",
  //       logo: logo2,
  //       url: "",
  //     },
  //     {
  //       name: "Statista",
  //       logo: logo3,
  //       url: "",
  //     },
  //     {
  //       name: "Khan Academy",
  //       logo: logo4,
  //       url: "",
  //     },
  //     {
  //       name: "Wiley Online Library",
  //       logo: logo5,
  //       url: "",
  //     },
  //     {
  //       name: "Open Access",
  //       logo: logo6,
  //       url: "",
  //     },
  //     {
  //       name: "eGyanKosh",
  //       logo: logo7,
  //       url: "",
  //     },
  //     {
  //       name: "VIDWAN",
  //       logo: logo8,
  //       url: "",
  //     },
  //     {
  //       name: "Digital Education",
  //       logo: logo9,
  //       url: "",
  //     },
  //     {
  //       name: "Online Library",
  //       logo: logo10,
  //       url: "",
  //     },
  //   ],
  // },
];

export const customTimingsSectionData: customTimingsSectionTypes = {
  timings: [
    { label: "Working Hours", time: "9:00 A.M. - 07:30 P.M." },
    { label: "Circulation", time: "9:15 A.M. - 04:15 P.M." },
    { label: "Reprography", time: "9:15 A.M. - 04:15 P.M." },
    { label: "Audio-Visual Section", time: "9:15 A.M. - 04:15 P.M." },
    { label: "Reference Section", time: "9:00 A.M. - 07:15 P.M." },
  ],
  qrCodes: [
    {
      src: QR_img1,
      email: "avs.cl@srmcem.ac.in",
    },
    {
      src: QR_img,
      email: "avs.pg@srmcem.ac.in",
    },
  ],
  registrationPdf: pdf_img,
  userGuidePdf: pdf_img,
  backgroundImage: BG_img,
  clockImage: clock_img,
  registrationPdfPath: registration_path,
};
