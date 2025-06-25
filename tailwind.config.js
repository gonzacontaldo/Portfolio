/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
  extend: {
    colors: {
      background: '#f6f7eb',
      primary: '#e94f37',
      dark: '#393e41',
    },
  },
},

  plugins: [],
  
}

