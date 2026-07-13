const logo = "/images/srmcem_head_logo.png";
const anti_raging_policy = "/pdf/Aicte Notification - Anti-Ragging.pdf";
const anti_raging_coomuity = "/pdf/Anti-Ragging Committee 2025-26.pdf";
const anti_raging_affidavit = "/pdf/AffidavitAntiraggingStudent&Parents.pdf";
const scst = "/pdf/SC-ST Committee.pdf";
export const HeaderData = [
  {
    TopHeaderData: [
      {
        leftContent: [
          {
            item: "Notice",
          },
          {
            item: "Admission Enquiry",
          },
          {
            item: "Career",
          },
        ],
        rightContent: [
          {
            id: 1,
            logo: "",
            content1: [{ item: "Student Login" }, { item: "Student Login" }],
          },
          {
            id: 3,
            logo: "",
          },
          {
            id: 2,
            logo: "",
            content1: [{ icon: "", info: "Admission Helpline", phone: "18001026004" }, { item: "Student Login" }],
          },
        ],
      },
    ],
    bottomHeaderData: [
      {
        logo: logo,
        navitems: [
          {
            id: 0,
            item: "About Us",
            path: "/about",
            subItem: [
              { item: "Message", path: "/about/message" },
              { item: "Administration", path: "/about/administration" },
              { item: "IQAC", path: "/about/iqac" },
              { item: "Membership", path: "/about/membership" },
              // { item: "Achievements", path: "/about/achievements" },
              { item: "Visitors Testimonial", path: "/about/visitors" },
            ],
          },
          {
            id: 1,
            item: "Academics",
            path: "/academics",
            subItem: [{ item: "Academic Calendar and Activity Planner", path: "/academics/academics-calender" }],
          },
          {
            id: 2,
            item: "Admissions",
            path: "#",
            subItem: [
              { item: "Courses Offered", path: "/admissions/course-offered" },
              { item: "How To Apply", path: "/admissions/how-to-apply" },
              {
                item: "Anti Ragging",
                path: "#",
                isMode: "fifth",
                nestedSubItem: [
                  {
                    item: "Anti Ragging Policy",
                    path: anti_raging_policy,
                    href: true,
                  },
                  {
                    item: "Anti Ragging Committee",
                    path: anti_raging_coomuity,
                    href: true,
                  },
                  {
                    item: "Anti Ragging Affidavit ",
                    path: anti_raging_affidavit,
                    href: true,
                  },
                ],
              },
              { item: "SC/ST Committee", path: scst },
            ],
          },
          {
            id: 3,
            item: "Departments",
            path: "#",
            subItem: [
              {
                item: "Applied Sciences & Humanities  ",
                path: "/department/applied-science/humanities",
              },
              { item: "Civil Engineering", path: "/department/civil-engineering" },
              { item: "Computer Science & Engineering", path: "/department/computer-science" },
              {
                item: "Computer Science & Engineering-AI & ML",
                path: "/department/cse-ai-ml",
              },
              {
                item: "Computer Science & Engineering-Data Science",
                path: "/department/data-science",
              },
              {
                item: "Computer Science & Engineering-IOT",
                path: "/department/iot",
              },
              {
                item: "Computer Science & Engineering-Cyber Security",
                path: "/department/cyber-cecurity",
              },

              // {
              //   item: "Computer Science & Engineering",
              //   path: "#",
              //   isMode: "second",
              //   nestedSubItem: [
              //     {
              //       item: "Computer Science & Engineering-AI & ML",
              //       path: "/department/cse/cse-ai-ml",
              //     },
              //     {
              //       item: "Computer Science & Engineering-Data Science",
              //       path: "/department/cse/data-science",
              //     },
              //     {
              //       item: "Computer Science & Engineering-IOT",
              //       path: "/department/cse/iot",
              //     },
              //     {
              //       item: "Computer Science & Engineering-Cyber Security",
              //       path: "/department/cse/cyber-cecurity",
              //     },
              //   ],
              // },
              { item: "Information Technology", path: "/department/it" },

              {
                item: "Electrical Engineering",
                path: "/department/electrical-engineering",
              },
              {
                item: "Electronics & Communication Engineering",
                path: "/department/electronics&communication-engineering",
              },

              { item: "Mechanical Engineering", path: "/department/mechanical-engineering" },
              {
                item: "Pharmacy",
                path: "/department/pharmacy",
              },

              {
                item: "Computer Application",
                path: "#",
                isMode: "third",
                nestedSubItem: [
                  {
                    item: "MCA",
                    path: "/department/computer-application",
                  },
                  {
                    item: "BCA",
                    href: true,
                    path: "https://www.srmcm.ac.in/aboutBCA.aspx",
                  },
                ],
              },
              {
                item: "Management",
                path: "#",
                isMode: "fourth",
                nestedSubItem: [
                  {
                    item: "MBA",
                    path: "/department/management",
                  },
                  {
                    item: "BBA",
                    href: true,
                    path: "https://www.srmcm.ac.in/aboutBBA.aspx",
                  },
                ],
              },
            ],
          },

          {
            id: 4,
            item: "Placement",
            path: "/placements/training-placement",
            // subItem: [{ item: "Placement & Training", path: "/placements/training-placement" }],
          },
          {
            id: 5,
            item: "Campus Life",
            path: "#",
            subItem: [
              { item: "Student Corner", path: "/campus-life/student-corner" },
              { item: "Outreach", path: "/campus-life/outreach" },
              { item: "Clubs", path: "/campus-life/clubs" },
              {
                item: "Innovation & Entrepreneurship Cell",
                path: "/campus-life/entrepreneurship",
              },
              { item: "Events", path: "/campus-life/events" },
              // { item: "Campus Tour", path: "/campus-life/campus-tour" },
            ],
          },
          {
            id: 6,
            item: "Facilities",
            path: "#",
            subItem: [
              { item: "Academics Facilities", path: "/facilities/academics" },
              { item: "Other Facilities", path: "/facilities/other" },
            ],
          },
          {
            id: 7,
            item: "Library",
            path: "#",
            subItem: [
              { item: "Library at a Glance", path: "/library/central-library" },
              {
                item: "WebOPAC",
                path: "http://192.200.12.5/",
              },
            ],
          },
          {
            id: 8,
            item: "Login",
            href: true,
            path: "https://campus.srmcem.ac.in/psp/ps/?cmd=login",
          },
        ],
      },
    ],
  },
];
