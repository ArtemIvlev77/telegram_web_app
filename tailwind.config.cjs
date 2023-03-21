/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    fontFamily: {
      'roboto': ['Roboto', 'sans-serif'],
    },
    extend: {
      colors: {
        tg: {
          'text': 'var(--tg-theme-text-color)',
          'hint': 'var(--tg-theme-hint-color)',
          'text-button': 'var(--tg-theme-button-text-color)',
          'button': 'var(--tg-theme-button-color)',
          'secondary-bg': 'var(--tg-theme-secondary-bg-color)',
          'primary-bg': 'var(--tg-theme-bg-color)',
        },
        statuses: {
          'refuse': '#E28E8E',
          'inbox': '#BD8EE2',
          'success': '#88CD81',
          'idle': '#FFD074',
          'active': '#81B6CD',
        },
        textColors: {
          'sub': '#D0D0D0',
          'black': '#111'
          
        },
        'main' : '#F2F2F2',
        'grey-comment': '#999999',
        'grey-sub': '#8C8D8F',
        'grey-body': '#f2f2f7',
        'btn-active': '#50A7EA',
        'sub-bg': '#999999',
      },
    },
  },
  plugins: [],
}
