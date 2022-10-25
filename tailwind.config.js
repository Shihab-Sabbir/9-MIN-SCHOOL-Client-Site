module.exports = {
  content: [
    'node_modules/daisyui/dist/**/*.js', 'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}', "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
  },

  plugins: [
    require('daisyui'), require('flowbite/plugin'),
  ]
}