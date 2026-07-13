import { FormDataTypes } from "../types/formDataTypes";
import * as yup from "yup";
// validation
export const joinOurClubDataValidation = yup.object({
  name: yup.string().required("Required"),
  course: yup.string().required("Required"),
  year: yup.string().required("Required"),
  roll_number: yup.string().required("Required"),
  contact_number: yup.string().required("Required"),
  email_id: yup.string().required("Required"),
  club: yup.string().required("Required"),
});

export const initialJoinOurClubData = {
  name: "",
  course: "",
  year: "",
  roll_number: "",
  contact_number: "",
  email_id: "",
  club: "",
};
export const joinOurClubData: FormDataTypes[] = [
  {
    id: 1,
    name: "name",
    type: "text",
    placeHolder: "Enter Your Full Name",
  },
  {
    id: 2,
    name: "course",
    type: "text",
    placeHolder: "Enter Course",
  },
  {
    id: 3,
    name: "year",
    type: "text",
    placeHolder: "Enter Year",
  },
  {
    id: 4,
    name: "roll_number",
    type: "text",
    placeHolder: "Enter Roll Number",
  },
  {
    id: 5,
    name: "contact_number",
    type: "text",
    placeHolder: "Enter Contact No",
  },
  {
    id: 6,
    name: "email_id",
    type: "text",
    placeHolder: "Enter Email Id",
  },
  {
    id: 7,
    name: "club",
    type: "select",
    options: [
      { value: "male", optionLabel: "Male" },
      { value: "female", optionLabel: "Female" },
      { value: "prefer_not_to_say", optionLabel: "Prefer not to say" },
      { value: "other", optionLabel: "Other" },
      { value: "custom", optionLabel: "Custom" },
    ],
  },
];
