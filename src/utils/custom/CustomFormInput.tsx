import { Field, useField } from 'formik'
import React from 'react'
interface Option {
    value: string | number;
    optionLabel: string;
}
interface CustomFormInputType {
    name: string;
    type: string;
    placeHolder?: string;
    label?: string;
    options?: Option[];
    [key: string]: any;
}


const CustomFormInput: React.FC<CustomFormInputType> = ({ ...props }) => {
    const [field, meta] = useField(props.name);
    return (
        <div>
            <label className="font-medium pb-1 flex items-center">
                {props.label}
            </label>

            {props.type === "select" ? (
                <Field
                    as="select"
                    {...field}
                    {...props}
                    className={`w-full border-2 mb-3  py-3 bg-stone-50 hover:bg-stone-100 focus:outline-none px-2  rounded-md dark:bg-form-input  ${meta.touched && meta.error
                        ? "border-red-500"
                        : "border-stone-200"
                        }`}
                >
                    <option value="" className='text-black'>
                        --- Select --
                    </option>
                    {props.options?.map((option) => (
                        <option className='text-black' key={option.value} value={option.value}>
                            {option.optionLabel}
                        </option>
                    ))}
                </Field>
            ) :
                <Field
                    {...field}
                    {...props}
                    className={`w-full border-2  mb-3 py-3 bg-stone-50 hover:bg-stone-100 focus:outline-none px-2 rounded-md dark:bg-form-input ${meta.touched && meta.error
                        ? "border-red-500"
                        : "border-stone-200"
                        }`}
                />
            }
        </div>
    )
}

export default CustomFormInput
