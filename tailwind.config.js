module.exports = {
  content: [
      "./index.html",
      "./src/**/*.{vue,js,ts,jsx,tsx}",
      "./src/**/**/*.{vue,js,ts,jsx,tsx}",],
  theme: {
    extend: {
        colors: {
            'primary': '#363732',
            "secondary": "#F7F7FF",
            "action": "#EF5361"
        },
    },
  },
  plugins: [],
}
