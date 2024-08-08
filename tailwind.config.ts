import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        accent: `rgb(244, 245, 255)`,
        primary: `rgb(61, 86, 247)`,
        brown: `rgb(238, 238, 238)`,
        mpurple: `rgb(233, 233, 247)`,
        dark: `rgb(45, 45, 45)`,
        success: {
          DEFAULT: '#1C935A',
          bg: '#E4F2EB',
        }
      },
    },
  },
  plugins: [],
};
export default config;
