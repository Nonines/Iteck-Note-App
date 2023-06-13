/** @type {import('tailwindcss').Config} */
module.exports = {
  content: {
    relative: true,
    files: ["./src/**/*.{html,js}"],
  },
  theme: {
    extend: {
      backgroundImage: {
        "header-texture": "url('/src/images/top_bg.png')",
      },
      fontSize: {
        xxs: "0.5rem",
      },
    },
  },
  plugins: [],
};
