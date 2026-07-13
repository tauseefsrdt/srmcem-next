import React from 'react'
import PdfDownloadCard from './PdfDownloadCard'
import Classes from "../../utils/styles/Global.module.css";
import { FaAngleDown, FaAngleRight } from 'react-icons/fa';
import { RootState, store } from '../../store';
import { toggleAccordion } from '../../store/ui/ui-slice';
import { useSelector } from 'react-redux';
import { CampusTourAccordianitemType } from '../../types/accordian-items-type';
import { ImFilePdf } from 'react-icons/im';


interface propsTypes {
    contentType: string,
    items: CampusTourAccordianitemType[]
}
const CustomCampusTourAccordian: React.FC<propsTypes> = ({ items, contentType }) => {
    console.log(items, "ppppppppppppp")
    const { activeIndex } = useSelector((state: RootState) => state.ui);
    return (
        <div className={`${Classes["container"]} py-7 md:py-10 lg:py-14`}>
            <h2 className='text-4xl font-bold text-start mb-12'>{contentType}</h2>
            <div className='accordian'>
                {
                    items.map((item, index) => (
                        <div className={`mb-4 border-2 overflow-hidden transition-all duration-300  ${activeIndex === index ? 'border-[#ffb703] ' : 'border-gray-100'
                            } rounded-t-lg`}>
                            <div onClick={() => store.dispatch(toggleAccordion(index))} className='flex justify-between items-center px-4 py-3 bg-gray-100 cursor-pointer '>
                                <span className='font-semibold'>{item.contentTitle}</span>
                                {
                                    activeIndex !== index ? <FaAngleRight /> : <FaAngleDown color='#ffb703' />
                                }
                            </div>
                            <div className={`transition-all duration-300 overflow-hidden  ${activeIndex === index ? 'max-h-[10000px] ' : 'max-h-0'
                                }`}>
                                <div className='md:py-4 text-justify leading-8 md:px-4 p-5 md:p-0'>
                                    <p>
                                        {item?.content}
                                    </p>
                                </div>
                                <div className='flex justify-around items-center px-3 md:px-10'>
                                    <b className='text-center'>{item?.aicteSesion}</b>
                                    <div className="flex justify-between px-3 md:px-10 py-4">
                                        <a target="_blank" href={item?.file} className="text-red-600 inline-block p-1 rounded-sm border border-transparent hover:border-[#ffb703] hover:text-[#ffb703] mr-6 md:mr-9">
                                            <ImFilePdf size={24} />
                                        </a>
                                    </div>
                                </div>
                                {item?.file2 &&
                                <div className='flex justify-around items-center px-3 md:px-10'>
                                    <b className='text-center'>{item?.aicteSesion2}</b>
                                    <div className="flex justify-between px-3 md:px-10 py-4">
                                        <a target="_blank" href={item?.file2} className="text-red-600 inline-block p-1 rounded-sm border border-transparent hover:border-[#ffb703] hover:text-[#ffb703] mr-6 md:mr-9">
                                            <ImFilePdf size={24} />
                                        </a>
                                    </div>
                                </div>
                                }
                                <PdfDownloadCard data={item?.tableData} />
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default CustomCampusTourAccordian
