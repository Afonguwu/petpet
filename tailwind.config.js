/** @type {import('tailwindcss').Config} */
import colors from 'tailwindcss/colors';
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    colors: {
      primary: '#772400',
      secondary: '#F8B52E',
      warning: '#D54100',
      light: '#818A91',
      dark: '#212529',
      gray: {
        light: '#CED4DA',
        DEFAULT: '#818A91',
        dark: '#6C757D',
      },
      black: colors.black,
      white: colors.white,
    },
    extend: {
      fontFamily: {
        base: ['Noto Sans TC', 'serif'],
        roboto: ['Roboto', 'sans-serif'],
      },
      boxShadow: {
        base: '0 3px 6px 0 #00000029',
      },
      spacing: {
        3.75: '3.75rem',
      },
    },
  },
  plugins: [],
};
