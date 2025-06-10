/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: "class",
   theme: {
    extend: {
      colors: {
        'primary': '#0070f3',
        'secondary': '#1E293B',
        'tertiary': '#475569',
        'quaternary': '#E5E7EB',
        'quinary': '#F9FAFB',
        'senary': '#F3F4F6',
    },
    container: {
      center: true,
      padding: {
        DEFAULT: '20px',
        md: '40px',
        sm: '2rem',
        lg: '4rem',
        xl: '5rem',
        '2xl': '6rem',
      },
    },
  },
  plugins: [],
}

}