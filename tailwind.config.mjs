/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,ts,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        rosa: {
          DEFAULT: '#F472B6',
          light: '#F9A8D4',
          // dark escurecido para AA: texto sobre branco (~6:1) e texto branco sobre o badge (~6:1)
          dark: '#BE185D',
        },
        lilas: {
          DEFAULT: '#A78BFA',
          light: '#C4B5FD',
          // dark escurecido para AA: texto sobre branco (~7:1) e texto branco sobre o badge (~7:1)
          dark: '#6D28D9',
        },
        escuro: '#1F2937',
      },
      fontFamily: {
        sans: ['Inter Variable', 'system-ui', '-apple-system', 'Segoe UI', 'Roboto', 'sans-serif'],
      },
      boxShadow: {
        suave: '0 4px 20px -2px rgba(244, 114, 182, 0.15)',
        card: '0 8px 30px -6px rgba(167, 139, 250, 0.18)',
      },
      backgroundImage: {
        'gradiente-mamae': 'linear-gradient(135deg, #F472B6 0%, #A78BFA 100%)',
      },
    },
  },
  plugins: [],
};
