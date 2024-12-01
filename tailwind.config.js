/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    colors: {
      primary: '#772400',
      secondary: '#F0AD25',
      warning: '#D54100',
      light: '#818A91',
      dark: '#212529',
      grizzle: '#dedede',
    },
    extend: {
      fontFamily: {
        base: ['Noto Sans TC', 'serif'],
        roboto: ['Roboto', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
