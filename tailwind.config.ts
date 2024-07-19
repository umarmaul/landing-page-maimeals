import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            backgroundImage: {},
            fontFamily: {
                sans: ["var(--font-inter)"],
            },
            colors: {
                green: {
                    50: "#30AF5B",
                    90: "#292C27",
                },
                gray: {
                    10: "#EEEEEE",
                    20: "#A2A2A2",
                    30: "#7B7B7B",
                    50: "#585858",
                    90: "#141414",
                },
                orange: {
                    50: "#FF814C",
                },
                blue: {
                    70: "#021639",
                },
                yellow: {
                    50: "#FEC601",
                },
            },
        },
    },
    plugins: [],
};
export default config;
