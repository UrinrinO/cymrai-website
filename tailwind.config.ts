import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-jost)", "ui-sans-serif", "system-ui", "sans-serif"],
        display: ["var(--font-cormorant)", "Georgia", "serif"],
      },
      colors: {
        // Cymrai brand blue (sampled from the logo) — plays the accent role
        brand: {
          50: "#eef4fa",
          100: "#d9e7f4",
          200: "#b6cfe8",
          300: "#8bb2d8",
          400: "#4f88bd",
          500: "#2a6fb0",
          600: "#185898",
          700: "#134a80",
          800: "#103c66",
          900: "#0f2c4a",
          DEFAULT: "#185898",
        },
        // Deep editorial navy — primary dark surface & heading colour
        navy: {
          DEFAULT: "#131c31",
          light: "#1b2742",
          soft: "#25334f",
        },
        // Warm off-whites for quiet section backgrounds
        cream: "#f7f6f2",
        paper: "#fbfaf8",
        // Welsh red — retained for legacy inner pages
        wales: {
          50: "#fdf2f4",
          100: "#fbe1e6",
          500: "#e01f3d",
          600: "#c8102e",
          700: "#a50d26",
          DEFAULT: "#c8102e",
        },
        ink: "#0e1b2e",
      },
      letterSpacing: {
        widest2: "0.32em",
      },
    },
  },
  plugins: [],
};

export default config;
