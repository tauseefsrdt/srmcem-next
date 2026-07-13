import React, { useEffect, useRef, useState } from "react";
import Icon from "./Icon";
const bannerVideo = "/new-home/assets/banner-video1.mp4";
import { approvals } from "./Accreditation";
import { useSelector } from "react-redux";
import { RootState, store } from "../../store";
import { getAllCareer } from "../../store/enquiry-form/get-all-career-slice";
import { getAllState } from "../../store/enquiry-form/get-allState-slice";
import { getAllCityByStateId } from "../../store/enquiry-form/get-allCity-byStateId-slice";
import { getAllProgramByCareerId } from "../../store/enquiry-form/get-allprogram-byCareerId-slice";
import {
  resetResponseofEnquiry,
  submissionForEnquiry,
} from "../../store/enquiry-form/Enquiry-submission-slice";

// const accreditations = [
//   "NBA Accredited",
//   "AICTE Approved",
//   "AKTU Affiliated",
//   "LU Recognised",
// ];

const heroStats = [
  { label: "Years of Excellence", suffix: "+", idx: 0 },
  { label: "Annual Job Offers", suffix: "+", idx: 1 },
  { label: "Companies on Campus", suffix: "+", idx: 2 },
  { label: "Placement In Engineering", suffix: "%", idx: 3 },
];

const Hero = () => {
  const statsRef = useRef<HTMLDivElement | null>(null);
  const formRef = useRef<HTMLFormElement | null>(null);
  const [counts, setCounts] = useState<number[]>([0, 0, 0, 0]);
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Redux state selectors
  const { isLoading: isLoadingCareer, allCareerData } = useSelector(
    (state: RootState) => state.getCareer
  );
  const { isLoading: isLoadingProgram, getProgramDataByCareerId } = useSelector(
    (state: RootState) => state.getProgramByCareerId
  );
  const { isLoading: isLoadingState, allStateData } = useSelector(
    (state: RootState) => state.getAllStateData
  );
  const { isLoading: isLoadingCity, getCityDataByStateId } = useSelector(
    (state: RootState) => state.getCityByStateId
  );
  const { isError, isLoading: isLoadingEnquiry, responseOfenquiry } = useSelector(
    (state: RootState) => state.createEnquiryForEnquiry
  );

  // Fetch careers and states on mount
  useEffect(() => {
    store.dispatch(getAllCareer());
    store.dispatch(getAllState());
  }, []);

  // Handle successful submission
  useEffect(() => {
    if (!isError && responseOfenquiry && isSubmitting) {
      store.dispatch(resetResponseofEnquiry());
      setSubmitted(true);
      setIsSubmitting(false);
      if (formRef.current) {
        formRef.current.reset();
      }
    }
  }, [isLoadingEnquiry, responseOfenquiry, isError, isSubmitting]);

  // Stats counter animation
  useEffect(() => {
    const stats = [25, 800, 250, 100];
    const duration = 1400; // ms

    let started = false;

    const easeOut = (t: number) => 1 - Math.pow(1 - t, 3);

    const animate = (index: number, target: number) => {
      const start = performance.now();
      const step = (now: number) => {
        const elapsed = now - start;
        const t = Math.min(1, elapsed / duration);
        const val = Math.round(easeOut(t) * target);
        setCounts((prev) => {
          const next = [...prev];
          next[index] = val;
          return next;
        });
        if (t < 1) requestAnimationFrame(step);
      };
      requestAnimationFrame(step);
    };

    const onIntersect = (entries: IntersectionObserverEntry[]) => {
      if (started) return;
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          started = true;
          stats.forEach((s, i) => animate(i, s));
        }
      });
    };

    const obs = new IntersectionObserver(onIntersect, { threshold: 0.2 });
    if (statsRef.current) obs.observe(statsRef.current);
    return () => obs.disconnect();
  }, []);

  // Handlers for dependent dropdowns
  const handleCareerChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const careerId = e.target.value;
    if (careerId) {
      store.dispatch(getAllProgramByCareerId(careerId));
    }
  };

  const handleStateChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const stateId = e.target.value;
    if (stateId) {
      store.dispatch(getAllCityByStateId(stateId));
    }
  };

  // Form submission handler
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);

    const payload = {
      name: formData.get("name") as string,
      email: formData.get("email") as string,
      phone: formData.get("phone") as string,
      coreStateId: formData.get("coreStateId") as string,
      coreCityId: formData.get("coreCityId") as string,
      academicCareerId: formData.get("academicCareerId") as string,
      academicProgramId: formData.get("academicProgramId") as string,
      leadSourceId: 43,
    };

    console.log("Hero form payload:", payload);
    setIsSubmitting(true);
    store.dispatch(submissionForEnquiry(payload));
  };

  // Derive dropdown data from Redux
  const careerData: any[] = !isLoadingCareer ? allCareerData : [];
  const programData: any[] = !isLoadingProgram ? getProgramDataByCareerId : [];
  const stateData: any[] = !isLoadingState ? allStateData : [];
  const cityData: any[] = !isLoadingCity ? getCityDataByStateId : [];

  // const btnPrimary =
  //   "inline-flex items-center justify-center gap-2 px-[30px] py-[14px] text-sm font-bold  rounded-pill whitespace-nowrap transition-all duration-300 active:translate-y-0 bg-[linear-gradient(135deg,#C11E24,#8F171C)] text-white shadow-[0_10px_28px_rgba(193,30,36,0.4)] hover:-translate-y-0.5 hover:shadow-[0_14px_38px_rgba(193,30,36,0.55)] max-[640px]:w-full";
  // const btnOutline =
  //   "inline-flex items-center justify-center gap-2 px-[30px] py-[14px] text-sm font-semibold  rounded-pill whitespace-nowrap transition-all duration-300 active:translate-y-0 bg-white/[0.06] backdrop-blur-glass text-white border border-white/25 hover:border-[#C11E24]/60 hover:bg-white/10 hover:-translate-y-0.5 max-[640px]:w-full";

  const field =
    "w-full px-4 py-[11px] text-sm rounded-[10px] bg-white border border-[rgba(15,47,87,0.16)] text-ink placeholder:text-brand-gray/70 outline-none transition-all duration-200 focus:border-navy-mid focus:ring-2 focus:ring-navy-mid/25";
  const selectField = `${field} appearance-none bg-[length:14px] bg-no-repeat bg-[position:right_14px_center] bg-[url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='14' height='14' fill='none' stroke='%231B4C7F' stroke-width='2' viewBox='0 0 24 24'><path d='M6 9l6 6 6-6'/></svg>")] pr-9 text-brand-gray`;

  return (
    <section
      className="relative overflow-hidden bg-[radial-gradient(circle_at_25%_20%,#1B6AB5_0%,#0F4A85_55%,#0B3870_100%)]"
      id="home"
      aria-label="Admissions hero"
    >
      {/* Campus video backdrop with navy wash */}
      <video
        className="absolute inset-0 w-full h-full object-cover [mask-image:linear-gradient(180deg,#000_0%,#000_80%,transparent_100%)]"
        src={bannerVideo}
        autoPlay
        muted
        loop
        playsInline
        aria-hidden
      />
      <div
        className="absolute inset-0 bg-[linear-gradient(120deg,rgba(8,22,46,0.82)_0%,rgba(11,33,66,0.5)_45%,rgba(11,33,66,0.2)_100%)]"
        aria-hidden
      />
      <div
        className="absolute inset-0 bg-[radial-gradient(ellipse_70%_80%_at_110%_50%,rgba(242,184,75,0.18)_0%,transparent_65%),radial-gradient(ellipse_50%_60%_at_-10%_70%,rgba(27,76,127,0.5)_0%,transparent_60%)]"
        aria-hidden
      />

      <div className="relative z-[2] max-w-container mx-auto px-5 sm:px-6 py-[clamp(56px,7vw,96px)]">
        <div className="grid grid-cols-1 lg:grid-cols-[1.15fr_minmax(0,430px)] gap-12 lg:gap-16 items-center">
          {/* LEFT — copy */}
          <div className="flex flex-col items-start text-left max-lg:items-center max-lg:text-center">
            <div className="animate-fadeUp [animation-delay:0.05s] inline-flex items-center w-fit px-[18px] py-2 mb-[22px] rounded-pill  bg-[linear-gradient(175deg,#C11E24_0%,#A8181D_50%,#8F171C_100%)] text-[#DBC5C5] text-[11px] font-semibold uppercase">
              <span className="w-1.5 h-1.5 mr-2.5 rounded-full bg-white shadow-[0_0_8px_rgba(193,30,36,0.9)] animate-softPulse"></span>
              Admissions 2026–27 Now Open
            </div>
            <h1 className="animate-fadeUp [animation-delay:0.15s] font-serif font-black text-[clamp(22px,2.5vw,38px)] leading-[1.12] text-white mb-3">
              Shape Your Future at the <span className="text-[#ffc107]"> Best AKTU College for B.Tech </span> in Lucknow

            </h1>
            <h2 className="animate-fadeUp [animation-delay:0.25s] text-sm sm:text-[16px] leading-[1.5] text-white/85">
              AICTE Approved & AKTU Affiliated Engineering and Management Programs.
            </h2>
            <div className="mt-4">
              <h2 className="hidden md:inline-block text-sm text-[#ffc107] font-semibold mb-3">
                Recognitions & Accreditation
              </h2>
              <div className="flex gap-x-3">
                {approvals.map((item) => (
                  <div className="sm:max-w-[80px]" key={item.title}>
                    <div

                      className="group   flex-col text-center rounded-sm shadow-md bg-white/95 p-1 flex items-center sm:min-w-[65px]  justify-center h-12 md:h-14"
                    >
                      <img
                        src={item.image}
                        alt={item.title}
                        loading="lazy"
                        className=" max-w-[42px]  w-full rounded-full "
                      />
                    </div>
                    <h3 className="text-[10px] mt-2 text-center font-bold uppercase max-w-[100px] sm:max-w-none text-white">
                      {item.title}
                    </h3>
                  </div>
                ))}
              </div>
            </div>


            <div
              className="w-full animate-fadeUp [animation-delay:0.38s] flex sm:gap-10 items-center mt-5 pt-7 border-t border-white/10 text-white/85 max-[640px]:gap-[18px] max-[640px]:flex-wrap justify-between  sm:justify-start "
              ref={statsRef}
            >
              {heroStats.map((s) => (
                <div
                  className=" flex flex-col justify-between sm:items-start max-lg:items-center"
                  key={s.label}
                >
                  <div className="font-serif font-black text-[28px] text-white/90 leading-none [text-shadow:0_6px_18px_rgba(7,22,46,0.6)] max-[640px]:text-[22px]">
                    {counts[s.idx].toLocaleString()}
                    {s.suffix}
                  </div>
                  <div className="mt-1.5 text-[10px] sm:text-xs text-white/90 max-w-[60px] sm:max-w-none normal-case">
                    {s.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT — admissions enquiry form */}
          <div
            className="animate-fadeUp [animation-delay:0.2s] w-full"
            id="admissions"
          >
            <div className="relative rounded-[22px] bg-white shadow-[0_30px_70px_rgba(10,31,61,0.4)] border border-white/70 overflow-hidden">
              <div className="px-6 py-4 b bg-[linear-gradient(175deg,#C11E24_0%,#A8181D_50%,#8F171C_100%)] text-center">
                <div className="text-lg font-serif font-bold text-white">
                  Admissions Open For
                </div>
                <div className=" text-[10px] font-bold  uppercase text-[#DBC5C5]">
                  Session 2026-27
                </div>
              </div>

              {submitted ? (
                <div className="px-6 py-12 text-center">
                  <div className="w-14 h-14 mx-auto mb-4 grid place-items-center rounded-full bg-[#C11E24]/15 border-2 border-[#C11E24] text-[#8F171C] animate-glowPulse">
                    <Icon name="check" className="w-7 h-7" strokeWidth={2.5} />
                  </div>
                  <div className="font-serif font-bold text-xl text-navy-dark mb-2">
                    Thank you!
                  </div>
                  <p className="text-sm text-brand-gray">
                    Your application interest has been received. Our admissions
                    team will reach out shortly.
                  </p>
                </div>
              ) : (
                <form
                  ref={formRef}
                  className="px-3 sm:px-6 py-5 flex flex-col gap-3"
                  onSubmit={handleSubmit}
                >
                  <div className="grid grid-cols-2 gap-3">
                    <input
                      className={`${field} md:col-span-2`}
                      type="text"
                      name="name"
                      placeholder="Name"
                      required
                      aria-label="Name"
                    />
                    <input
                      className={`${field} md:col-span-2`}
                      type="email"
                      name="email"
                      placeholder="Email"
                      required
                      aria-label="Email"
                    />
                    <input
                      className={`${field} md:col-span-2`}
                      type="tel"
                      name="phone"
                      placeholder="Phone"
                      required
                      aria-label="Phone"
                    />

                    {/* Career (Academic Career) - fetched from API */}
                    <select
                      className={selectField}
                      name="academicCareerId"
                      defaultValue=""
                      aria-label="Career"
                      required
                      onChange={handleCareerChange}
                    >
                      <option value="" disabled>
                        Select Career
                      </option>
                      {careerData.map((item: any) => (
                        <option
                          key={item.academic_career_id}
                          value={item.academic_career_id}
                        >
                          {item.description}
                        </option>
                      ))}
                    </select>

                    {/* Program - fetched from API based on selected career */}
                    <select
                      className={selectField}
                      name="academicProgramId"
                      defaultValue=""
                      aria-label="Program"
                      required
                    >
                      <option value="" disabled>
                        Select Program
                      </option>
                      {programData.map((item: any) => (
                        <option
                          key={item.academic_program_id}
                          value={item.academic_program_id}
                        >
                          {item.description}
                        </option>
                      ))}
                    </select>

                    {/* State - fetched from API */}
                    <select
                      className={selectField}
                      name="coreStateId"
                      defaultValue=""
                      aria-label="State"
                      required
                      onChange={handleStateChange}
                    >
                      <option value="" disabled>
                        Select State
                      </option>
                      {stateData.map((item: any) => (
                        <option
                          key={item.coreStateId}
                          value={item.coreStateId}
                        >
                          {item.name}
                        </option>
                      ))}
                    </select>

                    {/* City - fetched from API based on selected state */}
                    <select
                      className={`${selectField} col-span-2 md:col-span-1`}
                      name="coreCityId"
                      defaultValue=""
                      aria-label="City"
                      required
                    >
                      <option value="" disabled>
                        Select City
                      </option>
                      {cityData.map((item: any) => (
                        <option
                          key={item.coreCityId}
                          value={item.coreCityId}
                        >
                          {item.name}
                        </option>
                      ))}
                    </select>
                  </div>
                  <label className="flex items-start gap-2.5 mt-1 text-[11px] leading-[1.5] text-brand-gray cursor-pointer">
                    <input
                      type="checkbox"
                      required
                      defaultChecked
                      className="mt-0.5 accent-navy-mid w-3.5 h-3.5 shrink-0"
                    />
                    <span>
                      I authorise SRMCEM Group representatives to Call, SMS,
                      Email or WhatsApp me about the programs offered.
                    </span>
                  </label>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="mt-1.5 w-full py-[13px] rounded-[10px] bg-[linear-gradient(135deg,#C11E24,#8F171C)] text-white text-sm font-bold  shadow-[0_10px_28px_rgba(193,30,36,0.4)] transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_14px_38px_rgba(193,30,36,0.55)] disabled:opacity-60 disabled:cursor-not-allowed disabled:hover:translate-y-0"
                  >
                    {isSubmitting ? "Submitting..." : "Enquire Now"}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
