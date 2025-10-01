import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./pages/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}"
  ],
  theme: {
    container: {
      center: true,
      padding: "1.5rem",
      screens: {
        "2xl": "1280px"
      }
    },
    extend: {
      colors: {
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "#2D5A87",
          foreground: "#F8F9FA"
        },
        secondary: {
          DEFAULT: "#F4A261",
          foreground: "#1F2933"
        },
        accent: {
          DEFAULT: "#E76F51",
          foreground: "#FDFCFB"
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))"
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))"
        },
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))"
      },
      backgroundImage: {
        "hero-pattern": "linear-gradient(135deg, rgba(45,90,135,0.88) 0%, rgba(38,70,83,0.92) 50%, rgba(231,111,81,0.8) 100%)"
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(16px)" },
          "100%": { opacity: "1", transform: "translateY(0)" }
        }
      },
      animation: {
        "fade-up": "fade-up 0.6s ease-out forwards"
      }
    }
  },
  plugins: [require("tailwindcss-animate")]
};

export default config;
