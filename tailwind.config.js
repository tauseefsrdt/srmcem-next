/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: "#0F2F57",
          dark: "#0A1F3D",
          deep: "#07162B",
          mid: "#1B4C7F",
          light: "#E6EEF9",
        },
        gold: {
          DEFAULT: "#ffb703",
          dark: "#D89A2F",
          light: "#F7CF75",
          text: "#8C651A",
        },
        ink: "#101828",
        "brand-gray": "#475467",
        "off-white": "#F6F7FB",
        "card-bg": "#F9FAFC",
      },
      fontFamily: {
        sans: ["Rubik", "sans-serif"],
        serif: ["Rubik", "sans-serif"],
        display: ["Rubik", "sans-serif"],
      },
      borderRadius: {
        sm: "10px",
        md: "16px",
        lg: "22px",
        pill: "999px",
      },
      boxShadow: {
        card: "0 6px 22px rgba(15, 23, 42, 0.08)",
        hover: "0 26px 60px rgba(15, 23, 42, 0.16)",
        soft: "0 14px 40px rgba(15, 23, 42, 0.12)",
        gold: "0 10px 28px rgba(242, 184, 75, 0.4)",
        // --- Glass & Depth ---
        // Frosted panel resting on the dark backdrop + a faint inner top highlight
        // that sells the "glass" reflection.
        glass: "0 18px 50px rgba(3, 10, 24, 0.5), inset 0 1px 0 rgba(255, 255, 255, 0.08)",
        glassHover: "0 30px 70px rgba(3, 10, 24, 0.62), inset 0 1px 0 rgba(255, 255, 255, 0.12)",
        // Coloured glows for hover / focus accents.
        glow: "0 0 0 1px rgba(255,255,255,0.06), 0 0 60px rgba(27, 76, 127, 0.45)",
        glowGold: "0 0 40px rgba(242, 184, 75, 0.35)",
        glowGoldStrong: "0 10px 40px rgba(242, 184, 75, 0.55)",
      },
      backdropBlur: {
        xs: "2px",
        glass: "18px",
      },
      backgroundImage: {
        // Layered radial aurora used by the global backdrop and hero-like sections.
        aurora:
          "radial-gradient(900px 600px at 12% -5%, rgba(27,76,127,0.55) 0%, transparent 60%), radial-gradient(800px 600px at 100% 0%, rgba(242,184,75,0.12) 0%, transparent 55%), radial-gradient(700px 700px at 50% 110%, rgba(27,76,127,0.4) 0%, transparent 60%)",
        // Faint engineering grid overlay.
        grid: "linear-gradient(rgba(255,255,255,0.035) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.035) 1px, transparent 1px)",
        // Subtle glass sheen for cards.
        sheen: "linear-gradient(135deg, rgba(255,255,255,0.10) 0%, rgba(255,255,255,0.02) 40%, transparent 70%)",
      },
      maxWidth: {
        container: "1220px",
      },
      transitionTimingFunction: {
        smooth: "cubic-bezier(0.4, 0, 0.2, 1)",
        out: "cubic-bezier(0.16, 1, 0.3, 1)",
      },
      keyframes: {
        fadeUp: {
          from: { opacity: "0", transform: "translateY(28px)" },
          to: { opacity: "1", transform: "none" },
        },
        softPulse: {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.35" },
        },
        floaty: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-8px)" },
        },
        marquee: {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(-50%)" },
        },
        "marquee-reverse": {
          from: { transform: "translateX(-50%)" },
          to: { transform: "translateX(0)" },
        },
        shimmer: {
          "100%": { transform: "translateX(100%)" },
        },
        spinSlow: {
          to: { transform: "rotate(360deg)" },
        },
        // Slow drift of the aurora blobs for a living, immersive backdrop.
        aurora: {
          "0%, 100%": { transform: "translate3d(0,0,0) scale(1)", opacity: "1" },
          "50%": { transform: "translate3d(3%,2%,0) scale(1.08)", opacity: "0.85" },
        },
        // Breathing glow for accent rings / badges.
        glowPulse: {
          "0%, 100%": { boxShadow: "0 0 0 0 rgba(242,184,75,0.0)" },
          "50%": { boxShadow: "0 0 28px 2px rgba(242,184,75,0.45)" },
        },
      },
      animation: {
        fadeUp: "fadeUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) both",
        softPulse: "softPulse 2s infinite",
        floaty: "floaty 6s ease-in-out infinite",
        marquee: "marquee 32s linear infinite",
        "marquee-reverse": "marquee-reverse 32s linear infinite",
        marqueeSlow: "marquee 55s linear infinite",
        spinSlow: "spinSlow 22s linear infinite",
        aurora: "aurora 18s ease-in-out infinite",
        glowPulse: "glowPulse 3.2s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
