// import React from 'react';
import { section, sectionHeadCenter, eyebrowCenter, sectionTitle, pill, pillGold } from '../../utils/new-home/tw';
import { unsplash, themeImg } from '../../utils/new-home/placeholder';

const projects = [
  {
    img: themeImg.workshop,
    title: 'Air Conditioning System for Bikers',
    desc: 'A student-developed mechanical concept focused on all-weather rider comfort through applied design thinking and fabrication.',
  },
  {
    img: themeImg.engineering,
    title: 'Go-Kart Using IC Engine',
    desc: 'An engineering build that reflects hands-on work in chassis, power delivery and performance-led prototyping.',
  },
  {
    img: themeImg.scienceLab,
    title: 'Smokeless Stove',
    desc: 'A socially useful low-emission concept showing how student innovation can respond to practical community needs.',
  },
];

const AppliedLearning = () => {
  return (
    <section className={`${section}`} id="innovation" aria-label="Applied learning">
      <div className={`${sectionHeadCenter} reveal`}>
        <div className={eyebrowCenter}>Applied Learning</div>
        <h2 className={sectionTitle}>Innovation That Moves Beyond the Classroom</h2>
        <p className="mt-[18px] text-base leading-[1.85]  text-brand-gray">
          Hands-on projects, technical experimentation and innovation-led problem solving as part of
          the student experience.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 reveal">
        {projects.map((p) => (
          <article
            key={p.title}
            className="group flex flex-col overflow-hidden rounded-lg bg-white/70 backdrop-blur-glass border border-[rgba(15,47,87,0.10)] shadow-card transition-all duration-[400ms] ease-out hover:-translate-y-1.5 hover:bg-white hover:border-navy-mid/30 hover:shadow-hover"
          >
            <div className="relative aspect-[16/10] overflow-hidden bg-navy-mid/10">
              <img
                src={unsplash(p.img, 600, 380)}
                alt={p.title}
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <span className="absolute inset-0 bg-[linear-gradient(180deg,transparent_50%,rgba(7,22,43,0.45)_100%)]" aria-hidden />
              <span className={`${pill} ${pillGold} absolute top-3.5 left-3.5`}>Student Project</span>
            </div>
            <div className="p-6">
              <h3 className="font-serif text-[19px] font-extrabold leading-snug text-ink mb-2">{p.title}</h3>
              <p className="text-[13px] leading-[1.7] text-brand-gray">{p.desc}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default AppliedLearning;
