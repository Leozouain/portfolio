/** @type {import('tailwindcss').Config} */
// const plugin = require('tailwindcss/plugin')
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        theme: {
          1: '#291c3a',
          2: '#331c52',
          3: '#8121d0',
          4: '#dccfed',
          5: '#e1ebed',
          6: '#ffffff'

        }
      },
      fontSize: {
        h1: '48px',
        h1sm: '36px',
        h2: '20px',
        h3: '18px',
        p: '16px',

      },

    },
  },
  plugins: [
    // plugin(function ({ addBase, addComponents, addUtilities }) {
    //   addBase({});
    //   addComponents({
    //     ".container": {
    //       "@apply max-w-[77.5rem] mx-auto px-5 md:px-10  xl:max-w-[87.5rem]":
    //         {},
    //     },
    //     ".h1": {
    //       "@apply font-semibold text-[2.5rem] leading-[3.25rem] md:text-[2.75rem] md:leading-[3.75rem] lg:text-[3.25rem] lg:leading-[4.0625rem] xl:text-[3.75rem] xl:leading-[4.5rem]":
    //         {},
    //     },
    //     ".h2": {
    //       "@apply text-[1.75rem] leading-[2.5rem] md:text-[2rem] md:leading-[2.5rem] lg:text-[2.5rem] lg:leading-[3.5rem] xl:text-[3rem] xl:leading-tight":
    //         {},
    //     },
    //     ".h3": {
    //       "@apply text-[2rem] leading-normal md:text-[2.5rem]": {},
    //     },
    //     ".h4": {
    //       "@apply text-[2rem] leading-normal": {},
    //     },
    //     ".h5": {
    //       "@apply text-2xl leading-normal": {},
    //     },
    //     ".h6": {
    //       "@apply font-semibold text-lg leading-8": {},
    //     },
    //     ".body-1": {
    //       "@apply text-[0.875rem] leading-[1.5rem] md:text-[1rem] md:leading-[1.75rem] lg:text-[1.25rem] lg:leading-8":
    //         {},
    //     },
    //     ".body-2": {
    //       "@apply font-light text-[0.875rem] leading-6 md:text-base": {},
    //     },
    //     ".caption": {
    //       "@apply text-sm": {},
    //     },
    //     ".tagline": {
    //       "@apply font-grotesk font-light text-xs tracking-tagline uppercase":
    //         {},
    //     },
    //     ".quote": {
    //       "@apply  text-lg leading-normal": {},
    //     },
    //     ".button": {
    //       "@apply  text-xs font-bold uppercase tracking-wider": {},
    //     },
    //   });
    //   addUtilities({
    //     ".tap-highlight-color": {
    //       "-webkit-tap-highlight-color": "rgba(0, 0, 0, 0)",
    //     },
    //   });
    // }),
  ],
}