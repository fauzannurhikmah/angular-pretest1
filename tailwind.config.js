/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}"
  ],
  theme: {
    extend: {
      transitionTimingFunction: {
        bounce: 'cubic-bezier(.47,1.64,.41,.8)'
      },
      backgroundImage: theme => ({
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'primary-gradient': 'linear-gradient(130deg, #021B79, #0575E6)',
        'primary-dark-gradient': 'linear-gradient(130deg, #222739, #222739)',
      }),
      colors: {
        'blue-primary': '#056FDF',
        'third-dark': '#303855',
        'secondary-dark': '#222739',
        'primary-dark': '#23293D'
      },
      keyframes: {
        spin: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        }
      },
      animation: {
        'spin-slow-1': 'spin 60s linear infinite',
        'spin-slow-2': 'spin 100s linear infinite',
      },
    },
  },
  plugins: [],
}

