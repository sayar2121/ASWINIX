import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "var(--electric-blue)",
        secondary: "var(--royal-purple)",
        accent: "var(--magenta)",
        magenta: "var(--magenta)",
        success: "var(--success)",
        warning: "var(--warning)",
        danger: "var(--danger)",
        info: "var(--info)",
        
        midnight: "var(--midnight-navy)",
        silver: "var(--silver)",
        gray: "var(--gray)",
        darkGray: "var(--dark-gray)",
        
        bg: "var(--bg)",
        surface: "var(--surface)",
        card: "var(--card)",
        border: "var(--border)",
        textPrimary: "var(--text)",
        textSecondary: "var(--text-secondary)",
      },
      backgroundImage: {
        "gradient-primary": "var(--gradient-primary)",
        "gradient-premium": "var(--gradient-premium)",
      },
      borderRadius: {
        sm: "var(--radius-sm)",
        md: "var(--radius-md)",
        lg: "var(--radius-lg)",
        xl: "var(--radius-xl)",
      },
      boxShadow: {
        soft: "var(--shadow-soft)",
        softBlue: "var(--shadow-soft-blue)",
        premium: "var(--shadow-premium)",
      },
      fontFamily: {
        heading: ["var(--font-space-grotesk)", "Space Grotesk", "sans-serif"],
        body: ["var(--font-inter)", "Inter", "sans-serif"],
        mono: ["var(--font-jetbrains-mono)", "JetBrains Mono", "monospace"],
      },
      animation: {
        'float': 'float 4s ease-in-out infinite',
        'float-delayed': 'float 4s ease-in-out 2s infinite',
        'float-slow': 'float 6s ease-in-out infinite',
        'skeleton': 'skeleton-loading 1s linear infinite alternate',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0) scale(1)' },
          '50%': { transform: 'translateY(-20px) scale(1.02)' },
        }
      },
    },
  },
  plugins: [],
};
export default config;
