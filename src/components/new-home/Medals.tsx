// import React from 'react';
import {
  section,
  sectionHeadCenter,
  eyebrowCenter,
  sectionTitle,
} from '../../utils/new-home/tw';

const counts = [
  { num: '18', cls: 'text-gold-light [text-shadow:0_0_28px_rgba(244,197,106,0.45)]', label: 'Gold Medals', sub: '' },
  { num: '12', cls: 'text-[#C6D3E6] [text-shadow:0_0_28px_rgba(198,211,230,0.35)]', label: 'Silver Medals', sub: '' },
  { num: '6', cls: 'text-gold-dark [text-shadow:0_0_28px_rgba(217,142,34,0.35)]', label: 'Bronze Medals', sub: '' },
  { num: '192', cls: 'text-gold-light', label: 'Merit Holders', sub: '' }
];

const merit = [
  { pos: 'Top Achievers — AKTU', init: 'AR', name: 'Anjali Raj', branch: 'B.Tech (EE)' },
  { pos: 'Top Achievers — AKTU', init: 'NI', name: 'Nimish', branch: 'B.Tech (CE)' },
  { pos: 'Top Achievers — AKTU', init: 'SS', name: 'Sakshi Singh', branch: 'B.Tech (IT)' },
  { pos: 'Top Achievers — AKTU', init: 'AR', name: 'Akshat Rastogi', branch: 'B.Tech (ME)' }
];

const Medals = () => {
  return (
    <section className={`${section} bg-[linear-gradient(150deg,#0a1f3d_0%,#0f2f57_100%)] text-white overflow-hidden before:content-['🏆'] before:absolute before:right-[4vw] before:top-1/2 before:-translate-y-1/2 before:text-[260px] before:opacity-[0.04] before:pointer-events-none`}>
      <div className={`${sectionHeadCenter} max-[640px]:mb-9 relative z-[1] reveal`}>
        <div className={`${eyebrowCenter} !text-gold-light`}>MERIT & ACHIEVEMENTS</div>
        <h2 className={`${sectionTitle} text-white`}>A Legacy of Academic Excellence</h2>
      </div>

      <div className="relative z-[1] grid grid-cols-4 max-[900px]:grid-cols-2 max-[560px]:grid-cols-1 reveal">
        {counts.map((c, i) => (
          <div key={i} className="text-center py-11 px-6 border border-white/[0.08] transition-[background] duration-300 hover:bg-white/5">
            <div className={`font-display text-[88px] max-[560px]:text-[72px] leading-none mb-2 ${c.cls}`}>{c.num}</div>
            <div className="font-display text-[17px]  text-white/55 mb-1">{c.label}</div>
            <div className="text-[11px]  uppercase text-white/25">{c.sub}</div>
          </div>
        ))}
      </div>

      <div className="relative z-[1] grid grid-cols-4 max-[900px]:grid-cols-2 max-[560px]:grid-cols-1 gap-[18px] mt-10 reveal">
        {merit.map((m, i) => (
          <div key={i} className="text-center py-7 px-[18px] rounded-[14px] bg-white/[0.07] border border-white/[0.14] transition-all duration-300 hover:-translate-y-[5px] hover:bg-white/10 hover:border-gold/60 hover:shadow-[0_18px_40px_rgba(0,0,0,0.28)]">
            <div className="font-display text-xs  uppercase text-gold-light mb-3">{m.pos}</div>
            <div className="w-[60px] h-[60px] mx-auto mb-3 grid place-items-center rounded-full bg-gold/20 border-2 border-gold/50 font-display text-xl text-gold-light">{m.init}</div>
            <div className="font-bold text-sm text-white mb-[5px]">{m.name}</div>
            <div className="text-xs font-semibold text-gold-light">{m.branch}</div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Medals;
