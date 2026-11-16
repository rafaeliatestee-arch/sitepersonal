/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        carbon: '#0B0D10', graphite: '#171B20', volt: '#D5FF3F', chalk: '#F3F4F0', steel: '#879099'
      },
      fontFamily: { display: ['Space Grotesk', 'sans-serif'], body: ['Manrope', 'sans-serif'], mono: ['Space Mono', 'monospace'] }
    }
  },
  plugins: []
};
