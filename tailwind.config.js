/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: '#0070f3',
        secondary: '#1E293B',
        tert: '#475569',
        quat: '#E5E7EB',
      },
    },
  },
  plugins: [],
};
