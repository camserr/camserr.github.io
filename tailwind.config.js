/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        dark: {
          50: '#1a1b1e',
          100: '#141517',
          200: '#2c2e33',
          300: '#373A40',
          400: '#25262b',
        },
        accent: {
          100: '#60a5fa',
          200: '#3b82f6',
        },
        maize: '#FFCB05'  // University of Michigan Maize
      }
    },
  },
  plugins: [],
}
