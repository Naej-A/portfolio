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
            "action": "#EF5361",
            "myGreen": "#5C946E"
        },
        backgroundImage: {
            'projet-1-presentation': "url('public/Pac-man/choix_competence.png')",
            'action-lacerer': "url('public/action-backgroud.png')",
        },
    },
  },
  plugins: [],
}
