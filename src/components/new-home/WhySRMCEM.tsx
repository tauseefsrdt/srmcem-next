// import React from 'react';
import { section, eyebrow, sectionTitle, titleAccent, glassSheen } from '../../utils/new-home/tw';
import { unsplash, themeImg } from '../../utils/new-home/placeholder';

/* Left column — reasons SRMCEM is preferred. */
const reasons = [
  {
    title: 'Elite Institutional Recognition',
    desc: 'SRMCEM is honoured to serve as a Human Values Nodal Centre, a prestigious designation awarded to only 27 of 6,000+ colleges, underscoring our dedication to ethical and value-based education.',
  },
  {
    title: 'Dominance in Competitive Arenas',
    desc: 'We cultivate a culture of winning. Whether it is our Sports team or our Robotics team competing at the highest levels, our students consistently participate in the AKTU Technical Trophy and bring laurels home.',
  },
  {
    title: 'Career-Defining Success',
    desc: 'Our students’ professional trajectories are a testament to our training. Beyond industry placements, we see a significant number of alumni successfully clearing Civil Services, GATE, PSUs and pursuing elite government roles.',
  },
  {
    title: 'Industry Validated Competence',
    desc: 'Recruiters consistently provide exemplary feedback, noting that our graduates are not just job-ready, but industry-ready. This is supported by our global alumni network, who are currently driving innovation in top firms across the world.',
  },
  {
    title: 'Empowered Student Ecosystem',
    desc: 'Education at SRMCEM extends far beyond the lecture hall. Our campus is a hub for student-driven cultural, technical and sports events, providing every student with the platform to lead, innovate and grow their soft skills.',
  },
];

/* Right column — 2×2 image cards. */
const highlights = [
  {
    img: themeImg.university,
    title: 'Academic Legacy',
    desc: 'Established in 1999, SRMCEM has built a long-standing reputation for disciplined academics, strong university results and trusted student outcomes.',
  },
  {
    img: themeImg.leadership,
    title: 'Leadership by IIT Kanpur Gold Medalists',
    desc: 'The institution is guided by two IIT Kanpur Gold Medalists, reinforcing a culture of rigour, consistency and meaningful academic standards.',
  },
  {
    img: themeImg.engineersLab,
    title: 'Industry-Focused Learning',
    desc: 'Students benefit from practical training, technical workshops, project-based learning, internships and strong exposure to current industry expectations.',
  },
  {
    img: themeImg.sports,
    title: 'Holistic Development',
    desc: 'Sports, technical events, innovation projects, cultural activities and clubs help students build teamwork, confidence and leadership beyond academics.',
  },
];

const WhySRMCEM = () => {
  return (
    <section className={`${section}`} id="why-srmcem">
      <div className="relative z-[1] rounded-lg bg-white/70 backdrop-blur-glass border border-[rgba(15,47,87,0.10)] shadow-card overflow-hidden p-7 sm:p-10 lg:p-12 reveal">
        <span className={glassSheen} aria-hidden />

        <div className={eyebrow}>Why Choose Us</div>
        <h2 className={`${sectionTitle} mb-10`}>
          Why <span className={titleAccent}>SRMCEM</span> Is Preferred
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.15fr)] gap-10 lg:gap-14 items-start">
          {/* Reasons list */}
          <div className="flex flex-col gap-6">
            {reasons.map((r) => (
              <div key={r.title} className="relative pl-5 border-l-2 border-gold/60">
                <h3 className="text-[15px] font-bold text-navy-dark mb-1.5">{r.title}</h3>
                <p className="text-[13px] leading-[1.7] text-brand-gray">{r.desc}</p>
              </div>
            ))}
          </div>

          {/* 2×2 image cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {highlights.map((h) => (
              <article
                key={h.title}
                className="group flex flex-col overflow-hidden rounded-md bg-white/80 border border-[rgba(15,47,87,0.10)] shadow-card transition-all duration-[400ms] ease-out hover:-translate-y-1.5 hover:shadow-hover hover:border-navy-mid/30"
              >
                <div className="relative aspect-[16/10] overflow-hidden bg-navy-mid/10">
                  <img
                    src={unsplash(h.img, 480, 300)}
                    alt={h.title}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <span className="absolute inset-0 bg-[linear-gradient(180deg,transparent_55%,rgba(7,22,43,0.35)_100%)]" aria-hidden />
                </div>
                <div className="p-5">
                  <h3 className="text-[14px] font-bold text-navy-dark leading-snug mb-1.5">{h.title}</h3>
                  <p className="text-[12px] leading-[1.6] text-brand-gray">{h.desc}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhySRMCEM;
