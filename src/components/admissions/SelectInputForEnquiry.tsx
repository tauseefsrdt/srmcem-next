import { ErrorMessage, Field, useField } from "formik";
import React from "react";

interface type {
    data: any;
    options: any;
    keyForName: string;
    keyForId: string;
    onChange?: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}
const SelectInputForEnquiry: React.FC<type> = ({ data, options, keyForName, keyForId, onChange }) => {
    const [field] = useField(data.name);
    let optContent: any = "";

    if (!options) {
        optContent = <option>Loading--</option>;
    } else if (options.length === 0) {
        optContent = <option>Not-found--</option>;
    } else {
        optContent = options.map((option: any, index: any) => (
            <option key={index} value={option[keyForId]}>
                {option[keyForName]}
            </option>
        ));
    }
    return (
        <>
            <Field
                as="select"
                {...field}
                className="h-[3.2rem] px-[0.75rem] py-[0.375rem] bg-white border border-[#ced4da] rounded-md w-full focus:outline-none"
                // name={data.name}
                // id={data.name}
                onChange={(e: React.ChangeEvent<HTMLSelectElement>) => {
                    field.onChange(e); // for achive actions of formik
                    if (onChange) {
                        onChange(e);
                    }
                }}
            >
                <option value="">{data.placeholder}</option>
                {optContent}
            </Field>
            <ErrorMessage name={data.name} component="div" className="text-red-500 text-sm" />
        </>
    );
};

export default SelectInputForEnquiry;
