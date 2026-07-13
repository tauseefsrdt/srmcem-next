import { Form, Formik } from 'formik'
import React from 'react'
import { customFormPropstype } from '../../types/formDataTypes'
import CustomFormInput from './CustomFormInput'

const CustomForm: React.FC<customFormPropstype> = ({ initialValues, validationSchema, formData, btnTitle }) => {
    return (
        <Formik
            initialValues={initialValues} validationSchema={validationSchema} onSubmit={async (value) => console.log(value)}>
            <Form>
                <div>
                    {
                        formData.map((item) => (
                            <CustomFormInput
                                key={item.id}
                                name={item.name}
                                label={item?.label}
                                placeholder={item.placeHolder}
                                type={item.type}
                                options={item?.options}

                            />
                        ))
                    }
                </div>
                <button className='bg-[#ffb703] px-4 py-3 rounded-md font-medium text-xl'>{btnTitle}</button>
            </Form>
        </Formik>
    )
}

export default CustomForm
