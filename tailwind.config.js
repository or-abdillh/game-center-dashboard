/** @type {import('tailwindcss').Config} */

export default {
    content: [],
    theme: {
        extend: {
            fontFamily: {
                sans: ["Popins", "sans-serif"]
            },
            colors: {
                primary: {
                    100: "#FEE2E2",
                    200: "#FECACA",
                    300: "#FCA5A5",
                    500: "#BB3B3B",
                    600: "#9B2C2C",
                    700: "#7A1C1C",
                    800: "#5A0E0E",
                    900: "#3A0707"
                },
                secondary: {
                    100: "#D46A6A",
                    200: "#C84D4D",
                    300: "#BC3030",
                    400: "#B01414",
                    500: "#361518",
                    600: "#8F0000",
                    700: "#750000",
                    800: "#5B0000",
                    900: "#410000"
                },
                tertiary: "#62272D"
            },
            borderrRadius: {
                "4xl": "2rem"
            },
        },
    },
    plugins: [],
}

