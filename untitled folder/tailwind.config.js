/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        'custom': '0 50px 75px 0 rgba(0,0,0,0)',
        'custom-lg': '0 4px 8px 0 rgba(0,0,0,0.12)',
        'custom-xl': '0 6px 12px 0 rgba(0,0,0,0.15)',
        'neon-light': '0px 0px 12px #fff', 
        'neon-pink': '0px 0px 30px #F13A62', 
      },
      // textShadow: {
      //   sm: '0 1px 2px var(--tw-shadow-color)',
      //   DEFAULT: '0 2px 4px var(--tw-shadow-color)',
      //   lg: '0 0px 16px #fff',
      // },
      fontFamily: {
        mono: ['var(--font-Press_Start_2P)'],
      },
      colors: {
        'neon-light': '#fff',
      },
    },
  },
  variants: {
    extend: {
      extend: {
        width: ['responsive'],
        height: ['responsive'],
      },
    },
  },
  plugins: [],
}