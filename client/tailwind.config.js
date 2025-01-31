/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: ["./index.html", "./src/**/*.{ts,tsx,js,jsx}"],
  theme: {
    extend: {
      boxShadow: {
        custom1: '0 0 0 2px rgba(0, 0, 0, 0.1)',
        custom2: '0 2px 4px rgba(0, 0, 0, 0.1)',
      },
      animation: {
        'marquee': 'marquee 5s linear infinite',
        'bounce-in': 'bounce-in 0.5s ease-out'
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(-100%)' }
        },
        'bounce-in': {
          '0%': { transform: 'translateX(-100%)' },
          '70%': { transform: 'translateX(10%)' },
          '100%': { transform: 'translateX(0)' }
        }
      },
      borderRadius: {
        xl: 'var(--radius)',
        lg: 'calc(var(--radius) - 4px)',
        md: 'calc(var(--radius) - 8px)',
        sm: 'calc(var(--radius) - 12px)'
      },
      colors: {
        'ligth-gray': '#EFEFEF',
        background: 'var(--background)',
        foreground: 'var(--foreground)',
        card: {
          DEFAULT: 'var(--card)',
          foreground: 'var(--card-foreground)'
        },
        popover: {
          DEFAULT: 'var(--popover)',
          foreground: 'var(--popover-foreground)'
        },
        primary: {
          DEFAULT: 'var(--primary)',
          foreground: 'var(--primary-foreground)'
        },
        secondary: {
          DEFAULT: 'var(--secondary)',
          foreground: 'var(--secondary-foreground)'
        },
        crypto: {
          DEFAULT: 'var(--yellow)',
        },
        muted: {
          DEFAULT: 'var(--muted)',
          foreground: 'var(--muted-foreground)'
        },
        accent: {
          DEFAULT: 'var(--yellow)',
          foreground: 'var(--accent-foreground)'
        },
        destructive: {
          DEFAULT: 'var(--destructive)',
          foreground: 'var(--destructive-foreground)'
        },
        success: {
          DEFAULT: 'var(--success)'
        },
        border: 'var(--border)',
        input: 'var(--input)',
        ring: 'var(--ring)',
        chart: {
          '1': 'var(--chart-1)',
          '2': 'var(--chart-2)',
          '3': 'var(--chart-3)',
          '4': 'var(--chart-4)',
          '5': 'var(--chart-5)'
        }
      },
      fontSize: {
        'title': ['32px', {
          lineHeight: '1.2',
          fontWeight: '600'
        }],
        'subtitle': ['20px', {
          lineHeight: '1.4',
          fontWeight: '400'
        }]
      }
    },
    screens: {
      'sm': '640px',     // Mobile (640px y superior)
      'md': '768px',     // Tablet (768px y superior) 
      'lg': '1024px',    // Desktop pequeño (1024px y superior)
      'xl': '1280px',    // Desktop (1280px y superior)
      '2xl': '1536px',   // Desktop grande (1536px y superior)
    }
  },
  plugins: [require("tailwindcss-animate")],
}
