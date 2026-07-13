import { useState } from "react";
import {
  section,
 
  sectionTitle,
  sectionDesc,
} from "../../utils/new-home/tw";
import Icon, { IconName } from "./Icon";

const chapters: { icon: IconName; name: string; type: string }[] = [
  { icon: "cpu", name: "Robotics & Automation", type: "IEEE RAS Branch" },
  { icon: "radio", name: "Signal Processing", type: "SRMCEM Student Chapter" },
  { icon: "zap", name: "IEEE Student Branch", type: "Main SRMCEM Branch" },
  { icon: "battery", name: "Power & Energy Society", type: "IEEE PES Chapter" },
  { icon: "users", name: "Women in Engineering", type: "WIE Affinity Group" },
];

const IEEE = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  return (
    <section className="bg-[linear-gradient(180deg,#FFFFFF_0%,#E6E6E7_100%)]">
      <div className={`${section} `}>
        <div className="mb-14 reveal">
          {/* <div className={`${eyebrow} text-navy-mid`}>Memberships &amp; Associations</div> */}

          <h2 className={`${sectionTitle} text-ink `}>
            IEEE Student Branch &amp; <span className="text-[#C11E24]">Global Chapters</span>
          </h2>

          <p className={`${sectionDesc} ${isExpanded ? "line-clamp-none" : "line-clamp-2 sm:line-clamp-none"}`}>
            Innovation thrives through collaboration at SRMCEM. Our active IEEE Student Branch provides students with opportunities to participate in international conferences, technical workshops, coding competitions and research activities. As an engineering college under AKTU, we complement the AKTU syllabus & semester with global exposure that strengthens technical knowledge, leadership and professional networking for aspiring engineers.
          </p>
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="text-[#C11E24] text-sm mt-1 sm:hidden"
          >
            {isExpanded ? "Read Less" : "Read More"}
          </button>
        </div>

        {/* Chapter cards */}
        <div className="grid gap-5 grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 reveal">
          {chapters.map((chapter, index) => (
            <article
              key={index}
              className="group flex flex-col items-start gap-4 p-6 rounded-xl bg-white/100 backdrop-blur-glass border border-[rgba(15,47,87,0.10)] shadow-card transition-all duration-300 hover:-translate-y-1.5 hover:bg-white hover:border-navy-mid/30 hover:shadow-hover"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-navy-mid/[0.10] border border-navy-mid/20 text-navy-mid transition-all duration-300 group-hover:bg-[#C11E24]/15 group-hover:border-[#C11E24]/40 group-hover:text-[#C11E24]">
                <Icon name={chapter.icon} className="h-6 w-6" />
              </div>
              <div>
                <h3 className="font-bold text-[14px] leading-snug text-navy-dark mb-1">
                  {chapter.name}
                </h3>
                <p className="text-[11px] font-semibold uppercase text-[#C11E24]/80">
                  {chapter.type}
                </p>
              </div>
            </article>
          ))}
        </div>

        {/* IEEE Conference highlight */}
        <div className="mt-8 reveal flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left gap-4 sm:gap-5 rounded-lg bg-[linear-gradient(135deg,#C11E24,#8F171C)] border-l-4 border-[#DBC5C5] p-4 sm:px-8 sm:py-6">
          <div className="flex-shrink-0 w-12 h-12 grid place-items-center rounded-xl bg-white text-[#C11E24]">
            <Icon name="globe" className="w-6 h-6" />
          </div>
          <div>
            <div className="font-serif font-bold text-[18px] text-white mb-1">
              IEEE International Conference
            </div>
            <div className="text-[13px] leading-[1.65] text-justify sm:text-center text-white/70">
              SRMCEM proudly hosts the IEEE International Conference under the U.P. Section — showcasing our commitment to global academic and research excellence.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IEEE;
