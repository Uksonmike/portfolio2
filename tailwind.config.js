/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      gridTemplateColumns: {
        '33': '1fr 2fr 1fr',
        '12': '1fr 2fr',
        '13': '1fr 2fr 1fr',
      }
    },
  },
  plugins: [],
};
