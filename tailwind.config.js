// /** @type {import('tailwindcss').Config} */
// module.exports = {
//   content: ["./src/**/*.{js,jsx,ts,tsx}"],
//   theme: {
//     extend: {
//       colors: {
//         "light-theme-background": "#fff",
//         "light-theme-heading-text": "#151924",
//         "light-theme-primary-color": "#1f78ff",
//       },
//       spacing: {},
//       fontFamily: {
//         poppins: "Poppins",
//       },
//     },
//     fontSize: {
//       inherit: "inherit",
//     },
//   },
//   corePlugins: {
//     preflight: false,
//   },
// };
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        white: "#fff",
        whitetext: {
          "100": "#faf9f7",
          "200": "#f7f5f2",
        },
        whitesmoke: {
          "100": "#ffffff",
          "200": "#fffff",
        },
        'main-teal': {
          DEFAULT: '#20a7a1', // The default shade you can use with the class `bg-custom-teal`
          '50': '#e0f2f1',    // Lighter shade
          '100': '#b2dfdb',
          '200': '#80cbc4',
          '300': '#4db6ac',
          '400': '#4CB8B3',
          '500': '#20a7a1', // The same as DEFAULT, for consistency
          '600': '#00897b',
          '700': '#00796b',
          '800': '#00695c',
          '900': '#004d40',
        },
        mediumslateblue: "#0061fe",
        gray: {
          "100": "#2b2929",
          "200": "#181d26",
          "300": "#1e1919",
        },
        darkslategray: {
          "100": "#333840",
          "200": "#333",
        },
        deepskyblue: "#0ab2fa",
        dodgerblue: {
          "100": "#458fff",
          "200": "#3984ff",
        },
        darkslateblue: "#254fad",
      },
      spacing: {},
      fontFamily: {
        poppins: "Poppins",
      },
    },
    fontSize: {
      base: "16px",
      "11xl": "30px",
      "8xl": "27px",
      sm: "14px",
      "sm-8": "13.8px",
      lg: "18px",
      "5xl": "24px",
      "13xl": "32px",
      "21xl": "40px",
      "base-8": "15.8px",
      inherit: "inherit",
    },
  },
  corePlugins: {
    preflight: false,
  },
};
