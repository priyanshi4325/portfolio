/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        game: {
          base: '#0f172a',    // Deep slate
          neon: '#22d3ee',    // Cyan glow
          accent: '#8b5cf6',  // Purple for logic/AI
          gold: '#f59e0b',    // XP/Level color
        }
      },
      boxShadow: {
        'neon': '0 0 10px rgba(34, 211, 238, 0.5), 0 0 20px rgba(34, 211, 238, 0.3)',
      }
    },
  },
  plugins: [],
}