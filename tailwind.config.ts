import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "dark-clay": "#9B4D32",
        gold: "#CE8F29",
        coral: "#E27756",
        blush: "#F3D9D0",
        "soft-blue": "#A3B6E5",
        "warm-cream": "#F2EDE2",
      },
      fontFamily: {
        serif: ["Georgia", "Palatino", "'Times New Roman'", "serif"],
        sans: [
          "system-ui",
          "-apple-system",
          "BlinkMacSystemFont",
          "'Segoe UI'",
          "Roboto",
          "'Helvetica Neue'",
          "Arial",
          "sans-serif",
        ],
      },
      maxWidth: {
        content: "1200px",
      },
    },
  },
  plugins: [],
};

export default config;
