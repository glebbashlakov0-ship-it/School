/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: "#0B0E14",
        night: "#0F172A",
        card: "#0F1C2E",
        accent: "#33E6BF",
        accent2: "#5B8CFF",
        ember: "#FFB86B"
      },
      fontFamily: {
        display: ["\"Space Grotesk\"", "sans-serif"],
        body: ["\"Inter Tight\"", "sans-serif"]
      },
      boxShadow: {
        glow: "0 0 0 1px rgba(51,230,191,0.25), 0 10px 40px rgba(51,230,191,0.18)"
      }
    }
  },
  plugins: []
};
