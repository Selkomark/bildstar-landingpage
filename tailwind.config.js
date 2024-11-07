module.exports = {
  darkMode: 'class',
  content: [
    "./**/*.{html,js}",
    "!./node_modules/**/*",
    "./node_modules/flowbite/**/*.js"
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require('flowbite/plugin')
  ]
}