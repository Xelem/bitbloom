/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        mainPurple: "#7525CC",
        deepPurple: "#462C74",
        lightBlue: "#21C1EE",
      },
    },
  },

  plugins: [],
};
