// Shared Tailwind utility-class strings — single source of truth for the design
// system. The site uses a LIGHT glassmorphism language: frosted-white panels with
// blue + gold accents floating over a soft white aurora backdrop (see index.css).
// Theme colours: White (surfaces/background), Blue (navy family — primary accent),
// Gold (secondary accent). Components compose these strings inline (or use the
// React primitives in src/component/ui/) so styling stays 100% Tailwind & DRY.

/* ----------------------------------- Layout ---------------------------------- */
export const container = "w-full max-w-container mx-auto px-6";

// Section: fixed vertical padding (64px mobile → 96px desktop) + horizontal gutters.
// Sections are transparent by default and float over the global light backdrop.
export const section = "relative py-8 lg:py-12 px-5 sm:px-6 mx-auto max-w-container w-full";
export const sectionTight = "relative py-10 lg:py-16 px-5 sm:px-6";

// Section background modifiers (append after `section`):
// Default = transparent (shows the body aurora). The others add light bands.
export const sectionGlass = "bg-white/55 backdrop-blur-glass border-y border-[rgba(15,47,87,0.08)]";
export const sectionDeep = "bg-[linear-gradient(180deg,#eef3fb_0%,#e6eef9_100%)]";
export const sectionGradient = "bg-[linear-gradient(150deg,#f3f7fd_0%,#ffffff_100%)]";
// Back-compat aliases (older components reference these names).
export const sectionLight = sectionGlass;
export const sectionWhite = "";
export const sectionNavy = sectionDeep;
export const sectionNavyDark = sectionDeep;
export const sectionTintBlue = sectionGradient;

/* -------------------------------- Section head -------------------------------- */
export const sectionHead = "max-w-[680px] mb-14";
export const sectionHeadCenter = "container mb-14 mx-auto text-center";
export const sectionHeadWide = "max-w-[820px] mb-14";

// Eyebrow label — blue text with a leading gold tick. Override by appending a color.
export const eyebrow = "inline-flex items-center gap-2.5 text-[11px] font-bold  uppercase mb-[18px] text-navy-mid before:content-[''] before:w-[30px] before:h-0.5 before:bg-gold";
export const eyebrowCenter =
  "inline-flex justify-center items-center gap-2.5 text-[11px] font-bold  uppercase mb-[18px] text-navy-mid before:content-[''] before:w-[30px] before:h-0.5 before:bg-gold after:content-[''] after:w-[30px] after:h-0.5 after:bg-gold";

// Section title — dark ink on the light backdrop. Append a color to override.
export const sectionTitle = "font-serif font-black text-[clamp(24px,2vw,32px)] leading-[1.12]  text-ink";
// Blue-gradient text accent for emphasis words inside a title.
export const titleAccent = "bg-[linear-gradient(120deg,#1B4C7F,#0F2F57)] bg-clip-text text-transparent";

// Section description — muted ink.
export const sectionDesc = "mt-3 sm:mt-[18px] text-sm sm:text-base sm:leading-[1.85] text-brand-gray text-justify ";

/* ------------------------------------ Glass ---------------------------------- *
 * The core surface of the design language. `glass` is the base frosted-white
 * panel; the others layer on interactivity / emphasis. All read on the light bg. */
export const glass = "bg-white/70 backdrop-blur-glass border border-[rgba(15,47,87,0.10)] rounded-lg shadow-card";
export const glassSubtle = "bg-white/50 backdrop-blur-glass border border-[rgba(15,47,87,0.08)] rounded-lg";
// Interactive glass card: lifts + gains a blue-tinted shadow on hover.
export const glassCard =
  "group relative overflow-hidden bg-white/90 backdrop-blur-glass border border-[rgba(15,47,87,0.10)] rounded-lg shadow-card transition-all duration-[400ms] ease-out hover:-translate-y-1.5 hover:bg-white hover:border-navy-mid/30 hover:shadow-hover";
// Stronger emphasis panel (feature blocks).
export const glassPanel = "relative overflow-hidden bg-white/80 backdrop-blur-glass border border-[rgba(15,47,87,0.12)] rounded-lg shadow-soft";
export const cardPad = "p-8";

// Back-compat card aliases → all map onto glass now.
export const card = glassCard;
export const cardSoft = glassCard;
export const cardDark = glassCard;

// A thin top "sheen" line you can drop into a glass card for a subtle highlight:
//   <span className={glassSheen} aria-hidden />
export const glassSheen = "pointer-events-none absolute inset-x-0 top-0 h-px bg-[linear-gradient(90deg,transparent,rgba(27,76,127,0.18),transparent)]";

/* ------------------------------- Glow / accents ------------------------------ */
// Decorative icon tile inside cards — blue by default, warms to gold on hover.
export const iconTile =
  "grid place-items-center rounded-[14px] bg-navy-mid/[0.10] border border-navy-mid/20 text-navy-mid transition-all duration-300 group-hover:scale-110 group-hover:bg-gold/15 group-hover:border-gold/40 group-hover:text-gold-dark";

/* ----------------------------------- Buttons ---------------------------------- */
// Base size/shape. Color variants below already include it.
export const btn =
  "inline-flex items-center justify-center gap-2 px-5 sm:px-[30px] py-4  sm:py-[14px] text-xs sm:text-sm font-bold  rounded-pill whitespace-nowrap transition-all duration-300 active:translate-y-0";
// Primary = blue.
export const btnPrimary = `${btn} bg-[linear-gradient(135deg,#1B4C7F,#0F2F57)] text-white shadow-[0_8px_24px_rgba(27,76,127,0.32)] hover:-translate-y-0.5 hover:shadow-[0_12px_30px_rgba(27,76,127,0.45)]`;
// Secondary = gold.
export const btnGold = `${btn} bg-[linear-gradient(135deg,#F7CF75,#ffb703)] text-navy-deep shadow-gold hover:-translate-y-0.5 hover:shadow-glowGoldStrong`;
export const btnOutline = `${btn} font-semibold bg-white/60 backdrop-blur-sm text-navy-dark border border-navy-mid/30 hover:border-navy-mid hover:bg-white hover:-translate-y-0.5`;
export const btnLight = `${btn} bg-white text-navy-dark shadow-card hover:shadow-soft hover:-translate-y-0.5`;
export const btnNavy = `${btn} bg-navy text-white shadow-[0_8px_24px_rgba(27,76,127,0.32)] hover:bg-navy-dark hover:-translate-y-0.5`;
// Small size: compose color classes onto this instead of the default btn padding.
export const btnSm =
  "inline-flex items-center justify-center gap-2 px-[22px] py-2.5 text-[13px] font-bold  rounded-pill whitespace-nowrap transition-all duration-300 active:translate-y-0";

/* ------------------------------- Pills & links -------------------------------- */
export const pill = "inline-flex items-center gap-1.5 px-3.5 py-[5px] rounded-pill text-[10px] font-bold  uppercase";
export const pillGold = "bg-gold/15 border border-gold/40 text-gold-text";
export const pillGhost = "bg-navy-mid/[0.08] border border-navy-mid/20 text-navy-mid";

export const linkArrow = "inline-flex items-center gap-1.5 text-[13px] font-bold text-[#C11E24] transition-all duration-[250ms] hover:gap-2.5 hover:text-navy-dark";
