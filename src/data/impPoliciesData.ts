const pdf1 = "/pdf/impPolicies/2021_Academic Audit Policy-v2.pdf";
const pdf2 = "/pdf/impPolicies/LEAVE POLICY.pdf";
const pdf3 = "/pdf/impPolicies/LEAVE POLICY FOR CAMPUS LIVING_ EMPLOYEES.pdf";
const pdf4 = "/pdf/impPolicies/04_Policy_09 February 2023_Early Joining of Final Year Placed Students.pdf";
const pdf5 = "/pdf/impPolicies/PERFORMANCE APPRAISAL POLICY.pdf";
const pdf6 = "/pdf/impPolicies/2021_Value Education Cell.pdf";
const pdf7 = "/pdf/impPolicies/policyAcademicExcellenceAwards.pdf";
const pdf8 = "/pdf/impPolicies/04_Policy_2016-17_Constitution Responsibilities_ Academic Council.pdf";
const pdf9 = "/pdf/impPolicies/Placement Policy of SRMGPC.pdf";
const pdf10 = "/pdf/impPolicies/PolicyInstitutionalSupportforResearchandHigherEducation.pdf";
const pdf11 = "/pdf/impPolicies/POLICY-REDRESSAL OF GRIEVANCE OF STUDENTS.pdf";
const pdf12 = "/pdf/impPolicies/PolicyGuidelinesGuestLecture.pdf";
const pdf13 = "/pdf/impPolicies/StudentsSenateCompositionPolicy.pdf";
const pdf14 = "/pdf/impPolicies/PolicyTADA.pdf";
const pdf15 = "/pdf/impPolicies/Mentorship Policy.pdf";
const pdf16 = "/pdf/impPolicies/CODE OF PROFESSIONAL ETHICS AND CODE OF CONDUCT.pdf";
const pdf17 = "/pdf/impPolicies/POLICY ON ADMINISTRATIVE AUDIT.pdf";
const pdf18 = "/pdf/impPolicies/RECRUITMENT PROMOTION POLICY.pdf";
const pdf19 = "/pdf/impPolicies/PurchasePolicy.pdf";
const pdf20 = "/pdf/impPolicies/POLICY ON INTERNAL COMPLAINT-17 FEB. 2020 (1).pdf";
const pdf21 = "/pdf/impPolicies/POLICYBENEVOLENTFUND.pdf";
const pdf22 = "/pdf/impPolicies/ION SPORT.pdf";
const pdf23 = "/pdf/impPolicies/policyArpan.pdf";
const pdf24 = "/pdf/impPolicies/PolicyFeeConsiderationStopFailedstudentsReAdmission.pdf";
const pdf25 = "/pdf/impPolicies/PolicyRefundHostelTransportationCharges.pdf";
const pdf26 = "/pdf/impPolicies/SC ST committee.pdf";
const pdf27 = "/pdf/impPolicies/Policy on Advanced_Fast and Slow Learners.pdf";
const pdf28 = "/pdf/impPolicies/AKTU CHHATRA KALYAN NIDHI RULES policy.pdf";

export interface PolicyDataType {
  id: number;
  name: string;
  viewLink: string;
}

export const policiesData: PolicyDataType[] = [
  { id: 1, name: "Academic Audit Policy", viewLink: pdf1 },
  { id: 2, name: "Leave Policy", viewLink: pdf2 },
  { id: 3, name: "Leave Policy for Campus Living Employees", viewLink: pdf3 },
  { id: 4, name: "Early Joining Of Final Year Placed Students", viewLink: pdf4 },
  { id: 5, name: "Performance Appraisal Policy", viewLink: pdf5 },
  { id: 6, name: "Value Education Cell (VEC) Policy", viewLink: pdf6 },
  { id: 7, name: "Academic Excellence Awards Policy", viewLink: pdf7 },
  { id: 8, name: "Policy of Constitution & Responsibilities of Academic Council", viewLink: pdf8 },
  { id: 9, name: "Placement Policy", viewLink: pdf9 },
  { id: 10, name: "Institutional Support for Research and Higher Education Policy", viewLink: pdf10 },
  { id: 11, name: "Redressal of Grievance of Students Policy", viewLink: pdf11 },
  { id: 12, name: "Guest Lecture Guidelines Policy", viewLink: pdf12 },
  { id: 13, name: "Student Senate Composition Policy", viewLink: pdf13 },
  { id: 14, name: "Travelling Allowance (TA) & Daily Allowance (DA) Policy", viewLink: pdf14 },
  { id: 15, name: "Mentorship Policy", viewLink: pdf15 },
  { id: 16, name: "Code of Professional Ethics and Conduct", viewLink: pdf16 },
  { id: 17, name: "Administrative Audit Policy", viewLink: pdf17 },
  { id: 18, name: "Recruitment and Promotion Policy", viewLink: pdf18 },
  { id: 19, name: "Purchase Policy", viewLink: pdf19 },
  { id: 20, name: "Policy on Gender Sensitization, Prevention and Prohibition of Sexual Harassment and Redressal of Grievances", viewLink: pdf20 },
  { id: 21, name: "Benevolent Fund Policy", viewLink: pdf21 },
  { id: 22, name: "Sports Policy", viewLink: pdf22 },
  { id: 23, name: "Arpan Financial Assistance to Poor Students Policy", viewLink: pdf23 },
  { id: 24, name: "Fee Consideration for Stopped & Failed students at the time of Re-Admission Policy", viewLink: pdf24 },
  { id: 25, name: "Refund of Hostel & Transportation Charges Policy", viewLink: pdf25 },
  { id: 26, name: "SC/ST Policy", viewLink: pdf26 },
  { id: 27, name: "Policy on Advanced/ Fast and Slow Learners", viewLink: pdf27 },
  { id: 28, name: "Policy on AKTU CHHATRA KALYAN NIDHI Rules", viewLink: pdf28 },
];
