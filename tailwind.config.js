module.exports = {
  mode: 'jit',
  purge: ['./src/index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        body: ['Open Sans', 'Arial', 'sans-serif'],
      },
      fontSize: {
        headline: ['2.8rem', '3.08rem'],
      },
      colors: {
        'rw-light': '#EBF4FF',
        'rw-highlight-light': '#D1E6FF',
        'rw-highlight': '#B8D8FF',
        'rw-highlight-dark': '#94C4FF',
        'rw-dark': 'hsl(211deg 49% 14%)',
        'rw-dark-alt': 'hsl(211deg 49% 18%)',
        'rw-action': '#126cd3',
        'rw-action-hover': '#0e54a4',
        'rw-yellow': '#faeb27',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require('@tailwindcss/forms')],
};
