/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");
module.exports = withMT({
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      fontFamily: {
        primary: ["Alegreya Sans SC"],
        secondary: ["Josefin Slab"],
      },
    },
    screens: {
      tb: "480px",
      slt: "768px",
      lt: "1024px",
      xls: "1200px",
    },
  },
  plugins: [require("@tailwindcss/line-clamp")],
});
