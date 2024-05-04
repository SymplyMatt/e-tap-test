/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundColor: {
        blue: "#3490dc",
      },
      screens: {
        "sm-phone": "350px",
        phone: "450px",
        "phone-big": "600px",
        sm: "640px",
        "sm-tab": "700px",
        md: "1200px",
        mm: "900px",
        lg: "1500px",
        xl: "2000px",
        xxl: "2400px",
      },
      fontSize: {
        8: "8px",
        10: "10px",
        12: "12px",
        14: "14px",
        16: "16px",
        20: "20px",
        24: "24px",
        28: "28px",
        30: "30px",
        64: "64px",
      },
      colors: {
        white: "#FFFFFF",
        recruitBlue: "#002147",
        inputBorderActive: "#141812",
        borderGray: "#E1E4E8",
        lightBlack: "#B4B4B4",
        textFade: "#ACACAC",
        labelBlack: "#1C1C1C",
      },
      spacing: {
        1: "1px",
        3: "3px",
        5: "5px",
        10: "10px",
        12: "12px",
        10: "10px",
        11: "11px",
        16: "16px",
        18: "18px",
        20: "20px",
        24: "24px",
        28: "28px",
        30: "30px",
        32: "32px",
        35: "35px",
        40: "40px",
        48: "48px",
        50: "50px",
        56: "56px",
        64: "64px",
        60: "60px",
        80: "80px",
        96: "96px",
        100: "100px",
        120: "120px",
        160: "160px",
        180: "180px",
        200: "200px",
        200: "200px",
        272: "272px",
        286: "286px",
        372: "372px",
        500: "500px",
      },
      minHeight: {
        50: "70px",
        70: "70px",
        100: "70px",
        200: "70px",
        500: "70px",
      },
      height: {
        80: "80px",
      },
      borderRadius: {
        5: "5px",
        8: "8px",
        10: "10px",
        15: "15px",
        16: "16px",
        20: "20px",
        25: "25px",
        30: "30px",
        40: "40px",
        50: "50%",
      },
      fontFamily: {
        circular: ["Circular", "sans-serif"],
      },
    },
  },
  plugins: [],
};
