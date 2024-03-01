/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        midnightblue: {
          "100": "#121139",
          "200": "rgba(18, 17, 57, 0.2)",
        },
        white: "#fff",
        gray: {
          "100": "rgba(255, 255, 255, 0.54)",
          "200": "rgba(255, 255, 255, 0.9)",
          "300": "rgba(255, 255, 255, 0.5)",
        },
        "stroke-gradient": "#812de2",
      },
      spacing: {},
      fontFamily: {
        poppins: "Poppins",
      },
      borderRadius: {
        "11xl": "30px",
        "881xl": "900px",
      },
    },
    fontSize: {
      sm: "14px",
      "3xl": "22px",
      lg: "18px",
      "26xl": "45px",
      "8xl": "27px",
      "71xl": "90px",
      "80xl": "99px",
      inherit: "inherit",
    },
    screens: {
      mq1350: {
        raw: "screen and (max-width: 1350px)",
      },
      mq1125: {
        raw: "screen and (max-width: 1125px)",
      },
      mq800: {
        raw: "screen and (max-width: 800px)",
      },
      mq450: {
        raw: "screen and (max-width: 450px)",
      },
    },
  },
  corePlugins: {
    preflight: false,
  },
};
