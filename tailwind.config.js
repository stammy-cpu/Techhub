import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{ts,tsx,js,jsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          50:  "#effef6",
          100: "#d9fbea",
          200: "#b6f3d5",
          300: "#86e6ba",
          400: "#4fd19a",
          500: "#22b77f",  // Primary (light, lively)
          600: "#199e6d",
          700: "#187f5a",
          800: "#166549",
          900: "#124f3a",
        },
      },
      keyframes: {
        float: {
          "0%,100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-6px)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
        tilt: {
          "0%,100%": { transform: "rotate(-0.75deg)" },
          "50%": { transform: "rotate(0.75deg)" },
        },
      },
      animation: {
        float: "float 6s ease-in-out infinite",
        shimmer: "shimmer 2.5s linear infinite",
        tilt: "tilt 8s ease-in-out infinite",
      },
      boxShadow: {
        soft: "0 8px 24px rgba(0,0,0,0.08)",
        lift: "0 12px 28px rgba(0,0,0,0.12)",
      },
      transitionTimingFunction: {
        "snappy": "cubic-bezier(.2,.8,.2,1)",
      },
    },
  },
  plugins: [],
};
export default config;
