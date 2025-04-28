/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sora: ["Sora", "sans-serif"],
        dmsans: ["DM Sans", "sans-serif"],
      },
      fontSize: {
        h1: ["80px", { lineHeight: "1" }],
        h2: ["40px", { lineHeight: "1.1" }],
        h3: ["32px", { lineHeight: "1.1" }],
        h4: ["24px", { lineHeight: "1.2" }],
        p1: ["18px", { lineHeight: "1.5" }],
        p2: ["16px", { lineHeight: "1.5" }],
      },
      fontWeight: {
        semibold: 600,
        medium: 500,
        regular: 400,
      },
    },
  },
  plugins: [],
};
