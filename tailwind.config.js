/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: '#D32F2F',
        secondary: '#FBC02D',
        accent: '#1B5E20',
        'background-light': '#FFFFFF',
        'background-dark': '#121212',
      },
      fontFamily: {
        display: ['Bangers', 'cursive'],
        sans: ['Poppins', 'sans-serif'],
      },
      borderRadius: {
        DEFAULT: '12px',
        xl: '24px',
      },
    },
  },
};

