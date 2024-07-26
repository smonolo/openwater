import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    fontFamily: {
      display: ['Clash Display', 'sans-serif'],
      body: ['General Sans', 'sans-serif']
    },
    extend: {
      screens: {
        content: '1200px'
      }
    }
  },
  plugins: []
}

export default config
