/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      // interaktive animation
      keyframes: {
        // efek top left
        'spinTopLeft01': {
          '0%, 100%': { transform: "rotate(25deg)" },
          '50%': { transform: "rotate(0deg)" }
        },
        'spinTopLeft02': {
          '0%, 100%': { transform: "rotate(3deg)" },
          '50%': { transform: "rotate(0deg)" }
        },
        'spinTopLeft03': {
          '0%, 100%': { transform: "rotate(15deg)" },
          '50%': { transform: "rotate(0deg)" }
        },
        // efek top left
        
        // efek top right
        'spinTopRight01': {
          '0%, 100%': { transform: "rotate(9deg)" },
          '50%': { transform: "rotate(0deg)" }
        },
        'spinTopRight02': {
          '0%, 100%': { transform: "rotate(3deg)" },
          '50%': { transform: "rotate(0deg)" }
        },
        'spinTopRight03': {
          '0%, 100%': { transform: "rotate(-9deg)" },
          '50%': { transform: "rotate(0deg)" }
        },
        // efek top right

        // efek daun bottom left
        'spinBottomLeft01': {
          '0%, 100%': { transform: "rotate(9deg)" },
          '50%': { transform: "rotate(0deg)" }
        },
        'spinBottomLeft02': {
          '0%, 100%': { transform: "rotate(-9deg)" },
          '50%': { transform: "rotate(0deg)" }
        },
        // efek daun bottom left

        // efek daun bottom right
        'spinBottomRight02': {
          '0%, 100%': { transform: "rotate(9deg)" },
          '50%': { transform: "rotate(0deg)" }
        },
        'spinBottomRight03': {
          '0%, 100%': { transform: "rotate(3deg)" },
          '50%': { transform: "rotate(0deg)" }
        },
        'spinBottomRight04': {
          '0%, 100%': { transform: "rotate(-9deg)" },
          '50%': { transform: "rotate(0deg)" }
        },
        // efek daun bottom right
      },
      // to animation
      animation: {
        // efek daun top left
        "spinTopLeft01": 'spinTopLeft01 3s ease-in-out infinite',
        "spinTopLeft02": 'spinTopLeft02 3s ease-in-out infinite',
        "spinTopLeft03": 'spinTopLeft03 3s ease-in-out infinite',
        // efek daun top left
        
        // efek daun top right
        "spinTopRight01": 'spinTopRight01 3s ease-in-out infinite',
        "spinTopRight02": 'spinTopRight02 3s ease-in-out infinite',
        "spinTopRight03": 'spinTopRight03 3s ease-in-out infinite',
        
        // efek daun top right
        
        // efek daun bottom left
        "spinBottomLeft01": 'spinBottomLeft01 3s ease-in-out infinite',
        "spinBottomLeft02": 'spinBottomLeft02 3s ease-in-out infinite',
        // efek daun bottom left

        // efek daun bottom right
        "spinBottomRight02": 'spinBottomRight02 3s ease-in-out infinite',
        "spinBottomRight03": 'spinBottomRight03 3s ease-in-out infinite',
        "spinBottomRight04": 'spinBottomRight04 3s ease-in-out infinite',
        // efek daun bottom right
      },
    },
  },
  plugins: [],
}

