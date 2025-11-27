/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Base colors
        'kaia-dark': '#FFFFFF',
        'kaia-card': 'rgba(0, 0, 0, 0.03)',
        'kaia-border': 'rgba(0, 0, 0, 0.1)',
        'kaia-blue': '#0056A7', // Kalundborg blå
        'kaia-red': '#D40000',  // Kalundborg rød
        'kaia-text': '#1F2937',
        'kaia-text-light': '#6B7280',
        'kaia-gray': '#F9FAFB',
        
        // Kalundborg Kommune officielle farver
        'kalundborg-red': '#D40000',
        'kalundborg-blue': '#0056A7',
        
        // Semantic colors
        'kaia-success': '#10B981',
        'kaia-warning': '#F59E0B',
        'kaia-error': '#EF4444',
        'kaia-info': '#06B6D4',
        
        // Category colors
        'category-budget': '#3B82F6',      // Blue
        'category-social': '#10B981',       // Green
        'category-reform': '#8B5CF6',      // Purple
        'category-analyse': '#F59E0B',     // Amber
        'category-hr': '#EC4899',          // Pink
        'category-okonomi': '#06B6D4',     // Cyan
      },
      backdropBlur: {
        'xl': '30px',
      },
      boxShadow: {
        'elevation-1': '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
        'elevation-2': '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
        'elevation-3': '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
        'elevation-4': '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
        'elevation-5': '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
        'glow-blue': '0 0 20px rgba(59, 130, 246, 0.3)',
        'glow-green': '0 0 20px rgba(16, 185, 129, 0.3)',
      },
      backgroundImage: {
        'gradient-primary': 'linear-gradient(135deg, #0056A7 0%, #003d7a 100%)', // Kalundborg blå gradient
        'gradient-kalundborg': 'linear-gradient(135deg, #D40000 0%, #0056A7 100%)', // Kalundborg rød til blå
        'gradient-success': 'linear-gradient(135deg, #10B981 0%, #059669 100%)',
        'gradient-subtle': 'linear-gradient(to bottom, #F9FAFB 0%, #FFFFFF 100%)',
        'gradient-glass': 'linear-gradient(135deg, rgba(255, 255, 255, 0.9) 0%, rgba(255, 255, 255, 0.7) 100%)',
      },
      animation: {
        'fade-in': 'fadeIn 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
        'slide-up': 'slideUp 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
        'slide-down': 'slideDown 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
        'scale-in': 'scaleIn 0.2s cubic-bezier(0.4, 0, 0.2, 1)',
        'pulse-subtle': 'pulseSubtle 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
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
        slideDown: {
          '0%': { transform: 'translateY(-10px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        scaleIn: {
          '0%': { transform: 'scale(0.95)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
        pulseSubtle: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.6' },
        },
      },
    },
  },
  plugins: [],
}

