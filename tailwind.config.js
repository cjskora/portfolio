/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary-purple': '#8B5CF6',
        'light-purple': '#A78BFA',
        'pale-purple': '#E9D5FF',
        'ink': '#0F1117',
        'ink-soft': '#171A23',
        'ink-line': '#262B38',
      },
    },
  },
  plugins: [],
}
