import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        neon: {
          cyan: "#00FFFF",
          magenta: "#FF00FF",
          yellow: "#FFFF00",
          green: "#00FF00",
          orange: "#FF6600",
        },
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        sidebar: {
          DEFAULT: "hsl(var(--sidebar-background))",
          foreground: "hsl(var(--sidebar-foreground))",
          primary: "hsl(var(--sidebar-primary))",
          "primary-foreground": "hsl(var(--sidebar-primary-foreground))",
          accent: "hsl(var(--sidebar-accent))",
          "accent-foreground": "hsl(var(--sidebar-accent-foreground))",
          border: "hsl(var(--sidebar-border))",
          ring: "hsl(var(--sidebar-ring))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: {
            height: "0",
          },
          to: {
            height: "var(--radix-accordion-content-height)",
          },
        },
        "accordion-up": {
          from: {
            height: "var(--radix-accordion-content-height)",
          },
          to: {
            height: "0",
          },
        },
        "neon-glow": {
          "0%": {
            boxShadow: "0 0 20px #00FFFF, 0 0 40px #00FFFF, 0 0 60px #00FFFF",
          },
          "25%": {
            boxShadow: "0 0 20px #FF00FF, 0 0 40px #FF00FF, 0 0 60px #FF00FF",
          },
          "50%": {
            boxShadow: "0 0 20px #FFFF00, 0 0 40px #FFFF00, 0 0 60px #FFFF00",
          },
          "75%": {
            boxShadow: "0 0 20px #00FF00, 0 0 40px #00FF00, 0 0 60px #00FF00",
          },
          "100%": {
            boxShadow: "0 0 20px #00FFFF, 0 0 40px #00FFFF, 0 0 60px #00FFFF",
          },
        },
        "text-glow": {
          "0%": { textShadow: "0 0 10px #00FFFF, 0 0 20px #00FFFF" },
          "25%": { textShadow: "0 0 10px #FF00FF, 0 0 20px #FF00FF" },
          "50%": { textShadow: "0 0 10px #FFFF00, 0 0 20px #FFFF00" },
          "75%": { textShadow: "0 0 10px #00FF00, 0 0 20px #00FF00" },
          "100%": { textShadow: "0 0 10px #00FFFF, 0 0 20px #00FFFF" },
        },
        "gradient-shift": {
          "0%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
          "100%": { backgroundPosition: "0% 50%" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "neon-glow": "neon-glow 3s ease-in-out infinite",
        "text-glow": "text-glow 3s ease-in-out infinite",
        "gradient-shift": "gradient-shift 4s ease-in-out infinite",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
