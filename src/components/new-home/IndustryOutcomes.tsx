// import React from 'react';
import { section, sectionHeadCenter, eyebrowCenter, sectionTitle, glassSheen } from '../../utils/new-home/tw';
import { logo } from '../../utils/new-home/placeholder';

const partners = ['CII', 'AICTE', 'AIMA', 'TCS', 'ICC', 'ASSOCHAM', 'NASSCOM'];

const stats = [
  { num: '2500+', label: 'Job Offers' },
  { num: '250+', label: 'Recruiting Companies' },
  { num: '1000+', label: "Selections in MNC's" },
  { num: '450+', label: 'Multiple-Offer Achievers' },
  { num: '50+', label: 'Core Engineering Recruiters' },
  { num: '16 LPA', label: 'Highest Package' },
];

const IndustryOutcomes = () => {
  return (
    <section className={`${section}`} id="placements" aria-label="Industry connect and career outcomes">
      <div className={`${sectionHeadCenter} reveal`}>
        <div className={eyebrowCenter}>Career Outcomes</div>
        <h2 className={sectionTitle}>Industry Connect &amp; Career Outcomes</h2>
        <p className="mt-[18px] text-base leading-[1.85] text-brand-gray">
          Strong corporate partnerships, an active placement cell and an industry-aligned curriculum
          translate into consistent, measurable career outcomes for SRMCEM students.
        </p>
      </div>

      {/* Partner logo strip */}
      <div className="reveal flex flex-wrap items-center justify-center gap-x-10 gap-y-5 mb-12">
        {partners.map((p) => (
          <img
            key={p}
            src={logo(p, 150, 48)}
            alt={`${p} logo`}
            loading="lazy"
            className="h-10 w-auto opacity-70 grayscale transition duration-300 hover:opacity-100 hover:grayscale-0"
          />
        ))}
      </div>

      {/* Stat cards */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-[18px] reveal">
        {stats.map((s) => (
          <div
            key={s.label}
            className="group relative overflow-hidden flex flex-col items-center text-center rounded-md bg-white/70 backdrop-blur-glass border border-[rgba(15,47,87,0.10)] shadow-card transition-all duration-[400ms] ease-out hover:-translate-y-1.5 hover:bg-white hover:border-navy-mid/30 hover:shadow-hover py-7 px-4"
          >
            <span className={glassSheen} aria-hidden />
            <div className="font-display text-[clamp(28px,3vw,36px)] leading-none text-ink mb-2 transition-colors duration-300 group-hover:text-gold-dark">{s.num}</div>
            <div className="text-[11px] font-bold leading-[1.5]  uppercase text-brand-gray">{s.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default IndustryOutcomes;
