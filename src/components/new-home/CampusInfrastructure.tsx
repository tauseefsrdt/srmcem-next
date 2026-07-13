import { useState, useEffect } from "react";
import {
  section,
  eyebrow,
  sectionTitle,
  glassCard,
  btn,
  btnOutline,
  sectionDesc,
} from "../../utils/new-home/tw";

const faclties = "/new-home/assets/facelties.webp";
import Link from "next/link";

const facilities = [
  {
    icon: "🖥️",
    title: "Smart Classrooms",
    desc: "Interactive panels and digital boards in every classroom",
  },
  {
    icon: "🤖",
    title: "Robotics, AI & IoT Labs",
    desc: "State-of-the-art innovation and research facilities",
  },
  {
    icon: "📚",
    title: "Central Digital Library",
    desc: "50,000+ volumes with full digital access and e-resources",
  },
  {
    icon: "🔬",
    title: "Department-Specific Labs",
    desc: "Specialized labs for each engineering and science stream",
  },
  {
    icon: "🏗️",
    title: "Workshop Facilities",
    desc: "Industry-standard mechanical and fabrication workshops",
  },
  {
    icon: "🏠",
    title: "On-Campus Hostel",
    desc: "Separate hostels for boys and girls with 24/7 security",
  },
  {
    icon: "📶",
    title: "Fully Wi-Fi Campus",
    desc: "High-speed internet across the entire 100-acre campus",
  },
  {
    icon: "🏥",
    title: "Medical & Ambulance",
    desc: "On-campus health center with ambulance facility 24/7",
  },
  {
    icon: "🎮",
    title: "Indoor Games",
    desc: "Table tennis, chess, carrom and more indoor sports",
  },
  {
    icon: "🏟️",
    title: "Sports Grounds",
    desc: "Cricket, football, basketball, volleyball and athletics",
  },
  {
    icon: "🎭",
    title: "Auditorium & Seminar Halls",
    desc: "Large auditorium and modern seminar halls for events",
  },
  {
    icon: "💼",
    title: "Dedicated Placement Cell",
    desc: "Full-time T&P cell with corporate connections and prep",
  },
  {
    icon: "🍽️",
    title: "Hygienic Cafeteria",
    desc: "Multi-cuisine mess and canteen with nutritious meals",
  },
  {
    icon: "🎯",
    title: "Clubs & Societies",
    desc: "17+ student clubs from technical to cultural activities",
  },
  {
    icon: "🏧",
    title: "ATM & Stationery Shop",
    desc: "On-campus ATM, stationery, and convenience store",
  },
];

const CampusInfrastructure = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);

  // Check screen size
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // Auto-slide for mobile
  useEffect(() => {
    if (!isMobile) return;

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % facilities.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [isMobile]);

  // Navigate to next/prev slide
  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % facilities.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + facilities.length) % facilities.length);
  };

  return (
    <section
      className="relative overflow-hidden border-y border-white/10"
      style={{
        backgroundImage: `
          linear-gradient(rgba(143,23,28,0.85), rgba(143,23,28,0.85)),
          url(${faclties})
        `,
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <section id="facilities" className={`${section}`}>
        {/* Decorative Blobs */}
        <div
          aria-hidden
          className="pointer-events-none absolute -top-24 right-[-4%] h-[400px] w-[400px] rounded-full bg-[#C11E24]/15 blur-[110px]"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute -bottom-20 left-[-6%] h-[440px] w-[440px] rounded-full bg-white/5 blur-[120px]"
        />

        <div className="relative z-10">
          {/* Header */}
          <div className="mb-4 sm:mb-14 reveal">
            <div className={`${eyebrow} !text-[#fff] before:!bg-[#fff]`}>
              Campus Infrastructure
            </div>

            <h2 className={`${sectionTitle} text-white`}>
              World-Class <span className="text-[#ffc107]">Facilities</span>
            </h2>

            <p className={`${sectionDesc} ${isExpanded ? "line-clamp-none" : "line-clamp-2 sm:line-clamp-none"} text-white`}>
              SRMCEM offers a modern learning environment designed to support academic excellence and holistic development. From AI-enabled laboratories, Robotics & IoT Labs, advanced engineering workshops and smart classrooms to digital libraries, Wi-Fi campus, hostels, sports complexes and innovation centres, every facility enhances practical learning. Students seeking an affordable engineering college in Lucknow experience world-class infrastructure without compromising on quality, making SRMCEM one of the best AKTU colleges for B.Tech.
            </p>
            <button
              onClick={() => setIsExpanded(!isExpanded)}
              className="text-[#ffc107] text-sm mt-1 sm:hidden"
            >
              {isExpanded ? "Read Less" : "Read More"}
            </button>
          </div>

          {/* Facilities Grid/Slider */}
          <div className="relative">
            {/* Mobile Slider Controls */}


            {/* Cards Container */}
            <div className="overflow-hidden">
              <div
                className="flex transition-transform duration-500 ease-in-out sm:hidden"
                style={{
                  transform: isMobile ? `translateX(-${currentSlide * 100}%)` : "none",
                }}
              >
                {facilities.map((f, index) => (
                  <div
                    key={f.title}
                    className={`
                      ${glassCard} group flex flex-col sm:flex-row items-start gap-4 rounded-2xl border border-slate-200 bg-white px-3 py-2 sm:p-5 shadow-sm transition-all duration-300 hover:border-navy hover:bg-navy hover:shadow-md
                      ${isMobile ? "min-w-full" : "w-full"}
                    `}
                    style={{
                      animationDelay: `${index * 35}ms`,
                      ...(!isMobile && {
                        gridColumn: index < facilities.length ? "span 1" : "span 1"
                      })
                    }}
                  >
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-[#C11E24]/25 bg-[#C11E24]/10 text-2xl transition-all duration-300 group-hover:border-white/20 group-hover:bg-white/10">
                      {f.icon}
                    </div>

                    <div>
                      <h3 className="mb-2 text-[15px] font-semibold text-slate-800 transition-colors duration-300 group-hover:text-[#000]">
                        {f.title}
                      </h3>

                      <p className="text-[13px] leading-[1.7] text-slate-500 transition-colors duration-300 group-hover:text-[#000]/70">
                        {f.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Desktop Grid View */}
            {!isMobile && (
              <div className="grid gap-2 sm:gap-5 grid-cols-2 lg:grid-cols-3">
                {facilities.map((f, index) => (
                  <div
                    key={f.title}
                    className={`${glassCard} group flex flex-col sm:flex-row items-start gap-4 rounded-2xl border border-slate-200 bg-white px-3 py-2 sm:p-5 shadow-sm transition-all duration-300 hover:border-navy hover:bg-navy hover:shadow-md`}
                    style={{ animationDelay: `${index * 35}ms` }}
                  >
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-[#C11E24]/25 bg-[#C11E24]/10 text-2xl transition-all duration-300 group-hover:border-white/20 group-hover:bg-white/10">
                      {f.icon}
                    </div>

                    <div>
                      <h3 className="mb-2 text-[15px] font-semibold text-slate-800 transition-colors duration-300 group-hover:text-[#000]">
                        {f.title}
                      </h3>

                      <p className="text-[13px] leading-[1.7] text-slate-500 transition-colors duration-300 group-hover:text-[#000]/70">
                        {f.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
          {isMobile && (
            <>

              <div className="mt-5 flex justify-center gap-3 max-[560px]:flex">
                <button
                  type="button"
                  onClick={prevSlide}
                  aria-label="Previous government achievers"
                  className="grid h-10 w-10 place-items-center rounded-full border border-[rgba(27,58,111,0.18)] bg-white text-[#C11E24] shadow-card transition-colors hover:bg-[#C11E24] hover:text-white"
                >
                  <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M15 18l-6-6 6-6" />
                  </svg>
                </button>
                <button
                  type="button"
                  onClick={nextSlide}
                  aria-label="Next government achievers"
                  className="grid h-10 w-10 place-items-center rounded-full border border-[rgba(27,58,111,0.18)] bg-white text-[#C11E24] shadow-card transition-colors hover:bg-[#C11E24] hover:text-white"
                >
                  <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M9 18l6-6-6-6" />
                  </svg>
                </button>
              </div>


            </>
          )}

          {/* CTA */}
          <div className="mt-8 sm:mt-14 flex  items-center justify-center gap-2 sm:gap-4 flex-row">
            <a
              href="/enquiry-form"
              className={`${btn} border border-[#C11E24] bg-[linear-gradient(135deg,#C11E24,#8F171C)] text-white shadow-[0_10px_28px_rgba(193,30,36,0.4)] hover:-translate-y-0.5 hover:shadow-[0_14px_38px_rgba(193,30,36,0.6)]`}
            >
              Apply for 2026–27 →
            </a>

            <Link href="/campus-life/clubs"
              className={`${btnOutline} border-white/30 text-white hover:border-[#C11E24] hover:bg-white/10`}
            >
              Virtual Campus Tour
            </Link>
          </div>
        </div>
      </section>
    </section>
  );
};

export default CampusInfrastructure;