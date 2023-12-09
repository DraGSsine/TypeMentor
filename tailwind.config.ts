import type { Config } from 'tailwindcss'
import {nextui} from "@nextui-org/react";

const config: Config = {
  content: [
	'./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
	  textColor:{
		skin:{
			base:'var(--color-text-base)',
			prime:'var(--color-text-prime)',
			muted:'var(	--color-text-muted)'
		}
	  },
	  backgroundColor:{
		skin:{
			base:'var(--color-bg-base)'
		}
	  },
	  container:{
		center:true,
		padding:"4rem",
	  }
    },
  },
  darkMode: "class",
  plugins: [nextui()],
}
export default config
