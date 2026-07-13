import React from 'react';
import { btnPrimary, btnOutline, btnLight, btnNavy, btnSm } from '../../../utils/new-home/tw';

type ButtonVariant = 'primary' | 'outline' | 'light' | 'navy';

const variantMap: Record<ButtonVariant, string> = {
  primary: btnPrimary,
  outline: btnOutline,
  light: btnLight,
  navy: btnNavy,
};

// Small-size colour fragments (compose onto btnSm).
const smColorMap: Record<ButtonVariant, string> = {
  primary: 'bg-[linear-gradient(135deg,#1B4C7F,#0F2F57)] text-white shadow-[0_8px_24px_rgba(27,76,127,0.32)] hover:-translate-y-0.5 hover:shadow-[0_12px_30px_rgba(27,76,127,0.45)]',
  outline: 'bg-white/60 backdrop-blur-sm text-navy-dark border border-navy-mid/30 hover:border-navy-mid hover:bg-white hover:-translate-y-0.5',
  light: 'bg-white text-navy-dark shadow-card hover:shadow-soft hover:-translate-y-0.5',
  navy: 'bg-navy text-white shadow-[0_8px_24px_rgba(27,76,127,0.32)] hover:bg-navy-dark hover:-translate-y-0.5',
};

type CommonProps = {
  variant?: ButtonVariant;
  size?: 'md' | 'sm';
  className?: string;
  children: React.ReactNode;
};

type AsButton = CommonProps & React.ButtonHTMLAttributes<HTMLButtonElement> & { href?: undefined };
type AsAnchor = CommonProps & React.AnchorHTMLAttributes<HTMLAnchorElement> & { href: string };

/**
 * Polymorphic button. Renders an <a> when `href` is provided, otherwise a
 * <button>. Glass/gold variants from the design system.
 */
const Button: React.FC<AsButton | AsAnchor> = ({
  variant = 'primary',
  size = 'md',
  className = '',
  children,
  ...rest
}) => {
  const classes =
    size === 'sm' ? `${btnSm} ${smColorMap[variant]} ${className}` : `${variantMap[variant]} ${className}`;

  if ('href' in rest && rest.href !== undefined) {
    return (
      <a className={classes} {...(rest as React.AnchorHTMLAttributes<HTMLAnchorElement>)}>
        {children}
      </a>
    );
  }
  return (
    <button className={classes} {...(rest as React.ButtonHTMLAttributes<HTMLButtonElement>)}>
      {children}
    </button>
  );
};

export default Button;
