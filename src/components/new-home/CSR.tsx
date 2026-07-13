import React, { useEffect, useState } from 'react';
import SlickSlider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { section, eyebrow, sectionTitle, sectionDesc } from '../../utils/new-home/tw';
const donation1 = "/new-home/assets/donation/A.webp";
const donation2 = "/new-home/assets/donation/B.webp";
const donation3 = "/new-home/assets/donation/C.webp";
const donation4 = "/new-home/assets/donation/D.webp";

const Slider =
  (SlickSlider as unknown as { default?: typeof SlickSlider }).default ??
  SlickSlider;

interface ArrowProps {
  onClick?: React.MouseEventHandler<HTMLDivElement>;
}

const CsrsNextArrow: React.FC<ArrowProps> = ({ onClick }) => (
  <div className="absolute -right-4 top-[50%] z-10 w-11 h-11 -translate-y-1/2 rounded-full bg-white shadow-hover border border-[rgba(15,47,87,0.10)] grid place-items-center text-navy-mid hover:bg-navy-mid hover:text-white transition-colors duration-300" onClick={onClick}>
    <FaChevronRight />
  </div>
);

const CsrsPrevArrow: React.FC<ArrowProps> = ({ onClick }) => (
  <div className="absolute -left-4 top-[50%] z-10 w-11 h-11 -translate-y-1/2 rounded-full bg-white shadow-hover border border-[rgba(15,47,87,0.10)] grid place-items-center text-navy-mid hover:bg-navy-mid hover:text-white transition-colors duration-300" onClick={onClick}>
    <FaChevronLeft />
  </div>
);

const csrData: { img: string; title: string; desc: string; pos?: string }[] = [
  { img: donation3, title: 'Blood Donation Camp', desc: 'Regular blood donation drives with hundreds of student volunteers saving lives in the community' },
  { img: donation4, title: 'NCC', desc: 'National Cadet Corps unit developing discipline, leadership and national service among students', pos: 'center 15%' },
  { img: donation1, title: 'Arpan', desc: 'Community outreach initiative providing educational support and resources to underprivileged children' },
  { img: donation2, title: 'Plantation Drive', desc: 'Thousands of trees planted annually as part of our commitment to environmental sustainability' }
];

// Interior seams are cut on a slant so panels interlock; the outermost edges stay
// straight. Matches the compensated `.csr-panel` width in index.css (assumes N=4).
const SLANT_INSET = 28;
const N = csrData.length;

const clipFor = (i: number) => {
  const left = i === 0 ? '0' : `${SLANT_INSET}px`;
  const right = i === N - 1 ? '100%' : `calc(100% - ${SLANT_INSET}px)`;
  return `polygon(${left} 0, 100% 0, ${right} 100%, 0 100%)`;
};

const CSR = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(max-width: 560px)');
    const updateMobile = () => setIsMobile(mediaQuery.matches);

    updateMobile();
    const listener = (event: MediaQueryListEvent) => setIsMobile(event.matches);
    mediaQuery.addEventListener('change', listener);

    return () => {
      mediaQuery.removeEventListener('change', listener);
    };
  }, []);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4500,
    pauseOnHover: true,
    nextArrow: <CsrsNextArrow />,
    prevArrow: <CsrsPrevArrow />,
    responsive: [
      {
        breakpoint: 560,
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 9999,
        settings: 'unslick',
      },
    ],
  };

  return (
    <section className="bg-gradient-to-r from-white via-[#dcc7c7] to-white overflow-hidden">
      <div className={`${section} `} id="csr">
        <div className="mb-14 reveal">
          <div className={`${eyebrow} !text-[#1b4c7f] before:!bg-[#C11E24]`}>Social Responsibility</div>
          <h2 className={`${sectionTitle}`}>CSR Initiatives<span className="text-[#C11E24]"> Giving Back to Society</span></h2>
          <p className={`${sectionDesc} ${isExpanded ? "line-clamp-none" : "line-clamp-2 sm:line-clamp-none"}`}>
            Education at SRMCEM extends beyond classrooms. Through blood donation drives, National Cadet Corps (NCC), environmental campaigns, rural outreach programmes and social awareness initiatives, students develop leadership, responsibility and compassion. These experiences help shape socially responsible engineers and professionals who contribute positively to society while building successful careers.        </p>
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="text-[#C11E24] text-sm mt-1 sm:hidden"
          >
            {isExpanded ? "Read Less" : "Read More"}
          </button>
        </div>

        <div className="relative reveal">
          <div className="relative px-1 sm:px-6 reveal [&_.slick-track]:flex [&_.slick-slide]:h-auto [&_.slick-slide>div]:h-full">
            {isMobile ? (
              //@ts-ignore
              <Slider {...settings}>
                {csrData.map((item, i) => (
                  <div key={i} className="h-full px-2.5 pb-2">
                    <div
                      className="csr-panel group relative h-full overflow-hidden rounded-lg bg-white/95 backdrop-blur-glass border border-[rgba(15,47,87,0.10)] shadow-card transition-all duration-[400ms] ease-out hover:-translate-y-1.5 hover:bg-white hover:border-navy-mid/30 hover:shadow-hover"
                      style={{ ['--csr-clip' as string]: clipFor(i) }}
                    >
                      <div className="relative aspect-[4/3] overflow-hidden bg-navy-mid/10">
                        <img
                          src={item.img}
                          alt={item.title}
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                          style={{ objectPosition: item.pos ?? 'center' }}
                        />
                        <span className="absolute inset-0 bg-[linear-gradient(180deg,transparent_45%,rgba(7,22,43,0.45)_100%)]" aria-hidden />
                      </div>
                      <div className="pl-3 py-2">
                        <h3 className="font-bold text-[14px] leading-tight text-navy-dark transition-colors duration-300 group-hover:text-[#C11E24]">{item.title}</h3>
                        {/* <p className="mt-2 text-[13px] text-brand-gray leading-relaxed">{item.desc}</p> */}
                      </div>
                    </div>
                  </div>
                ))}
              </Slider>
            ) : (
              <div className="flex rounded-xl overflow-hidden shadow-soft min-w-full">
                {csrData.map((item, i) => (
                  <div
                    key={i}
                    className={`csr-panel group relative flex-none h-[280px] max-[560px]:h-[240px] snap-start overflow-hidden transition-[filter] duration-300 hover:brightness-110 ${i !== 0 ? '-ml-7' : ''}`}
                    style={{ ['--csr-clip' as string]: clipFor(i) }}
                  >
                    <img
                      src={item.img}
                      alt={item.title}
                      className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      style={{ objectPosition: item.pos ?? 'center' }}
                    />
                    <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(15,47,87,0)_50%,rgba(15,47,87,0.65)_100%)]" />
                  </div>
                ))}
              </div>
            )}
          </div>

          <div className="relative hidden sm:block mt-[3px] min-w-full">
            <div className="absolute inset-0 rounded-b-xl shadow-card bg-white" aria-hidden />
            <div className="relative flex divide-x divide-[rgba(15,47,87,0.08)] rounded-b-xl overflow-hidden">
              {csrData.map((item, i) => (
                <div key={i} className="flex-none w-1/4 max-[900px]:w-1/2 max-[560px]:w-full px-5 py-6 text-center">
                  <div className="font-serif font-bold text-[15px] text-ink">{item.title}</div>
                  <span className="block w-9 h-[3px] bg-[#C11E24] mx-auto mt-3" aria-hidden />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CSR;
