import React from 'react';
import { section as sectionBase, sectionTight, sectionGlass, sectionDeep, sectionGradient } from '../../../utils/new-home/tw';

type SectionVariant = 'transparent' | 'glass' | 'deep' | 'gradient';

const variantMap: Record<SectionVariant, string> = {
  transparent: '',
  glass: sectionGlass,
  deep: sectionDeep,
  gradient: sectionGradient,
};

interface SectionProps {
  id?: string;
  /** Surface treatment over the global aurora backdrop. */
  variant?: SectionVariant;
  /** Use tighter vertical rhythm. */
  tight?: boolean;
  /** Render a soft gold/navy glow blob for extra depth. */
  glow?: 'none' | 'gold' | 'navy';
  className?: string;
  children: React.ReactNode;
  'aria-label'?: string;
}

/**
 * Section wrapper for the Glass & Depth language. Provides the clamp padding +
 * centered 1220px gutters, an optional tinted/glass surface, and an optional
 * decorative glow that reinforces depth. Sections are transparent by default so
 * the fixed body aurora shows through.
 */
const Section: React.FC<SectionProps> = ({
  id,
  variant = 'transparent',
  tight = false,
  glow = 'none',
  className = '',
  children,
  ...rest
}) => {
  return (
    <section
      id={id}
      className={`${tight ? sectionTight : sectionBase} overflow-hidden ${variantMap[variant]} ${className}`}
      {...rest}
    >
      {glow !== 'none' && (
        <div
          aria-hidden
          className={`pointer-events-none absolute -z-0 blur-[120px] rounded-full ${
            glow === 'gold'
              ? 'w-[420px] h-[420px] bg-gold/[0.14] top-[-10%] right-[-6%]'
              : 'w-[480px] h-[480px] bg-navy-mid/[0.14] bottom-[-15%] left-[-8%]'
          }`}
        />
      )}
      <div className="relative z-[1]">{children}</div>
    </section>
  );
};

export default Section;
