/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        "other": {
          "min": "2049px"
        },
        "phone": {
          max: "428px"
        }
      }
    },
  },
  plugins: [],
}