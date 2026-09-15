/** @type {import('tailwindcss').Config} */

// Colours are driven by CSS custom properties defined in src/index.css so the
// light and dark palettes stay in one place. Each variable holds a raw
// "R G B" triplet, which lets Tailwind keep its opacity modifiers working
// (e.g. `bg-accent/10`).
//
// The palette is intentionally a single blue accent with no gradients. Depth
// comes from opacity and surface layering, not from colour blending.
const token = (name) => `rgb(var(${name}) / <alpha-value>)`;

export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        base: token("--c-base"),
        surface: token("--c-surface"),
        surface2: token("--c-surface-2"),
        line: token("--c-line"),
        fg: token("--c-fg"),
        muted: token("--c-muted"),
        accent: token("--c-accent"),
        // Deeper blue for hover/pressed states on solid accent fills.
        "accent-deep": token("--c-accent-deep"),
      },
      fontFamily: {
        sans: [
          "Inter var",
          "Inter",
          "system-ui",
          "-apple-system",
          "Segoe UI",
          "sans-serif",
        ],
        mono: [
          "JetBrains Mono",
          "ui-monospace",
          "SFMono-Regular",
          "Menlo",
          "monospace",
        ],
      },
      borderRadius: {
        "4xl": "2rem",
      },
      boxShadow: {
        soft: "0 1px 2px rgb(2 6 23 / 0.04), 0 8px 24px -12px rgb(2 6 23 / 0.12)",
        lift: "0 2px 4px rgb(2 6 23 / 0.06), 0 24px 48px -20px rgb(2 6 23 / 0.24)",
        "glow-accent":
          "0 0 0 1px rgb(var(--c-accent) / 0.35), 0 12px 40px -12px rgb(var(--c-accent) / 0.45)",
      },
      keyframes: {
        "fade-up": {
          from: { opacity: "0", transform: "translateY(12px)" },
          to: { opacity: "1", transform: "none" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
        // Slow rotation for the decorative nano orbital rings.
        spin_slow: {
          from: { transform: "rotate(0deg)" },
          to: { transform: "rotate(360deg)" },
        },
        drift: {
          "0%, 100%": { transform: "translate3d(0, 0, 0)" },
          "50%": { transform: "translate3d(0, -14px, 0)" },
        },
      },
      animation: {
        "fade-up": "fade-up 0.6s cubic-bezier(0.22, 1, 0.36, 1) both",
        float: "float 8s ease-in-out infinite",
        "spin-slow": "spin_slow 70s linear infinite",
        "spin-slower": "spin_slow 120s linear infinite reverse",
        drift: "drift 12s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
