/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,jsx}'],
  theme: {
    extend: {
      fontFamily: {
        'roboto': ['Roboto', 'sans-serif'],
      },
      colors: {
        color0: '#000d16',
        color1: '#02416d',
        color2: '#0a5483',
        color3: '#066699',
        color4: '#aedd2b',
        color5: '#f8f8ec',
      },
      screens: {
        xs: '380px',
      },
      animation: {
        'show-header': 'show-header .5s ease-out',
        'show-main': 'show-main .5s ease-out, show-content 1s linear',
      },
      keyframes: {
        'show-header': {
          '0%': { transform: 'translateY(-100%)' },
        },
        'show-main': {
          '0%': { left: '-100%' },
        },
      },
      boxShadow: {
        1: '0 0 10px 0 rgba(0, 0, 0, 0.3)',
        2: '0 0 13px 1px rgba(0, 0, 0, 0.3)',
      },
    },
  },
  plugins: [],
}

