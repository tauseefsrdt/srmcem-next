export interface optionType {
  value: string;
  optionLabel: string;
}

export interface customFormPropstype {
  formData: FormDataTypes[];
  initialValues: {};
  validationSchema: {};
  btnTitle: string;
}
export interface FormDataTypes {
  id: number;
  name: string;
  type: string;
  placeHolder?: string;
  label?: string;
  options?: optionType[];
}
