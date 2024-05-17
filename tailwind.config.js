/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,jsx}'],
  theme: {
    extend: {
      fontFamily: {
        'roboto': ['Roboto', 'sans-serif'],
      },
      colors: {
        'color0': '#000d16',
        'color1': '#02416d',
        'color2': '#0a5483',
        'color3': '#066699',
        'color4': '#aedd2b',
        'color5': '#f8f8ec'
      },
    },
  },
  plugins: [],
}

