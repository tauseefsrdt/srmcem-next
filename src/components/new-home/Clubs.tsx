import React, { useEffect, useState } from 'react';
import SlickSlider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import {
  section,
  eyebrow,
  sectionTitle,
  sectionDesc,

} from '../../utils/new-home/tw';
// import { unsplash } from '../utils/placeholder';
const women_1090 = "/new-home/assets/clubs/1090 Women.webp";
const artsy_crafty_club = "/new-home/assets/clubs/Artsy Crafty Club.webp";
const choreography_club = "/new-home/assets/clubs/Choreography Club.webp";
const cultural_club = "/new-home/assets/clubs/Cultural Club.webp";
const d_coders_club = "/new-home/assets/clubs/D' Coders Club.webp";
const dramatics = "/new-home/assets/clubs/Dramatics.webp";
const environmental = "/new-home/assets/clubs/Environmental.webp";
const fashion_show_club = "/new-home/assets/clubs/Fashion Show Club.webp";
const grobot = "/new-home/assets/clubs/Grobot.webp";
const literary_club = "/new-home/assets/clubs/Literary Club.webp";
const media_club = "/new-home/assets/clubs/Media Club.webp";
const music_club = "/new-home/assets/clubs/Music Club.webp";
const photography_club = "/new-home/assets/clubs/Photography Club.webp";
// import power_line from "../assets/clubs/Power Line.webp";
const social_activists_club = "/new-home/assets/clubs/Social Activists Club.webp";
const spiritual = "/new-home/assets/clubs/Spiritual.webp";
const sports = "/new-home/assets/clubs/Sports.webp";
const technical_club = "/new-home/assets/clubs/Technical Club.webp";
const wiwa_club = "/new-home/assets/clubs/WIWA Club (Women Empowerment).webp";

const Slider =
  (SlickSlider as unknown as { default?: typeof SlickSlider }).default ?? SlickSlider;

type Club = { name: string; img: string; };

const clubs: Club[] = [
  { name: "1090 Women Power Line Club", img: women_1090 },
  { name: "Artsy Crafty Club", img: artsy_crafty_club },
  { name: "Choreography Club", img: choreography_club },
  { name: "Cultural Club", img: cultural_club },
  { name: "D' Coders Club", img: d_coders_club },
  { name: "Dramatics Club", img: dramatics },
  { name: "Environmental Club", img: environmental },
  { name: "Fashion Show Club", img: fashion_show_club },
  { name: "Grobot Club", img: grobot },
  { name: "Literary Club", img: literary_club },
  { name: "Media Club", img: media_club },
  { name: "Music Club", img: music_club },
  { name: "Photography Club", img: photography_club },
  // { name: "Power Line", img: power_line },
  { name: "Social Activists Club", img: social_activists_club },
  { name: "Spiritual Club", img: spiritual },
  { name: "Sports Club", img: sports },
  { name: "Technical Club", img: technical_club },
  { name: "WIWA Club (Women Empowerment)", img: wiwa_club },
];

const ClubCard = ({ club }: { club: Club }) => (
  <article className="group relative overflow-hidden h-full rounded-lg bg-white/95 backdrop-blur-glass border border-[rgba(15,47,87,0.10)] shadow-card transition-all duration-[400ms] ease-out hover:-translate-y-1.5 hover:bg-white hover:border-navy-mid/30 hover:shadow-hover">
    <div className="relative aspect-[4/3] overflow-hidden bg-navy-mid/10">
      <img
        src={club.img}
        alt={club.name}
        loading="lazy"
        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
      />
      <span className="absolute inset-0 bg-[linear-gradient(180deg,transparent_45%,rgba(7,22,43,0.45)_100%)]" aria-hidden />
      {/* <span className={`${pill} ${club.cat === 'Technical' ? pillGhost : 'bg-[#C11E24]/15 border border-[#C11E24]/40 text-[#8F171C]'} absolute top-3 left-3`}>{club.cat}</span> */}
    </div>
    <div className="pl-3 py-2">
      <h3 className="font-bold text-[14px] leading-tight text-navy-dark transition-colors duration-300 group-hover:text-[#C11E24]">{club.name}</h3>

    </div>
  </article>
);

interface ArrowProps {
  onClick?: React.MouseEventHandler<HTMLDivElement>;
}

const arrowBase =
  'absolute top-[calc(50%-20px)] w-9 h-9 transform -translate-y-1/2 z-10 cursor-pointer grid place-items-center rounded-full text-[#C11E24] bg-white border border-navy-mid/30 shadow-card transition-all duration-300 hover:text-white hover:bg-[#C11E24] hover:border-[#C11E24] hover:shadow-soft';

const NextArrow: React.FC<ArrowProps> = ({ onClick }) => (
  <div className={`${arrowBase} -right-2`} onClick={onClick}>
    <FaChevronRight />
  </div>
);

const PrevArrow: React.FC<ArrowProps> = ({ onClick }) => (
  <div className={`${arrowBase} -left-2`} onClick={onClick}>
    <FaChevronLeft />
  </div>
);

const getSlidesToShow = () => {
  if (typeof window === 'undefined') return 4;
  if (window.matchMedia('(max-width: 767px)').matches) return 1;
  if (window.matchMedia('(max-width: 899px)').matches) return 2;
  if (window.matchMedia('(max-width: 1199px)').matches) return 3;
  return 4;
};

const Clubs = () => {
  const [slidesToShow, setSlidesToShow] = useState(getSlidesToShow);
  const [isExpanded, setIsExpanded] = useState(false);

  useEffect(() => {
    const updateSlidesToShow = () => setSlidesToShow(getSlidesToShow());
    updateSlidesToShow();
    window.addEventListener('resize', updateSlidesToShow);
    return () => window.removeEventListener('resize', updateSlidesToShow);
  }, []);

  const settings = {
    dots: false,
    arrows: true,
    infinite: true,
    speed: 600,
    autoplay: true,
    autoplaySpeed: 3200,
    slidesToShow,
    slidesToScroll: 1,
    pauseOnHover: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

  return (
    <section className="bg-[linear-gradient(160deg,#C11E24_0%,#A8181D_100%)] !overflow-hidden">
      <div className={`${section} `} id="clubs">
        <div aria-hidden className="pointer-events-none absolute -top-16 right-[-6%] w-[420px] h-[420px] rounded-full bg-white/[0.10] blur-[120px]" />
        <div aria-hidden className="pointer-events-none absolute -bottom-20 left-[-8%] w-[440px] h-[440px] rounded-full bg-white/[0.06] blur-[120px]" />

        <div className="mb-5 sm:mb-14 reveal relative z-[1]">
          <div className={`${eyebrow} !text-white before:!bg-white`}>Student Life</div>
          <h2 className={`${sectionTitle} !text-white`}>17+ Clubs &amp; Societies <span className="text-[#ffc107]">Find Your Tribe</span></h2>
          <p className={`${sectionDesc} !text-white/85 ${isExpanded ? "line-clamp-none" : "line-clamp-2 sm:line-clamp-none"}`}>
            Campus life at SRMCEM is vibrant, inclusive and full of opportunities to explore your interests. With 17+ technical, cultural, sports and professional clubs, students develop leadership, teamwork, creativity and communication skills alongside academics. Whether you're enrolled in B.Tech CSE (AKTU affiliated) or another engineering programme, you'll find countless opportunities to participate in hackathons, coding clubs, robotics teams, entrepreneurship cells, music, photography and cultural events.
          </p>
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="text-[#ffc107] text-sm mt-1 sm:hidden"
          >
            {isExpanded ? "Read Less" : "Read More"}
          </button>
        </div>

        <div className="relative z-[1] reveal [&_.slick-track]:flex [&_.slick-slide]:h-auto [&_.slick-slide>div]:h-full">
          <Slider key={slidesToShow} {...settings}>
            {clubs.map((club) => (
              <div key={club.name} className="h-full px-2.5 pb-2">
                <ClubCard club={club} />
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
};

export default Clubs;
