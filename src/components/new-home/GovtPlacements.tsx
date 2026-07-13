import { useEffect, useState } from "react";

type Person = { name: string; role: string; avatarId: number; photo?: string };
type Cell = { title: string; badge: string; people: Person[] };

const upsc1 = "/new-home/assets/upsc/01.png";
const upsc2 = "/new-home/assets/upsc/02.png";
const upsc3 = "/new-home/assets/upsc/03.png";
const upsc4 = "/new-home/assets/upsc/Vaishnavi Mishra.png";
import { section, sectionDesc } from "../../utils/new-home/tw";
const cells: Cell[] = [
  {
    title: "Proud Civil Services Achievers",
    badge: "Civil Services (UPSC)",
    people: [
      {
        name: "Disha Srivastava",
        role: "I.A.S",
        avatarId: 47,
        photo: upsc1,
      },
    ],
  },
  {
    title: "Serving the Nation in Uniform",
    badge: "IPS & Police Services",
    people: [
      {
        name: "Sakshi Singh",
        role: "I.P.S",
        avatarId: 26,
        photo: upsc2,
      },
    ],
  },
  {
    title: "Driving Defence Innovation",
    badge: "Defence & Research",
    people: [
      {
        name: "Abhilash Ojha",
        role: "Defence & Research",
        avatarId: 52,
        photo: upsc3,
      },
    ],
  },
  {
    title: "Powering India's Public Sector",
    badge: "P.S.U",
    people: [
      {
        name: "Vaishnavi Mishra",
        role: "PSU & UPSC-ESE",
        avatarId: 44,
        photo: upsc4,
      },
    ],
  },
  // {
  //   title: "Distinguished IAS Officers",
  //   badge: "I.A.S",
  //   people: [
  //     {
  //       name: "Disha Srivastava",
  //       role: "IAS",
  //       avatarId: 47,
  //       photo: "/assets/govt-sector/disha-srivastava.jpg",
  //     },
  //   ],
  // },
  // {
  //   title: "Contributing to India's Space Mission",
  //   badge: "ISRO",
  //   people: [
  //     {
  //       name: "Abhilash Ojha",
  //       role: "ISRO",
  //       avatarId: 52,
  //       photo: "/assets/govt-sector/abhilash-ojha.jpg",
  //     },
  //   ],
  // },
  // {
  //   title: "Leading India's Tax Administration",
  //   badge: "IRS",
  //   people: [],
  // },
  // {
  //   title: "Guarding the Nation with Pride",
  //   badge: "Defence Services",
  //   people: [],
  // },
  // {
  //   title: "Nation Builders Through Engineering",
  //   badge: "Engineering Services (ESE)",
  //   people: [],
  // },
  // {
  //   title: "Engineering Excellence Worldwide",
  //   badge: "Global Engineers",
  //   people: [],
  // },
  // {
  //   title: "Building Successful Ventures",
  //   badge: "Entrepreneurs",
  //   people: [],
  // },
  // {
  //   title: "Leading Global Industries",
  //   badge: "Corporate Leaders",
  //   people: [],
  // },
  // {
  //   title: "Advancing Research & Innovation",
  //   badge: "Researchers",
  //   people: [],
  // },
];

const VISIBLE = 4;
const ITEMS_PER_PAGE_MOBILE = 1;

const src = (p: Person) =>
  p.photo ?? `https://i.pravatar.cc/220?img=${p.avatarId}`;

const fallback = (avatarId: number) =>
  `https://i.pravatar.cc/220?img=${avatarId}`;


//@ts-ignore

const NavBtn = ({
  dir,
  disabled,
  onClick,
}: {
  dir: "prev" | "next";
  disabled: boolean;
  onClick: () => void;
}) => (
  <button
    onClick={onClick}
    disabled={disabled}
    aria-label={dir === "prev" ? "Previous" : "Next"}
    className={`absolute top-1/2 -translate-y-1/2 z-20 w-11 h-11 flex items-center justify-center rounded-full
      bg-white border border-[rgba(27,58,111,0.15)] shadow-[0_2px_12px_rgba(0,0,0,0.10)] text-[#1B3A6F]
      transition-all duration-200 hover:bg-[#1B3A6F] hover:border-[#1B3A6F] hover:text-white hover:shadow-[0_4px_20px_rgba(27,58,111,0.25)]
      disabled:opacity-30 disabled:cursor-not-allowed
      ${dir === "prev" ? "left-[-22px]" : "right-[-22px]"}`}
  >
    <svg
      className="w-5 h-5"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      {dir === "prev" ? (
        <path d="M15 18l-6-6 6-6" />
      ) : (
        <path d="M9 18l6-6-6-6" />
      )}
    </svg>
  </button>
);

const GovtPlacements = () => {
  const [start, setStart] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const maxMobileStart = Math.max(0, cells.length - ITEMS_PER_PAGE_MOBILE);

  useEffect(() => {
    const mql = window.matchMedia("(max-width: 559px)");
    const applyIsMobile = () => {
      setIsMobile(mql.matches);
      setStart(0);
    };
    applyIsMobile();
    mql.addEventListener("change", applyIsMobile);
    return () => mql.removeEventListener("change", applyIsMobile);
  }, []);

  useEffect(() => {
    if (!isMobile) return;

    const timer = window.setInterval(() => {
      setStart((current) =>
        current >= maxMobileStart
          ? 0
          : Math.min(maxMobileStart, current + ITEMS_PER_PAGE_MOBILE),
      );
    }, 3500);

    return () => window.clearInterval(timer);
  }, [isMobile, maxMobileStart]);

  const goToPrevMobile = () => {
    setStart((current) =>
      current <= 0 ? maxMobileStart : Math.max(0, current - ITEMS_PER_PAGE_MOBILE),
    );
  };

  const goToNextMobile = () => {
    setStart((current) =>
      current >= maxMobileStart
        ? 0
        : Math.min(maxMobileStart, current + ITEMS_PER_PAGE_MOBILE),
    );
  };

  const visible = isMobile
    ? cells.slice(start, start + ITEMS_PER_PAGE_MOBILE)
    : cells.slice(start, start + VISIBLE);

  return (
    <section className=" bg-[linear-gradient(160deg,#F0F0F1_0%,#ffffff_50%,#E6E6E7_100%)]">
      <div className={`relative ${section}  overflow-hidden`}>
        {/* Subtle background blobs */}
        <div
          aria-hidden
          className="pointer-events-none absolute -top-24 -left-24 w-[500px] h-[500px] rounded-full bg-[radial-gradient(ellipse,rgba(27,58,111,0.05)_0%,transparent_70%)]"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute -bottom-16 right-0 w-[400px] h-[400px] rounded-full bg-[radial-gradient(ellipse,rgba(193,30,36,0.08)_0%,transparent_70%)]"
        />

        {/* ── Heading ── */}
        <div className="mb-14 reveal relative z-10">
          <div className="inline-flex items-center gap-2.5 text-[11px] font-bold  uppercase mb-5 text-[#1B3A6F] before:content-[''] before:block before:w-7 before:h-0.5 before:bg-[#C11E24]">
            Government Sector
          </div>
          <h2 className="font-serif font-black text-[clamp(26px,2.2vw,36px)] leading-[1.1]  text-[#0A1F3D]">
            Proudly Serving the <span className="text-[#C11E24]">Nation</span>
          </h2>
          <p className={`${sectionDesc}`}>
            From IAS to ISRO, SRMCEM alumni are serving across India's government and public sector.
          </p>
        </div>

        {/* ── Cards ── */}
        <div className="reveal relative z-10">
          {/* <NavBtn
          dir="prev"
          disabled={start === 0}
          onClick={() => setStart((s) => Math.max(0, s - 1))}
        />
        <NavBtn
          dir="next"
          disabled={start >= cells.length - VISIBLE}
          onClick={() =>
            setStart((s) => Math.min(cells.length - VISIBLE, s + 1))
          }
        /> */}

          <div className="grid grid-cols-4 gap-5 max-[900px]:grid-cols-2 max-[560px]:grid-cols-1 max-[560px]:gap-3">
            {visible.map((c, i) => {
              //@ts-ignore
              const [featured, ...others] = c.people;
              return (
                <article
                  key={start + i}
                  className="group flex flex-col rounded-2xl overflow-hidden bg-white
                  border border-[rgba(27,58,111,0.09)]
                  shadow-[0_4px_24px_rgba(27,58,111,0.07)]
                  transition-all duration-300
                  hover:-translate-y-2
                  hover:shadow-[0_16px_48px_rgba(27,58,111,0.14)]
                  hover:border-[rgba(27,58,111,0.18)]"
                >
                  {/* Red top accent */}
                  <div className="h-[3px] bg-gradient-to-r from-[#C11E24] via-[#8F171C] to-[#C11E24]/30" />

                  {/* Category header */}
                  <div className="px-5 pt-4 pb-3.5 border-b border-[rgba(27,58,111,0.07)] bg-[#fafcff]">
                    <h3 className="text-[13px] font-bold text-[#0A1F3D] leading-snug">
                      {c.title}
                    </h3>
                    {/* <p className="text-[9px] font-bold  uppercase text-[#C11E24] mt-0.5">
                    {c.badge}
                  </p> */}
                  </div>

                  {/* ── Featured portrait ── */}
                  <div className="flex flex-col items-center pt-7 pb-5 px-5">
                    <div className="w-full relative">
                      {/* Soft accent glow behind avatar */}

                      <div className="relative w-full h-[250px] rounded-t-full overflow-hidden">
                        <div className={`absolute w-full h-full ${i % 2 == 0 ? 'bg-[#C11E24]' : 'bg-[#8F171C]'} rounded-t-full`}></div>
                        <img
                          src={src(featured)}
                          alt={featured.name}
                          loading="lazy"
                          className="w-full mx-auto max-w-[90%] h-[370px] relative pt-6 z-50  object-cover object-top transition-transform duration-500 group-hover:scale-105"
                          onError={(e) => {
                            (e.currentTarget as HTMLImageElement).src = fallback(
                              featured.avatarId,
                            );
                          }}
                        />
                      </div>
                    </div>

                    <p className="text-[#0A1F3D] font-bold text-[14px] mt-4 text-center leading-tight">
                      {featured.name}
                    </p>
                    <p className="text-[#8F171C] text-[11px] font-semibold text-center mt-1 leading-tight">
                      {featured.role}
                    </p>
                  </div>


                </article>
              );
            })}
          </div>
          {isMobile && (
            <div className="mt-5 flex justify-center gap-3 max-[560px]:flex">
              <button
                type="button"
                onClick={goToPrevMobile}
                aria-label="Previous government achievers"
                className="grid h-10 w-10 place-items-center rounded-full border border-[rgba(27,58,111,0.18)] bg-white text-[#C11E24] shadow-card transition-colors hover:bg-[#C11E24] hover:text-white"
              >
                <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M15 18l-6-6 6-6" />
                </svg>
              </button>
              <button
                type="button"
                onClick={goToNextMobile}
                aria-label="Next government achievers"
                className="grid h-10 w-10 place-items-center rounded-full border border-[rgba(27,58,111,0.18)] bg-white text-[#C11E24] shadow-card transition-colors hover:bg-[#C11E24] hover:text-white"
              >
                <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M9 18l6-6-6-6" />
                </svg>
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default GovtPlacements;
