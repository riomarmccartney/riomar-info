import type { Config } from "tailwindcss";
import { fontFamily } from 'tailwindcss/defaultTheme'

export default {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    fontFamily: {
      sans: ['acumin-variable', ...fontFamily.sans],
      mincho: ['var(--font-biz-udpmincho)', ...fontFamily.serif],
    },
  },
  plugins: [],
} satisfies Config
