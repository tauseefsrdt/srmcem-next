import React, { useState } from 'react';
import SlickSlider from 'react-slick';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import {
  section,
  sectionTitle,
  sectionDesc,
} from '../../utils/new-home/tw';

const Slider =
  (SlickSlider as unknown as { default?: typeof SlickSlider }).default ??
  SlickSlider;

type ArrowProps = {
  onClick?: React.MouseEventHandler<HTMLDivElement>;
};

const logoArrowBase =
  'absolute top-1/2 -translate-y-1/2 z-10 grid h-8 w-8 cursor-pointer place-items-center rounded-full border border-navy-mid/25 bg-white text-[#C11E24] shadow-card transition-all duration-300 hover:border-[#C11E24] hover:bg-[#C11E24] hover:text-white';

const LogoNextArrow = ({ onClick }: ArrowProps) => (
  <div className={`${logoArrowBase} -right-1`} onClick={onClick} aria-label="Next logos">
    <FaChevronRight className="text-[13px]" />
  </div>
);

const LogoPrevArrow = ({ onClick }: ArrowProps) => (
  <div className={`${logoArrowBase} -left-1`} onClick={onClick} aria-label="Previous logos">
    <FaChevronLeft className="text-[13px]" />
  </div>
);

/* ─────────────────────────────────────────────
   Company logo definitions
   logo  → local asset path (if we have the file)
   bg    → brand primary colour
   fg    → text / icon colour on that bg
   abbr  → short label rendered as the logo mark
───────────────────────────────────────────── */
type Company = {
  name: string;
  logo: string;
};

const itCompanies: Company[] = [
  { name: 'SAP', logo: '/hiring_network/sap.webp' },
  { name: 'Infosys', logo: '/hiring_network/infosys.webp' },
  { name: 'Capgemini', logo: '/hiring_network/Capgemini.webp' },
  { name: 'Informatica', logo: '/hiring_network/informatica.svg' },
  { name: 'TCS', logo: '/hiring_network/tcs.svg' },
  { name: 'Wipro', logo: '/hiring_network/wipro.svg' },
  { name: 'HCLTech', logo: '/hiring_network/hcltech.svg' },
  { name: 'Cognizant', logo: '/hiring_network/cognizant.svg' },
  { name: 'Accenture', logo: '/hiring_network/accenture.svg' },
  { name: 'Deloitte', logo: '/hiring_network/deloitte.svg' },
  { name: 'IBM', logo: '/hiring_network/ibm.svg' },
  { name: 'Tech Mahindra', logo: '/hiring_network/techmahindra.svg' },
  { name: 'Genpact', logo: '/hiring_network/genpact.svg' },
  { name: 'Paytm', logo: '/hiring_network/paytm.svg' },
];

const coreCompanies: Company[] = [
  { name: 'Daikin', logo: '/hiring_network/daikin.webp' },
  { name: 'Adani', logo: '/hiring_network/adani.webp' },
  { name: 'L&T', logo: '/hiring_network/l&t.webp' },
  { name: 'Tata Steel', logo: '/hiring_network/tata steel.webp' },
  { name: 'Torrent Power', logo: '/hiring_network/torrentpower.svg' },
  { name: 'Prism Johnson', logo: '/hiring_network/prismjohnson.svg' },
  { name: 'UltraTech Cement', logo: '/hiring_network/ultratechcement.svg' },
  { name: 'Polycab', logo: '/hiring_network/polycab.svg' },
  { name: 'JBM Group', logo: '/hiring_network/jbmgroup.svg' },
  { name: 'Reliance Digital', logo: '/hiring_network/reliancedigital.svg' },
  { name: 'BHEL', logo: '/hiring_network/bhel.svg' },
  { name: 'NTPC', logo: '/hiring_network/ntpc.svg' },
];

const bfsiCompanies: Company[] = [
  { name: 'GSK', logo: '/hiring_network/gsk.webp' },
  { name: 'Amazon', logo: '/hiring_network/amazon.webp' },
  { name: 'Ranbaxy', logo: '/hiring_network/ranbaxy.webp' },
  { name: 'Axis Bank', logo: '/hiring_network/axisbank.svg' },
  { name: 'IDFC First Bank', logo: '/hiring_network/idfcfirstbank.svg' },
  { name: 'HSBC', logo: '/hiring_network/hsbc.svg' },
  { name: 'ICICI Bank', logo: '/hiring_network/icicibank.svg' },
  { name: 'V-Mart', logo: '/hiring_network/vmart.svg' },
  { name: 'PWC', logo: '/hiring_network/pwc.svg' },
];

const categories = [
  { label: 'IT Companies', companies: itCompanies, dir: 'left' },
  { label: 'Core Engineering', companies: coreCompanies, dir: 'right' },
  { label: 'Management & BFSI', companies: bfsiCompanies, dir: 'left' },
];

/* ─── Single logo card ─────────────────────── */
const LogoCard = ({ company }: { company: Company }) => (
  <div className="flex-shrink-0 mx-2 sm:mx-3 h-12 sm:h-16 px-3 sm:px-5 flex items-center justify-center bg-white rounded-xl border border-[rgba(15,47,87,0.10)] shadow-sm">
    <img
      src={company.logo}
      alt={company.name}
      className="h-7 sm:h-9 w-auto max-w-[90px] sm:max-w-[120px] object-contain"
    />
  </div>
);

/* ─── Infinite-scroll row ──────────────────── */
const MarqueeRow = ({
  companies,
  reverse,
  speed = 40,
}: {
  companies: Company[];
  reverse: boolean;
  speed?: number;
}) => {
  const loop = [...companies, ...companies, ...companies];
  const sliderSettings = {
    arrows: true,
    dots: false,
    infinite: true,
    speed: 450,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: speed * 100,
    pauseOnHover: true,
    nextArrow: <LogoNextArrow />,
    prevArrow: <LogoPrevArrow />,
    swipeToSlide: true,
    responsive: [
      { breakpoint: 420, settings: { slidesToShow: 2 } },
    ],
  };


  return (
    <>
      <div className="relative w-full md:hidden pb-2 px-7">
        <Slider {...sliderSettings}>
          {companies.map((company) => (
            <div key={company.name} className="px-1.5 py-2">
              <LogoCard company={company} />
            </div>
          ))}
        </Slider>
      </div>

      <div className="relative hidden md:block overflow-hidden [mask-image:linear-gradient(90deg,transparent,#000_6%,#000_94%,transparent)] py-2">
        <div
          className="flex w-max items-center hover:[animation-play-state:paused]"
          style={{
            animation: `${reverse ? 'marqueeReverse' : 'marquee'} ${speed}s linear infinite`,
          }}
        >
          {loop.map((c, idx) => (
            <LogoCard key={idx} company={c} />
          ))}
        </div>
      </div>
    </>
  );
};
/* --- Section ──────────────────────────────── */
const CompanyLogos = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  return (
    <>
      {/* Keyframe styles injected once */}
      <style>{`
      @keyframes marquee        { from { transform: translateX(0); } to { transform: translateX(-33.333%); } }
      @keyframes marqueeReverse { from { transform: translateX(-33.333%); } to { transform: translateX(0); } }
    `}</style>
      <section className="bg-[linear-gradient(180deg,#FFFFFF_0%,#E6E6E7_100%)]">
        <div
          className={`${section} `}
          id="companies"
        >
          <div className="mb-14 reveal">
            {/* <div className={eyebrow}>250+ Recruiters</div> */}
            <h2 className={sectionTitle}>Companies that Hire <span className="text-[#C11E24]">Our Graduates</span> </h2>
            <p className={`${sectionDesc} ${isExpanded ? "line-clamp-none" : "line-clamp-2 sm:line-clamp-none"}`}>
              Leading multinational companies, core engineering firms, consulting organizations and financial institutions recruit from SRMCEM every year. Our dedicated Corporate Resource Centre prepares students through technical training, internships, mock interviews and aptitude development, making SRMCEM a preferred AKTU placement college. Whether you choose Computer Science, Electronics, Mechanical or Civil Engineering, you'll graduate industry-ready from one of the most trusted B.Tech AKTU colleges in Uttar Pradesh.
            </p>
            <button
              onClick={() => setIsExpanded(!isExpanded)}
              className="text-[#C11E24] text-sm mt-1 sm:hidden"
            >
              {isExpanded ? "Read Less" : "Read More"}
            </button>
          </div>

          <div className="space-y-4 sm:space-y-6">
            {categories.map((cat, i) => (
              <div key={i} className="reveal flex flex-col md:flex-row gap-2 md:gap-5 items-start md:items-center">

                <span className="inline-block text-nowrap bg-white/70 backdrop-blur-glass border border-[rgba(15,47,87,0.10)] border-l-[3px] border-l-[#C11E24] px-3 py-1 text-[10px] sm:px-4 sm:py-1.5 sm:text-[11px] font-bold uppercase text-navy-mid">
                  {cat.label}
                </span>

                <MarqueeRow
                  companies={cat.companies}
                  reverse={cat.dir === 'right'}
                  speed={i === 1 ? 35 : 42}
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}



export default CompanyLogos;
