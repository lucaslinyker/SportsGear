/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,jsx}'],
  theme: {
    extend: {
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
      gridTemplateColumns: {
        'repeat-1max': 'repeat(1, max-content)',
        'repeat-2max': 'repeat(2, max-content)',
        'repeat-3max': 'repeat(3, max-content)',
        background: '.7fr 15px 1fr 15px 1fr 15px 1fr',
      },
      gridTemplateRows: {
        'repeat-3max': 'repeat(3, max-content)',
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
        4: '0 0 10px 2px rgba(0, 0, 0, 0.3)',
        5: '0 0 10px 2px rgba(0, 0, 0, 0.4)',
        6: '2px 5px 10px rgba(3, 25, 39, 0.3)',
      },
    },
  },
  plugins: [],
}

