import  { useState, useEffect } from 'react';
import { section, eyebrow, sectionTitle, sectionDesc } from '../../utils/new-home/tw';
const bestPackages = "/new-home/assets/Ramswaroop topper.webp";
import Icon from './Icon';
import Link from "next/link";

const minis = [
  { num: '35% Students', label: 'Multiple Job Offers' },
  { num: '4.52 LPA', label: 'Average Package' },
  { num: '100+ Alumni', label: '₹1 Cr+ CTC' },
];

const rows = [
  { num: '100%', title: 'Placement in Core Engineering', sub: 'Leading core companies recruit our students for career-ready roles across Civil, Mechanical, Electrical & Electronics Engineering.', gold: true },
  { num: '90%', title: 'Placement in Management', sub: 'Gain industry exposure through internships, live projects and corporate mentoring. Our career-focused training helps management graduates secure roles in leading companies across diverse sectors.', gold: true },
  { num: '50+', title: 'Core Engineering Companies', sub: 'Daikin, Torrent Power, Prism Johnson & more', gold: false },
  { num: '8119+', title: 'Alumni Network', sub: 'Placed across TCS, HCL, Wipro, Paytm & beyond', gold: false },
];

const Placements = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [expandedItems, setExpandedItems] = useState({});
  const [isMobile, setIsMobile] = useState(false);

  // Check screen size
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const toggleReadMore = (index:any) => {
    setExpandedItems(prev => ({
      ...prev,
      //@ts-ignore
      [index]: !prev[index]
    }));
  };

  // Truncate text to first line (approximately 50 characters)
  const getTruncatedText = (text:any) => {
    if (!isMobile) return text;
    // Split by words and take first 8-10 words for one line
    const words = text.split(' ');
    if (words.length <= 10) return text;
    return words.slice(0, 10).join(' ') + '...';
  };

  return (
    <section className="bg-[linear-gradient(175deg,#C11E24_0%,#A8181D_50%,#8F171C_100%)]">
      <div className={`${section} overflow-hidden`} id="placements">
        {/* Background depth layers */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_55%_50%_at_85%_75%,rgba(193,30,36,0.08)_0%,transparent_70%)]" aria-hidden />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_40%_45%_at_5%_55%,rgba(27,76,127,0.07)_0%,transparent_65%)]" aria-hidden />

        {/* Watermark */}
        <div className="absolute right-[4vw] top-1/2 -translate-y-1/2 -rotate-90 font-display text-[clamp(120px,18vw,180px)] text-navy-mid/[0.05] pointer-events-none z-0 max-[900px]:hidden select-none">
          PLACEMENTS
        </div>

        {/* Decorative rings */}
        <div className="absolute top-16 right-16 w-72 h-72 rounded-full border border-navy-mid/[0.08] pointer-events-none" aria-hidden />
        <div className="absolute top-20 right-20 w-52 h-52 rounded-full border border-[#C11E24]/[0.15] pointer-events-none" aria-hidden />

        {/* Section header */}
        <div className="mb-5 sm:mb-14 reveal relative z-[1]">
          <div className={`${eyebrow} !text-[#ffc107] before:!bg-[#ffc107]`}>Career Success</div>
          <h2 className={`${sectionTitle} text-white`}>
            800+ Job Offers.<span className="text-[#ffc107]"> Every Year.</span>
          </h2>
          <p className={`${sectionDesc} !mx-0 text-white/90 ${sectionDesc} ${isExpanded ? "line-clamp-none" : "line-clamp-2 sm:line-clamp-none"}`}>
            SRMCEM has built a strong reputation as an AKTU placement college by preparing students with technical expertise, industry certifications, internships and dedicated placement training. Our Corporate Resource Centre connects students with leading recruiters across IT, Core Engineering, Management and emerging technology sectors, helping graduates secure multiple job offers and rewarding career opportunities. For students looking for an affordable engineering college in Lucknow with excellent placement support, SRMCEM offers the perfect blend of academics and industry exposure.
          </p>
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="text-[#ffc107] text-sm mt-1 sm:hidden"
          >
            {isExpanded ? "Read Less" : "Read More"}
          </button>
        </div>

        {/* Main content grid */}
        <div className="relative z-[1] grid grid-cols-2 gap-16 items-start max-[900px]:grid-cols-1 max-[900px]:gap-12">

          {/* LEFT — Student image + quote */}
          <div className="reveal">
            <div className="group relative">
              {/* Glow halo */}
              <div
                className="absolute -inset-2 rounded-2xl blur-2xl opacity-50 bg-[linear-gradient(135deg,rgba(193,30,36,0.35),rgba(27,76,127,0.25))]"
                aria-hidden
              />

              <div className="relative overflow-hidden rounded-2xl border border-[rgba(15,47,87,0.10)] shadow-[0_32px_80px_rgba(15,47,87,0.25)]">
                {/* Red shimmer at top */}
                <div
                  className="absolute top-0 inset-x-0 h-[3px] z-10 bg-[linear-gradient(90deg,transparent_0%,#C11E24_40%,#DBC5C5_60%,transparent_100%)]"
                  aria-hidden
                />

                <img
                  src={bestPackages}
                  alt="SRMCEM campus topper Aman Verma placed at 47 LPA"
                  loading="lazy"
                  className="w-full h-[clamp(360px,42vw,560px)] object-cover object-top transition-transform duration-700 group-hover:scale-[1.04]"
                />
                <span
                  className="absolute inset-0 bg-[linear-gradient(180deg,rgba(7,22,43,0.02)_0%,transparent_35%,rgba(7,22,43,0.88)_100%)]"
                  aria-hidden
                />

                {/* Highest-package badge */}
                <div className="absolute top-5 left-2 sm:left-5 flex flex-col items-start rounded-[16px] bg-white/92 backdrop-blur-glass border border-white/80 shadow-[0_10px_36px_rgba(0,0,0,0.22)] px-2 sm:px-5 py-2 sm:py-3">
                  <div className="font-display text-[clamp(40px,5vw,58px)] leading-[0.85] text-[#C11E24]">
                    47<span className="text-[0.32em] ml-1.5 align-baseline">LPA</span>
                  </div>
                  <div className="mt-1 text-[8px] sm:text-[10px] uppercase text-[#C11E24] font-bold">
                    Highest Package Achieved
                  </div>
                </div>

                {/* Topper caption */}
                <div className="absolute left-0 right-0 bottom-0 p-6">
                  <div className="text-[11px] font-bold uppercase text-[#DBC5C5] mb-1">
                    Campus Topper · 2024
                  </div>
                  <div className="font-serif text-[22px] font-extrabold leading-tight text-white">
                    Aman Verma
                  </div>
                  <div className="mt-0.5 text-[13px] text-white">
                    B.Tech CSE · Placed at a global tech leader
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT — Mini stats + row stats + CTA */}
          <div>
            {/* Mini stat cards */}
            <div className="grid grid-cols-3 gap-3 mb-3">
              {minis.map((m, i) => (
                <div
                  key={i}
                  className="group relative overflow-hidden rounded-xl bg-white border border-[rgba(15,47,87,0.10)] shadow-card px-4 py-5 text-center hover:-translate-y-1 hover:shadow-hover hover:border-[#C11E24]/25 transition-all duration-300"
                >
                  <div
                    className="absolute top-0 inset-x-0 h-[2px] bg-[linear-gradient(90deg,transparent,rgba(193,30,36,0.7),transparent)] opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    aria-hidden
                  />
                  <div className="font-display font-semibold text-base sm:text-[22px] text-[#C11E24] leading-none mb-1.5">
                    {m.num}
                  </div>
                  <div className="text-[9px] uppercase text-navy-dark font-bold leading-[1.5]">
                    {m.label}
                  </div>
                </div>
              ))}
            </div>

            {/* Row stat cards */}
            <div className="flex flex-col gap-3 reveal">
              {rows.map((r, i) => {
                //@ts-ignore
                const isExpanded = expandedItems[i] || false;
                const displayText = isExpanded || !isMobile ? r.sub : getTruncatedText(r.sub);
                const showReadMore = isMobile && r.sub.split(' ').length > 10;

                return (
                  <div
                    key={i}
                    className="group relative flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-5 py-3 px-4 rounded-xl bg-white border border-[rgba(15,47,87,0.10)] shadow-card transition-all duration-300 hover:shadow-hover hover:border-navy-mid/20 hover:-translate-y-0.5 overflow-hidden"
                  >
                    {/* Left accent bar */}
                    <div
                      className={`absolute left-0 inset-y-0 w-[3px] rounded-r-full transition-opacity duration-300 ${r.gold ? 'bg-[linear-gradient(180deg,#DBC5C5,#C11E24)] opacity-80 group-hover:opacity-100' : 'bg-navy-mid/15 group-hover:bg-navy-mid/30'}`}
                      aria-hidden
                    />

                    <div className="flex items-center gap-5 w-full sm:w-auto">
                      <div className={`font-display text-[32px] leading-none flex-shrink-0 w-[84px] ${r.gold ? 'text-[#C11E24]' : 'text-navy-dark'}`}>
                        {r.num}
                      </div>
                      <div className="flex-1 min-w-0 sm:hidden">
                        <div className="font-bold text-[12px] text-navy-dark uppercase mb-0.5">
                          {r.title}
                        </div>
                      </div>
                    </div>

                    <div className="flex-1 min-w-0">
                      <div className="font-bold text-[12px] text-navy-dark uppercase mb-0.5 hidden sm:block">
                        {r.title}
                      </div>
                      <div className="text-[12px] text-brand-gray leading-[1.5]">
                        {displayText}
                        {showReadMore && (
                          <button
                            onClick={() => toggleReadMore(i)}
                            className="ml-1 text-[#C11E24] font-semibold hover:underline transition-all duration-200"
                          >
                            {isExpanded ? ' Read less' : ' Read more'}
                          </button>
                        )}
                      </div>
                    </div>

                    <svg
                      className="flex-shrink-0 text-navy-mid/30 group-hover:text-[#C11E24]/60 transition-colors duration-300 hidden sm:block"
                      width="17" height="17" viewBox="0 0 24 24" fill="none"
                      stroke="currentColor" strokeWidth="2"
                    >
                      <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                  </div>
                );
              })}
            </div>

            {/* CTA */}
            <Link href='/placements/training-placement'>
              <button className="flex w-full mt-4 items-center justify-center gap-2 px-[30px] py-[14px] text-sm font-semibold rounded-pill whitespace-nowrap transition-all duration-300 bg-white/10 backdrop-blur-sm text-white border border-white/40 hover:bg-white/20 hover:border-white hover:-translate-y-0.5 max-[560px]:flex-1">
                <Icon name="phone" className="w-4 h-4" />
                Explore Placement Records
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Placements;