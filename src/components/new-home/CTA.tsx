// import React from 'react';
import { section, btn } from '../../utils/new-home/tw';
import Icon from './Icon';

const CTA = () => {
  return (
    <section className={`${section}`} aria-label="Admissions call to action">
      <div className="relative z-[1] overflow-hidden rounded-lg bg-[linear-gradient(135deg,#C11E24_0%,#8F171C_100%)] border border-[#DBC5C5]/30 shadow-soft flex items-center justify-between flex-wrap gap-4 sm:gap-10 px-4 py-6 sm:px-12 sm:py-14 reveal">
        {/* theme accents */}
        <span className="pointer-events-none absolute inset-x-0 top-0 h-px bg-[linear-gradient(90deg,transparent,rgba(219,197,197,0.7),transparent)]" aria-hidden />
        <div aria-hidden className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_60%_80%_at_88%_20%,rgba(255,255,255,0.16)_0%,transparent_60%),radial-gradient(ellipse_50%_70%_at_5%_90%,rgba(15,47,87,0.2)_0%,transparent_55%)]" />

        <div className="relative z-[1]">
          <div className="inline-flex items-center gap-2 text-xs font-bold  uppercase text-[#ffc107] mb-3.5 before:content-[''] before:w-[26px] before:h-0.5 before:bg-[#ffc107]">Admissions 2026–27</div>
          <h2 className="font-serif font-black text-[clamp(24px,2.5vw,36px)] leading-[1.1]  text-white">Your Engineering Journey Starts Here</h2>
        </div>
        <div className="relative z-[1] flex  gap-4 max-[560px]:w-full mt-6">
          <a href="/enquiry-form" target="_blank" rel="noreferrer" className={`${btn} bg-white text-[#8F171C] shadow-[0_10px_28px_rgba(0,0,0,0.25)] hover:-translate-y-0.5 hover:shadow-[0_14px_38px_rgba(0,0,0,0.3)] max-[560px]:flex-1`}>Apply Online →</a>
          <a href="tel:+910522297051" className="inline-flex items-center justify-center gap-2 px-4 sm:px-[30px] py-[14px] text-sm font-semibold  rounded-pill whitespace-nowrap transition-all duration-300 bg-white/10 backdrop-blur-sm text-white border border-white/40 hover:bg-white/20 hover:border-white hover:-translate-y-0.5 max-[560px]:flex-1"><Icon name="phone" className="w-4 h-4" /> Call Admissions</a>
        </div>
      </div>
    </section>
  );
};

export default CTA;
