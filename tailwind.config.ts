import type { Config } from 'tailwindcss'

export default {
  darkMode: 'class',
  content: [
    './index.html',
    './src/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        ahc: {
          green: {
            light: '#A9D86E',
            DEFAULT: '#7AC943',
            dark: '#5A9E31',
          },
          dark: {
            light: '#3D4A5C',
            DEFAULT: '#0B0F19',
            dark: '#000000',
          },
          blue: {
            light: '#E0F2FE',
            DEFAULT: '#0EA5E9',
            dark: '#0284C7',
          },
        },
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        display: ['Urbanist', 'sans-serif'],
      },
    },
  },
  plugins: [require('@tailwindcss/typography'), require('@tailwindcss/line-clamp')],
} satisfies Config
