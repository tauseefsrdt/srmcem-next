import React from 'react';
import { glassCard, glassPanel, glassSubtle, glassSheen } from '../../../utils/new-home/tw';

type GlassVariant = 'card' | 'panel' | 'subtle';

const variantMap: Record<GlassVariant, string> = {
  card: glassCard, // interactive: hover lift + gold glow
  panel: glassPanel, // static emphasis surface
  subtle: glassSubtle, // quiet surface
};

interface GlassCardProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: GlassVariant;
  /** Show the top reflection sheen line. */
  sheen?: boolean;
  /** Apply default p-8 padding. */
  pad?: boolean;
  as?: React.ElementType;
}

/**
 * Frosted-glass surface — the core building block of the Glass & Depth language.
 * Defaults to the interactive `card` variant (hover lift + gold-tinted glow).
 */
const GlassCard: React.FC<GlassCardProps> = ({
  variant = 'card',
  sheen = true,
  pad = false,
  as,
  className = '',
  children,
  ...rest
}) => {
  const Tag = (as || 'div') as React.ElementType;
  return (
    <Tag className={`${variantMap[variant]} ${pad ? 'p-8' : ''} ${className}`} {...rest}>
      {sheen && <span className={glassSheen} aria-hidden />}
      {children}
    </Tag>
  );
};

export default GlassCard;
