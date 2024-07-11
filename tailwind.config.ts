import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      animation: {
        "text-focus-in":
          "text-focus-in 0.6s cubic-bezier(0.550, 0.085, 0.680, 0.530) both",
      },
      keyframes: {
        "text-focus-in": {
          "0%": {
            filter: "blur(8px)",
            opacity: "0",
          },
          to: {
            filter: "blur(0)",
            opacity: "1",
          },
        },
      },
    },
  },
  plugins: [],
};
export default config;
