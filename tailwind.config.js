/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        'hover-blue': 'rgb(26, 86, 219)',
      },
    },
  },
  plugins: [
    require('flowbite/plugin'),
  ],
}
