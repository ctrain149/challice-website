/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      animation: {
        dash: 'dashAnimation 2s linear infinite',
      },
      boxShadow: {
        'run-app-dark':
          // eslint-disable-next-line max-len
          'rgba(50, 50, 93, 0.2) 0px 30px 60px -12px inset, rgba(0, 0, 0, 0.7) 0px 18px 36px -18px inset',
        'run-app-light':
          // eslint-disable-next-line max-len
          'rgba(50, 50, 93, 0.25) 0px 30px 60px -12px inset, rgba(0, 0, 0, 0.3) 0px 18px 36px -18px inset',
        emboss: 'rgba(0, 0, 0, 0.25) 0px 14px 28px, rgba(0, 0, 0, 0.22) 0px 10px 10px',
      },
      keyframes: {
        dashAnimation: {
          '0%': {
            'border-style': 'dashed',
            'border-image-slice': '1',
            'border-image': 'linear-gradient(90deg, #3498db, #9b59b6, #2ecc71, #e74c3c) 1',
            'border-offset': '0',
          },
          '100%': { 'border-offset': '100%' },
        },
      },
    },
  },
  plugins: [],
};
