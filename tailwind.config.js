/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{html,js,ts,jsx,tsx}",
  ],
  daisyui: {
    themes: [
      'dracula',
      {
      mytheme: {
          
        "primary": "#2f81a8",
                 
        "secondary": "#000d84",
                 
        "accent": "#2605aa",
                 
        "neutral": "#f3f4f6",
                 
        "base-100": "#f3f4f6",
                 
        "info": "#accce7",
                 
        "success": "#22c55e",
                 
        "warning": "#ef4444",
                 
        "error": "#e96763",
                 },
      },
    ],
  },
  plugins: [require("daisyui")],
};
