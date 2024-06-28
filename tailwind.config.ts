import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/preline/preline.js",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          100: "#ffffff",
          200: "#efefef",
          300: "#e0e0e0",
          400: "#d0d0d0",
          500: "#c0c0c0",
        },
        secondary: {
          100: "#606060",
          200: "#484848",
          300: "#303030",
          400: "#181818",
          500: "#000000",
        },
        accent: "#EC4E20",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontFamily: {
        primary: "var(---font-jetbrains-mono)",
      },
    },
  },
  plugins: [require("@tailwindcss/forms"), require("preline/plugin")],
};
export default config;
