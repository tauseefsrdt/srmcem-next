import React from "react";
const img19 = "/new-home/assets/course/image19.webp";
import ProgramGrid, { Course } from "./ProgramCard";

const courses: Course[] = [
    { id: 1, name: "B.Com (hons.)", icon: img19, isLink: true, path: "https://www.srmcm.ac.in/", tags: ["B.Com (hons.)", "UG"] },
];

type ProgProps = { images?: string[] };

const Commerce: React.FC<ProgProps> = ({ images }) => <ProgramGrid courses={courses} images={images} />;

export default Commerce;
