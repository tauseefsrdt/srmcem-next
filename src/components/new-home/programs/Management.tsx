import React from "react";
const img17 = "/new-home/assets/course/image17.webp";
const img18 = "/new-home/assets/course/image18.webp";
import ProgramGrid, { Course } from "./ProgramCard";

const courses: Course[] = [
    { id: 1, name: "BBA", icon: img18, isLink: true, path: "https://www.srmcm.ac.in/", tags: ["BBA", "UG"] },
    { id: 2, name: "MBA", icon: img17, path: "/department/management", tags: ["MBA", "PG"] },
];

type ProgProps = { images?: string[] };

const Management: React.FC<ProgProps> = ({ images }) => <ProgramGrid courses={courses} images={images} />;

export default Management;
