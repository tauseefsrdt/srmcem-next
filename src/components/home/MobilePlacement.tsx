import Slider from "react-slick";
import Classes from "../../utils/styles/Global.module.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import PlacementData from "./PlacementData";
import MobilePlacementData from "./MobilePlacementData";

const MobilePlacements = () => {
    const sliderSettings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false, // Hide arrows
        autoplay: true, // Enable autoplay
        autoplaySpeed: 3000,
    };

    // Create a reference to check if the component is in view
    const { ref: sectionRef, inView } = useInView({
        threshold: 0.1, // You can adjust this value based on when you want the counting to start
        triggerOnce: false, // Allow multiple triggers
    });

    console.log(":inView= ", inView);
    // console.log(":slideInView= ", inView);
    return (
        <section ref={sectionRef} className={`${Classes["container"]} sm:mb-16 sm:mt-10`}>
            <div className="w-full">
                <h1 className="text-center text-3xl lg:text-4xl font-bold py-6 ">{PlacementData[0].heading}</h1>
                <p className="pb-6 text-center">{PlacementData[0].description}</p>
                <div className="lg:flex justify-between gap-5 lg:pr-4 py-8">
                    {/* Left divs */}
                    <div className="flex items-stretch gap-3 w-full min-w-[130px] lg:min-w-[150px]">
                        {MobilePlacementData[0].leftDivstoBeFlex.map((item) => (
                            <>
                                {item.isSlider ? (
                                    <div className="w-full px-3  pt-4 pb-10 bg-[#8fcedd] text-gray-900 rounded-md shadow-md min-w-[115px] lg:min-w-[calc(33%-50px)] lg:h-[550px] flex flex-col justify-between">
                                        <Slider {...sliderSettings} className="slider_placement_dots_law ">
                                            {item?.leftSlider && item.leftSlider.map((slide) => {
                                                return (
                                                    <div key={slide.id} ref={sectionRef} className="text-center h-full flex flex-col justify-between">
                                                        <div className="flex-grow text-left">
                                                            <CountUp
                                                                start={0}
                                                                end={inView ? slide.title : 0} // Count only when both are in view
                                                                duration={2}
                                                                suffix={slide.symbol}
                                                                redraw={true}
                                                            >
                                                                {({ countUpRef }) => <span ref={countUpRef} className="text-[35px] font-semibold mb-2 text-white " />}
                                                            </CountUp>
                                                            <p className="mt-1 text-left text-white text-sm sm:text-base font-poppins font-normal">{slide.description}</p>
                                                        </div>
                                                        <div className="hidden lg:block">
                                                            <img src={slide.img} alt={`slide ${slide.id}`} className="w-full h-[400px] object-contain" />
                                                        </div>
                                                    </div>
                                                );
                                            })}
                                        </Slider>
                                    </div>
                                ) : (
                                    <div
                                        key={item.id}
                                        className={`w-full px-3 py-4 rounded-md shadow-md ${item.id === 1 ? "bg-[#023047] text-white" : "bg-[#ffb703] text-white"
                                            }`}
                                    >

                                        <CountUp
                                            // @ts-ignore
                                            start={0}
                                            //  @ts-ignore 
                                            end={inView ? item.title : 0} // Only count up when in view
                                            duration={2}
                                            suffix={item.symbol}
                                            redraw={true}
                                        >
                                            {({ countUpRef }) => <span ref={countUpRef} className="text-[35px] font-semibold mb-2 " />}
                                        </CountUp>
                                        <p className="text-sm sm:text-base text-left font-poppins">{item.description}</p>
                                    </div>
                                )}
                            </>
                        ))}
                    </div>

                    {/* Middle divs */}
                    <div className="mt-3 lg:mt-0 flex flex-col gap-3  lg:min-w-[calc(33%-50px)]">
                        <div className="flex gap-3">
                            {MobilePlacementData[0].middleDivsToBeFlex.map((item) => (
                                <div
                                    key={item.id}
                                    className={`w-full px-3 py-4  rounded-md shadow-md lg:h-[270px] grid place-content-center ${item.id === 1 ? "bg-[#ffb703] text-white" : "bg-[#8fcedd] text-white"
                                        }`}
                                >
                                    <CountUp
                                        start={0}
                                        end={inView ? item.title : 0} // Only count up when in view
                                        duration={2}
                                        suffix={item.symbol}
                                        redraw={true}
                                    >
                                        {({ countUpRef }) => <span ref={countUpRef} className="text-[35px] font-semibold mb-2 " />}
                                    </CountUp>
                                    <p className="text-sm sm:text-base text-left font-poppins">{item.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* ===== */}
                    <div className="flex items-stretch gap-3 w-full min-w-[130px] lg:min-w-[150px] mt-3">
                        {MobilePlacementData[0].secondLeftDivstoBeFlex.map((item) => (
                            <>
                                {item.isSlider ? (
                                    <div className="w-full  px-3 py-4  bg-[#8fcedd] text-gray-900 rounded-md shadow-md min-w-[115px] lg:min-w-[calc(33%-50px)] lg:h-[550px] flex flex-col justify-between">
                                        <Slider {...sliderSettings} className="slider_placement_dots_law placement_dots_law_left">
                                            {item?.leftSlider && item.leftSlider.map((slide) => {
                                                return (
                                                    <div key={slide.id} ref={sectionRef} className="text-center h-full flex flex-col justify-between">
                                                        <div className="flex-grow text-left">
                                                            <CountUp
                                                                start={0}
                                                                end={inView ? slide.title : 0} // Count only when both are in view
                                                                duration={2}
                                                                suffix={slide.symbol}
                                                                redraw={true}
                                                            >
                                                                {({ countUpRef }) => <span ref={countUpRef} className="text-[35px] font-semibold mb-2 text-white " />}
                                                            </CountUp>
                                                            <p className="mt-1 text-left text-white text-sm sm:text-base font-poppins font-normal">{slide.description}</p>
                                                        </div>
                                                        <div className="hidden lg:block">
                                                            <img src={slide.img} alt={`slide ${slide.id}`} className="w-full h-[400px] object-contain" />
                                                        </div>
                                                    </div>
                                                );
                                            })}
                                        </Slider>
                                    </div>
                                ) : (
                                    <div
                                        key={item.id}
                                        className={`w-full px-3 py-4  rounded-md shadow-md   grid lg:place-content-center ${item.id === 1 ? "bg-[#023047] text-white" : "bg-[#ffb703] text-white"
                                            }`}
                                    >

                                        <CountUp
                                            //  @ts-ignore 
                                            start={0}
                                            //  @ts-ignore 
                                            end={inView ? item.title : 0} // Only count up when in view
                                            duration={2}
                                            suffix={item.symbol}

                                            redraw={true}
                                        >
                                            {({ countUpRef }) => <span ref={countUpRef} className="text-[35px] font-semibold mb-2 " />}
                                        </CountUp>
                                        <p className="text-sm sm:text-base text-left font-poppins">{item.description}</p>
                                    </div>
                                )}
                            </>
                        ))}
                    </div>

                    {/* Middle divs */}
                    <div className="mt-3 lg:mt-0 flex flex-col gap-3  lg:min-w-[calc(33%-50px)]">
                        <div className="flex gap-3">
                            {MobilePlacementData[0].finleDivsToBeFlex.map((item) => (
                                <div
                                    key={item.id}
                                    className={`w-full px-4 pt-4 pb-10 rounded-md shadow-md lg:h-[270px] grid place-content-center ${item.id === 1 ? "bg-[#ffb703] text-white" : "bg-[#8fcedd] text-white"
                                        }`}
                                >
                                    <CountUp
                                        start={0}
                                        end={inView ? item.title : 0}
                                        duration={2}
                                        suffix={item.symbol}
                                        redraw={true}
                                    >
                                        {({ countUpRef }) => <span ref={countUpRef} className="text-[35px] font-semibold mb-2 " />}
                                    </CountUp>
                                    <p className="text-sm sm:text-base text-left font-poppins">{item.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default MobilePlacements;
