/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",   // Scan all JS/TS/JSX/TSX files in the `src` folder
    "./app/**/*.{js,ts,jsx,tsx}",   // Include Next.js app directory
    "./pages/**/*.{js,ts,jsx,tsx}", // Include traditional Next.js pages directory
    "./components/**/*.{js,ts,jsx,tsx}", // Scan components folder
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
