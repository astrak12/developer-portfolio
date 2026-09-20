/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        // Mengubah font bawaan menjadi pilihan desain baru
        sans: ['"Plus Jakarta Sans"', 'sans-serif'],
        mono: ['"Fira Code"', 'monospace'],
      },
      colors: {
        // Palet Luar Angkasa
        space: {
          dark: '#050814',
          light: '#0B1021',
          nebula: '#8B5CF6',
          starlight: '#38BDF8',
          meteor: '#F472B6',
        },
        // Warna Aksen Utama
        accent: {
          DEFAULT: '#38BDF8',
          dark: '#0EA5E9',
          live: '#4ADE80',
        },
        // Surface Colors (light & dark)
        surface: {
          DEFAULT: '#FFFFFF',
          dark: '#0B1021',
          code: '#F1F5F9',
          'code-dark': '#0F172A',
        },
      },
      borderRadius: {
        major: '0.75rem',
      },
      boxShadow: {
        subtle: '0 1px 3px 0 rgb(0 0 0 / 0.07), 0 1px 2px -1px rgb(0 0 0 / 0.07)',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'twinkle': 'twinkle 4s ease-in-out infinite',
        'twinkle-fast': 'twinkle 2s ease-in-out infinite',
        'fade-in-up': 'fadeInUp 0.6s ease-out forwards',
        'slide-in': 'slideIn 0.4s ease-out forwards',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        twinkle: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.3' },
        },
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideIn: {
          '0%': { opacity: '0', transform: 'translateX(-10px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
      },
    },
  },
  plugins: [],
}