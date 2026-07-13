import React from 'react';
import { eyebrow, eyebrowCenter, sectionTitle, sectionDesc, sectionHead, sectionHeadCenter, sectionHeadWide } from '../../../utils/new-home/tw';

interface SectionHeadingProps {
  eyebrow?: string;
  title: React.ReactNode;
  desc?: React.ReactNode;
  center?: boolean;
  wide?: boolean;
  className?: string;
}

/**
 * Standard section header: gold eyebrow + serif title + muted description.
 * Carries the `reveal` class so it animates in via the global IntersectionObserver.
 */
const SectionHeading: React.FC<SectionHeadingProps> = ({
  eyebrow: eyebrowText,
  title,
  desc,
  center = false,
  wide = false,
  className = '',
}) => {
  const head = center ? sectionHeadCenter : wide ? sectionHeadWide : sectionHead;
  return (
    <div className={`${head} reveal ${className}`}>
      {eyebrowText && <div className={center ? eyebrowCenter : eyebrow}>{eyebrowText}</div>}
      <h2 className={sectionTitle}>{title}</h2>
      {desc && <p className={`${sectionDesc} ${center ? 'mx-auto' : ''}`}>{desc}</p>}
    </div>
  );
};

export default SectionHeading;
