module.exports = {
  mode: "jit",
  content: [
    "./src/**/**/*.{js,ts,jsx,tsx,html,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,html,mdx}",
  ],
  darkMode: "class",
  theme: {
    screens: { md: { max: "1050px" }, sm: { max: "550px" } },
    extend: {
      colors: {
        black: {
          900: "#000000",
          "900_7f": "#0000007f",
          "900_90": "#00000090",
          "900_3f": "#0000003f",
          "900_87": "#00000087",
          "900_01": "#030229",
          "900_87_01": "#03022987",
          "900_03": "#010025",
          "900_02": "#060606",
          "900_0c": "#0000000c",
          "900_99": "#03022999",
          "900_14": "#00000014",
          "900_99_01": "#00000099",
          "900_1e": "#0000001e",
          "900_a2": "#000000a2",
          "900_6b": "#0909096b",
        },
        blue: {
          100: "#c3d7ff",
          700: "#0068dd",
          A400_01: "#2f70f2",
          A400: "#396ef7",
          A200: "#5b92ff",
          A200_63: "#5b92ff63",
          A400_67: "#367efe67",
          A700: "#2f69ff",
        },
        white: {
          A700_7e: "#ffffff7e",
          A700_56: "#ffffff56",
          A700_21: "#ffffff21",
          A700: "#ffffff",
          A700_72: "#ffffff72",
          A700_cc: "#ffffffcc",
          A700_00: "#ffffff00",
        },
        indigo: {
          50: "#e2e3ff",
          200: "#a3a5cf",
          300: "#8c8ec3",
          900: "#191d88",
          A100_6c: "#a4a2ff6c",
          "200_01": "#9d9fc9",
          "900_87": "#191d8887",
          A200: "#605bff",
        },
        gray: {
          100: "#f7f7f8",
          300: "#e3e3e3",
          400: "#c3c0c0",
          500: "#9a9a9a",
          600: "#828282",
          800: "#444444",
          900: "#121212",
          "600_75": "#807a7a75",
          "900_67": "#23222767",
          "400_01": "#b0b0b0",
          "600_02": "#807a7a",
          "600_01": "#797979",
          "600_7a": "#807a7a7a",
        },
        red: {
          400: "#e8464c",
          500: "#ff2e2e",
          800: "#d11a2a",
          900: "#d01414",
          "800_67": "#b72d2a67",
          "800_63": "#d11a2a63",
        },
        light_green: { 700: "#6b8c3c", A700: "#77b900", A100: "#c7ffa5" },
        green: { 700: "#2b9943", 800: "#1a922d", A700: "#1eca4e" },
        deep_orange: {
          600: "#f94c10",
          A400_33: "#fa400033",
          "600_01": "#e65f2b",
        },
        yellow: { 800: "#e5ae21", 900: "#f46d21", "800_01": "#dfa510" },
        blue_gray: {
          400: "#7a91b0",
          500: "#737791",
          900: "#2c2c2c",
          "900_01": "#151d48",
          "900_0f": "#3232470f",
          "900_67": "#2a285767",
        },
        teal: { A100: "#a6f7e2", A400: "#1dd5b4" },
        deep_purple: { 50: "#ece9f1", A100: "#b79bff" },
        orange: { 100: "#ffe5a5", 700: "#ff7a00", A100_67: "#ffd56b67" },
        purple: { A100: "#f7a5ff" },
        lime: { 400: "#dec95a" },
      },
      fontFamily: {
        sfprotext: "SF Pro Text",
        everett: "Everett",
        aeonikprotrial: "Aeonik Pro TRIAL",
        inter: "Inter",
        nunito: "Nunito",
        outfit: "Outfit",
        jost: "Jost",
        poppins: "Poppins",
        vollkorn: "Vollkorn",
        questrial: "Questrial",
        rubik: "Rubik",
        zenkakugothicantique: "Zen Kaku Gothic Antique",
      },
      boxShadow: {
        bs3: "-2px 0px  4px 0px #ffffff21",
        bs1: "inset 0px 4px  4px 0px #0000003f",
        bs2: "0px 4px  17px 0px #0000001e",
        bs4: "0px 2.67px  5px 0px #3232470f",
        bs: "4px 4px  33px 0px #0000000c",
      },
      backgroundImage: {
        gradient: "linear-gradient(180deg ,#ffffff,#ffffff00)",
        gradient1: "linear-gradient(184deg ,#ffffff,#ffffff00)",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
