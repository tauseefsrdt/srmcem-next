import { useEffect, useState, type MouseEventHandler } from "react";
import SlickSlider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { eyebrow, sectionDesc } from "../../utils/new-home/tw";
// import { avatar } from "../../utils/new-home/placeholder";
const upsc1 = "/new-home/assets/aktu/Anjali-Raj.webp";
const upsc2 = "/new-home/assets/aktu/Nimish.webp";
const upsc3 = "/new-home/assets/aktu/shakshi-singh.webp";
const upsc4 = "/new-home/assets/aktu/Akshat-Rastogi.webp";
const upsc11 = "/new-home/assets/aktu/Ahana_Dwivedi.webp";
const upsc22 = "/new-home/assets/aktu/Riya_Sen.webp";

const Slider =
  (SlickSlider as unknown as { default?: typeof SlickSlider }).default ??
  SlickSlider;

interface ArrowProps {
  onClick?: MouseEventHandler<HTMLDivElement>;
}

const topperArrowBase =
  "absolute top-[calc(80%-20px)] w-9 h-9 transform -translate-y-1/2 z-20 cursor-pointer grid place-items-center rounded-full text-[#C11E24] bg-white border border-navy-mid/30 shadow-card transition-all duration-300 hover:text-white hover:bg-[#C11E24] hover:border-[#C11E24] hover:shadow-soft";

const TopperNextArrow = ({ onClick }: ArrowProps) => (
  <div className={`${topperArrowBase} right-2`} onClick={onClick}>
    <FaChevronRight />
  </div>
);

const TopperPrevArrow = ({ onClick }: ArrowProps) => (
  <div className={`${topperArrowBase} left-2`} onClick={onClick}>
    <FaChevronLeft />
  </div>
);
const stats = [


  {
    num: "18",
    label: "Gold Medalists",
    emoji: "🥇",
    accent: "#D4930A",
    bg: "from-amber-50/80 to-yellow-50/60",
    border: "border-amber-200/60",
    shadow: "shadow-[0_4px_24px_rgba(212,147,10,0.12)]",
    glow: "bg-[radial-gradient(ellipse_80%_60%_at_50%_0%,rgba(242,184,75,0.18),transparent)]",
  },
  {
    num: "12",
    label: "Silver Medalists",
    emoji: "🥈",
    accent: "#637B98",
    bg: "from-slate-50/80 to-blue-50/50",
    border: "border-slate-200/60",
    shadow: "shadow-[0_4px_24px_rgba(99,123,152,0.10)]",
    glow: "bg-[radial-gradient(ellipse_80%_60%_at_50%_0%,rgba(189,201,219,0.20),transparent)]",
  },
  {
    num: "6",
    label: "Bronze Medalists",
    emoji: "🥉",
    accent: "#B5622A",
    bg: "from-orange-50/80 to-amber-50/50",
    border: "border-orange-200/50",
    shadow: "shadow-[0_4px_24px_rgba(181,98,42,0.10)]",
    glow: "bg-[radial-gradient(ellipse_80%_60%_at_50%_0%,rgba(212,144,90,0.18),transparent)]",
  },
  {
    num: "192",
    label: "University Merit Holders",
    emoji: "🏆",
    accent: "#D4930A",
    bg: "from-amber-50/80 to-yellow-50/60",
    border: "border-amber-200/60",
    shadow: "shadow-[0_4px_24px_rgba(212,147,10,0.12)]",
    glow: "bg-[radial-gradient(ellipse_80%_60%_at_50%_0%,rgba(242,184,75,0.16),transparent)]",
  },
];

const toppers = [
  {
    position: "1st",
    rank: 1,
    label: "1st · Position",
    name: "Ahana Dwivedi",
    branch: "B.Tech (EE)",
    avatarId: 47,
    year: "2026",
    img: upsc11
  },
  {
    position: "1st",
    rank: 1,
    label: "1st · Position",
    name: "Riya Sen",
    branch: "B.Tech (CE)",
    avatarId: 47,
    year: "2026",
    img: upsc22
  },

  {
    position: "1st",
    rank: 1,
    label: "1st · Position",
    name: "Anjali Raj",
    branch: "B.Tech (EE)",
    avatarId: 47,
    year: "",
    img: upsc1
  },


  {
    position: "2nd",
    rank: 2,
    label: "2nd · Position",
    name: "Nimish",
    branch: "B.Tech (CE)",
    avatarId: 11,
    year: "",
    img: upsc2
  },
  {
    position: "2nd",
    rank: 2,
    label: "2nd · Position",
    name: "Sakshi Singh",
    branch: "B.Tech (IT)",
    avatarId: 26,
    year: "",
    img: upsc3
  },
  {
    position: "3rd",
    rank: 3,
    label: "3rd · Position",
    name: "Akshat Rastogi",
    branch: "B.Tech (ME)",
    avatarId: 3,
    year: "",
    img: upsc4
  },
];

const rankConfig: Record<string, {
  ring: string;
  badge: string;
  cardBg: string;
  cardBorder: string;
  medalBg: string;
  glow: string;
}> = {
  "1st": {
    ring: "ring-2 ring-[#ffb703] ring-offset-1 ring-offset-white",
    badge: "bg-[linear-gradient(135deg,#F7CF75,#D4930A)] text-white",
    cardBg: "bg-[linear-gradient(160deg,#FFFBF0_0%,#FFF7E0_100%)]",
    cardBorder: "border-amber-200",
    medalBg: "bg-[linear-gradient(135deg,#F7CF75,#D4930A)]",
    glow: "shadow-[0_4px_20px_rgba(212,147,10,0.14)]",
  },
  "2nd": {
    ring: "ring-2 ring-slate-300 ring-offset-1 ring-offset-white",
    badge: "bg-[linear-gradient(135deg,#D8E3EF,#9AAFC4)] text-[#1B4C7F]",
    cardBg: "bg-[linear-gradient(160deg,#F5F8FC_0%,#EEF4FA_100%)]",
    cardBorder: "border-slate-200",
    medalBg: "bg-[linear-gradient(135deg,#D8E3EF,#9AAFC4)]",
    glow: "shadow-[0_4px_16px_rgba(99,123,152,0.12)]",
  },
  "3rd": {
    ring: "ring-2 ring-orange-300 ring-offset-1 ring-offset-white",
    badge: "bg-[linear-gradient(135deg,#F0A07A,#B5622A)] text-white",
    cardBg: "bg-[linear-gradient(160deg,#FFF8F4_0%,#FDF1E8_100%)]",
    cardBorder: "border-orange-200",
    medalBg: "bg-[linear-gradient(135deg,#F0A07A,#B5622A)]",
    glow: "shadow-[0_4px_16px_rgba(181,98,42,0.12)]",
  },
};

// const medalEmoji: Record<string, string> = { "1st": "🥇", "2nd": "🥈", "3rd": "🥉" };

const AcademicExcellence = () => {
  const [slidesToShow, setSlidesToShow] = useState(4);
  const [isExpanded, setIsExpanded] = useState(false);


  useEffect(() => {
    const getSlides = () => (window.matchMedia('(max-width: 640px)').matches ? 1 : 4);
    setSlidesToShow(getSlides());
    const media = window.matchMedia('(max-width: 640px)');
    const listener = (event: MediaQueryListEvent) => setSlidesToShow(event.matches ? 1 : 4);
    media.addEventListener('change', listener);
    return () => media.removeEventListener('change', listener);
  }, []);

  return (
    <section className=" bg-gradient-to-r from-white via-[#dcc7c7] to-white overflow-hidden">
      <div
        className="relative py-8 lg:py-12 px-5 max-w-container mx-auto "
        aria-label="Academic excellence"
      >
        <div aria-hidden className="pointer-events-none absolute -top-24 -right-24 w-[360px] h-[360px] rounded-full bg-[radial-gradient(ellipse,rgba(255,255,255,0.10)_0%,transparent_70%)]" />
        <div aria-hidden className="pointer-events-none absolute -bottom-16 -left-16 w-[300px] h-[300px] rounded-full bg-[radial-gradient(ellipse,rgba(255,255,255,0.06)_0%,transparent_70%)]" />

        <div className="relative">
          {/* ── Header ── */}
          <div className="mb-7">
            <div className={`${eyebrow} !text-[#C11E24] before:!bg-[#C11E24]`}>MERIT & ACHIEVEMENTS</div>
            <h2 className="font-serif font-black text-[clamp(24px,2.4vw,34px)] leading-[1.1]  ">
              Our Toppers,{" "}
              <span className="text-[#C11E24]">
                Our Pride
              </span>
            </h2>
            <p className={`${sectionDesc} ${isExpanded ? "line-clamp-none" : "line-clamp-2 sm:line-clamp-none"}`}>
              At SRMCEM, academic excellence is celebrated with pride. As one of the top AKTU engineering colleges in Lucknow, our students consistently secure University Gold, Silver and Bronze Medals along with top merit positions in AKTU examinations. Following the AKTU syllabus & semester pattern with strong faculty mentoring, industry-focused learning and continuous academic support, students achieve outstanding university rankings year after year. Their success reflects our commitment to providing quality education for students seeking AKTU B.Tech admission and building successful engineering careers.
            </p>

            <button
              onClick={() => setIsExpanded(!isExpanded)}
              className="text-[#C11E24] text-sm mt-1 sm:hidden"
            >
              {isExpanded ? "Read Less" : "Read More"}
            </button>
          </div>

          {/* ── Stats row — horizontal cards ── */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 mb-8">
            {stats.map((s) => (
              <div
                key={s.label}
                className={`group relative flex items-center gap-3 px-4 py-4 rounded-xl bg-gradient-to-br ${s.bg} border ${s.border} ${s.shadow} transition-all duration-300 hover:-translate-y-1 overflow-hidden`}
              >
                <div aria-hidden className={`absolute inset-0 pointer-events-none ${s.glow}`} />
                <span aria-hidden className="absolute inset-x-0 top-0 h-px bg-[linear-gradient(90deg,transparent,rgba(255,255,255,0.9),transparent)]" />

                {/* Icon */}
                <div className="shrink-0 w-10 h-10 rounded-xl bg-white/80 shadow-sm border border-white/90 flex items-center justify-center text-[18px] leading-none select-none">
                  {s.emoji}
                </div>

                {/* Number + label */}
                <div className="min-w-0">
                  <div
                    className="font-serif font-black text-[clamp(26px,3vw,36px)] leading-none t"
                    style={{ color: s.accent }}
                  >
                    {s.num}
                  </div>
                  <div className="mt-0.5 text-[11px] font-semibold text-[#3A536B] leading-tight">
                    {s.label}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* ── Divider ── */}
          <div className="flex items-center gap-3 sm:mb-5">
            <div className="flex-1 h-px bg-[linear-gradient(90deg,transparent,rgba(255,255,255,0.3))]" />
            <div className="flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-white/80 border border-[rgba(15,47,87,0.10)] shadow-sm">
              <span className="text-[11px]">🏅</span>
              <span className="text-[16px] font-bold  uppercase text-[#1B4C7F]">AKTU Toppers</span>
              <span className="text-[11px]">🏅</span>
            </div>
            <div className="flex-1 h-px bg-[linear-gradient(90deg,rgba(255,255,255,0.3),transparent)]" />
          </div>

          {/* ── Toppers row — slider with arrows (arrows only show when > 4 toppers) ── */}
          <div className="mt-4 px-1 xl:px-8 [&_.slick-track]:flex [&_.slick-slide]:h-auto [&_.slick-slide>div]:h-full">
            <Slider
              infinite={toppers.length > 4}
              speed={500}
              slidesToShow={slidesToShow}
              slidesToScroll={1}
              arrows={toppers.length > 4}
              nextArrow={<TopperNextArrow />}
              prevArrow={<TopperPrevArrow />}
              responsive={[
                { breakpoint: 1024, settings: { slidesToShow: 2 } },
                { breakpoint: 640, settings: { slidesToShow: 1 } },
              ]}
            >
              {toppers.map((t, i) => {
                const rc = rankConfig[t.position];
                return (
                  <div key={i} className="px-2 pt-20">
                    <div
                      className={`group relative overflow-visible flex items-center gap-4 pl-24 pr-4 py-6 rounded-2xl border ${rc.cardBg} ${rc.cardBorder} ${rc.glow} transition-all duration-300 hover:-translate-y-1`}
                    >
                      {/* Image */}
                      <img
                        src={t.img}
                        alt={t.name}
                        className="absolute bottom-0 left-1 w-32 h-auto object-contain z-10"
                        loading="lazy"
                      />

                      {/* Info */}
                      <div className="ml-10">
                        <div
                          className={`inline-flex items-center font-bold text-[12px] text-[#C11E24]  uppercase rounded-full mb-1 `}
                        >
                          {t.label}
                        </div>

                        <div className="font-semibold text-[14px] leading-tight text-[#0A1F3D]">
                          {t.name}
                        </div>

                        <div className="text-[11px] text-[#4A6080] mt-0.5">
                          {t.branch} <span className="text-[11px] text-[#C11E24]"> {t.year}</span>
                        </div>

                      </div>
                    </div>
                  </div>
                );
              })}
            </Slider>
          </div>
        </div>
      </div>
    </section>
  );
}
export default AcademicExcellence;
