import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{ts,tsx}", "./app/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: "var(--color-brand)",
        "brand-light": "var(--color-brand-light)",
        surface: "var(--color-surface)",
        "surface-elevated": "var(--color-surface-elevated)",
      },
      fontFamily: {
        sans: "var(--font-sans)",
        mono: "var(--font-mono)",
      },
      boxShadow: {
        glow: "0 0 40px rgba(0, 1, 146, 0.35)",
      },
    },
  },
  plugins: [],
};

export default config;
