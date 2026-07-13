// import React from 'react';
import logo from '../assets/logo.webp';

const programs = ['B.Tech CSE / AI-ML', 'B.Tech ECE / IT', 'B.Tech ME / CE', 'MBA (120 Seats)', 'MCA / M.Tech', 'Diploma Programs'];

const recognitions = ['AKTU Affiliation', 'NIRF Ranking', 'UPTAC', 'NBA Accreditation', 'AICTE Approval', 'ISO Certification'];

const careerLinks = ['Faculty Positions', 'Staff Recruitment', 'Current Openings', 'Application Form'];

const Footer = () => {
  return (
    <footer className="relative overflow-hidden bg-[linear-gradient(180deg,#4A0C0F_0%,#2B0709_100%)] text-white/55 border-t-4 border-[#C11E24] pt-8 lg:pt-10 pb-9 px-5 sm:px-6">

      <div className="relative max-w-container mx-auto pt-6">
        {/* red hairline + soft glow at the top edge */}
        <div aria-hidden className="pointer-events-none absolute inset-x-0 top-0 h-px bg-[linear-gradient(90deg,transparent,rgba(193,30,36,0.7),transparent)]" />
        <div aria-hidden className="pointer-events-none absolute -top-24 left-1/2 -translate-x-1/2 w-[600px] h-[300px] rounded-full bg-[#C11E24]/20 blur-[120px]" />

        <div className="relative grid grid-cols-[2fr_1.2fr_1fr_1fr] gap-14 pb-14 border-b border-white/[0.06] max-[900px]:grid-cols-2 max-[900px]:gap-10 max-[560px]:gap-x-6 max-[560px]:gap-y-9">
          {/* Brand */}
          <div className="max-[560px]:col-span-2">
            <div className="flex items-center gap-4 mb-4">
              <div className="shrink-0 w-14 h-14 rounded-full bg-white p-1 shadow-[0_0_0_1px_rgba(255,255,255,0.12)]">
                <img src={logo.src} alt="SRMCEM Logo" className="w-full h-full object-contain rounded-full" />
              </div>
              <div>
                <div className="font-serif font-black text-[17px] text-white leading-tight uppercase">Shri Ramswaroop Memorial</div>
                <div className="text-[10px]  uppercase text-[#DBC5C5]">College of Engineering &amp; Management</div>
              </div>
            </div>
            <div className="text-[13px] text-white/80 leading-[1.8] max-w-[340px]">
              Tiwariganj, Faizabad Road, Lucknow, Uttar Pradesh 226010. Established 2001.
              NBA Accredited · AICTE Approved · AKTU Affiliated.
            </div>
          </div>

          {/* Programs */}
          <div>
            <div className="text-[11px]  uppercase font-bold text-[#DBC5C5] mb-[18px]">Programs</div>
            <div className="flex flex-col gap-[11px]">
              {programs.map((link) => (
                <a key={link} href="#academic-programs" className="text-[13px] text-white inline-block transition-all duration-200 hover:text-[#DBC5C5] hover:translate-x-1">{link}</a>
              ))}
            </div>
          </div>

          {/* Recognitions */}
          <div>
            <div className="text-[11px]  uppercase font-bold text-[#DBC5C5] mb-[18px]">Recognitions</div>
            <div className="flex flex-col gap-[11px]">
              {recognitions.map((item) => (
                <a key={item} href="#" className="text-[13px] text-white inline-block transition-all duration-200 hover:text-[#DBC5C5] hover:translate-x-1">{item}</a>
              ))}
            </div>
          </div>

          {/* Career */}
          <div>
            <div className="text-[11px] uppercase font-bold text-[#DBC5C5] mb-[18px]">Career</div>
            <div className="flex flex-col gap-[11px]">
              {careerLinks.map((item) => (
                <a key={item} href="#" className="text-[13px] text-white inline-block transition-all duration-200 hover:text-[#DBC5C5] hover:translate-x-1">{item}</a>
              ))}
              <a href="https://srmcem.ac.in" target="_blank" rel="noreferrer" className="text-[13px] text-white inline-block transition-all duration-200 hover:text-[#DBC5C5] hover:translate-x-1">srmcem.ac.in</a>
            </div>
          </div>
        </div>

        <div className="relative flex items-center justify-between flex-wrap gap-3.5 pt-7 text-xs max-w-container mx-auto px-0 max-[560px]:flex-col max-[560px]:items-start">
          <div className="text-white/80">© {new Date().getFullYear()} Shri Ramswaroop Memorial College of Engineering and Management (SRMCEM). All rights reserved.</div>
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-pill bg-[#C11E24]/[0.18] border border-[#C11E24]/45 text-[#DBC5C5] text-[11px] font-bold  uppercase">
            Admissions Open 2026-27
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
