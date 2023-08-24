import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      mainBlue: "#28a9e7",
      primaryWhite: "#fff",
      grayLight: "#adb5bd",
      grayLighter: "#f1f3f5",
      grayDark: "#343a40",
      redError: "#f03e3e",
      menuItemBlack: "rgba(0, 0, 0, 0.87)",
      hoverBlue: "#2498d0",
      hoverGray: "#dee2e6",
    },
    extend: {
      backgroundImage: {},
    },
  },
  plugins: [],
};
export default config;
