import React, { useRef } from 'react';
import Classes from "../../utils/styles/Global.module.css";
import Slider from 'react-slick';
import { RecruitersSliderData } from '../../data/placementData';
import { IoIosArrowBack } from 'react-icons/io';
// Slider data with slides
const Recruiters: React.FC = () => {
    const sliderRef = useRef<any>(null);

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1, // Show one set of cards at a time
        slidesToScroll: 1,
        arrows: false, // Disable default arrows inside the slider
    };

    return (
        <div className={`${Classes["container"]}  py-7 md:py-10 lg:py-14 `}>
            <div className='bg-[#DFE4F2] rounded-xl py-7 md:py-10 lg:py-14 px-4 md:px-6 lg:px-8'>
                <div className='flex justify-between items-center'>
                    <h1 className="text-center text-3xl lg:text-4xl text-[#172F64] font-bold">Our Recruiters</h1>
                    <div className="flex justify-center space-x-4 ">
                        <PrevArrow onClick={() => sliderRef.current?.slickPrev()} />
                        <NextArrow onClick={() => sliderRef.current?.slickNext()} />
                    </div>
                </div>
                <div className='mb-10'>
                    {/* Slider Component */}
                    <Slider ref={sliderRef} {...settings} className='recruiter-slide'>
                        {RecruitersSliderData.map((data, index) => (
                            <div key={index}>
                                <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-x-4 gap-y-8 mt-8 md:mt-10 lg:mt-16">
                                    {data.slides.map((slide, slideIndex) => (
                                        <li key={slideIndex} className="flex justify-center items-center">
                                            <div className="w-full overflow-hidden flex justify-center items-center bg-white h-32 transition-all duration-200">
                                                <img src={slide.img} alt={`Recruiter ${slideIndex + 1}`} className="object-cover  w-full" />
                                            </div>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </Slider>
                </div>
            </div>
        </div>
    );
};

const NextArrow = ({ onClick }: { onClick: () => void }) => (
    <button
        className="border-2  border-[#172F64]  text-[#172F64] w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center rounded-full shadow-md  hover:text-[#ffb703]  hover:border-[#ffb703] "
        onClick={onClick}
    >
        <IoIosArrowBack className='w-9 h-9 transform rotate-180' />
    </button>
);

const PrevArrow = ({ onClick }: { onClick: () => void }) => (
    <button
        className="border-2 border-[#172F64]   text-[#172F64] w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center rounded-full shadow-md hover:text-[#ffb703]  hover:border-[#ffb703] "
        onClick={onClick}
    >
        <IoIosArrowBack className='w-9 h-9' />
    </button>
);

export default Recruiters;
