import React, { useEffect, useState } from 'react';
import SlickSlider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import Link from "next/link";

export type Course = {
  id: number;
  name: string;
  icon: string;
  path: string;
  tags?: string[];
  isLink?: boolean;
};

const ProgramCard: React.FC<{ course: Course; image?: string }> = ({ course, image }) => {
  const inner = (
    <div className="group flex flex-col flex-1 p-5">
      <div className="w-[72px] h-[72px] rounded-xl overflow-hidden flex-shrink-0 border border-gray-100 shadow-sm">
        <img
          src={image ?? course.icon}
          alt={course.name}
          loading="lazy"
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
      </div>

      <h3 className="mt-4 text-[14px] font-semibold text-[#C11E24] leading-snug">
        {course.name}
      </h3>

      {course.tags && course.tags.length > 0 && (
        <div className="flex flex-wrap gap-1.5 mt-3">
          {course.tags.map((tag) => (
            <span
              key={tag}
              className="px-3 py-0.5 rounded-full border border-gray-300 text-gray-500 text-[11px] font-semibold uppercase"
            >
              {tag}
            </span>
          ))}
        </div>
      )}

      <div className="mt-auto pt-4">
        <span className="text-[#C11E24] text-[13px] font-semibold inline-flex items-center gap-1 group-hover:gap-2 transition-all duration-200">
          Learn more <span aria-hidden>→</span>
        </span>
      </div>
    </div>
  );

  const cardClasses =
    'flex flex-col w-full h-full rounded-2xl bg-white border border-gray-200 shadow-sm hover:shadow-md transition-[box-shadow,transform] duration-300 hover:-translate-y-1 cursor-pointer';

  return course.isLink ? (
    <a href={course.path || '#'}  target="_blank" rel="noreferrer" className={cardClasses}>
      {inner}
    </a>
  ) : (
    <Link href={course.path || '#'}  className={cardClasses}>
      {inner}
    </Link>
  );
};

const Slider =
  (SlickSlider as unknown as { default?: typeof SlickSlider }).default ??
  SlickSlider;

interface ArrowProps {
  className?: string;
  style?: React.CSSProperties;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

const arrowBase =
  '!absolute !top-1/2 -!translate-y-1/2 !z-10 !grid !h-9 !w-9 !place-items-center rounded-full !border !border-[#C11E24] !bg-white !text-[#C11E24] shadow-[0_8px_18px_rgba(0,0,0,0.08)] transition duration-200 hover:bg-[#C11E24] !hover:text-white focus:outline-none';

const NextArrow: React.FC<ArrowProps> = ({ className = '', style, onClick }) => (
  <button
    type="button"
    className={`${arrowBase} right-3 ${className}`}
    style={style}
    onClick={onClick}
    aria-label="Next slide"
  >
    <FaChevronRight className="text-lg" />
  </button>
);

const PrevArrow: React.FC<ArrowProps> = ({ className = '', style, onClick }) => (
  <button
    type="button"
    className={`${arrowBase} left-3 ${className}`}
    style={style}
    onClick={onClick}
    aria-label="Previous slide"
  >
    <FaChevronLeft className="text-lg" />
  </button>
);

const ProgramGrid: React.FC<{ courses: Course[]; images?: string[] }> = ({ courses, images }) => {
  const [sliderKey, setSliderKey] = useState(0);
  const [isMobile, setIsMobile] = useState(() =>
    typeof window !== 'undefined' && window.matchMedia('(max-width: 767px)').matches
  );

  useEffect(() => {
    const updateMobile = () => {
      const mobile = window.matchMedia('(max-width: 767px)').matches;
      setIsMobile(mobile);
      setSliderKey((prev) => prev + 1);
    };

    updateMobile();
    const mediaQuery = window.matchMedia('(max-width: 767px)');
    mediaQuery.addEventListener('change', updateMobile);
    return () => mediaQuery.removeEventListener('change', updateMobile);
  }, []);

  // Determine if we should use slider based on screen size and card count
  const shouldUseSlider = () => {
    // On mobile: always use slider
    if (isMobile) return true;

    // On desktop/tablet: use slider only if more than 4 cards
    return courses.length > 4;
  };

  const useSlider = shouldUseSlider();

  // Determine slides to show
  const getSlidesToShow = () => {
    if (isMobile) return 1;
    return 4;
  };

  const slidesToShow = getSlidesToShow();

  // If not using slider, display static grid
  if (!useSlider) {
    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 w-full">
        {courses.map((course) => (
          <div key={course.id} className="flex flex-col h-full">
            <ProgramCard course={course} image={images?.[course.id]} />
          </div>
        ))}
      </div>
    );
  }

  // Always show arrows on mobile if more than 1 card, otherwise hide them
  const showArrows = isMobile ? courses.length > 1 : courses.length > slidesToShow;
  const showInfinite = isMobile ? courses.length > 1 : courses.length > slidesToShow;
  const showAutoplay = isMobile ? courses.length > 1 : courses.length > slidesToShow;

  const sliderSettings = {
    dots: false,
    infinite: showInfinite,
    speed: 500,
    slidesToShow: slidesToShow,
    slidesToScroll: 1,
    arrows: showArrows,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    autoplay: showAutoplay,
    autoplaySpeed: 4500,
    swipe: true,
    swipeToSlide: true,
    touchMove: true,
    // For mobile with single card, we still want to show it
    centerMode: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: isMobile ? 1 : 2,
          slidesToScroll: 1,
          swipe: true,
          swipeToSlide: true,
          touchMove: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          swipe: true,
          swipeToSlide: true,
          touchMove: true,
          arrows: courses.length > 1,
          infinite: courses.length > 1,
        },
      },
    ],
  };

  return (
    <div className="relative w-full h-full px-0 sm:px-5 reveal [&_.slick-track]:flex [&_.slick-slide]:flex [&_.slick-slide]:h-auto [&_.slick-slide>div]:flex [&_.slick-slide>div]:flex-col [&_.slick-slide>div]:h-full [&_.slick-slide>div]:w-full">
      <Slider key={sliderKey} {...sliderSettings}>
        {courses.map((course) => (
          <div key={course.id} className="flex flex-col h-full px-2 pb-4">
            <div className="flex flex-col h-full">
              <ProgramCard course={course} image={images?.[course.id]} />
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default ProgramGrid;