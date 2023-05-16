/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{html,js}",
  ],
  theme: {
    extend: {
      // Screen sizes
      screens: {
        sm: "480px",
        md: "768px",
        lg: "976px",
        lx: "1440px",
      },
    },
  },
  plugins: [],
}
