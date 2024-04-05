/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        "sm-h": { min: "576px" }, // Custom min-height breakpoint for small screens
        "md-h": { min: "768px" }, // Custom min-height breakpoint for medium screens
        "lg-h": { min: "992px" }, // Custom min-height breakpoint for large screens
        "xl-h": { min: "1200px" }, // Custom min-height breakpoint for extra-large screens
        // Add more custom min-height breakpoints as needed
      },
    },
  },
  plugins: [],
};
