/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      keyframes: {
        scaleUp: {
          '0%, 100%': {
            transform: 'scale(1.5)',
          },
        },     
        scaleDown: {
          '0%, 100%': {
            transform: 'scale(0.0)',
          },
        },     
      },
      animation: {
        scaleUp: 'scaleUp 0.2s linear forwards',
        scaleDown: 'scaleDown 0.2s linear forwards',
      }, 
    },
  },
  plugins: [],
}
