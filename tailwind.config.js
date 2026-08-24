/** @type {import('tailwindcss').Config} */

// Colours are driven by CSS custom properties defined in src/index.css so the
// light and dark palettes stay in one place. Each variable holds a raw
// "R G B" triplet, which lets Tailwind keep its opacity modifiers working
// (e.g. `bg-accent/10`).
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
        accent2: token("--c-accent-2"),
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
      backgroundImage: {
        "accent-gradient":
          "linear-gradient(120deg, rgb(var(--c-accent)) 0%, rgb(var(--c-accent-2)) 100%)",
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
        shimmer: {
          "100%": { transform: "translateX(100%)" },
        },
      },
      animation: {
        "fade-up": "fade-up 0.6s cubic-bezier(0.22, 1, 0.36, 1) both",
        float: "float 8s ease-in-out infinite",
        shimmer: "shimmer 2.2s infinite",
      },
    },
  },
  plugins: [],
};
