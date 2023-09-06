/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{html,js,ts,jsx,tsx}",
  ],
  daisyui: {
    themes: [
      "dracula",
    ],
  },
  plugins: [require("daisyui")],
};
