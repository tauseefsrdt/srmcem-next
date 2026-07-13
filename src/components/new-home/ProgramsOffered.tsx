// import React from 'react';
import { section, sectionHeadCenter, eyebrowCenter, sectionTitle, glassSheen, pill, pillGold } from '../../utils/new-home/tw';
import Icon from './Icon';

const engineering = [
  'B.Tech Computer Science Engineering',
  'B.Tech Electronics & Communication',
  'B.Tech CSE (Artificial Intelligence & ML)',
  'B.Tech Electrical Engineering',
  'B.Tech CSE (Data Science)',
  'B.Tech Mechanical Engineering',
  'B.Tech CSE (Cybersecurity)',
  'B.Tech Civil Engineering',
  'B.Tech CSE (IoT)',
  'B.Tech Information Technology',
];

const management = ['BBA', 'MBA', 'BCA', 'MCA', 'B.Com (Hons.)'];

const ProgramsOffered = () => {
  return (
    <section className={`${section} bg-white/55 backdrop-blur-glass border-y border-[rgba(15,47,87,0.08)]`} id="programs">
      <div className={`${sectionHeadCenter} reveal`}>
        <div className={eyebrowCenter}>Programs Offered</div>
        <h2 className={sectionTitle}>Programs Offered</h2>
        <p className="mt-[18px] text-base leading-[1.85]  text-brand-gray">
          Students can choose from modern technical specialisations as well as management and
          application-oriented programs designed for diverse career pathways.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-7 reveal">
        {/* Engineering */}
        <article className="relative overflow-hidden rounded-lg bg-white/80 backdrop-blur-glass border border-[rgba(15,47,87,0.10)] shadow-card p-7 sm:p-9">
          <span className={glassSheen} aria-hidden />
          <span className={`${pill} ${pillGold} mb-4`}>Core Engineering Tracks</span>
          <h3 className="font-serif text-[24px] font-extrabold text-ink mb-6">Engineering Programs</h3>
          <p className="text-[13px] leading-[1.7] text-brand-gray mb-6">
            Built for technical depth, applied learning and industry-facing specialisation across the
            full spectrum of modern engineering disciplines.
          </p>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-3.5">
            {engineering.map((e) => (
              <li key={e} className="flex items-start gap-2.5 text-[13px] leading-[1.4] text-navy-dark">
                <Icon name="check" className="w-4 h-4 mt-0.5 shrink-0 text-gold-dark" strokeWidth={2.5} />
                {e}
              </li>
            ))}
          </ul>
        </article>

        {/* Management & IT */}
        <article className="relative overflow-hidden flex flex-col rounded-lg bg-white/80 backdrop-blur-glass border border-[rgba(15,47,87,0.10)] shadow-card p-7 sm:p-9">
          <span className={glassSheen} aria-hidden />
          <span className={`${pill} ${pillGold} mb-4`}>Business, Commerce &amp; Digital Pathways</span>
          <h3 className="font-serif text-[24px] font-extrabold text-ink mb-6">Management &amp; IT Programs</h3>
          <p className="text-[13px] leading-[1.7] text-brand-gray mb-5">
            Programs designed for leadership, business foundations and modern application-oriented
            careers. Our management and IT programs are crafted to transform students into
            industry-ready professionals, blending theoretical foundations with intense, real-world
            application.
          </p>
          <p className="text-[13px] leading-[1.7] text-brand-gray mb-6">
            Our curriculum is designed to move beyond traditional textbooks, focusing instead on
            applied learning, data-driven decision-making and agility in a changing global economy.
          </p>

          <div className="flex flex-wrap gap-2.5 mb-8">
            {management.map((m) => (
              <span
                key={m}
                className="inline-flex items-center px-4 py-2 rounded-pill text-[13px] font-bold text-navy-dark bg-navy-mid/[0.08] border border-navy-mid/20 transition-colors duration-200 hover:border-gold/50 hover:text-gold-dark"
              >
                {m}
              </span>
            ))}
          </div>

          <a
            href="#admissions"
            className="mt-auto self-start inline-flex items-center justify-center gap-2 px-8 py-[13px] rounded-pill bg-[linear-gradient(135deg,#F7CF75,#ffb703)] text-navy-deep text-sm font-bold  shadow-glowGold transition-all duration-300 hover:-translate-y-0.5 hover:shadow-glowGoldStrong"
          >
            Apply Now →
          </a>
        </article>
      </div>
    </section>
  );
};

export default ProgramsOffered;
