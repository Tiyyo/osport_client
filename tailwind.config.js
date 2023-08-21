/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{html,js,ts,jsx,tsx}",
  ],
  daisyui: {
    themes: [
      // Daisy UI select the first theme of this list
      // {
      //   mytheme: {
      //     "primary": "#a991f7",
      //     "secondary": "#f6d860",
      //     "accent": "#37cdbe",
      //     "neutral": "#3d4451",
      //     "base-100": "#ffffff",
      //   },
      // },
      'dracula',
      'cupcake',
    ],
  },
  plugins: [require("daisyui")],
};
