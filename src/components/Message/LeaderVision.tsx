import React from 'react'
import Classes from "../../utils/styles/Global.module.css";


const LeaderVision: React.FC = () => {
    return (
        <div className={`${Classes["container"]} py-7 md:py-10 lg:py-14`}>
            <div className='flex flex-col md:flex-row  gap-4 items-stretch  justify-between'>
                <div className='md:min-w-[200px] lg:min-w-[300px] md:border-r-4 border-yellow-400 flex flex-col justify-center'>
                    <div className='hidden md:block '>
                        <h2 className='text-3xl lg:text-4xl font-semibold '>Leaders </h2>
                        <h2 className='text-3xl lg:text-4xl font-semibold mt-3'> Vision</h2>
                    </div>
                    <div className='md:hidden'>
                        <h2 className='text-3xl lg:text-4xl font-semibold '>Leaders Vision</h2>
                    </div>
                </div>
                <div className='md:py-4 leading-8'>
                    <p>Established in 1998 by distinguished alumni and Gold Medalists from IIT Kanpur, SRMCEM embarked on an extraordinary journey. Our innovative leadership team sought to develop a globally esteemed institution that not only delivers knowledge but also promotes ethical values and encourages social and environmental consciousness.</p>
                </div>
            </div>
        </div>
    )
}

export default LeaderVision
