const round = (num) =>
  num
    .toFixed(7)
    .replace(/(\.[0-9]+?)0+$/, "$1")
    .replace(/\.0$/, "");
const em = (px, base) => `${round(px / base)}em`;

// based on my logo
const logo = {
  orange: "#eb4a2e", // hand // rgb(235, 74, 46)
  black: "#1d3131", // wrench // rgb(29, 49, 49)
  beige: "#fcf8ed", // background // rgb(252, 248, 237)
};

module.exports = {
  mode: "jit",
  purge: {
    content: [
      "./pages/**/*.{js,ts,jsx,tsx}",
      "./components/**/*.{js,ts,jsx,tsx}",
      "./blog/**/*.mdx",
    ],
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      // default font family is "sans"
      // fontFamily: {
      // default values
      // font-family: ui-serif, Georgia, Cambria, "Times New Roman", Times, serif;
      // font-family: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
      // font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;
      // },
      colors: {
        // customize built in colors
        gray: { 350: "#b7bcc5" },

        // custom colors
        "v-black": logo.black,
        "v-beige": logo.beige,
        "v-orange": {
          DEFAULT: logo.orange,
          50: "#ffffff",
          100: "#fdebe8",
          200: "#f8c3ba",
          300: "#f49b8b",
          400: "#ef725d",
          500: logo.orange,
          600: "#d23014",
          700: "#a32610",
          800: "#751b0b",
          900: "#461007",
        },
      },

      // customize tailwind/typography aka .prose
      // https://github.com/tailwindlabs/tailwindcss-typography/blob/master/src/styles.js
      typography: {
        DEFAULT: {
          css: {
            maxWidth: false,
            lineHeight: 1.5,

            // Really don't like it customizing font colors ;)
            color: logo.black,
            strong: { color: false },
            em: { color: false },
            "ol > li::before": {
              backgroundColor: false,
            },
            "ul > li::before": {
              backgroundColor: logo.black,
            },
            hr: false,
            "figure figcaption": false,

            // copypaste but disable color
            h1: {
              color: false,
              fontSize: em(36, 16),
              marginTop: "1.5rem",
              marginBottom: false,
              paddingBottom: "0.3em",
              lineHeight: round(40 / 36),
            },
            h2: {
              color: false,
              fontSize: em(24, 16),
              marginTop: "1.5rem",
              marginBottom: false,
              paddingBottom: "0.3em",
              lineHeight: round(32 / 24),
            },
            h3: {
              color: false,
              fontSize: em(20, 16),
              marginTop: "1.5rem",
              marginBottom: false,
              lineHeight: round(32 / 20),
            },
            h4: {
              color: false,
              marginTop: "1.5rem",
              marginBottom: false,
              lineHeight: round(24 / 16),
            },

            a: false,
            "a code": { color: false },
            pre: false,
            code: false,
            "code::before": false,
            "code::after": false,
            "pre code": false,

            // these add too much spacing
            img: false,
            ol: { marginTop: false, marginBottom: "1rem" },
            ul: { marginTop: false, marginBottom: "1rem" },
            li: false,
            "> ul > li > *:last-child": false,
            "> ul > li > *:first-child": false,
            p: {
              marginBottom: "1rem",
              marginTop: false,
            },

            table: {
              marginTop: false,
              marginBottom: "1rem",
              textAlign: false,
              width: false,
            },
            thead: { color: false, borderBottomColor: false },
            "thead th": false,
            "thead th:last-child": false,
            "thead th:first-child": false,
            "tbody tr": { borderBottomColor: false },
            "tbody tr:last-child": false,
            "tbody td": false,
            "tbody td:first-child": false,
            "tbody td:last-child": false,

            blockquote: false,
            "blockquote p:first-of-type::before": false,
            "blockquote p:last-of-type::after": false,
          },
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require("@tailwindcss/typography"),
    require("@tailwindcss/forms"),
  ],
};
