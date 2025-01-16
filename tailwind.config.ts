import type { Config } from "tailwindcss";

export default {
  mode: "jit",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      animation: {
        spread: "spread 0.8s both",
        burst: "burst 2s forwards",
      },
      keyframes: {
        spread: {
          "0%": { transform: "translateY(0%)" },
          "100%": { transform: "translateY(-200%)" },
        },
        burst: {
          "0%": { transform: "scale(0)", opacity: "1" },
          "60%, 90%": { transform: "scale(1)" },
          "100%": { transform: "scale(1.2)", opacity: "0" },
        },
      },
    },
  },
  plugins: [],
  safelist: [
    {
      pattern: /top-\[\d+px\]/, // top-[숫자px] 패턴 허용
    },
    {
      pattern: /left-\[\d+px\]/, // left-[숫자px] 패턴 허용
    },
  ],
} satisfies Config;
