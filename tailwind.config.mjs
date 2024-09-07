/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: [
    "./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}",
    "./node_modules/preline/preline.js",
  ],
  theme: {
    fontFamily: {
      sans: [
        "Poppins",
        "Helvetica",
        "Arial",
        "sans-serif",
      ],
      serif: [
        "Metrophobic",
        "Georgia",
        "Times New Roman",
        "serif",
      ],
      mono: [
        "Monaco",
        "Consolas",
        "Liberation Mono",
        "Courier New",
        "monospace",
      ],
    },
    extend: {
      colors: {
        primary: '#dc2626',
        secondary: 'var(--fs-color-secondary)',
        accent: 'var(--fs-color-accent)',
        default: 'var(--fs-color-text-default)',
        muted: 'var(--fs-color-text-muted)',
      },
      font_size: {
        base: "16",
        scale: "1.250",
      },
      backgroundImage: {
        "gradient-to-t":
          "linear-gradient(to top, rgba(0, 0, 0, 1) 0%, rgba(0, 0, 0, 0) 100%)",
        transparent:
          "linear-gradient(to top, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0) 100%)",
      },
    },
  },
  plugins: [require("preline/plugin"), require("@tailwindcss/typography")],
};
