import React, { useEffect, useRef, useState, VideoHTMLAttributes } from "react";

interface LazyVideoProps extends VideoHTMLAttributes<HTMLVideoElement> {
  src: string;
}

/**
 * <video> that only sets `src` (and starts downloading/playing) once it
 * scrolls near the viewport, instead of every video on the page fetching
 * and autoplaying at once on initial load.
 */
const LazyVideo: React.FC<LazyVideoProps> = ({ src, className, ...rest }) => {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = videoRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setInView(true);
            observer.disconnect();
          }
        });
      },
      { rootMargin: "300px 0px" }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <video
      ref={videoRef}
      className={className}
      src={inView ? src : undefined}
      preload={inView ? "auto" : "none"}
      {...rest}
    />
  );
};

export default LazyVideo;
