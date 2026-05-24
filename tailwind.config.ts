import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                brand: {
                    orange: "#FF7F00",
                    deepBlue: "#003366",
                    teal: "#008080",
                    coral: "#FF6B6B",
                    gold: "#FFD700",
                    lightGray: "#F5F5F5",
                },
            },
            fontFamily: {
                heading: ["var(--font-montserrat)", "sans-serif"],
                body: ["var(--font-open-sans)", "sans-serif"],
            },
            borderRadius: {
                "2xl": "1rem",
            },
        },
    },
    plugins: [],
};
export default config;
