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
    fontSize: {
      sm: ['14px', '21px'],
      base: ['16px', '24px'],
      lg: ['20px', '30px'],
      xl: ['24px', '32px'],
      '2xl': ['28px', '42px'],
      '3xl': ['32px', '48px'],
      '4xl': ['36px', '54px'],
      '5xl': ['40px', '60px'],
      '6xl': ['48px', '72px'],
    },
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
        lg: '1.5rem',
      },
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
