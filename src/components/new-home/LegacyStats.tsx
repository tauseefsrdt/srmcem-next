// import React from 'react';
import {
  section,
  sectionHeadCenter,
  eyebrowCenter,
  sectionTitle,
  sectionDesc,
  glassSheen,
} from '../../utils/new-home/tw';

const stats = [
  { num: '30000+', label: 'Alumni Network Worldwide' },
  { num: '228', label: 'University Honours & Medals' },
  { num: '2300+', label: 'Live / Student Projects Completed' },
  { num: '80+', label: 'Victories Across IIT & National Tech Competitions' },
  { num: '95', label: 'Innovation Projects Showcased' },
  { num: '132', label: 'Hours of Industry Connect Every Year' },
  { num: '323+', label: 'Research Publications' },
  { num: '11', label: 'Patents Filed & Granted' },
];

const LegacyStats = () => {
  return (
    <section className={`${section} bg-[linear-gradient(180deg,#eef3fb,#e6eef9)] overflow-hidden [&>*]:relative [&>*]:z-[1]`}>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_70%_at_80%_30%,rgba(242,184,75,0.10)_0%,transparent_60%)]"></div>

      <div className={`${sectionHeadCenter} reveal`}>
        <div className={`${eyebrowCenter} text-navy-mid`}>Since 1999</div>
        <h2 className={`${sectionTitle} text-ink`}>A Legacy of Academic Excellence</h2>
        <p className={`${sectionDesc} text-brand-gray mx-auto`}>For 27+ years, SRMCEM has been shaping future-ready engineers and managers through academic excellence, innovation-driven learning and strong industry exposure. Guided by the vision of two IIT Kanpur Gold Medalists, the institution combines quality education with practical, career-focused training.</p>
      </div>

      <div className="grid grid-cols-4 gap-[18px] max-[900px]:grid-cols-2 max-[560px]:grid-cols-1 reveal">
        {stats.map((s, i) => (
          <div
            key={i}
            className="group relative overflow-hidden text-center rounded-lg bg-white/70 backdrop-blur-glass border border-[rgba(15,47,87,0.10)] shadow-card transition-all duration-[400ms] ease-out hover:-translate-y-1.5 hover:bg-white hover:border-navy-mid/30 hover:shadow-hover py-9 px-6"
          >
            <span className={glassSheen} aria-hidden />
            <div className="font-display text-[clamp(40px,5vw,56px)] leading-none text-ink mb-2.5 transition-colors duration-300 group-hover:text-gold-dark">{s.num}</div>
            <div className="text-[12px] font-bold leading-[1.5]  text-brand-gray">{s.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default LegacyStats;
