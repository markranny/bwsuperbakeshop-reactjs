import defaultTheme from 'tailwindcss/defaultTheme';
import forms from '@tailwindcss/forms';

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./resources/**/*.blade.php",
    "./resources/**/*.js",
    "./resources/**/*.jsx",
  ],
  theme: {
    extend: {
      colors: {
        'navy': {
          500: '#2c5282',
          600: '#2a4365',
          700: '#1a3a5f',
          800: '#1900af', // Primary color
          900: '#0a1f33',
        },
      },
    },
  },
  plugins: [],
}
