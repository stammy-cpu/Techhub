// if you're on JS, use module.exports and remove the types
import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{ts,tsx,js,jsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          50:  "#eefcf6",
          100: "#d6f6e7",
          200: "#aeeacc",
          300: "#7bdcaf",
          400: "#49cb93",
          500: "#1faf78",  // old deep's neighbor
          550: "#1aa36f",  // ✅ use this as PRIMARY (slightly lighter than deep)
          600: "#178b5f",
          700: "#136e4c",
          800: "#0f553b",
          900: "#0c4130",
        },
      },
      keyframes: {
        float: { "0%,100%": { transform: "translateY(0)" }, "50%": { transform: "translateY(-4px)" } },
        shimmer: { "0%": { backgroundPosition: "-200% 0" }, "100%": { backgroundPosition: "200% 0" } },
      },
      animation: {
        float: "float 6s ease-in-out infinite",
        shimmer: "shimmer 2.5s linear infinite",
      },
      boxShadow: {
        soft: "0 8px 24px rgba(0,0,0,0.08)",
        lift: "0 12px 28px rgba(0,0,0,0.12)",
      },
      transitionTimingFunction: {
        snappy: "cubic-bezier(.2,.8,.2,1)",
      },
    },
  },
  plugins: [],
};
export default config;
