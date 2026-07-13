// import React from 'react';
import { sectionTight } from '../../utils/new-home/tw';
import Icon from './Icon';

const AdmissionInfo = () => {
  return (
    <section className={`${sectionTight} bg-white/55 backdrop-blur-glass border-y border-[rgba(15,47,87,0.08)] flex items-center gap-5`}>
      <div className="w-[52px] h-[52px] grid place-items-center flex-shrink-0 rounded-xl bg-navy-mid/[0.10] border border-navy-mid/20 text-navy-mid"><Icon name="cap" className="w-6 h-6" /></div>
      <div>
        <div className="text-navy-mid font-bold text-[13px]  uppercase mb-1.5">B.Tech Admission</div>
        <div className="text-brand-gray text-sm leading-[1.6]">Via JEE Main + AKTU UPTAC Counselling. Seats: 120-180 per branch.</div>
      </div>
    </section>
  );
};

export default AdmissionInfo;
