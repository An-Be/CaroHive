/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {},
  },
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#efbf2f",

          secondary: "#462ded",

          accent: "#768cd3",

          neutral: "#261E38",

          "base-100": "#FFFF",

          info: "#0E7CF1",

          success: "#3CDDBA",

          warning: "#F6950E",

          error: "#FA5287",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
};
