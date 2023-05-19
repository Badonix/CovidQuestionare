/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      backgroundColor: {
        'bg-light': '#eaeaea;',
      },
      width: {
        900: '900px',
      },
      maxHeight: {
        screen350: 'calc(100vh - 350px)',
      },
      maxWidth: {
        230: '230px',
      },
    },
  },
};
