import  { useState, useEffect } from 'react';
const logo = "/new-home/assets/logo.webp";

const NavBar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openAccordion, setOpenAccordion] = useState<string | null>(null);

  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? 'hidden' : 'unset';
    return () => { document.body.style.overflow = 'unset'; };
  }, [isMobileMenuOpen]);

  const toggleAccordion = (name: string) => {
    setOpenAccordion(prev => (prev === name ? null : name));
  };

  const navItems = [
    {
      name: 'About Us',
      links: ['About SRMCEM', 'Vision & Mission', 'Management', "Principal's Message", 'NBA Accreditation', 'NIRF Ranking', 'AKTU Affiliation', 'UPTAC'],
    },
    {
      name: 'Departments',
      links: ['Computer Science (CSE)', 'Information Technology (IT)', 'Electronics & Comm. (ECE)', 'Electrical Engineering (EE)', 'Mechanical Engineering (ME)', 'Civil Engineering (CE)', 'MBA', 'MCA / M.Tech'],
    },
    {
      name: 'Admission',
      links: ['B.Tech Admission', 'MBA Admission', 'MCA Admission', 'M.Tech Admission', 'Diploma / Polytechnic', 'Fee Structure', 'Scholarship', 'UPTAC Counselling'],
    },
    {
      name: 'Placements',
      links: ['Placement Overview', 'Recruiters List', 'Placement Statistics', 'Training & Development', 'Internship Cell'],
    },
    {
      name: 'Facilities',
      links: ['Smart Classrooms', 'Laboratories & Labs', 'Library', 'Hostel', 'Sports & Gym', 'Medical Center'],
    },
  ];

  return (
    <>
      {/* ── Main Nav Bar ────────────────────────────────────────────────── */}
      <nav className="sticky top-0 z-[999] bg-white shadow-[0_2px_12px_rgba(15,23,42,0.08)] border-b border-[rgba(15,47,87,0.1)]">
        <div className="max-w-[1220px] mx-auto flex items-center justify-between gap-3 px-4 sm:px-6 h-[64px] sm:h-[70px]">

          {/* Brand — min-w-0 allows text to shrink on narrow phones */}
          <a
            href="https://srmcem.ac.in"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 sm:gap-3 min-w-0 shrink-0"
          >
            <img
              src={logo}
              alt="SRMCEM Logo"
              className="h-9 w-9 sm:h-11 sm:w-auto object-contain shrink-0"
            />
            <div className="min-w-0 hidden xs:block sm:block">
              <div className="font-serif text-[12px] sm:text-[14px] lg:text-[15px] font-bold leading-tight uppercase text-[#0A1F3D] whitespace-nowrap">
                Shri Ramswaroop Memorial
              </div>
              <div className="text-[7.5px] sm:text-[9px] font-semibold  uppercase text-[#475467] whitespace-nowrap">
                College of Engg. &amp; Management
              </div>
            </div>
          </a>

          {/* Desktop Nav — lg and above */}
          <div className="hidden lg:flex items-stretch h-full">
            {navItems.map((item, idx) => (
              <div key={idx} className="group relative flex items-center">
                <a
                  href="#"
                  className="flex items-center gap-1 h-full px-4 xl:px-5 text-[13px] font-semibold text-[#0A1F3D]/75 whitespace-nowrap hover:text-[#0A1F3D] hover:bg-[rgba(15,47,87,0.04)] transition-colors duration-150"
                >
                  {item.name}
                  <span className="text-[9px] opacity-50 mt-px">▾</span>
                </a>
                {/* Dropdown */}
                <div className="absolute top-full left-0 z-50 min-w-[200px] flex flex-col py-1 bg-white border border-[rgba(15,47,87,0.1)] border-t-2 border-t-[#ffb703] rounded-b-xl shadow-[0_14px_40px_rgba(15,23,42,0.12)] opacity-0 invisible translate-y-1.5 group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 transition-all duration-200">
                  {item.links.map((link, lIdx) => (
                    <a
                      key={lIdx}
                      href="#"
                      className="py-2.5 px-4 text-[13px] text-[#475467] border-l-2 border-transparent hover:bg-[rgba(15,47,87,0.04)] hover:text-[#0A1F3D] hover:pl-5 hover:border-l-[#ffb703] transition-all duration-150"
                    >
                      {link}
                    </a>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Right side: CTA + Hamburger */}
          <div className="flex items-center gap-2 sm:gap-3 shrink-0">
            <a
              href="#admissions"
              className="hidden sm:inline-flex items-center py-2 px-4 lg:px-5 rounded-full bg-[linear-gradient(175deg,#C11E24_0%,#A8181D_50%,#8F171C_100%)] text-white text-[12px] lg:text-[13px] font-bold whitespace-nowrap shadow-[0_6px_18px_rgba(27,76,127,0.3)] hover:shadow-[0_10px_24px_rgba(27,76,127,0.45)] hover:-translate-y-px transition-all duration-200"
            >
              Apply 2026–27
            </a>
            {/* Hamburger — visible below lg */}
            <button
              className="lg:hidden flex flex-col justify-center gap-[5px] w-10 h-10 p-2 rounded-md hover:bg-[rgba(15,47,87,0.06)] transition-colors duration-150"
              aria-label="Open navigation menu"
              onClick={() => setIsMobileMenuOpen(true)}
            >
              <span className="block w-full h-[2.5px] rounded-full bg-[#0A1F3D]" />
              <span className="block w-4/5 h-[2.5px] rounded-full bg-[#0A1F3D] ml-auto" />
              <span className="block w-full h-[2.5px] rounded-full bg-[#0A1F3D]" />
            </button>
          </div>

        </div>
      </nav>

      {/* ── Mobile Overlay ──────────────────────────────────────────────── */}
      {isMobileMenuOpen && (
        <div
          className="fixed inset-0 z-[2000] bg-black/50"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}

      {/* ── Mobile Slide-in Panel ───────────────────────────────────────── */}
      <div
        className={`fixed top-0 right-0 bottom-0 z-[2001] flex flex-col w-[82vw] max-w-[340px] bg-white shadow-[-16px_0_48px_rgba(15,23,42,0.18)] transition-transform duration-300 ease-[cubic-bezier(0.4,0,0.2,1)] ${isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
      >
        {/* Panel Header */}
        <div className="shrink-0 flex items-center justify-between px-4 py-3.5 bg-[#E6EEF9] border-b border-[rgba(15,47,87,0.1)]">
          <div className="flex items-center gap-2.5">
            <img src={logo} alt="SRMCEM Logo" className="h-8 w-8 object-contain" />
            <div>
              <div className="text-[11px] font-bold text-[#0A1F3D] leading-tight">SRMCEM</div>
              <div className="text-[9px] text-[#475467] font-medium">Navigation Menu</div>
            </div>
          </div>
          <button
            className="w-10 h-10 flex items-center justify-center rounded-lg border border-[rgba(15,47,87,0.18)] bg-white text-[#0A1F3D] text-xl leading-none hover:bg-[#0F2F57] hover:text-white hover:border-[#0F2F57] transition-colors duration-150"
            aria-label="Close menu"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            ×
          </button>
        </div>

        {/* Accordion Nav Items */}
        <div className="flex-1 min-h-0 overflow-y-auto divide-y divide-[rgba(15,47,87,0.08)]">
          {navItems.map((item, idx) => (
            <div key={idx}>
              <button
                className="w-full flex items-center justify-between px-4 py-[15px] text-left hover:bg-[rgba(15,47,87,0.03)] transition-colors duration-150"
                onClick={() => toggleAccordion(item.name)}
              >
                <span className="text-[13px] font-bold uppercase  text-[#0A1F3D]">
                  {item.name}
                </span>
                <span
                  className={`w-6 h-6 flex items-center justify-center rounded text-[9px] border transition-all duration-200 ${openAccordion === item.name
                    ? 'rotate-180 bg-[rgba(242,184,75,0.15)] border-[rgba(242,184,75,0.5)] text-[#D89A2F]'
                    : 'bg-[#E6EEF9] border-[rgba(15,47,87,0.15)] text-[#475467]'
                    }`}
                >
                  ▼
                </span>
              </button>

              {openAccordion === item.name && (
                <div className="px-4 pb-3 bg-[rgba(15,47,87,0.02)]">
                  {item.links.map((link, lIdx) => (
                    <a
                      key={lIdx}
                      href="#"
                      className="flex items-center gap-2 py-2 pl-3 text-[13px] text-[#475467] border-l-2 border-transparent hover:border-l-[#ffb703] hover:text-[#0F2F57] hover:pl-4 transition-all duration-150"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {link}
                    </a>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="shrink-0 px-4 py-4 bg-[#E6EEF9] border-t border-[rgba(15,47,87,0.1)]">
          <a
            href="#admissions"
            className="flex items-center justify-center w-full py-3 rounded-full bg-[linear-gradient(135deg,#1B4C7F,#0F2F57)] text-white text-[13px] font-bold tracking-[0.06em] uppercase shadow-[0_6px_20px_rgba(27,76,127,0.35)] hover:shadow-[0_10px_28px_rgba(27,76,127,0.45)] transition-shadow duration-200"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Apply for Admission 2026-27
          </a>
        </div>
      </div>
    </>
  );
};

export default NavBar;
