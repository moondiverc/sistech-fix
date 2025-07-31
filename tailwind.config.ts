// tailwind.config.ts
import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}", "./app/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      fontFamily: {
        rubik: "var(--font-rubik)",
        geist: "var(--font-geist-sans)",
        mono: "var(--font-geist-mono)",
      },
    },
  },
  plugins: [],
};

export default config;
