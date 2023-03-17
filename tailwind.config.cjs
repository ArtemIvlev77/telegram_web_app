/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        'secondary': 'var(--tg-theme-secondary-bg-color)',
        'tg-text': 'var(--tg-theme-text-color)',
        'tg-button': 'var(--tg-theme-button-color)',
        'refuse': '#E28E8E',
        'inbox': '#BD8EE2',
        'success': '#88CD81',
        'idle': '#FFD074',
        'active': '#81B6CD',
      },
    },
  },
  plugins: [],
}
