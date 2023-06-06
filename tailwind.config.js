/** @type {import('tailwindcss').Config} */
const tailwindConfig = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        'fira-code': ['Fira Code', 'monospace'],
        roboto: ['Roboto', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

export default tailwindConfig
