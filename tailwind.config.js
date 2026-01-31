// tailwind.config.js
export default {
	content: ["./index.html", "./src/**/*.{js,jsx}"],
	theme: {
		extend: {
			fontFamily: {
				source: ["Source Sans 3", "sans-serif"],
				open: ["Open Sans", "sans-serif"],
				poppins: ["Poppins", "sans-serif"],
			},
			fontSize: {
				display: ["72px", { lineHeight: "1.1" }],
				h1: ["48px", { lineHeight: "1.15" }],
				subheading: ["24px", { lineHeight: "1.3" }],
				body: ["20px", { lineHeight: "1.6" }],
				caption: ["14px", { lineHeight: "1.4" }],
			},
			colors: {
				bg: {
					dark: "#0A0A0A", // was 07070A
				},
				text: {
					primary: "#FFFFFF",
					muted: "rgba(255,255,255,0.7)",
				},
			},
		},
	},
	plugins: [],
};
