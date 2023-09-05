/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{html,js,ts,jsx,tsx}",
  ],
  daisyui: {
    themes: [
      "dracula",
      {
      // mytheme: {
      //   'primary': '#570df8',
      //   'primary-focus': '#4506cb',
      //   'primary-content': '#ffffff',
      //   'secondary': '#f000b8',
      //   'secondary-focus': '#bd0091',
      //   'secondary-content': '#ffffff',
      //   'accent': '#37cdbe',
      //   'accent-focus': '#2aa79b',
      //   'accent-content': '#ffffff',
      //   'neutral': '#a4a0b0',
      //   'neutral-focus': '#6a678a',
      //   'neutral-content': '#ffffff',
      //   'base-100': '#ffffff',
      //   'base-200': '#f9fafb',
      //   'base-300': '#d1d5db',
      //   'base-content': '#d5e3ee',
      //   'info': '#2094f3',
      //   'success': '#009485',
      //   'warning': '#ff9900',
      //   'error': '#ff5724',
      //   },
      },
    ],
  },
  plugins: [require("daisyui")],
};
