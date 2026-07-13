import React, { useEffect, useState } from "react";
import SlickSlider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { eyebrow, section, sectionDesc, sectionTitle } from "../../utils/new-home/tw";
import { alumniData } from "../../data/new-home/aluminiData";
import { Alumni } from "../../data/new-home/aluminiDataTypes";
import Icon from "./Icon";

// react-slick is CJS; under Vite its default import arrives as a namespace
// object, so unwrap `.default` the same way Innovation.tsx / Events.tsx do.
const Slider =
  (SlickSlider as unknown as { default?: typeof SlickSlider }).default ??
  SlickSlider;

// Custom arrow components
interface ArrowProps {
  onClick?: React.MouseEventHandler<HTMLDivElement>;
}

const arrowBase =
  "absolute top-[calc(50%-20px)] w-9 h-9  transform -translate-y-1/2 z-10 cursor-pointer grid place-items-center rounded-full text-[#C11E24] bg-white border border-navy-mid/30 shadow-card transition-all duration-300 hover:text-white hover:bg-[#C11E24] hover:border-[#C11E24] hover:shadow-soft";

const NextArrow: React.FC<ArrowProps> = ({ onClick }) => (
  <div className={`${arrowBase} -right-2 xl:-right-7`} onClick={onClick}>
    <FaChevronRight />
  </div>
);

const PrevArrow: React.FC<ArrowProps> = ({ onClick }) => (
  <div className={`${arrowBase} -left-2 xl:-left-7`} onClick={onClick}>
    <FaChevronLeft />
  </div>
);

const Stars = ({ className = "" }: { className?: string }) => (
  <div className={`text-gold  select-none ${className}`} aria-label="5 out of 5 stars">★★★★★</div>
);

const getSlidesToShow = () => {
  if (typeof window === "undefined") return 3;
  if (window.matchMedia("(max-width: 767px)").matches) return 1;
  if (window.matchMedia("(max-width: 1099px)").matches) return 2;
  return 3;
};

const TestmonialSlider: React.FC = () => {
  const [selected, setSelected] = useState<Alumni | null>(null);
  const [slidesToShow, setSlidesToShow] = useState(getSlidesToShow);

  useEffect(() => {
    const updateSlidesToShow = () => setSlidesToShow(getSlidesToShow());
    updateSlidesToShow();
    window.addEventListener("resize", updateSlidesToShow);
    return () => window.removeEventListener("resize", updateSlidesToShow);
  }, []);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    pauseOnHover: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

  return (
    <>
      <section className="bg-white">
        <div className={`${section} `}>
          <div className="relative w-full">


            <div className="mb-5 sm:mb-14 reveal">
              <div className={`${eyebrow} before:!bg-[#C11E24]`}>In Their Words</div>
              <h2 className={`${sectionTitle} text-ink`}>Alumni <span className="text-[#C11E24]">Testimonials</span></h2>
              <p className={`mt-3 sm:mt-[18px] ${sectionDesc} text-brand-gray `}>Hear from our graduates building careers across the globe — and read their full journeys.</p>
            </div>

            {/* Slider of alumni cards */}
            <div className="relative px-1 sm:px-6 reveal [&_.slick-track]:flex [&_.slick-slide]:h-auto [&_.slick-slide>div]:h-full">
              <Slider key={slidesToShow} {...settings}>
                {alumniData.map((alumnus, index) => (
                  <div key={index} className="h-full px-2.5 pb-2">
                    <article className="group relative h-full flex flex-col bg-white/70 backdrop-blur-glass border border-[rgba(15,47,87,0.1)] rounded-lg shadow-card p-6 transition-all duration-[400ms] ease-out hover:-translate-y-1.5 hover:bg-white hover:border-navy-mid/30 hover:shadow-hover">
                      <span className="pointer-events-none absolute inset-x-0 top-0 h-px bg-[linear-gradient(90deg,transparent,rgba(27,76,127,0.18),transparent)]" aria-hidden />

                      <div className="flex items-center gap-4">
                        <div className="relative shrink-0">
                          <img
                            src={alumnus.image}
                            alt={alumnus.name}
                            className="w-16 h-16 rounded-[14px] object-cover object-top ring-2 ring-[#C11E24]/50 shadow-[0_10px_28px_rgba(193,30,36,0.4)]"
                          />
                          <span className="absolute -bottom-1.5 -right-1.5 w-6 h-6 grid place-items-center rounded-full bg-[linear-gradient(135deg,#1B4C7F,#0F2F57)] text-white border-2 border-white shadow-card" title="Verified alumnus">
                            <Icon name="check" className="w-3 h-3" strokeWidth={3} />
                          </span>
                        </div>
                        <div className="min-w-0">
                          <div className="font-serif text-[16px] font-bold text-navy-dark leading-tight truncate">{alumnus.name}</div>
                          <div className="text-[#8F171C] text-[11px] font-semibold mt-0.5 line-clamp-1">{alumnus.degree}</div>
                          <Stars className="text-[12px] mt-1" />
                        </div>
                      </div>

                      <span className="font-serif text-[56px] leading-[0.5] text-[#C11E24]/25 mt-5 select-none" aria-hidden>&ldquo;</span>
                      <p className="text-brand-gray text-[13.5px] leading-[1.8] mt-2 line-clamp-5">{alumnus.content}</p>

                      <button
                        type="button"
                        onClick={() => setSelected(alumnus)}
                        className="mt-5 inline-flex w-fit items-center gap-1.5 text-[13px] font-bold text-navy-mid transition-all duration-300 hover:gap-2.5 hover:text-[#C11E24]"
                      >
                        Read More →
                      </button>
                    </article>
                  </div>
                ))}
              </Slider>
            </div>
          </div>
        </div>
      </section>
      {/* Full-testimonial modal */}
      {selected && (
        <div className="p-6 fixed inset-0 z-[9999] flex items-center justify-center" role="dialog" aria-modal="true" aria-label="Alumni testimonial">
          <button
            type="button"
            className="absolute inset-0 bg-navy-deep/70 backdrop-blur-sm"
            aria-label="Close testimonial"
            onClick={() => setSelected(null)}
          />
          <div className="relative max-w-2xl w-full mx-4 max-h-[calc(100vh-48px)] overflow-hidden bg-white border border-[rgba(15,47,87,0.12)] rounded-2xl shadow-[0_40px_90px_rgba(10,31,61,0.35)]">
            <span className="pointer-events-none absolute inset-x-0 top-0 h-1 bg-[linear-gradient(90deg,#1B4C7F,#C11E24)]" aria-hidden />
            <button
              type="button"
              className="absolute top-3 right-3 z-10 grid place-items-center w-9 h-9 bg-navy-light/70 border border-[rgba(15,47,87,0.14)] text-navy-dark rounded-full leading-none text-xl transition-colors duration-200 hover:bg-navy hover:text-white hover:border-navy"
              aria-label="Close testimonial"
              onClick={() => setSelected(null)}
            >
              ×
            </button>

            <div className="p-7 sm:p-9 overflow-y-auto max-h-[calc(100vh-48px)]">
              <div className="flex items-center gap-5">
                <img
                  src={selected.image}
                  alt={selected.name}
                  className="w-20 h-20 sm:w-24 sm:h-24 rounded-[18px] object-cover object-top ring-4 ring-white shadow-soft shrink-0"
                />
                <div className="min-w-0">
                  <div className="font-serif text-xl font-bold text-navy-dark leading-tight">{selected.name}</div>
                  <div className="text-[#8F171C] text-[12px] font-semibold mt-1">{selected.degree}</div>
                  {selected.company && <div className="text-brand-gray text-[12px] mt-0.5">{selected.company}</div>}
                  <Stars className="text-[15px] mt-2" />
                </div>
              </div>

              <div className="relative mt-6">
                <span className="pointer-events-none absolute -top-6 -left-1 font-serif text-[80px] leading-none text-[#C11E24]/20 select-none" aria-hidden>&ldquo;</span>
                <p className="relative text-ink/80 text-[15px] leading-[1.95] text-justify">{selected.content}</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default TestmonialSlider;
