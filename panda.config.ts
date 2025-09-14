import { defineConfig } from "@pandacss/dev";

export default defineConfig({
  preflight: true,
  include: ["./src/**/*.{js,jsx,ts,tsx}", "./pages/**/*.{js,jsx,ts,tsx}"],
  exclude: [],

  theme: {
    extend: {
      //============TOKENS PRIMARY=================
      tokens: {
        colors: {
          black: { value: "#0D0D0D" },
          white: { value: "#FFFFFF" },
          purple: {
            900: { value: "#2A1A40" },
            700: { value: "#6D53A6" },
            500: { value: "#7673D9" },
            300: { value: "#A3A0F2" },
          },
          success: {
            500: { value: "#4CA649" },
            300: { value: "#A0D9A4" },
          },
          error: {
            500: { value: "#F22E3E" },
          },
        },

        sizes: {
          grid: {
            gridInner: { value: "1720px" },
            gutter: { value: "24px" },
            column: { value: "412px" }, // 412px 21.458vw
            column2: { value: "848px" }, // 848px
          },
        },
        animations: {
          "shadow-animation": {
            value: "shadow-animation 4s infinite alternate",
          },
        },
      },
      keyframes: {
        "shadow-animation": {
          "0%": {
            boxShadow: "0 0 20px rgba(255, 0, 0, 0.7)",
          },
          "25%": {
            boxShadow: "0 0 20px rgba(0, 255, 0, 0.7)",
          },
          "50%": {
            boxShadow: "0 0 20px rgba(0, 0, 255, 0.7)",
          },
          "75%": {
            boxShadow: "0 0 20px rgba(255, 255, 0, 0.7)",
          },
          "100%": {
            boxShadow: "0 0 20px rgba(255, 0, 255, 0.7)",
          },
        },
      },

      //============TOKENS SEMANTIC=================
      semanticTokens: {
        colors: {
          bg: {
            value: {
              base: "{colors.black}",
              _light: "{colors.white}",
            },
          },
          nav: {
            value: {
              base: "{colors.purple.900}",
            },
          },
          text: {
            primary: {
              value: {
                base: "{colors.white}",
                _light: "{colors.black}",
              },
            },
          },
        },

        fonts: {
          primary: {
            value: "'JetBrains Mono', ui-monospace, monospace",
          },
          secondary: {
            value: "'IBM Plex Mono', monospace",
          },
        },
      },
    },
  },

  outdir: "styled-system",
});
