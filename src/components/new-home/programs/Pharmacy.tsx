import React from "react";
const img1 = "/new-home/assets/course/image12.webp";
const img2 = "/new-home/assets/course/image13.webp";
import ProgramGrid, { Course } from "./ProgramCard";

const courses: Course[] = [
    { id: 0, name: "B. Pharm.", icon: img1, path: "/department/pharmacy", tags: ["B.Pharm", "UG"] },
    { id: 1, name: "D. Pharm.", icon: img2, path: "/department/pharmacy", tags: ["D.Pharm", "Diploma"] },
];

type ProgProps = { images?: string[] };

const Pharmacy: React.FC<ProgProps> = ({ images }) => <ProgramGrid courses={courses} images={images} />;

export default Pharmacy;
