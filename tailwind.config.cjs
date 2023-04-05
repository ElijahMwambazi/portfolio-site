/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        blue: "#2CBCE9",
        green: "#16FF00",
        yellow: "#FDCC49",
        gray: "#EDEDED",
        "dark-green": "#081519",
        "dark-gray": "#757575",
        "deep-blue": "#010026",
        "opaque-black": "rgba(0,0,0,0.35)"
      },
      backgroundImage: (theme) => ({
        // "gradient-left": "linear-gradient(to right, #081519, #FDCC49)",
        "gyg": "linear-gradient(90deg, rgba(8,21,25,1) 20%, rgba(253,204,73,1) 50%, rgba(8,21,25,1) 80%)",
        wallpaper: "url('./src/assets/background.png)"
      }),
      fontFamily: {
        playfair: ["Playfair Display", "serif"],
        opensans: ["Open Sans", "sans-serif"],
        montserrat: ["Montserrat", "sans-serif"],
        bungee: ["Bungee", "cursive"],
        josefinSans: ['Josefin Sans', "sans-serif"]
      },
      content: {
        brush: "url('./assets/brush.png')",
        person1: "url('./assets/person-1.png')",
        person2: "url('./assets/person-2.png')",
        person3: "url('./assets/person-3.png')",
      },
      screens: {
        xs: "480px",
        sm: "768px",
        md: "1060px"
      }
    },
  },
  plugins: [],
}
