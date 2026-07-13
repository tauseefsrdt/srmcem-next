// import React from 'react';
import {
  section,
  sectionWhite,
  sectionHeadCenter,
  eyebrowCenter,
  sectionTitle,
  sectionDesc,
} from '../../utils/new-home/tw';

const alumniData = [
  { init: 'AS', name: 'Abhay Singh', batch: 'B.Tech ME · 2005', role: 'IFS, Gujarat Cadre · AKTU Distinguished Alumni', tone: 'bg-navy' },
  { init: 'SS', name: 'Sakshi Singh', batch: 'B.Tech EE · 2013', role: 'IPS Officer · Bihar Cadre', tone: 'bg-navy-mid' },
  { init: 'DS', name: 'Disha Srivastava', batch: 'B.Tech CS · 2017', role: 'IAS Officer · Govt of India', tone: 'bg-navy' },
  { init: 'DG', name: 'Dharmaveer Gupta', batch: 'B.Tech ME · 2017', role: 'Hydraulics Eng. · Gates Corp.', tone: 'bg-navy-mid' },
  { init: 'AJ', name: 'Akshat Jain', batch: 'B.Tech EC · 2011', role: 'IRS · Govt. of India', tone: 'bg-navy-mid' },
  { init: 'VC', name: 'Vaibhav Chaudhary', batch: 'B.Tech CE · 2015', role: 'IAS Officer · Govt of India', tone: 'bg-navy' },
  { init: 'AO', name: 'Abhilash Ojha', batch: 'B.Tech ME · 2015', role: 'Scientist · ISRO', tone: 'bg-navy-dark' },
  { init: 'VM', name: 'Vaishnavi Mishra', batch: 'B.Tech EC · 2018', role: 'UPSC · ESE · Govt. of India', tone: 'bg-navy-mid' },
  { init: 'SA', name: 'Shivanchal Asthana', batch: 'B.Tech EC · 2008', role: 'Wing Commander · Indian Air Force', tone: 'bg-navy-dark' },
  { init: 'NS', name: 'Nitinash Sharma', batch: 'B.Tech CS · 2003', role: 'VP Talent Acquisition · Paytm', tone: 'bg-navy' },
  { init: 'VS', name: 'Vijayeta Suryawanshi', batch: 'B.Tech CS · 2005', role: 'Software Engineer · PayPal, Santa Clara', tone: 'bg-navy-dark' },
  { init: 'BT', name: 'Bhavesh Thakur', batch: 'B.Tech CS · 2011', role: 'Technical Lead · IBM Security', tone: 'bg-navy-dark' },
  { init: 'AK', name: 'Anshika Jaiswal', batch: 'B.Tech CS · 2009', role: 'Technical Lead · Cognizant', tone: 'bg-navy-mid' },
  { init: 'MG', name: 'Manish Gaur', batch: 'B.Tech EC · 2007', role: 'Software Consultant · National Australian Bank', tone: 'bg-navy-mid' },
  { init: 'GB', name: 'Gaurav Bajpai', batch: 'B.Tech EC · 2007', role: 'Financial Software Eng. · Mississauga', tone: 'bg-navy-dark' },
  { init: 'LS', name: 'Luv Shukla', batch: 'B.Tech CS · 2014', role: 'System Programmer Analyst · TCS', tone: 'bg-navy-dark' },
  { init: 'SP', name: 'Santosh James Pandey', batch: 'MCA · 2008', role: 'Account Manager · Dataman USA', tone: 'bg-navy-dark' },
  { init: 'AV', name: 'Anurag Verma', batch: 'B.Tech EC · 2017', role: 'Jr. Research Engineer · RDSO', tone: 'bg-navy' }
];

const Alumni = () => {
  return (
    <section className={`${section} ${sectionWhite}`} id="alumni">
      <div className={`${sectionHeadCenter} reveal`}>
        <div className={`${eyebrowCenter} text-navy-mid`}>Legacy of Excellence</div>
        <h2 className={`${sectionTitle} text-ink`}>Alumni Who Make Us Proud</h2>
        <p className={`${sectionDesc} text-brand-gray mx-auto`}>From IAS officers and scientists to global tech leaders and military officers — SRMCEM's 30000+ alumni are shaping India and the world.</p>
      </div>

      <div className="grid gap-[22px] grid-cols-1 min-[600px]:grid-cols-2 min-[900px]:grid-cols-3 min-[1100px]:grid-cols-6 reveal">
        {alumniData.map((a, i) => (
          <div key={i} className="group flex flex-col items-center text-center p-6 bg-white/70 backdrop-blur-glass border border-[rgba(15,47,87,0.10)] rounded-[14px] shadow-card transition-all duration-[400ms] ease-out hover:-translate-y-1.5 hover:bg-white hover:shadow-hover hover:border-navy-mid/30">
            <div className="w-12 h-12 mb-4 grid place-items-center rounded-full text-navy-mid font-bold text-sm bg-navy-mid/[0.10] border border-navy-mid/20 transition-transform duration-300 group-hover:scale-110 group-hover:bg-gold/15 group-hover:border-gold/40 group-hover:text-gold-dark">{a.init}</div>
            <div className="font-bold text-xs leading-[1.3] text-navy-dark mb-1">{a.name}</div>
            <div className="text-[9px] font-bold t uppercase text-gold-dark mb-2">{a.batch}</div>
            <div className="text-[10px] leading-[1.5] text-brand-gray">{a.role}</div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-3 gap-10 mt-16 pt-14 border-t border-[rgba(15,47,87,0.10)] text-center max-[640px]:grid-cols-1 max-[640px]:gap-8 reveal">
        <div>
          <div className="font-display text-[56px] leading-none text-ink mb-2">30000<sup className="text-2xl align-super text-gold-dark">+</sup></div>
          <div className="text-xs font-bold  uppercase text-brand-gray">Alumni Network Worldwide</div>
        </div>
        <div>
          <div className="font-display text-[56px] leading-none text-ink mb-2">2000<sup className="text-2xl align-super text-gold-dark">+</sup></div>
          <div className="text-xs font-bold  uppercase text-brand-gray">Alumni in Fortune 500 & MNCs</div>
        </div>
        <div>
          <div className="font-display text-[56px] leading-none text-ink mb-2">100<sup className="text-2xl align-super text-gold-dark">+</sup></div>
          <div className="text-xs font-bold  uppercase text-brand-gray">Alumni at CTC of 1 Cr.+</div>
        </div>
      </div>
    </section>
  );
};

export default Alumni;
