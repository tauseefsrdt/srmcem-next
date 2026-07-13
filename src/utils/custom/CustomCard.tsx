import React from 'react'

export interface CustomCardDataType {
    imgSrc: string;
    content: string;
}

interface propsType {
    data: CustomCardDataType[];
}

const CustomCard: React.FC<propsType> = ({ data }) => {
    return (
        <div className='mt-5 innovations-activities'>
            {
                data.map((item) => (
                    <div className='w-full border-2 border-gray-100  group hover:border-[#ffb703] rounded-md p-4 transition-all duration-200'>
                        <img className='w-full' src={item.imgSrc} alt="" />
                        <p className='mt-3 group-hover:text-[#233E6F]'>{item.content}</p>
                    </div>
                ))
            }
        </div>
    )
}

export default CustomCard