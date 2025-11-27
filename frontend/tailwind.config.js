/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'kaia-dark': '#FFFFFF',
        'kaia-card': 'rgba(0, 0, 0, 0.03)',
        'kaia-border': 'rgba(0, 0, 0, 0.1)',
        'kaia-blue': '#3B82F6',
        'kaia-text': '#1F2937',
        'kaia-text-light': '#6B7280',
        'kaia-gray': '#F9FAFB',
      },
      backdropBlur: {
        'xl': '30px',
      },
      animation: {
        'fade-in': 'fadeIn 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
        'slide-up': 'slideUp 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(10px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
    },
  },
  plugins: [],
}

