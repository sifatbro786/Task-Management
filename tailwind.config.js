/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      inter: ["ui-sans-serif", "system-ui"],
    },

    extend: {
      container: {
        center: true,
      },
      colors: {
        clifford: "#da373d",
      },
    },
  },
  plugins: [],
};
