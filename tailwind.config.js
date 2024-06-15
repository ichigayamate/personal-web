const themeColor = {
  "primary": {
    "50": "#E9F4FB",
    "100": "#D8EBF8",
    "200": "#ADD5F0",
    "300": "#86C2EA",
    "400": "#5AACE2",
    "500": "#3498DB",
    "600": "#207AB6",
    "700": "#195D8B",
    "800": "#103D5B",
    "900": "#082030"
  },
  "secondary": {
    "50": "#F4EDF7",
    "100": "#ECDFF1",
    "200": "#D7BCE1",
    "300": "#C49CD3",
    "400": "#AE78C4",
    "500": "#9B59B6",
    "600": "#7D4195",
    "700": "#5F3271",
    "800": "#3F214A",
    "900": "#211127"
  },
  "accent": {
    "50": "#F8FBEE",
    "100": "#F1F8DD",
    "200": "#E4F1BC",
    "300": "#D6EA9A",
    "400": "#C8E378",
    "500": "#BADC58",
    "600": "#A2CA2A",
    "700": "#7A9820",
    "800": "#516515",
    "900": "#29330B"
  },
  "neutral": {
    "50": "#E8E8E8",
    "100": "#D4D4D4",
    "200": "#A6A6A6",
    "300": "#7A7A7A",
    "400": "#4F4F4F",
    "500": "#222222",
    "600": "#1C1C1C",
    "700": "#141414",
    "800": "#0D0D0D",
    "900": "#080808"
  },
  "navbar": {
    "50": "#DDEAF4",
    "100": "#BED8E9",
    "200": "#7DB1D4",
    "300": "#3E89BB",
    "400": "#295A7A",
    "500": "#132A39",
    "600": "#0F222E",
    "700": "#0B1922",
    "800": "#081117",
    "900": "#04080B"
  },
  "danger": {
    "50": "#FEEDEC",
    "100": "#FDDBD8",
    "200": "#FAB2AD",
    "300": "#F88E86",
    "400": "#F66A5F",
    "500": "#F44336",
    "600": "#E31B0C",
    "700": "#A91409",
    "800": "#6F0D06",
    "900": "#3A0703"
  }
}

const breakpoints = {
  'sm': '30rem',
  'md': '48rem',
  'lg': '62rem',
  'xl': '80rem',
  '2xl': '96rem'
}

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    screens: {
      ...breakpoints
    },
    extend: {
      colors: {
        ...themeColor
      },
      background: {
        ...themeColor
      }
    }
  }
}