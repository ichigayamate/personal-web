const themeColor = {
  "primary": "#3498db",
  "secondary": "#9b59b6",
  "accent": "#badc58",
  "neutral": "#222",
  "base-100": "#1a1a1a",
  "navbar": "#132a39"
}

/** @type {import('tailwindcss').Config} */
module.exports = {
  daisyui: {
    styled: true,
    themes: true,
    base: true,
    utils: true,
    logs: true,
    rtl: false,
    prefix: "",
    darkTheme: "dark",
    themes: [
      {
        mytheme: themeColor,
      },
    ],
  },
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./lib/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ...themeColor
      }
    }
  },
  plugins: [require("daisyui")],
}
