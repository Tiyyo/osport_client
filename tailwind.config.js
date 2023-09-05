/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{html,js,ts,jsx,tsx}",
  ],
  daisyui: {
    themes: [
      "dracula",
      {
        'light': {
          'primary' : '#ffb3d9',
          'primary-focus' : '#ff80bf',
          'primary-content' : '#1b1c22',

          'secondary' : '#b9ffb3',
          'secondary-focus' : '#8aff80',
          'secondary-content' : '#1b1c22',

          'accent' : '#ffffb3',
          'accent-focus' : '#ffff80',
          'accent-content' : '#1b1c22',

          'neutral' : '#ffffff',
          'neutral-focus' : '#009485',
          'neutral-content' : '#353338',

          'base-100' : '#f0f3ff',
          'base-200' : '#ffffff',
          'base-300' : '#1b1c22',
          'base-content' : '#353437',

          'info' : '#1c92f2',
          'success' : '#009485',
          'warning' : '#ff9900',
          'error' : '#ff5724',

         '--rounded-box': '1rem',          
         '--rounded-btn': '.5rem',        
         '--rounded-badge': '1.9rem',      

         '--animation-btn': '.25s',       
         '--animation-input': '.2s',       

         '--btn-text-case': 'uppercase',   
         '--navbar-padding': '.5rem',      
         '--border-btn': '1px',            
       },
        
      },
    ],
  },
  plugins: [require("daisyui")],
};
