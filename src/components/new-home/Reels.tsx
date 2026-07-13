import { useEffect, useState } from "react";
const reels1 = "/new-home/assets/reels/Abhiyukti.mp4";
const reels2 = "/new-home/assets/reels/Spardha.mp4";
const reels3 = "/new-home/assets/reels/industrial visit.mp4";
const reels4 = "/new-home/assets/reels/gantavya.mp4";
const reels5 = "/new-home/assets/reels/Anvarat.mp4";
const reels6 = "/new-home/assets/reels/Dadiya Nights.mp4";
const reels7 = "/new-home/assets/reels/Diwali Mela.mp4";
const reels8 = "/new-home/assets/reels/Xero Night Abhivyakti.mp4";

import {
  section,
  sectionTitle,
  eyebrow,
} from "../../utils/new-home/tw";

import { IconName } from "./Icon";
import LazyVideo from "./LazyVideo";

const chapters: {
  icon: IconName;
  title: string;
  subtitle: string;
  video: string;
}[] = [
    {
      icon: "cpu",
      title: "Abhiyukti",
      subtitle: "The Annual Cultural Fest",
      video: reels1,
    },
    {
      icon: "radio",
      title: "Spardha",
      subtitle: "The Annual Sports Fest",
      video: reels2,
    },
    {
      icon: "zap",
      title: "Industrial Visit",
      subtitle: "Exploring Real-World Applications",
      video: reels3,
    },
    {
      icon: "battery",
      title: "Gantavya",
      subtitle: "Annual Cultural & Technical Fest",
      video: reels4,
    },
    {
      icon: "battery",
      title: "Anvarat",
      subtitle: "Annual Cultural Festival",
      video: reels5,
    },
    {
      icon: "battery",
      title: "Dadiya Nights",
      subtitle: "Grand Navratri Celebration",
      video: reels6,
    },
    {
      icon: "battery",
      title: "Diwali Mela",
      subtitle: "Festival of Lights Celebration",
      video: reels7,
    },
    {
      icon: "battery",
      title: "Xero Night Abhivyakti",
      subtitle: "Annual Cultural Night & Talent Showcase",
      video: reels8,
    },
  ];

const ITEMS_PER_PAGE_MOBILE = 1;
const ITEMS_PER_PAGE_DESKTOP = 4;

const Reels = () => {
  const [startIndex, setStartIndex] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(ITEMS_PER_PAGE_DESKTOP);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const mql = window.matchMedia("(max-width: 767px)");
    const applyItemsPerPage = () => {
      setItemsPerPage(mql.matches ? ITEMS_PER_PAGE_MOBILE : ITEMS_PER_PAGE_DESKTOP);
      setStartIndex(0);
    };
    applyItemsPerPage();
    mql.addEventListener("change", applyItemsPerPage);
    return () => mql.removeEventListener("change", applyItemsPerPage);
  }, []);

  useEffect(() => {
    if (isHovered) return;

    const timer = window.setInterval(() => {
      setStartIndex((current) => (current + 1) % chapters.length);
    }, 3500);

    return () => window.clearInterval(timer);
  }, [startIndex, isHovered]);

  const prev = () => {
    setStartIndex((current) => (current - 1 + chapters.length) % chapters.length);
  };

  const next = () => {
    setStartIndex((current) => (current + 1) % chapters.length);
  };

  const visible = Array.from(
    { length: itemsPerPage },
    (_, i) => chapters[(startIndex + i) % chapters.length]
  );

  return (
    <section className="bg-[#DBC5C5]">
      <div className={`${section} `}>
        <div className="mb-14 reveal">
          <div className={`${eyebrow} before:!bg-[#C11E24]`}>Campus Life</div>
          <h2 className={sectionTitle}>
            Vibrant Events.
            <span className="text-[#C11E24]"> Unforgettable Memories. </span>
          </h2>
        </div>

        <div
          className="relative reveal"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {/* Arrow Buttons */}
          <button
            onClick={prev}
            className="absolute left-1 md:-left-5 top-1/2 z-10 -translate-y-1/2 flex h-10 w-10 items-center justify-center rounded-full bg-white shadow-md border border-slate-200 transition hover:bg-[#C11E24] hover:text-white"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          <button
            onClick={next}
            className="absolute right-1 md:-right-5 top-1/2 z-10 -translate-y-1/2 flex h-10 w-10 items-center justify-center rounded-full bg-white shadow-md border border-slate-200 transition hover:bg-[#C11E24] hover:text-white"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* Cards */}
          <div className="grid gap-3 md:gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-4">
            {visible.map((chapter) => (
              <article
                key={chapter.title}
                className="group overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="relative aspect-[9/16] overflow-hidden">
                  <LazyVideo
                    src={chapter.video}
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>

                <div className="flex flex-col gap-2 p-4">
                  {/* <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-slate-100 text-navy-mid">
                  <Icon name={chapter.icon} className="h-5 w-5" />
                </div> */}
                  <h3 className="text-sm font-semibold text-navy-dark">{chapter.title}</h3>
                  <h4 className="text-[9px] text-[#C11E24] font-semibold uppercase">{chapter.subtitle}</h4>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Reels;