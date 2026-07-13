import { useEffect, useState } from 'react';
import { section, eyebrow, sectionTitle, sectionDesc, glassCard, pillGhost } from '../../utils/new-home/tw';
import LazyVideo from './LazyVideo';

const roboticsChampionsVid = "/new-home/assets/champions/robotic.mp4";
const catcVid = "/new-home/assets/champions/Combined Annual Training Camp (CATC-218).mp4";
const placementStory = "/new-home/assets/champions/Placement Story.mp4";
const womenCoder = "/new-home/assets/reels/best women coder award.mp4";

const cards: { video: string; title: string; desc: string; tag: string }[] = [
  {
    video: roboticsChampionsVid,
    title: 'Global Robotics Champions',
    desc: 'Grobot team competes and wins at international robotics championships — placing Lucknow on the global map of technical excellence.',
    tag: 'INTERNATIONAL WIN',
  },
  {
    video: catcVid,
    title: 'Combined Annual Training Camp (CATC-218)',
    desc: 'Discipline, leadership, and teamwork came alive as NCC cadets showcased their dedication through rigorous training, drills, and unforgettable camp experiences. Together, they embodied the spirit of service, resilience, and patriotism.',
    tag: 'IEEE · U.P. SECTION',
  },
  {
    video: womenCoder,
    title: 'Best Women Coder Award',
    desc: 'Celebrating excellence in technology as our talented student earns the Best Women Coder Award.A proud milestone that reflects innovation, dedication, and the spirit of women in tech.',
    tag: 'INDUSTRY-GRADE LABS',
  },
  {
    video: placementStory,
    title: 'SRMCEM Placement Success Stories',
    desc: 'Discover how SRMCEM students transformed their careers through quality education, industry exposure, and successful placements at leading national and global organizations.',
    tag: 'SRMCEM PLACEMENTS',
  },
];

type Card = typeof cards[number];

const ITEMS_PER_PAGE_MOBILE = 1;

const WorldStage = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [active, setActive] = useState<Card | null>(null);
  const [isMobile, setIsMobile] = useState(false);
  const [startIndex, setStartIndex] = useState(0);
  const maxMobileStart = Math.max(0, cards.length - ITEMS_PER_PAGE_MOBILE);

  useEffect(() => {
    const mql = window.matchMedia("(max-width: 639px)");
    const applyIsMobile = () => {
      setIsMobile(mql.matches);
      setStartIndex(0);
    };
    applyIsMobile();
    mql.addEventListener("change", applyIsMobile);
    return () => mql.removeEventListener("change", applyIsMobile);
  }, []);

  useEffect(() => {
    if (!isMobile) return;

    const timer = window.setInterval(() => {
      setStartIndex((current) =>
        current >= maxMobileStart
          ? 0
          : Math.min(maxMobileStart, current + ITEMS_PER_PAGE_MOBILE),
      );
    }, 3500);

    return () => window.clearInterval(timer);
  }, [isMobile, maxMobileStart]);

  const goToPrevMobile = () => {
    setStartIndex((current) =>
      current <= 0 ? maxMobileStart : Math.max(0, current - ITEMS_PER_PAGE_MOBILE),
    );
  };

  const goToNextMobile = () => {
    setStartIndex((current) =>
      current >= maxMobileStart
        ? 0
        : Math.min(maxMobileStart, current + ITEMS_PER_PAGE_MOBILE),
    );
  };

  const visibleCards = isMobile
    ? cards.slice(startIndex, startIndex + ITEMS_PER_PAGE_MOBILE)
    : cards;

  return (
    <section className="bg-[#E6E6E7]">
      <div className={`${section} `} id="achievements">
        {/* Heading */}
        <div className="mb-12 reveal">
          <div className={`${eyebrow} before:!bg-[#C11E24]`}>Global Recognition</div>
          <h2 className={sectionTitle}>
            Champions on the <span className="text-[#C11E24]">World Stage</span>
          </h2>
          <p className={`${sectionDesc} text-justify ${sectionDesc} ${isExpanded ? "line-clamp-none" : "line-clamp-2 sm:line-clamp-none"}`}>
            At SRMCEM, students don't just excel in academics they compete and win on national and global platforms. As a Top AKTU engineering college in Lucknow, we encourage innovation through robotics competitions, international conferences, research projects and technical events. Students pursuing AKTU B.Tech admission benefit from an ecosystem that nurtures innovation beyond the AKTU syllabus & semester, helping them achieve recognition in global competitions, higher education and prestigious careers across industry and public service.
          </p>
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="text-[#C11E24] text-sm mt-1 sm:hidden"
          >
            {isExpanded ? "Read Less" : "Read More"}
          </button>
        </div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2 sm:gap-5 reveal">
          {visibleCards.map((c, i) => (
            <article key={isMobile ? startIndex + i : i} className={`${glassCard} flex flex-col`}>
              {/* Video with tag overlay */}
              <div className="relative overflow-hidden rounded-t-lg bg-navy-light">
                <LazyVideo
                  src={c.video}
                  autoPlay
                  muted
                  loop
                  playsInline
                  className="w-full h-full object-cover"
                />
                {/* Tag overlaid at video bottom */}
                {/* <div className="absolute bottom-0 left-0 right-0 px-3 py-2 bg-gradient-to-t from-black/70 to-transparent">
                <span className={`${pillGhost} text-[10px]  bg-white/20 border-white/40 text-white backdrop-blur-sm`}>
                  {c.tag}
                </span>
              </div> */}
              </div>

              {/* Body */}
              <div className="flex flex-col flex-1 py-4 px-3 sm:p-6">
                <h3 className="font-serif font-bold text-[17px] leading-[1.35] text-ink mb-2.5">
                  {c.title}
                </h3>
                {/* One-line truncated description */}
                <p className="text-[13px] leading-[1.7] text-brand-gray flex-1 mb-2 line-clamp-1">
                  {c.desc}
                </p>
                <button
                  onClick={() => setActive(c)}
                  className="self-start text-[12px] font-semibold text-[#C11E24] hover:underline focus:outline-none"
                >
                  Read more
                </button>
              </div>
            </article>
          ))}
        </div>
        {isMobile && (
          <div className="mt-5 flex justify-center gap-3 sm:hidden">
            <button
              type="button"
              onClick={goToPrevMobile}
              aria-label="Previous achievements"
              className="grid h-10 w-10 place-items-center rounded-full border border-[rgba(27,58,111,0.18)] bg-white text-[#C11E24] shadow-card transition-colors hover:bg-[#C11E24] hover:text-white"
            >
              <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M15 18l-6-6 6-6" />
              </svg>
            </button>
            <button
              type="button"
              onClick={goToNextMobile}
              aria-label="Next achievements"
              className="grid h-10 w-10 place-items-center rounded-full border border-[rgba(27,58,111,0.18)] bg-white text-[#C11E24] shadow-card transition-colors hover:bg-[#C11E24] hover:text-white"
            >
              <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M9 18l6-6-6-6" />
              </svg>
            </button>
          </div>
        )}
        {/* Modal */}
        {active && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm p-4"
            onClick={() => setActive(null)}
          >
            <div
              className="bg-white rounded-2xl shadow-2xl max-w-2xl w-full overflow-hidden"
              onClick={e => e.stopPropagation()}
            >
              {/* Modal video */}
              <div className="relative bg-black">
                <video
                  src={active.video}
                  autoPlay
                  muted
                  loop
                  playsInline
                  controls
                  className="w-full max-h-[50vh] object-contain"
                />
                {/* Tag on modal video */}
                <div className="absolute bottom-0 left-0 right-0 px-4 py-3 bg-gradient-to-t from-black/70 to-transparent">
                  <span className={`${pillGhost} text-[10px] bg-white/20 border-white/40 text-white backdrop-blur-sm`}>
                    {active.tag}
                  </span>
                </div>
              </div>
              {/* Modal body */}
              <div className="p-6">
                <h3 className="font-serif font-bold text-[20px] leading-[1.35] text-ink mb-3">
                  {active.title}
                </h3>
                <p className="text-[14px] leading-[1.75] text-brand-gray">
                  {active.desc}
                </p>
                <button
                  onClick={() => setActive(null)}
                  className="mt-5 px-5 py-2 rounded-full bg-[#C11E24] text-white text-[13px] font-semibold hover:bg-[#8F171C] transition-colors"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default WorldStage;
