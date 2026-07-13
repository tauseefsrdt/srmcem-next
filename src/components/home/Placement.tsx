import Slider from "react-slick";
import Classes from "../../utils/styles/Global.module.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import PlacementData from "./PlacementData";

const Placements = () => {
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
    <section ref={sectionRef} className={` ${Classes["container"]} sm:mb-16 sm:mt-10`}>
      <div className="w-full">
        <h1 className="text-center text-3xl lg:text-4xl font-bold py-6 ">{PlacementData[0].heading}</h1>
        <p className="pb-6 text-center">{PlacementData[0].description}</p>
        <div className="lg:flex justify-between gap-5 lg:pr-4 py-8">
          {/* Left divs */}
          <div className="flex flex-col gap-3 w-full min-w-[130px] lg:min-w-[150px]">
            {PlacementData[0].leftDivstoBeFlex.map((item) => (
              <div
                key={item.id}
                className={`px-4 pt-4 pb-10 rounded-md shadow-md h-[170px] lg:h-[270px]  ${item.id === 1 ? "bg-[#023047] text-white" : "bg-[#ffb703] text-white"
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
                <p className="text-[17px] font-poppins">{item.description}</p>
              </div>
            ))}
          </div>

          {/* Left slider */}
          <div className="mt-3 lg:mt-0 px-4 py-10 lg:p-4 bg-[#8fcedd] text-gray-900 rounded-md shadow-md min-w-[115px] lg:min-w-[calc(33%-50px)] lg:h-[550px] flex flex-col justify-between">
            <Slider {...sliderSettings} className="slider_placement_dots_law placement_dots_law_left">
              {PlacementData[0].leftSlider.map((slide) => {
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
                      <p className="mt-1 text-white text-[17px] font-poppins font-normal">{slide.description}</p>
                    </div>
                    <div className="hidden lg:block">
                      <img src={slide.img} alt={`slide ${slide.id}`} className="w-full h-[400px] object-contain" />
                    </div>
                  </div>
                );
              })}
            </Slider>
          </div>

          {/* Middle divs */}
          <div className="mt-3 lg:mt-0 flex flex-col gap-3 lg:min-w-[280px] lg:min-w-[calc(33%-50px)]">
            <div className="flex gap-3">
              {PlacementData[0].middleDivsToBeFlex.map((item) => (
                <div
                  key={item.id}
                  className={`px-4 pt-4 pb-10 rounded-md shadow-md lg:h-[270px]  ${item.id === 1 ? "bg-[#ffb703] text-white" : "bg-[#8fcedd] text-white"}`}
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
                  <p className="text-[17px] font-poppins">{item.description}</p>
                </div>
              ))}
            </div>
            <div>
              <div className="px-4 pt-4 pb-10 bg-[#023047] text-white rounded-md shadow-md lg:h-[270px] ">
                <CountUp
                  start={0}
                  end={inView ? PlacementData[0].middlebelowDiv.title : 0} // Only count up when in view
                  duration={2}
                  suffix={PlacementData[0].middlebelowDiv.symbol}
                  redraw={true}
                >
                  {({ countUpRef }) => <span ref={countUpRef} className="text-[35px] font-semibold mb-2 " />}
                </CountUp>
                <p className="text-[17px] font-poppins">{PlacementData[0].middlebelowDiv.description}</p>
              </div>
            </div>
          </div>

          {/* Right slider */}
          <div className="mt-3 lg:mt-0 px-4 py-10 lg:p-4 bg-[#8fcedd] text-gray-900 rounded-md shadow-md flex flex-col justify-between lg:h-[550px] min-w-[150px] lg:min-w-[calc(33%-50px)]">
            <Slider {...sliderSettings} className="slider_placement_dots_law placement_dots_law_right">
              {PlacementData[0].rightSlider.map((slide) => (
                <div key={slide.id} className="text-center h-full flex flex-col justify-between">
                  <div className="flex-grow text-left text-white">
                    <CountUp
                      start={0}
                      end={inView ? slide.title : 0} // Only count up when in view
                      duration={2}
                      suffix={slide.symbol}
                      redraw={true}
                    >
                      {({ countUpRef }) => <span ref={countUpRef} className="text-[35px] font-semibold mb-2 " />}
                    </CountUp>
                    <p className="mt-1 text-[17px] font-poppins font-normal">{slide.description}</p>
                  </div>
                  <div className="hidden lg:block">
                    <img src={slide.img} alt={`slide ${slide.id}`} className="w-full h-[400px] object-contain rounded-md" />
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Placements;
