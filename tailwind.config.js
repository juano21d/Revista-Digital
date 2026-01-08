/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        // Paleta pastel suave inspirada en la imagen
        "pastel-mint": {
          50: "#f0fdf7",
          100: "#e1fcf0",
          200: "#c3f7e3",
          300: "#9aecc8",
          400: "#5dd8a5",
          500: "#34c282",
          600: "#26a169",
          700: "#228056",
          800: "#1e6647",
          900: "#1a5439",
        },
        "pastel-peach": {
          50: "#fef7f0",
          100: "#fdeee1",
          200: "#fbd9c3",
          300: "#f8be9a",
          400: "#f3996f",
          500: "#ef7944",
          600: "#e05d29",
          700: "#bb4820",
          800: "#943c20",
          900: "#78341e",
        },
        "pastel-lavender": {
          50: "#faf8ff",
          100: "#f3f0ff",
          200: "#e9e5ff",
          300: "#d6cdff",
          400: "#bcabff",
          500: "#a084ff",
          600: "#8b5fff",
          700: "#7748f5",
          800: "#6539db",
          900: "#5530b8",
        },
        // Colores cálidos suaves para el tema de juegos
        "game-primary": "#a8e6cf", // Verde menta suave
        "game-secondary": "#ffd3a5", // Durazno claro
        "game-accent": "#ffc3d9", // Rosa suave
        "game-neutral": "#f4f1de", // Beige cremoso
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};
