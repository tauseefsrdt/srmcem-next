// Temporary dummy-image helpers. Dimensions match the reference layout so real
// assets can be dropped in later without any layout shift. Swap these helpers
// for imported assets once final media is ready.

/** Landscape / thumbnail photo (generic, non-themed). */
export const photo = (seed: string, w = 600, h = 400) =>
  `https://picsum.photos/seed/${encodeURIComponent(seed)}/${w}/${h}`;

/**
 * Themed campus/education image from a curated Unsplash set, so placeholder
 * media reads on-brand (college, engineering, students) rather than random.
 * `id` is an Unsplash photo id; helpers in components pick relevant ones.
 */
export const unsplash = (id: string, w = 600, h = 400) =>
  `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=${w}&h=${h}&q=70`;

/** Curated, on-theme Unsplash ids grouped by intent. */
export const themeImg = {
  campus: '1562774053-701939374585',
  graduates: '1523580494863-6f3031224c94',
  university: '1541339907198-e08756dedf3f',
  studying: '1517486808906-6ca8b3f04846',
  teamwork: '1531545514256-b1400bc00f31',
  engineersLab: '1581091226825-a6a2a5aee158',
  workshop: '1581092918056-0c4c3acd3789',
  engineering: '1581092160607-ee22621dd758',
  robotics: '1535378917042-10a22c95931a',
  scienceLab: '1532094349884-543bc11b234d',
  library: '1518152006812-edab29b069ac',
  teaching: '1503676260728-1c00da094a0b',
  leadership: '1517048676732-d65bc937f952',
  sports: '1461896836934-ffe607ba8211',
  student: '1517841905240-472988babdf9',
} as const;

/** Square portrait (alumni / people). */
export const avatar = (n: number) => `https://i.pravatar.cc/240?img=${n}`;

/** Monochrome brand/logo placeholder box. */
export const logo = (text: string, w = 150, h = 48) =>
  `https://placehold.co/${w}x${h}/ffffff/1B4C7F?text=${encodeURIComponent(text)}&font=montserrat`;
