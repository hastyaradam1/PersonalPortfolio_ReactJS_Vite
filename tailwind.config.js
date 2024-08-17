/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {

      keyframes: {
        'opacity-change': {
          '0%, 100%': { transform: 'scale(2)', opacity: "1" },
          '50%': { opacity: "0" },
          // '50%': { opacity: "1" }

        }
      },
      animation: {
        'opacity-change': 'opacity-change 3s ease-in-out infinite'
      }

    },
  },
  plugins: [],
}

