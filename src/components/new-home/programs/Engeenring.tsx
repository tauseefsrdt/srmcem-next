import React from "react";
const img1 = "/new-home/assets/course/image1.webp";
const img2 = "/new-home/assets/course/image2.webp";
const img3 = "/new-home/assets/course/image3.webp";
const img4 = "/new-home/assets/course/image4.webp";
const img5 = "/new-home/assets/course/image5.webp";
const img6 = "/new-home/assets/course/image6.webp";
const img7 = "/new-home/assets/course/image7.webp";
const img8 = "/new-home/assets/course/image8.webp";
const img9 = "/new-home/assets/course/image9.webp";
const img10 = "/new-home/assets/course/image10.webp";
import ProgramGrid, { Course } from "./ProgramCard";

const courses: Course[] = [
    { id: 1, name: "Computer Science & Engineering", icon: img1, path: "/department/cse-ai-ml", tags: ["CSE", "B.Tech", "M.Tech"] },
    { id: 2, name: "Computer Science & Engg (AI & ML)", icon: img2, path: "/department/cse-ai-ml", tags: ["CSE", "AI & ML", "B.Tech"] },
    { id: 3, name: "Computer Science & Engg (Data Science)", icon: img3, path: "/department/data-science", tags: ["CSE", "DS", "B.Tech"] },
    { id: 4, name: "Computer Science & Engg (IOT)", icon: img4, path: "/department/iot", tags: ["CSE", "IOT", "B.Tech"] },
    { id: 5, name: "Computer Science & Engg (Cyber Security)", icon: img5, path: "/department/cyber-cecurity", tags: ["CSE", "Cyber Sec", "B.Tech"] },
    { id: 6, name: "Electronic & Communication Engineering", icon: img10, path: "/department/electronics&communication-engineering", tags: ["ECE", "B.Tech"] },
    { id: 7, name: "Information Technology", icon: img6, path: "/department/it", tags: ["IT", "B.Tech"] },
    { id: 8, name: "Mechanical Engineering", icon: img7, path: "/department/mechanical-engineering", tags: ["ME", "Core Engg", "B.Tech"] },
    { id: 9, name: "Civil Engineering", icon: img8, path: "/department/civil-engineering", tags: ["CE", "Core Engg", "B.Tech", "M.Tech"] },
    { id: 10, name: "Electrical Engineering", icon: img9, path: "/department/electrical-engineering", tags: ["EE", "Core Engg", "B.Tech"] },
];

type ProgProps = { images?: string[] };

const Engeenring: React.FC<ProgProps> = ({ images }) => <ProgramGrid courses={courses} images={images} />;

export default Engeenring;
