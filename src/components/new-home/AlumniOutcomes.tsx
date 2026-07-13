// import React from 'react';
import { section, sectionHeadCenter, eyebrowCenter, sectionTitle } from '../../utils/new-home/tw';
import { avatar, logo } from '../../utils/new-home/placeholder';

const stats = [
  { num: '5', label: 'Alumni Working at Google' },
  { num: '18', label: 'Alumni Placed at Amazon' },
  { num: '20', label: 'Alumni With High Annual Compensation' },
  { num: '200+', label: 'Alumni in International Roles' },
];

const people = [
  { img: 12, name: 'Anamika Srivastava', branch: 'B.Tech (CSE)' },
  { img: 33, name: 'Abhishek Yadav', branch: 'B.Tech (ECE)' },
  { img: 45, name: 'Tripti Gupta', branch: 'B.Tech (IT)' },
  { img: 51, name: 'Kirti Rai', branch: 'B.Tech (EE)' },
];

const employers = ['Gainsight', 'Cognizant', 'TCS', 'Amazon', 'Google'];

const AlumniOutcomes = () => {
  return (
    <section className={`${section}`} id="alumni" aria-label="Alumni outcomes">
      <div className="relative z-[1] rounded-lg overflow-hidden bg-[linear-gradient(150deg,#0a1f3d_0%,#0f2f57_100%)] text-white shadow-soft px-7 py-12 sm:px-10 sm:py-14 reveal">
        <div aria-hidden className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_60%_80%_at_15%_10%,rgba(27,76,127,0.45)_0%,transparent_60%)]" />
        <div aria-hidden className="pointer-events-none absolute inset-x-0 top-0 h-px bg-[linear-gradient(90deg,transparent,rgba(242,184,75,0.5),transparent)]" />

        <div className={`${sectionHeadCenter} relative z-[1] !mb-10`}>
          <div className={`${eyebrowCenter} text-gold-light`}>Alumni Network</div>
          <h2 className={`${sectionTitle} text-white`}>Alumni Outcomes</h2>
          <p className="mt-[18px] text-base leading-[1.85] container mx-auto text-white/65">
            A network of impact, achievement and career momentum — from high-growth technology roles
            to public service and global leadership tracks, SRMCEM alumni continue to expand the
            institution&apos;s footprint well beyond campus.
          </p>
        </div>

        {/* Stats */}
        <div className="relative z-[1] grid grid-cols-2 lg:grid-cols-4 gap-[18px] mb-12">
          {stats.map((s) => (
            <div
              key={s.label}
              className="text-center py-8 px-5 rounded-[14px] bg-white/[0.06] border border-white/[0.12] transition-all duration-300 hover:-translate-y-[5px] hover:bg-white/10 hover:border-gold/50"
            >
              <div className="font-display text-[clamp(38px,4.5vw,52px)] leading-none text-gold-light mb-2">{s.num}</div>
              <div className="text-[12px] font-bold  uppercase text-white/60">{s.label}</div>
            </div>
          ))}
        </div>

        {/* Profile cards */}
        <div className="relative z-[1] grid grid-cols-2 lg:grid-cols-4 gap-[18px] mb-12">
          {people.map((p) => (
            <div
              key={p.name}
              className="group flex flex-col items-center text-center py-7 px-5 rounded-[14px] bg-white/[0.06] border border-white/[0.12] transition-all duration-300 hover:-translate-y-[5px] hover:bg-white/10 hover:border-gold/50"
            >
              <img
                src={avatar(p.img)}
                alt={p.name}
                loading="lazy"
                className="w-20 h-20 mb-4 rounded-full object-cover border-2 border-gold/50 shadow-[0_8px_24px_rgba(0,0,0,0.35)]"
              />
              <div className="font-bold text-sm text-white mb-1">{p.name}</div>
              <div className="text-[11px] font-semibold text-gold-light">{p.branch}</div>
            </div>
          ))}
        </div>

        {/* Employer logos */}
        <div className="relative z-[1] flex flex-wrap items-center justify-center gap-x-10 gap-y-5 pt-8 border-t border-white/[0.10]">
          {employers.map((e) => (
            <img
              key={e}
              src={logo(e, 150, 44)}
              alt={`${e} logo`}
              loading="lazy"
              className="h-9 w-auto opacity-80 transition duration-300 hover:opacity-100"
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default AlumniOutcomes;
