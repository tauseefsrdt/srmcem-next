const icon1 = "/images/program/icon1.png";
const icon2 = "/images/program/icon2.png";
const icon3 = "/images/program/icon3.png";
const icon4 = "/images/program/icon4.png";
export interface counterDataType {
  id: number;
  icon?: string;
  value: string;
  label: string;
  suffix: string;
}

export const counterDataForMessagepage: counterDataType[] = [
  { id: 1, icon: icon1, value: "10", suffix: "+", label: "Department" },
  { id: 2, icon: icon2, value: "20", suffix: "+", label: "Programs" },
  { id: 3, icon: icon3, value: "200", suffix: "+", label: "Academicians" },
  { id: 4, icon: icon4, value: "3700", suffix: "+", label: "Students" },
];
export const counterDataForAboutPage: counterDataType[] = [
  { id: 1, value: "3700", suffix: "+", label: "Students Enrolled" },
  { id: 2, value: "20", suffix: "+", label: "Courses Uploaded" },
  { id: 3, value: "1100", suffix: "+", label: "People Certificate" },
  { id: 4, value: "200", suffix: "+", label: "Global Teachers" },
];
export const counterDataForHomePage: counterDataType[] = [
  { id: 1, value: "20", suffix: "+", label: "Years Of Experience" },
  { id: 2, value: "20", suffix: "+", label: "Number Of Courses" },
  { id: 3, value: "3700", suffix: "+", label: "Students" },
  { id: 4, value: "1000", suffix: "+", label: "Number Of Placements" },
];
export const counterDataFoPlacementTrainingPage: counterDataType[] = [
  { id: 1, value: "500", suffix: "+", label: "Companies Visited" },
  { id: 2, value: "5000", suffix: "+", label: "Job Offers" },
  { id: 3, value: "88", suffix: "%", label: "Placement" },
];
