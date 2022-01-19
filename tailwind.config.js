const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
	content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
	theme: {
		extend: {
            colors: {
                background: "#F0EFE8",
                secondary: "#E6E5DB",
                lightGray: "#A6A39B",
                medGray: "#63625F",
                darkGray: "#444340",
                black: "#181818",
                green: "#97AA6E",
                overlay: "#5F5F5D77"
            },
            fontFamily: {
                sans: ["Inter var", ...defaultTheme.fontFamily.sans],
                serif: ["Eczar", ...defaultTheme.fontFamily.serif],
            }
        },
	},
	plugins: [],
};
