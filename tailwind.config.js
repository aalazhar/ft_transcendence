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