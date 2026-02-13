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
        primary: {
          50: "#EEF7FA",
          100: "#D5EDF3",
          200: "#ABDBE7",
          300: "#7EC5D8",
          400: "#4A8FA8",
          500: "#3D7A91",
          600: "#2F6478",
          700: "#1E3454",
          800: "#162840",
          900: "#0F1D2E",
          DEFAULT: "#4A8FA8",
        },
        navy: {
          50: "#F0F4F8",
          100: "#D9E2EC",
          200: "#BCCCDC",
          300: "#9FB3C8",
          400: "#829AB1",
          500: "#627D98",
          600: "#486581",
          700: "#334E68",
          800: "#243B53",
          900: "#102A43",
          950: "#0A1929",
        },
        accent: {
          DEFAULT: "#F59E0B",
          light: "#FCD34D",
        },
        surface: {
          50: "#FFFDF9",
          100: "#FFF9F0",
          200: "#FFF3E3",
          300: "#FFE8CC",
        },
        warm: {
          50: "#FFFBF5",
          100: "#FFF6EB",
          200: "#FFEDD5",
        },
      },
      fontFamily: {
        sans: [
          "Pretendard Variable",
          "Pretendard",
          "-apple-system",
          "BlinkMacSystemFont",
          "system-ui",
          "Roboto",
          "Helvetica Neue",
          "Segoe UI",
          "Apple SD Gothic Neo",
          "Noto Sans KR",
          "Malgun Gothic",
          "sans-serif",
        ],
      },
      animation: {
        "fade-in": "fadeIn 0.8s ease-out forwards",
        "fade-in-up": "fadeInUp 0.8s ease-out forwards",
        "slide-in-left": "slideInLeft 0.8s ease-out forwards",
        "slide-in-right": "slideInRight 0.8s ease-out forwards",
        "bounce-slow": "bounce 2s ease-in-out infinite",
        float: "float 3s ease-in-out infinite",
        "pulse-soft": "pulseSoft 2s ease-in-out infinite",
        ripple: "ripple 2s ease-out infinite",
        "spin-slow": "spin 25s linear infinite",
        "spin-reverse": "spin 20s linear infinite reverse",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        fadeInUp: {
          "0%": { opacity: "0", transform: "translateY(30px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        slideInLeft: {
          "0%": { opacity: "0", transform: "translateX(-50px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
        slideInRight: {
          "0%": { opacity: "0", transform: "translateX(50px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
        pulseSoft: {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.7" },
        },
        ripple: {
          "0%": { transform: "scale(1)", opacity: "0.4" },
          "100%": { transform: "scale(2.5)", opacity: "0" },
        },
      },
      boxShadow: {
        soft: "0 2px 15px -3px rgba(0, 0, 0, 0.07), 0 10px 20px -2px rgba(0, 0, 0, 0.04)",
        card: "0 4px 25px -5px rgba(74, 143, 168, 0.1), 0 10px 30px -5px rgba(0, 0, 0, 0.04)",
        elevated: "0 10px 40px -10px rgba(74, 143, 168, 0.15), 0 4px 15px -3px rgba(0, 0, 0, 0.06)",
        glow: "0 0 30px rgba(74, 143, 168, 0.2)",
        "glow-lg": "0 0 60px rgba(74, 143, 168, 0.3), 0 0 120px rgba(74, 143, 168, 0.1)",
        "glow-amber": "0 0 60px rgba(245, 158, 11, 0.3), 0 0 120px rgba(245, 158, 11, 0.1)",
        "inner-glow": "inset 0 2px 20px rgba(74, 143, 168, 0.1)",
        "dramatic": "0 40px 80px -20px rgba(0, 0, 0, 0.15), 0 20px 40px -10px rgba(74, 143, 168, 0.1)",
      },
      borderRadius: {
        "4xl": "2rem",
        "5xl": "2.5rem",
      },
    },
  },
  plugins: [],
};

export default config;
