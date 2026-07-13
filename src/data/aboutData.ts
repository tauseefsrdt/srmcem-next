import { aboutUsDataType } from "../types/about-data-type";
const img1 = "/images/click.png";
const img3 = "/images/vision.png";
const img2 = "/images/mission.png";
export const aboutUsData: aboutUsDataType[] = [
  {
    aboutData: [
      {
        heading: "About SRMCEM",
        para: "Shri Ramswaroop Memorial College of Engineering & Management, Lucknow is an ISO 9001:2008 certified, AICTE recognized, and Dr. APJ Abdul Kalam Technical University,Lucknow affiliated institution. Set in placid surroundings on the Lucknow-Faizabad Highway, the group of institution offers the best in Engineering and Management education. It provides the opportunity of studying and training under experienced faculty, and is equipped with state-of-the-art classrooms, labs and library facilities in the quiet and cultural milieu of Lucknow.\n SRMCEM offers graduate and post graduate programmes in Engineering, Computer Application and Management. The educational character of the group of institutions is a seamless amalgam of skill-based learning, depth of insights and professional distinction in employability augmentation. The holistic curricular planning creates the right attitude and mind-set, enabling students to fit in the existing professional realm. An equal emphasis on co-curricular activities in the campus complements the intense teaching and learning experience in a multifaceted manner.",
        img: "/srmu-about2-img.jpg",
      },
    ],
    cardData: [
      {
        id: 1,
        head1: img1,
        head2: "Why Choose Us",
        paragraph: "SRMCEM fosters excellence through strong leadership, a value-driven culture, and initiatives focused on quality professional education.",
      },
      {
        id: 2,
        head1: img2,
        head2: "Our Mission",
        paragraph: "We are dedicated to fostering innovation in technology while promoting human values & supporting the continuous learning of our community.",
      },
      {
        id: 3,
        head1: img3,
        head2: "Our Vision",
        paragraph: "To achieve international standards in value-based professional education for the benefit of society and the nation.",
      },
    ],
    studentData: [
      { id: 1, value: "3000+", label: "Students Enrolled" },
      { id: 2, value: "4200+", label: "Courses Uploaded" },
      { id: 3, value: "1100+", label: "People Certificate" },
      { id: 4, value: "3600+", label: " Global Teachers" },
    ],
    ramswaroopInfo: [
      {
        ramswaroopHead1: "OUR SOURCE OF INSPIRATION SHRI RAMSWAROOP AGARWAL JI",
        age: "(1925-1980)",
        img: "/ramwaroop-profile.png",
        para: "Shri Ramswaroop Agarwal Ji, the guiding light behind the establishment of Shri Ramswaroop Memorial College of Engineering & Management, Lucknow, was a visionary industrialist and philanthropist. His dedication to women's education, social causes, and value-based learning underscores his belief that true progress stems from ethical principles and transparency. For him, success held meaning only when it uplifted society, reflecting his commitment to sincerity, hard work, and steadfast ideals. His unwavering values continue to shape the college's mission of academic excellence and moral integrity. SRMCEM thrives by nurturing innovation, cultivating ethical leadership, and contributing meaningfully to society. Inspired by his ideals, the institution remains steadfast in its pursuit of holistic development.",
      },
    ],
  },
];
