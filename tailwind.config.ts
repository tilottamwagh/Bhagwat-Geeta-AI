import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        void: "#03010a",
        cosmos: "#0e0b20",
        nebula: "#150e2e",
        gold: {
          DEFAULT: "#d4a843",
          light: "#f0c040",
          pale: "#faeab0",
        },
        chakra: "#a673ff",
        sudarshan: "#7b4fff",
        moonlight: "#e8dff5",
        tulsi: "#2de8a8",
        saffron: "#e8730a",
      },
      fontFamily: {
        display: ["var(--font-cinzel-decorative)", "serif"],
        sans: ["var(--font-cinzel)", "serif"],
        serif: ["var(--font-eb-garamond)", "Georgia", "serif"],
      },
      animation: {
        "om-pulse": "om-pulse 4s ease-in-out infinite",
        shimmer: "shimmer 3s ease infinite",
        "halo-breathe": "halo-breathe 5s ease-in-out infinite",
        "mandala-spin": "mandala-spin 80s linear infinite",
        blink: "blink 2.2s ease-in-out infinite",
        "dot-bounce": "dot-bounce 1.4s ease-in-out infinite",
      },
      keyframes: {
        "om-pulse": {
          "0%,100%": { filter: "drop-shadow(0 0 12px rgba(212,168,67,0.6))" },
          "50%": { filter: "drop-shadow(0 0 28px rgba(240,192,64,1))" },
        },
        shimmer: {
          "0%,100%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
        },
        "halo-breathe": {
          "0%,100%": { transform: "scale(1)", opacity: "0.7" },
          "50%": { transform: "scale(1.12)", opacity: "1" },
        },
        "mandala-spin": {
          from: { transform: "translateY(-50%) rotate(0deg)" },
          to: { transform: "translateY(-50%) rotate(360deg)" },
        },
        blink: { "0%,100%": { opacity: "1" }, "50%": { opacity: "0.25" } },
        "dot-bounce": {
          "0%,60%,100%": { transform: "translateY(0)" },
          "30%": { transform: "translateY(-8px)" },
        },
      },
    },
  },
  plugins: [],
};
export default config;
