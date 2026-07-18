
import Link from 'next/link';
import Icon from './Icon';
const nirf = "/pdf/nirf/NIRF-2026.pdf";

const TopBar = () => {
  const btnOutline =
    'inline-flex items-center gap-1.5 px-3.5 py-1 rounded-[4px] text-[11px] font-semibold  uppercase text-white border border-white/20 whitespace-nowrap transition-colors duration-200 hover:bg-white/10';

  return (
    <div className="relative z-[900] bg-[linear-gradient(175deg,#C11E24_0%,#A8181D_50%,#8F171C_100%)] text-xs text-white/75">
      <div className="max-w-container mx-auto flex items-center justify-between gap-x-3 gap-y-2 px-4 py-4 sm:px-6">
        {/* Left: Login (always) + contact info (md+) + tags (lg+) */}
        <div className="flex items-center min-w-0 gap-2 sm:gap-3 md:gap-4">
          {/* Login — visible on all sizes */}
          <a target='_blank' href="https://campus.srmcem.ac.in/psp/ps/?cmd=login" className={btnOutline}>
            <Icon name="lock" className="w-3.5 h-3.5" /> Login
          </a>
          <div className="hidden sm:block w-px h-3.5 bg-white/20"></div>
          <a href="#" className="hidden sm:inline-flex items-center gap-1.5 text-white transition-colors duration-200 hover:text-gold-light shrink-0">
            <Icon name="phone" className="w-3.5 h-3.5" /> <span className="overflow-hidden text-ellipsis whitespace-nowrap">0522-2970510</span>
          </a>
          <a href="#" className="hidden md:inline-flex items-center gap-1.5 text-white transition-colors duration-200 hover:text-gold-light">
            <Icon name="mail" className="w-3.5 h-3.5" /> info@srmcem.ac.in
          </a>
          <div className="hidden md:block w-px h-3.5 bg-white/20"></div>
          {/* <a
            href="#"
            className="hidden lg:!inline-flex !items-center text-black !gap-1.5 !px-3.5 !py-1 !rounded-full !text-[11px] !font-bold !uppercase !bg-[linear-gradient(135deg,#F7CF75,#ffb703)] !text-navy-deep !shadow-glowGold !transition !duration-200 hover:!-translate-y-px"
          >
            <Icon name="star" className="!w-3.5 !h-3.5" />
            UPTAC-2026-27
          </a> */}
          <a href={nirf || '#'} className="hidden lg:inline-flex items-center gap-1.5 px-3.5 py-1 rounded-pill text-[11px] font-bold  uppercase bg-white/[0.08] text-white shadow-[inset_0_0_0_1px_rgba(255,255,255,0.16)] transition duration-200 hover:bg-white/[0.16] hover:-translate-y-px">
            <Icon name="chart" className="w-3.5 h-3.5" /> NIRF-2026
          </a>
        </div>

        {/* Right: Notice Board (md+) + Result (lg+) + Apply Now (always) */}
        <div className="flex items-center gap-2 md:gap-3">
          <Link href="/notice" className={`hidden md:inline-flex items-center gap-1.5 ${btnOutline}`}><Icon name="bell" className="w-3.5 h-3.5" /> Notice Board</Link>
          <a target='_blank' href="https://erp.aktu.ac.in/WebPages/OneView/OneView.aspx" className={`hidden lg:inline-flex items-center gap-1.5 ${btnOutline}`}><Icon name="chart" className="w-3.5 h-3.5" /> Result</a>
          <a
            href="/enquiry-form"
            className="!inline-flex !px-3.5 !py-1 !rounded-[4px] text-black !text-[11px] !font-semibold !tracking-wide !uppercase !whitespace-nowrap !bg-[linear-gradient(135deg,#F7CF75,#ffb703)] !text-navy-deep !border !border-gold/60 !shadow-glowGold !transition-all !duration-200 hover:!-translate-y-px hover:!shadow-glowGoldStrong"
          >
            Apply Now
          </a>
        </div>
      </div>
    </div>
  );
};

export default TopBar;
